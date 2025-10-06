-- supabase migration new create_employees_table


-- Add slug column to tours table
ALTER TABLE tours 
ADD COLUMN IF NOT EXISTS slug TEXT UNIQUE;

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_tours_slug ON tours(slug);

-- Optional: Generate slugs from existing tour names
-- UPDATE tours 
-- SET slug = LOWER(REPLACE(REGEXP_REPLACE(tour_name, '[^a-zA-Z0-9\s-]', '', 'g'), ' ', '-'))
-- WHERE slug IS NULL;

-- Add comment
COMMENT ON COLUMN tours.slug IS 'URL-friendly version of tour name (e.g., "12-day-thai-adventure")';