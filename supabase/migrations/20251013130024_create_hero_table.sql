-- Migration: Create hero_sections table
-- Description: Stores hero section content for homepage and other landing pages

CREATE TABLE hero_sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Identification
  page_location TEXT NOT NULL UNIQUE, -- e.g., 'homepage', 'about', 'tours-landing', 'country-france'
  section_name TEXT NOT NULL, -- Friendly name for admins: "Main Hero", "Summer Sale Hero"
  
  -- Content
  heading TEXT NOT NULL, -- Main headline: "Discover Your Next Adventure"
  subheading TEXT, -- Supporting text: "Explore 500+ curated tours across 50 countries"
  description TEXT, -- Optional longer description/paragraph
  
  -- Call to Action (CTA)
  cta_primary_text TEXT, -- Primary button text: "Browse Tours"
  cta_primary_url TEXT, -- Primary button link: "/tours"
  cta_secondary_text TEXT, -- Secondary button text: "Learn More"
  cta_secondary_url TEXT, -- Secondary button link: "/about"
  
  -- Media
  image_url TEXT, -- Desktop hero image
  image_mobile_url TEXT, -- Optional mobile-optimized image
  video_url TEXT, -- Optional background video URL
  image_alt_text TEXT, -- Accessibility: alt text for image
  
  -- Overlay & Styling
  overlay_opacity DECIMAL(3,2) DEFAULT 0.40, -- Dark overlay opacity (0.00 to 1.00)
  text_alignment TEXT DEFAULT 'center', -- 'left', 'center', 'right'
  text_color TEXT DEFAULT '#FFFFFF', -- Text color hex code
  background_color TEXT DEFAULT '#000000', -- Fallback background color
  
  -- Layout Options
  height_desktop TEXT DEFAULT 'large', -- 'small' (400px), 'medium' (600px), 'large' (100vh)
  height_mobile TEXT DEFAULT 'medium', -- Mobile height variant
  
  -- Status & Scheduling
  active BOOLEAN DEFAULT true, -- Whether this hero is currently displayed
  priority INTEGER DEFAULT 0, -- For A/B testing or rotating heroes (higher = shown first)
  start_date TIMESTAMPTZ, -- Optional: Schedule hero to start showing at specific date
  end_date TIMESTAMPTZ, -- Optional: Schedule hero to stop showing at specific date
  
  -- SEO & Tracking
  tracking_id TEXT, -- Analytics tracking ID
  campaign_name TEXT, -- Marketing campaign reference
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL -- Track who created it
  
);
  -- Constraints
--   CONSTRAINT valid_opacity CHECK (overlay_opacity >= 0 AND overlay_opacity <= 1),
--   CONSTRAINT valid_text_alignment CHECK (text_alignment IN ('left', 'center', 'right')),
--   CONSTRAINT valid_height CHECK (
--     height_desktop IN ('small', 'medium', 'large', 'full') AND
--     height_mobile IN ('small', 'medium', 'large', 'full')
--   )

-- Indexes
-- CREATE INDEX idx_hero_sections_page_location ON hero_sections(page_location);
-- CREATE INDEX idx_hero_sections_active ON hero_sections(active) WHERE active = true;
-- CREATE INDEX idx_hero_sections_priority ON hero_sections(priority DESC);
-- CREATE INDEX idx_hero_sections_dates ON hero_sections(start_date, end_date) 
--   WHERE active = true;

-- -- Trigger for updated_at
-- CREATE OR REPLACE FUNCTION update_hero_sections_updated_at()
-- RETURNS TRIGGER AS $$
-- BEGIN
--   NEW.updated_at = timezone('utc'::text, now());
--   RETURN NEW;
-- END;
-- $$ LANGUAGE plpgsql;

-- CREATE TRIGGER set_hero_sections_updated_at
--   BEFORE UPDATE ON hero_sections
--   FOR EACH ROW
--   EXECUTE FUNCTION update_hero_sections_updated_at();

-- -- Enable RLS
-- ALTER TABLE hero_sections ENABLE ROW LEVEL SECURITY;

-- -- RLS Policies
-- CREATE POLICY "Hero sections are viewable by everyone"
--   ON hero_sections FOR SELECT
--   USING (
--     active = true 
--     AND (start_date IS NULL OR start_date <= NOW())
--     AND (end_date IS NULL OR end_date >= NOW())
--   );

-- CREATE POLICY "All hero sections viewable by authenticated users"
--   ON hero_sections FOR SELECT
--   TO authenticated
--   USING (true);

-- CREATE POLICY "Authenticated users can manage hero sections"
--   ON hero_sections FOR ALL
--   TO authenticated
--   USING (true)
--   WITH CHECK (true);

-- -- Add comment
-- COMMENT ON TABLE hero_sections IS 'Stores hero section content for homepage and landing pages';

-- -- Insert seed data for homepage hero
-- INSERT INTO hero_sections (
--   page_location,
--   section_name,
--   heading,
--   subheading,
--   description,
--   cta_primary_text,
--   cta_primary_url,
--   cta_secondary_text,
--   cta_secondary_url,
--   image_url,
--   image_mobile_url,
--   image_alt_text,
--   overlay_opacity,
--   text_alignment,
--   text_color,
--   height_desktop,
--   height_mobile,
--   active,
--   priority
-- ) VALUES
--   (
--     'homepage',
--     'Main Homepage Hero',
--     'Discover Your Next Adventure',
--     'Explore 500+ curated tours across 50 countries',
--     'From thrilling mountain expeditions to serene beach getaways, find the perfect experience tailored to your travel style.',
--     'Browse All Tours',
--     '/tours',
--     'View Destinations',
--     '/destinations',
--     'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80',
--     'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
--     'Traveler with backpack standing on mountain peak overlooking scenic valley',
--     0.45,
--     'center',
--     '#FFFFFF',
--     'large',
--     'medium',
--     true,
--     10
--   ),
--   (
--     'homepage',
--     'Summer Sale Hero',
--     'Summer Adventures Await',
--     'Save up to 30% on select tours this season',
--     'Book your dream summer getaway now and create memories that last a lifetime.',
--     'View Summer Deals',
--     '/tours?season=summer&sale=true',
--     'Learn More',
--     '/promotions/summer-sale',
--     'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80',
--     'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80',
--     'Beautiful tropical beach with turquoise water and palm trees',
--     0.35,
--     'center',
--     '#FFFFFF',
--     'large',
--     'medium',
--     false, -- Not active by default
--     5
--   ),
--   (
--     'tours-landing',
--     'Tours Page Hero',
--     'Find Your Perfect Tour',
--     'Filter by destination, activity, or travel style',
--     null,
--     'Start Exploring',
--     '#tour-filters',
--     null,
--     null,
--     'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80',
--     'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
--     'Scenic mountain road winding through alpine landscape',
--     0.50,
--     'center',
--     '#FFFFFF',
--     'medium',
--     'small',
--     true,
--     10
--   )
-- ON CONFLICT (page_location) DO NOTHING;