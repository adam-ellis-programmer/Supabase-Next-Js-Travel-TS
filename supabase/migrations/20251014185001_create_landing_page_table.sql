-- Main landing pages table
CREATE TABLE IF NOT EXISTS landing_pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  country_name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  tagline TEXT NOT NULL,
  hero_image_url TEXT, 
  description TEXT NOT NULL,
  -- Quick Facts stored as individual columns (normalized approach)
  best_time TEXT NOT NULL,
  currency TEXT NOT NULL,
  language TEXT NOT NULL,
  timezone TEXT NOT NULL,
  visa TEXT NOT NULL,
  -- Attractions as array
  attractions TEXT[] NOT NULL DEFAULT '{}',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Top destinations table (normalized)
CREATE TABLE IF NOT EXISTS landing_page_destinations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  landing_page_id UUID NOT NULL REFERENCES landing_pages(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  image_url TEXT,
  description TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Experiences table (normalized)
CREATE TABLE IF NOT EXISTS landing_page_experiences (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  landing_page_id UUID NOT NULL REFERENCES landing_pages(id) ON DELETE CASCADE,
  icon TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Travel tips table (normalized)
CREATE TABLE IF NOT EXISTS landing_page_travel_tips (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  landing_page_id UUID NOT NULL REFERENCES landing_pages(id) ON DELETE CASCADE,
  icon TEXT NOT NULL,
  title TEXT NOT NULL,
  tip TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_landing_pages_slug ON landing_pages(slug);
CREATE INDEX IF NOT EXISTS idx_landing_pages_is_active ON landing_pages(is_active);
CREATE INDEX IF NOT EXISTS idx_destinations_landing_page ON landing_page_destinations(landing_page_id);
CREATE INDEX IF NOT EXISTS idx_experiences_landing_page ON landing_page_experiences(landing_page_id);
CREATE INDEX IF NOT EXISTS idx_travel_tips_landing_page ON landing_page_travel_tips(landing_page_id);