-- Create reviews table
CREATE TABLE reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  
  -- Reviewer information
  reviewer_name VARCHAR(255) NOT NULL,
  reviewer_title VARCHAR(255) DEFAULT 'Verified Traveler',
  reviewer_image_url TEXT,
  
  -- Review details
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text TEXT NOT NULL,
  
  -- Tour information
  tour_name VARCHAR(255) NOT NULL,
  tour_date DATE,
  
  -- Verification and status
  is_verified BOOLEAN DEFAULT true,
  is_published BOOLEAN DEFAULT false,
  
  -- Metadata
  helpful_count INTEGER DEFAULT 0,
  review_language VARCHAR(10) DEFAULT 'en'
);

-- Create index for faster queries
CREATE INDEX idx_reviews_published ON reviews(is_published, created_at DESC);
CREATE INDEX idx_reviews_rating ON reviews(rating);
CREATE INDEX idx_reviews_tour ON reviews(tour_name);

-- Enable Row Level Security
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read published reviews
CREATE POLICY "Published reviews are viewable by everyone"
  ON reviews FOR SELECT
  USING (is_published = true);

-- Policy: Authenticated users can insert reviews (optional - adjust based on your needs)
CREATE POLICY "Authenticated users can create reviews"
  ON reviews FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policy: Only admins can update reviews (you'll need to adjust this based on your auth setup)
CREATE POLICY "Only admins can update reviews"
  ON reviews FOR UPDATE
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin');

-- Function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to call the function
CREATE TRIGGER update_reviews_updated_at
  BEFORE UPDATE ON reviews
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data (optional)
-- INSERT INTO reviews (reviewer_name, reviewer_title, reviewer_image_url, rating, review_text, tour_name, tour_date, is_published)
-- VALUES 
--   ('Sarah Smith', 'Verified Traveler', 'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/person1.jpg', 5, 'An absolutely incredible experience from start to finish! The tour was perfectly organized, our guide was knowledgeable and friendly, and every destination exceeded my expectations. The food, culture, and landscapes were breathtaking. I can''t recommend this enough!', 'Vietnam Tour', '2025-03-15', true),
--   ('John Doe', 'Adventure Seeker', 'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/person2.jpg', 5, 'Best travel experience of my life! Every detail was taken care of, and the local insights made this trip truly special.', 'Thailand Adventure', '2025-02-20', true),
--   ('Emily Johnson', 'Culture Enthusiast', 'https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/person3.jpg', 4, 'Wonderful tour with amazing guides. The accommodations were great and the itinerary was well-planned. Would definitely book again!', 'Japan Cultural Tour', '2025-01-10', true);