-- Migration: Create countries table
-- Description: Stores information about countries where tours are available

-- Create the countries table
CREATE TABLE IF NOT EXISTS public.countries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  country_name TEXT NOT NULL UNIQUE,
  country_code VARCHAR(2) NOT NULL UNIQUE, -- ISO 3166-1 alpha-2 code (e.g., 'US', 'FR', 'JP')
  continent TEXT NOT NULL, -- e.g., 'Europe', 'Asia', 'Africa', 'North America', 'South America', 'Oceania', 'Antarctica'
  img_url TEXT, -- Main country image for cards/hero sections
  banner_img_url TEXT, -- Optional banner image for country landing pages
  flag_emoji TEXT, -- e.g., '🇫🇷', '🇯🇵', '🇺🇸' for UI display
  description TEXT, -- Rich text description of the country for landing pages
  short_description TEXT, -- Brief tagline (e.g., "Discover ancient temples and modern wonders")
  popular BOOLEAN DEFAULT false, -- Featured/popular destinations
  featured_order INTEGER, -- Order for displaying popular countries (lower = higher priority)
  active BOOLEAN DEFAULT true, -- Whether tours are currently available in this country
  tour_count INTEGER DEFAULT 0, -- Cached count of active tours (can be updated via trigger)
  slug TEXT NOT NULL UNIQUE, -- URL-friendly slug (e.g., 'france', 'japan', 'united-states')
  currency_code VARCHAR(3), -- ISO 4217 code (e.g., 'USD', 'EUR', 'JPY')
  language TEXT, -- Primary language(s) spoken (e.g., 'English', 'French, English')
  best_time_to_visit TEXT, -- e.g., 'April to October', 'Year-round'
  timezone TEXT, -- e.g., 'Europe/Paris', 'Asia/Tokyo'
  visa_requirements TEXT, -- Brief info about visa requirements
  
  -- Metadata
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Add indexes for better query performance
-- CREATE INDEX idx_countries_popular ON public.countries(popular) WHERE popular = true;
-- CREATE INDEX idx_countries_active ON public.countries(active) WHERE active = true;
-- CREATE INDEX idx_countries_slug ON public.countries(slug);
-- CREATE INDEX idx_countries_continent ON public.countries(continent);
-- CREATE INDEX idx_countries_featured_order ON public.countries(featured_order) WHERE popular = true;

-- -- Add a trigger to automatically update updated_at timestamp
-- CREATE OR REPLACE FUNCTION public.update_countries_updated_at()
-- RETURNS TRIGGER AS $$
-- BEGIN
--   NEW.updated_at = timezone('utc'::text, now());
--   RETURN NEW;
-- END;
-- $$ LANGUAGE plpgsql;

-- CREATE TRIGGER set_countries_updated_at
--   BEFORE UPDATE ON public.countries
--   FOR EACH ROW
--   EXECUTE FUNCTION public.update_countries_updated_at();

-- -- Enable Row Level Security (RLS)
-- ALTER TABLE public.countries ENABLE ROW LEVEL SECURITY;

-- -- RLS Policies
-- -- Allow public read access to active countries
-- CREATE POLICY "Countries are viewable by everyone"
--   ON public.countries
--   FOR SELECT
--   USING (active = true);

-- -- Allow authenticated users to view all countries (including inactive)
-- CREATE POLICY "All countries viewable by authenticated users"
--   ON public.countries
--   FOR SELECT
--   TO authenticated
--   USING (true);

-- -- Only authenticated users (admins) can insert/update/delete
-- CREATE POLICY "Authenticated users can insert countries"
--   ON public.countries
--   FOR INSERT
--   TO authenticated
--   WITH CHECK (true);

-- CREATE POLICY "Authenticated users can update countries"
--   ON public.countries
--   FOR UPDATE
--   TO authenticated
--   USING (true)
--   WITH CHECK (true);

-- CREATE POLICY "Authenticated users can delete countries"
--   ON public.countries
--   FOR DELETE
--   TO authenticated
--   USING (true);

-- -- Add comment to table
-- COMMENT ON TABLE public.countries IS 'Stores information about countries where tours are available';

-- -- Seed some example data (optional - remove if you want to add manually)
-- INSERT INTO public.countries (
--   country_name, 
--   country_code, 
--   continent, 
--   slug, 
--   flag_emoji, 
--   popular, 
--   featured_order,
--   currency_code,
--   language,
--   short_description
-- ) VALUES
--   ('France', 'FR', 'Europe', 'france', '🇫🇷', true, 1, 'EUR', 'French', 'Experience art, culture, and world-class cuisine'),
--   ('Japan', 'JP', 'Asia', 'japan', '🇯🇵', true, 2, 'JPY', 'Japanese', 'Discover ancient traditions meets modern innovation'),
--   ('Italy', 'IT', 'Europe', 'italy', '🇮🇹', true, 3, 'EUR', 'Italian', 'Explore history, art, and culinary excellence'),
--   ('Spain', 'ES', 'Europe', 'spain', '🇪🇸', true, 4, 'EUR', 'Spanish', 'Feel the passion of culture and stunning landscapes'),
--   ('United Kingdom', 'GB', 'Europe', 'united-kingdom', '🇬🇧', true, 5, 'GBP', 'English', 'Uncover centuries of history and royal heritage'),
--   ('Greece', 'GR', 'Europe', 'greece', '🇬🇷', true, 6, 'EUR', 'Greek', 'Journey through ancient mythology and paradise islands'),
--   ('Thailand', 'TH', 'Asia', 'thailand', '🇹🇭', true, 7, 'THB', 'Thai', 'Experience tropical beaches and vibrant culture'),
--   ('United States', 'US', 'North America', 'united-states', '🇺🇸', true, 8, 'USD', 'English', 'Explore diverse landscapes from coast to coast'),
--   ('Australia', 'AU', 'Oceania', 'australia', '🇦🇺', false, null, 'AUD', 'English', 'Discover unique wildlife and stunning natural wonders'),
--   ('Iceland', 'IS', 'Europe', 'iceland', '🇮🇸', false, null, 'ISK', 'Icelandic', 'Witness dramatic landscapes and natural phenomena')
-- ON CONFLICT (country_code) DO NOTHING;