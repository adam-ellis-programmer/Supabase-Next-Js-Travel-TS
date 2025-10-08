-- ============================================
-- MIGRATION: Create Bookings System
-- Description: Bookings and payment tracking
-- ============================================

-- ============================================
-- BOOKINGS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS bookings (
  id BIGSERIAL PRIMARY KEY,
  booking_reference VARCHAR(100) UNIQUE NOT NULL,
  
  -- Tour & User Info
  tour_id BIGINT NOT NULL REFERENCES tours(id) ON DELETE RESTRICT,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  
  -- Booking Details
  booking_date DATE NOT NULL,
  number_of_passengers INTEGER NOT NULL CHECK (number_of_passengers > 0),
  passenger_details JSONB, -- Store passenger information as JSON
  
  -- Pricing
  price_per_person INTEGER NOT NULL,
  subtotal INTEGER NOT NULL,
  tax INTEGER DEFAULT 0,
  total INTEGER NOT NULL,
  
  -- Customer Information
  customer_name VARCHAR(255) NOT NULL,
  customer_email VARCHAR(255) NOT NULL,
  customer_phone VARCHAR(50),
  billing_address TEXT,
  
  -- Payment
  payment_status VARCHAR(50) DEFAULT 'pending', -- pending, paid, cancelled, refunded, failed
  payment_method VARCHAR(50), -- stripe, paypal, bank_transfer, etc.
  payment_intent_id VARCHAR(255), -- Stripe payment intent ID
  paid_at TIMESTAMPTZ,
  
  -- Booking Status
  booking_status VARCHAR(50) DEFAULT 'confirmed', -- confirmed, cancelled, completed
  cancelled_at TIMESTAMPTZ,
  cancellation_reason TEXT,
  
  -- Additional Info
  special_requirements TEXT,
  notes TEXT, -- Admin notes
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for faster queries
CREATE INDEX idx_bookings_tour_id ON bookings(tour_id);
CREATE INDEX idx_bookings_user_id ON bookings(user_id);
CREATE INDEX idx_bookings_booking_date ON bookings(booking_date);
CREATE INDEX idx_bookings_payment_status ON bookings(payment_status);
CREATE INDEX idx_bookings_booking_status ON bookings(booking_status);
CREATE INDEX idx_bookings_customer_email ON bookings(customer_email);
CREATE INDEX idx_bookings_created_at ON bookings(created_at);

-- ============================================
-- FUNCTION: Generate Booking Reference
-- ============================================
CREATE OR REPLACE FUNCTION generate_booking_reference()
RETURNS TEXT AS $$
DECLARE
  reference TEXT;
  exists BOOLEAN;
BEGIN
  LOOP
    -- Generate format: BK-YYYYMMDD-XXXX (e.g., BK-20250104-A3F9)
    reference := 'BK-' || 
                 TO_CHAR(NOW(), 'YYYYMMDD') || '-' || 
                 UPPER(SUBSTRING(MD5(RANDOM()::TEXT) FROM 1 FOR 4));
    
    -- Check if reference already exists
    SELECT EXISTS(SELECT 1 FROM bookings WHERE booking_reference = reference) INTO exists;
    
    -- Exit loop if unique
    EXIT WHEN NOT exists;
  END LOOP;
  
  RETURN reference;
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- TRIGGER: Auto-generate booking reference
-- ============================================
CREATE OR REPLACE FUNCTION set_booking_reference()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.booking_reference IS NULL OR NEW.booking_reference = '' THEN
    NEW.booking_reference := generate_booking_reference();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_set_booking_reference
  BEFORE INSERT ON bookings
  FOR EACH ROW
  EXECUTE FUNCTION set_booking_reference();

-- ============================================
-- TRIGGER: Update updated_at
-- ============================================
CREATE TRIGGER update_bookings_updated_at
    BEFORE UPDATE ON bookings
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- PAYMENT TRANSACTIONS TABLE (Optional)
-- ============================================
CREATE TABLE IF NOT EXISTS payment_transactions (
  id BIGSERIAL PRIMARY KEY,
  booking_id BIGINT NOT NULL REFERENCES bookings(id) ON DELETE CASCADE,
  transaction_id VARCHAR(255) UNIQUE,
  amount INTEGER NOT NULL,
  currency VARCHAR(3) DEFAULT 'GBP',
  payment_method VARCHAR(50),
  payment_provider VARCHAR(50), -- stripe, paypal, etc.
  status VARCHAR(50) DEFAULT 'pending', -- pending, succeeded, failed, refunded
  provider_response JSONB, -- Store full response from payment provider
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_payment_transactions_booking_id ON payment_transactions(booking_id);
CREATE INDEX idx_payment_transactions_status ON payment_transactions(status);

-- ============================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================

-- Enable RLS
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE payment_transactions ENABLE ROW LEVEL SECURITY;

-- Bookings: Users can view their own bookings, admins can view all
CREATE POLICY "Users can view their own bookings" 
  ON bookings FOR SELECT 
  USING (
    auth.uid() = user_id 
    OR customer_email = auth.jwt() ->> 'email'
  );

CREATE POLICY "Users can create their own bookings" 
  ON bookings FOR INSERT 
  WITH CHECK (
    auth.uid() = user_id 
    OR user_id IS NULL
  );

CREATE POLICY "Users can update their own bookings" 
  ON bookings FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all bookings" 
  ON bookings FOR SELECT 
  USING (auth.jwt() ->> 'user_role' = 'admin');

CREATE POLICY "Admins can update all bookings" 
  ON bookings FOR UPDATE 
  USING (auth.jwt() ->> 'user_role' = 'admin');

CREATE POLICY "Admins can delete bookings" 
  ON bookings FOR DELETE 
  USING (auth.jwt() ->> 'user_role' = 'admin');

-- Payment Transactions: Users can view their own, admins can view all
CREATE POLICY "Users can view their own transactions" 
  ON payment_transactions FOR SELECT 
  USING (EXISTS (
    SELECT 1 FROM bookings 
    WHERE bookings.id = payment_transactions.booking_id 
    AND bookings.user_id = auth.uid()
  ));

CREATE POLICY "Admins can view all transactions" 
  ON payment_transactions FOR SELECT 
  USING (auth.jwt() ->> 'user_role' = 'admin');

CREATE POLICY "System can insert transactions" 
  ON payment_transactions FOR INSERT 
  WITH CHECK (true);

-- ============================================
-- HELPER FUNCTIONS
-- ============================================

-- Function to calculate booking totals
CREATE OR REPLACE FUNCTION calculate_booking_total(
  p_price_per_person INTEGER,
  p_number_of_passengers INTEGER,
  p_tax_rate DECIMAL DEFAULT 0.20
)
RETURNS TABLE(
  subtotal INTEGER,
  tax INTEGER,
  total INTEGER
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    (p_price_per_person * p_number_of_passengers)::INTEGER as subtotal,
    ((p_price_per_person * p_number_of_passengers) * p_tax_rate)::INTEGER as tax,
    ((p_price_per_person * p_number_of_passengers) * (1 + p_tax_rate))::INTEGER as total;
END;
$$ LANGUAGE plpgsql;

-- Usage: SELECT * FROM calculate_booking_total(1355, 2, 0.20);

-- Function to get booking statistics for admin dashboard
CREATE OR REPLACE FUNCTION get_booking_stats()
RETURNS TABLE(
  total_bookings BIGINT,
  pending_bookings BIGINT,
  confirmed_bookings BIGINT,
  cancelled_bookings BIGINT,
  total_revenue BIGINT,
  revenue_this_month BIGINT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    COUNT(*)::BIGINT as total_bookings,
    COUNT(*) FILTER (WHERE payment_status = 'pending')::BIGINT as pending_bookings,
    COUNT(*) FILTER (WHERE booking_status = 'confirmed')::BIGINT as confirmed_bookings,
    COUNT(*) FILTER (WHERE booking_status = 'cancelled')::BIGINT as cancelled_bookings,
    COALESCE(SUM(total) FILTER (WHERE payment_status = 'paid'), 0)::BIGINT as total_revenue,
    COALESCE(SUM(total) FILTER (
      WHERE payment_status = 'paid' 
      AND created_at >= DATE_TRUNC('month', CURRENT_DATE)
    ), 0)::BIGINT as revenue_this_month
  FROM bookings;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Usage: SELECT * FROM get_booking_stats();