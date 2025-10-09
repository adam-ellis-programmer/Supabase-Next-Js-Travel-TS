-- ============================================
-- MIGRATION: Create Booking Slots Table
-- Description: Move booking slots from JSONB to relational table
-- ============================================

-- ============================================
-- BOOKING SLOTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS booking_slots (
  id BIGSERIAL PRIMARY KEY,
  tour_id BIGINT NOT NULL REFERENCES tours(id) ON DELETE CASCADE,

  -- Slot details
  month VARCHAR(50),
  year VARCHAR(50),
  bookable_places INTEGER NOT NULL DEFAULT 0,
  show BOOLEAN DEFAULT true,
  
  -- Display order (for sorting slots)
  display_order INTEGER DEFAULT 0,
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- BOOKING SLOT DATES TABLE (One-to-Many)
-- ============================================
CREATE TABLE IF NOT EXISTS booking_slot_dates (
  id BIGSERIAL PRIMARY KEY,
  booking_slot_id BIGINT NOT NULL REFERENCES booking_slots(id) ON DELETE CASCADE,
  
  -- The actual date
  date DATE NOT NULL,
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW(),
  show BOOLEAN DEFAULT true,
  
  -- Ensure no duplicate dates per slot
  UNIQUE(booking_slot_id, date)
);

-- ============================================
-- INDEXES
-- ============================================
-- -- Index for faster lookups by tour
-- CREATE INDEX IF NOT EXISTS idx_booking_slots_tour_id 
--   ON booking_slots(tour_id);

-- -- Index for faster date lookups
-- CREATE INDEX IF NOT EXISTS idx_booking_slot_dates_slot_id 
--   ON booking_slot_dates(booking_slot_id);

-- -- Index for date range queries
-- CREATE INDEX IF NOT EXISTS idx_booking_slot_dates_date 
--   ON booking_slot_dates(date);

-- ============================================
-- OPTIONAL: Remove booking_slots from tours table
-- ============================================
-- Uncomment this after migrating data:
-- ALTER TABLE tours DROP COLUMN IF EXISTS booking_slots;