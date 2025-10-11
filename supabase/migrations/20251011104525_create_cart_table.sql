-- 1. Cart table: One cart per user
CREATE TABLE carts (
  id SERIAL PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for fast user lookups
CREATE INDEX idx_carts_user_id ON carts(user_id);

-- 2. Cart Items table: Many items per cart
CREATE TABLE cart_items (
  id SERIAL PRIMARY KEY,
  cart_id INTEGER NOT NULL,
  tour_id INTEGER NOT NULL,
  booking_slot_date_id INTEGER NOT NULL,
  slot_id INTEGER NOT NULL,
  num_passengers INTEGER NOT NULL CHECK (num_passengers > 0),
  selected_date DATE NOT NULL,
  price_when_added DECIMAL(10, 2),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Foreign key constraints
  CONSTRAINT fk_cart_item_cart FOREIGN KEY (cart_id) REFERENCES carts(id) ON DELETE CASCADE,
  CONSTRAINT fk_cart_item_tour FOREIGN KEY (tour_id) REFERENCES tours(id) ON DELETE CASCADE,
  CONSTRAINT fk_cart_item_booking_slot_date FOREIGN KEY (booking_slot_date_id) REFERENCES booking_slot_dates(id) ON DELETE CASCADE,
  
  -- Prevent duplicate items in same cart
  CONSTRAINT unique_cart_item UNIQUE (cart_id, booking_slot_date_id)
);

-- Indexes for performance
CREATE INDEX idx_cart_items_cart_id ON cart_items(cart_id);
CREATE INDEX idx_cart_items_booking_slot_date_id ON cart_items(booking_slot_date_id);

-- RLS Policies for carts
-- ALTER TABLE carts ENABLE ROW LEVEL SECURITY;

-- CREATE POLICY "Users can view own cart"
--   ON carts FOR SELECT
--   USING (auth.uid() = user_id);

-- CREATE POLICY "Users can insert own cart"
--   ON carts FOR INSERT
--   WITH CHECK (auth.uid() = user_id);

-- CREATE POLICY "Users can update own cart"
--   ON carts FOR UPDATE
--   USING (auth.uid() = user_id);

-- RLS Policies for cart_items
-- ALTER TABLE cart_items ENABLE ROW LEVEL SECURITY;

-- CREATE POLICY "Users can view own cart items"
--   ON cart_items FOR SELECT
--   USING (
--     EXISTS (
--       SELECT 1 FROM carts 
--       WHERE carts.id = cart_items.cart_id 
--       AND carts.user_id = auth.uid()
--     )
--   );

-- CREATE POLICY "Users can insert own cart items"
--   ON cart_items FOR INSERT
--   WITH CHECK (
--     EXISTS (
--       SELECT 1 FROM carts 
--       WHERE carts.id = cart_items.cart_id 
--       AND carts.user_id = auth.uid()
--     )
--   );

-- CREATE POLICY "Users can update own cart items"
--   ON cart_items FOR UPDATE
--   USING (
--     EXISTS (
--       SELECT 1 FROM carts 
--       WHERE carts.id = cart_items.cart_id 
--       AND carts.user_id = auth.uid()
--     )
--   );

-- CREATE POLICY "Users can delete own cart items"
--   ON cart_items FOR DELETE
--   USING (
--     EXISTS (
--       SELECT 1 FROM carts 
--       WHERE carts.id = cart_items.cart_id 
--       AND carts.user_id = auth.uid()
--     )
--   );