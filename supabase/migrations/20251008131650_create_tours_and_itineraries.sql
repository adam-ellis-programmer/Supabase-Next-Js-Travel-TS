-- ============================================
-- MIGRATION: Create Tours and Itineraries Tables
-- Description: Tours system with itinerary support
-- ============================================

-- ============================================
-- TOURS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS tours (
  id BIGSERIAL PRIMARY KEY,
  
  -- Basic Info
  tour_name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  country VARCHAR(100) NOT NULL,
  duration VARCHAR(100),
  price DECIMAL(10, 2) NOT NULL,
  group_size INTEGER,
  difficulty VARCHAR(50), -- easy, moderate, challenging
  destinations INTEGER,
  description TEXT,
  rating DECIMAL(3, 2),
  tags TEXT,
  publish BOOLEAN DEFAULT false,
  
  -- Trip Details
  why_take_trip TEXT,
  age_group VARCHAR(100),
  pickup_point VARCHAR(255),
  dropoff_point VARCHAR(255),
  
  -- Arrays stored as JSONB
  key_points JSONB DEFAULT '[]'::jsonb,
  whats_included JSONB DEFAULT '[]'::jsonb,
  not_included JSONB DEFAULT '[]'::jsonb,
  what_to_bring JSONB DEFAULT '[]'::jsonb,
  travel_documents JSONB DEFAULT '[]'::jsonb,
  good_to_know JSONB DEFAULT '[]'::jsonb,
  
  -- Additional Info
  dietary_options TEXT,
  payment_cancellation TEXT,
  
  -- Booking Info
  booking_slots JSONB DEFAULT '[]'::jsonb,
  bookable_pax INTEGER,
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

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

-- Create partial unique index for primary images
-- Ensures only one primary image per tour
-- WHERE clause makes it "partial"
CREATE UNIQUE INDEX IF NOT EXISTS idx_tour_images_one_primary_per_tour 
  ON tour_images(tour_id, is_primary) 
  WHERE is_primary = true;

-- ============================================
-- ITINERARIES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS itineraries (
  id BIGSERIAL PRIMARY KEY,
  tour_id BIGINT NOT NULL REFERENCES tours(id) ON DELETE CASCADE,
  
  day_number INTEGER NOT NULL,
  day_title VARCHAR(255) NOT NULL,
  day_description TEXT,
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Ensure unique day numbers per tour
  UNIQUE(tour_id, day_number)
);