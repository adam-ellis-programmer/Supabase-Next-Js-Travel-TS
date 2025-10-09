-- supabase/migrations/YYYYMMDDHHMMSS_add_storage_path_to_tour_images.sql

-- Add storage_path column to tour_images table
ALTER TABLE tour_images 
ADD COLUMN storage_path TEXT;

-- Optional: Add a comment explaining the column
COMMENT ON COLUMN tour_images.storage_path IS 'Storage path for managing/deleting files in Supabase Storage (e.g., tours/5/123-image.jpg)';

