-- Enable UUID extension if not already enabled
-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Main country landing pages table
CREATE TABLE country_landing_pages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    country_name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    tagline TEXT NOT NULL,
    description TEXT NOT NULL,
    hero_image_url TEXT,
    hero_image_storage_path TEXT,
    
    -- Quick Facts
    best_time_to_visit TEXT NOT NULL,
    currency TEXT NOT NULL,
    language TEXT NOT NULL,
    timezone TEXT NOT NULL,
    visa_requirements TEXT NOT NULL,
     
    -- SEO and metadata
    meta_title TEXT,
    meta_description TEXT,
    
    -- Status and tracking
    is_published BOOLEAN DEFAULT false,
    view_count INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    updated_by UUID REFERENCES auth.users(id) ON DELETE SET NULL
);

-- Top destinations table
CREATE TABLE country_destinations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    country_landing_id UUID NOT NULL REFERENCES country_landing_pages(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    image_url TEXT,
    image_storage_path TEXT,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Experiences table
CREATE TABLE country_experiences (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    country_landing_id UUID NOT NULL REFERENCES country_landing_pages(id) ON DELETE CASCADE,
    icon TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Attractions table
CREATE TABLE country_attractions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    country_landing_id UUID NOT NULL REFERENCES country_landing_pages(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Travel tips table
CREATE TABLE country_travel_tips (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    country_landing_id UUID NOT NULL REFERENCES country_landing_pages(id) ON DELETE CASCADE,
    icon TEXT NOT NULL,
    title TEXT NOT NULL,
    tip TEXT NOT NULL,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Images storage table (for all landing page images)
CREATE TABLE country_landing_images (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    country_landing_id UUID REFERENCES country_landing_pages(id) ON DELETE CASCADE,
    country_destination_id UUID REFERENCES country_destinations(id) ON DELETE CASCADE,
    image_type TEXT NOT NULL CHECK (image_type IN ('hero', 'destination', 'gallery')),
    image_alt TEXT,
    display_order INTEGER DEFAULT 0,
    is_primary BOOLEAN DEFAULT false,
    storage_bucket TEXT DEFAULT 'country-images',
    storage_path TEXT NOT NULL,
    storage_provider TEXT DEFAULT 'supabase',
    file_size INTEGER,
    mime_type TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    
    -- Constraint to ensure only one can be destination OR landing, not both
    CONSTRAINT check_parent_id CHECK (
        (country_landing_id IS NOT NULL AND country_destination_id IS NULL) OR
        (country_landing_id IS NULL AND country_destination_id IS NOT NULL)
    )
);

-- Create indexes for better query performance
CREATE INDEX idx_country_landing_slug ON country_landing_pages(slug);
CREATE INDEX idx_country_landing_published ON country_landing_pages(is_published);
CREATE INDEX idx_country_destinations_landing ON country_destinations(country_landing_id);
CREATE INDEX idx_country_experiences_landing ON country_experiences(country_landing_id);
CREATE INDEX idx_country_attractions_landing ON country_attractions(country_landing_id);
CREATE INDEX idx_country_travel_tips_landing ON country_travel_tips(country_landing_id);
CREATE INDEX idx_country_landing_images_landing ON country_landing_images(country_landing_id);
CREATE INDEX idx_country_landing_images_destination ON country_landing_images(country_destination_id);

-- Create updated_at trigger function if it doesn't exist
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add trigger to update updated_at on country_landing_pages
CREATE TRIGGER update_country_landing_pages_updated_at
    BEFORE UPDATE ON country_landing_pages
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) Policies
ALTER TABLE country_landing_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE country_destinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE country_experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE country_attractions ENABLE ROW LEVEL SECURITY;
ALTER TABLE country_travel_tips ENABLE ROW LEVEL SECURITY;
ALTER TABLE country_landing_images ENABLE ROW LEVEL SECURITY;

-- Public can view published landing pages
CREATE POLICY "Public can view published landing pages"
    ON country_landing_pages FOR SELECT
    USING (is_published = true);

-- Public can view related data for published pages
CREATE POLICY "Public can view destinations for published pages"
    ON country_destinations FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM country_landing_pages
            WHERE id = country_destinations.country_landing_id
            AND is_published = true
        )
    );

CREATE POLICY "Public can view experiences for published pages"
    ON country_experiences FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM country_landing_pages
            WHERE id = country_experiences.country_landing_id
            AND is_published = true
        )
    );

CREATE POLICY "Public can view attractions for published pages"
    ON country_attractions FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM country_landing_pages
            WHERE id = country_attractions.country_landing_id
            AND is_published = true
        )
    );

CREATE POLICY "Public can view travel tips for published pages"
    ON country_travel_tips FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM country_landing_pages
            WHERE id = country_travel_tips.country_landing_id
            AND is_published = true
        )
    );

CREATE POLICY "Public can view images for published pages"
    ON country_landing_images FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM country_landing_pages
            WHERE id = country_landing_images.country_landing_id
            AND is_published = true
        )
    );

-- Authenticated users (admins) can do everything
CREATE POLICY "Authenticated users can manage landing pages"
    ON country_landing_pages FOR ALL
    USING (auth.role() = 'authenticated')
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can manage destinations"
    ON country_destinations FOR ALL
    USING (auth.role() = 'authenticated')
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can manage experiences"
    ON country_experiences FOR ALL
    USING (auth.role() = 'authenticated')
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can manage attractions"
    ON country_attractions FOR ALL
    USING (auth.role() = 'authenticated')
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can manage travel tips"
    ON country_travel_tips FOR ALL
    USING (auth.role() = 'authenticated')
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can manage images"
    ON country_landing_images FOR ALL
    USING (auth.role() = 'authenticated')
    WITH CHECK (auth.role() = 'authenticated');

-- Comments for documentation
COMMENT ON TABLE country_landing_pages IS 'Main table for country landing pages';
COMMENT ON TABLE country_destinations IS 'Top destinations for each country';
COMMENT ON TABLE country_experiences IS 'Things to experience in each country';
COMMENT ON TABLE country_attractions IS 'Must-see attractions for each country';
COMMENT ON TABLE country_travel_tips IS 'Essential travel tips for each country';
COMMENT ON TABLE country_landing_images IS 'Image storage references for landing pages and destinations';