-- ============================================
-- MIGRATION: Create Tours System
-- Description: Tours, itineraries, reviews, and tour images
-- ============================================

-- ============================================
-- TOURS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS tours (
  id BIGSERIAL PRIMARY KEY,
  tour_name TEXT NOT NULL,
  country TEXT NOT NULL,
  duration TEXT NOT NULL,
  price INTEGER NOT NULL,
  rating DECIMAL(2,1) DEFAULT NULL,
  destinations INTEGER,
  description TEXT,
  key_points TEXT[], -- Array of text for multiple key points
  difficulty VARCHAR(255) DEFAULT 'moderate',
  why_take_trip TEXT,
  age_group VARCHAR(255),
  pickup_point TEXT,
  dropoff_point TEXT,
  whats_included TEXT[], -- Array for multiple items
  not_included TEXT[], -- Array for multiple items
  what_to_bring TEXT[], -- Array for multiple items
  travel_documents TEXT[], -- Array for multiple items
  dietary_options TEXT,
  payment_cancellation TEXT,
  good_to_know TEXT[], -- Array for multiple items
  group_size INTEGER,
  image TEXT,
  images TEXT[], -- Array for multiple images
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  tags TEXT,
  publish BOOLEAN DEFAULT false,
  places INTEGER, -- Available places
  dates DATE[], -- Array of available dates
  bookable_pax INTEGER -- Minimum booking size
);

-- Create indexes for faster queries
CREATE INDEX idx_tours_country ON tours(country);
CREATE INDEX idx_tours_publish ON tours(publish);
CREATE INDEX idx_tours_price ON tours(price);
CREATE INDEX idx_tours_created_at ON tours(created_at);

-- ============================================
-- ITINERARY TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS itineraries (
  id BIGSERIAL PRIMARY KEY,
  tour_id BIGINT NOT NULL REFERENCES tours(id) ON DELETE CASCADE,
  day_number INTEGER NOT NULL,
  day_title VARCHAR(255) NOT NULL,
  day_description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(tour_id, day_number)
);

CREATE INDEX idx_itineraries_tour_id ON itineraries(tour_id);

-- ============================================
-- REVIEWS/COMMENTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS reviews (
  id BIGSERIAL PRIMARY KEY,
  tour_id BIGINT NOT NULL REFERENCES tours(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  review_text TEXT NOT NULL,
  verified_traveler BOOLEAN DEFAULT false,
  likes INTEGER DEFAULT 0,
  loves INTEGER DEFAULT 0,
  helpful INTEGER DEFAULT 0,
  insightful INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_reviews_tour_id ON reviews(tour_id);
CREATE INDEX idx_reviews_user_id ON reviews(user_id);
CREATE INDEX idx_reviews_created_at ON reviews(created_at);

-- ============================================
-- TOUR IMAGES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS tour_images (
  id BIGSERIAL PRIMARY KEY,
  tour_id BIGINT NOT NULL REFERENCES tours(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  image_alt TEXT,
  display_order INTEGER DEFAULT 0,
  is_primary BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_tour_images_tour_id ON tour_images(tour_id);

-- ============================================
-- NEWSLETTER TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  terms_accepted BOOLEAN DEFAULT false,
  subscribed_at TIMESTAMPTZ DEFAULT NOW(),
  unsubscribed_at TIMESTAMPTZ DEFAULT NULL,
  is_active BOOLEAN DEFAULT true
);

CREATE INDEX idx_newsletter_email ON newsletter_subscribers(email);
CREATE INDEX idx_newsletter_active ON newsletter_subscribers(is_active);

-- ============================================
-- TRIGGER FOR UPDATED_AT
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply trigger to tours table
CREATE TRIGGER update_tours_updated_at
    BEFORE UPDATE ON tours
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Apply trigger to reviews table
CREATE TRIGGER update_reviews_updated_at
    BEFORE UPDATE ON reviews
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================

-- Enable RLS on all tables
ALTER TABLE tours ENABLE ROW LEVEL SECURITY;
ALTER TABLE itineraries ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE tour_images ENABLE ROW LEVEL SECURITY;

-- Tours: Public can read published tours, only admins can insert/update/delete
CREATE POLICY "Public can view published tours" 
  ON tours FOR SELECT 
  USING (publish = true OR auth.jwt() ->> 'user_role' = 'admin');

CREATE POLICY "Admins can insert tours" 
  ON tours FOR INSERT 
  WITH CHECK (auth.jwt() ->> 'user_role' = 'admin');

CREATE POLICY "Admins can update tours" 
  ON tours FOR UPDATE 
  USING (auth.jwt() ->> 'user_role' = 'admin');

CREATE POLICY "Admins can delete tours" 
  ON tours FOR DELETE 
  USING (auth.jwt() ->> 'user_role' = 'admin');

-- Itineraries: Public can read, admins can manage
CREATE POLICY "Public can view itineraries" 
  ON itineraries FOR SELECT 
  USING (EXISTS (
    SELECT 1 FROM tours 
    WHERE tours.id = itineraries.tour_id 
    AND (tours.publish = true OR auth.jwt() ->> 'user_role' = 'admin')
  ));

CREATE POLICY "Admins can manage itineraries" 
  ON itineraries FOR ALL 
  USING (auth.jwt() ->> 'user_role' = 'admin');

-- Reviews: Public can read, authenticated users can create their own
CREATE POLICY "Public can view reviews" 
  ON reviews FOR SELECT 
  USING (true);

CREATE POLICY "Authenticated users can create reviews" 
  ON reviews FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own reviews" 
  ON reviews FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own reviews" 
  ON reviews FOR DELETE 
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage all reviews" 
  ON reviews FOR ALL 
  USING (auth.jwt() ->> 'user_role' = 'admin');

-- Newsletter: Anyone can subscribe
CREATE POLICY "Anyone can subscribe to newsletter" 
  ON newsletter_subscribers FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Admins can view all subscribers" 
  ON newsletter_subscribers FOR SELECT 
  USING (auth.jwt() ->> 'user_role' = 'admin');

CREATE POLICY "Admins can manage newsletter subscribers" 
  ON newsletter_subscribers FOR ALL 
  USING (auth.jwt() ->> 'user_role' = 'admin');

-- Tour Images: Public can view, admins can manage
CREATE POLICY "Public can view tour images" 
  ON tour_images FOR SELECT 
  USING (EXISTS (
    SELECT 1 FROM tours 
    WHERE tours.id = tour_images.tour_id 
    AND (tours.publish = true OR auth.jwt() ->> 'user_role' = 'admin')
  ));

CREATE POLICY "Admins can manage tour images" 
  ON tour_images FOR ALL 
  USING (auth.jwt() ->> 'user_role' = 'admin');