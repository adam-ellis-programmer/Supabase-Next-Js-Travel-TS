-- Migration: Create activities table
-- Description: Stores activity types/categories for tours (skiing, hiking, diving, etc.)

-- Create the activities table
CREATE TABLE activities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Core Fields
  name TEXT NOT NULL UNIQUE, -- e.g., 'Skiing', 'Scuba Diving', 'Hiking'
  slug TEXT NOT NULL UNIQUE, -- URL-friendly: 'skiing', 'scuba-diving', 'hiking'
  category TEXT NOT NULL, -- Group activities: 'Adventure', 'Water Sports', 'Cultural', 'Relaxation', 'Wildlife'
  
  -- Display & Media
  icon_name TEXT, -- Icon identifier for UI (e.g., 'ski', 'hiking', 'diving')
  icon_url TEXT, -- Optional custom icon/image URL
  image_url TEXT, -- Featured image for activity cards
  banner_img_url TEXT, -- Banner image for activity landing pages
  color_hex VARCHAR(7), -- Brand color for this activity (e.g., '#FF5733')
  emoji TEXT, -- Emoji representation (e.g., '⛷️', '🥾', '🤿')
  
  -- Content
  description TEXT, -- Detailed description for activity pages
  short_description TEXT, -- Brief tagline (e.g., "Hit the slopes in world-class ski resorts")
  
  -- Organization & Display
  popular BOOLEAN DEFAULT false, -- Featured/popular activities
  featured_order INTEGER, -- Display order for popular activities (lower = higher priority)
  active BOOLEAN DEFAULT true, -- Whether this activity is currently offered
  
  -- Metadata
  difficulty_levels TEXT[], -- Array of applicable difficulty levels: ['beginner', 'intermediate', 'advanced', 'expert']
  season_availability TEXT[], -- When typically available: ['winter', 'spring', 'summer', 'fall', 'year-round']
  typical_duration_hours INTEGER, -- Typical tour duration in hours (e.g., 3, 8, 24)
  min_age INTEGER, -- Minimum recommended age
  fitness_level TEXT, -- Required fitness: 'low', 'moderate', 'high', 'very_high'
  
  -- Statistics (can be updated via triggers)
  tour_count INTEGER DEFAULT 0, -- Cached count of active tours with this activity
  avg_rating DECIMAL(3,2), -- Average rating across all tours (e.g., 4.75)
  total_bookings INTEGER DEFAULT 0, -- Total historical bookings
  
  -- SEO & Marketing
  meta_title TEXT, -- SEO page title
  meta_description TEXT, -- SEO meta description
  keywords TEXT[], -- Search keywords array
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- -- Add indexes for performance
-- CREATE INDEX idx_activities_slug ON activities(slug);
-- CREATE INDEX idx_activities_category ON activities(category);
-- CREATE INDEX idx_activities_popular ON activities(popular) WHERE popular = true;
-- CREATE INDEX idx_activities_active ON activities(active) WHERE active = true;
-- CREATE INDEX idx_activities_featured_order ON activities(featured_order) WHERE popular = true;
-- CREATE INDEX idx_activities_season ON activities USING GIN (season_availability); -- GIN index for array queries

-- -- Add trigger for updated_at
-- CREATE OR REPLACE FUNCTION update_activities_updated_at()
-- RETURNS TRIGGER AS $$
-- BEGIN
--   NEW.updated_at = timezone('utc'::text, now());
--   RETURN NEW;
-- END;
-- $$ LANGUAGE plpgsql;

-- CREATE TRIGGER set_activities_updated_at
--   BEFORE UPDATE ON activities
--   FOR EACH ROW
--   EXECUTE FUNCTION update_activities_updated_at();

-- -- Enable Row Level Security
-- ALTER TABLE activities ENABLE ROW LEVEL SECURITY;

-- -- RLS Policies
-- CREATE POLICY "Activities are viewable by everyone"
--   ON activities FOR SELECT
--   USING (active = true);

-- CREATE POLICY "All activities viewable by authenticated users"
--   ON activities FOR SELECT
--   TO authenticated
--   USING (true);

-- CREATE POLICY "Authenticated users can insert activities"
--   ON activities FOR INSERT
--   TO authenticated
--   WITH CHECK (true);

-- CREATE POLICY "Authenticated users can update activities"
--   ON activities FOR UPDATE
--   TO authenticated
--   USING (true)
--   WITH CHECK (true);

-- CREATE POLICY "Authenticated users can delete activities"
--   ON activities FOR DELETE
--   TO authenticated
--   USING (true);

-- -- Add table comment
-- COMMENT ON TABLE activities IS 'Stores activity types and categories for tour classification';
