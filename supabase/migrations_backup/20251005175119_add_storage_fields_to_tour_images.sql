-- ============================================
-- MIGRATION: Add storage fields to tour_images table
-- Description: Add bucket and path fields for Supabase Storage deletion
-- ============================================

-- Add all columns first
ALTER TABLE tour_images 
ADD COLUMN IF NOT EXISTS storage_bucket TEXT,
ADD COLUMN IF NOT EXISTS storage_path TEXT,
ADD COLUMN IF NOT EXISTS storage_provider TEXT DEFAULT 'supabase';

-- Then add indexes (after columns exist)
CREATE INDEX IF NOT EXISTS idx_tour_images_storage_path 
ON tour_images(storage_path);

CREATE INDEX IF NOT EXISTS idx_tour_images_storage_bucket 
ON tour_images(storage_bucket);

-- Add comments
COMMENT ON COLUMN tour_images.storage_bucket IS 'Supabase storage bucket name (e.g., "tour-images")';
COMMENT ON COLUMN tour_images.storage_path IS 'Full path in storage bucket for deletion (e.g., "tours/123/image1.jpg")';
COMMENT ON COLUMN tour_images.storage_provider IS 'Storage provider: "supabase" or "cloudinary"';

-- ============================================
-- Updated table structure will be:
-- ============================================
-- tour_images (
--   id BIGSERIAL PRIMARY KEY,
--   tour_id BIGINT NOT NULL REFERENCES tours(id) ON DELETE CASCADE,
--   image_url TEXT NOT NULL,  -- Full public URL for display
--   image_alt TEXT,
--   display_order INTEGER DEFAULT 0,
--   is_primary BOOLEAN DEFAULT false,
--   storage_bucket TEXT,  -- NEW: e.g., "tour-images"
--   storage_path TEXT,    -- NEW: e.g., "tours/123/image1.jpg"
--   storage_provider TEXT DEFAULT 'supabase',  -- NEW
--   created_at TIMESTAMPTZ DEFAULT NOW()
-- )

-- ============================================
-- Example data after insertion:
-- ============================================
-- {
--   id: 1,
--   tour_id: 123,
--   image_url: "https://abcxyz.supabase.co/storage/v1/object/public/tour-images/tours/123/image1.jpg",
--   image_alt: "Beautiful mountain view",
--   display_order: 0,
--   is_primary: true,
--   storage_bucket: "tour-images",
--   storage_path: "tours/123/image1.jpg",
--   storage_provider: "supabase",
--   created_at: "2024-10-05T10:00:00Z"
-- }