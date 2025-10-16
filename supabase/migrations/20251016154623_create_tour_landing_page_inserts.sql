-- ============================================
-- INSERT AUSTRALIA (matches your dummy data)
-- ============================================

-- Step 1: Insert main landing page for Australia
INSERT INTO landing_pages (
  country_name,
  slug,
  tagline,
  hero_image_url,
  description,
  best_time,
  currency,
  language,
  timezone,
  visa,
  attractions
) VALUES (
  'Australia',
  'australia',
  'Discover the Land Down Under',
  'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200',
  'From vibrant cities to pristine beaches and the iconic Outback, Australia offers unforgettable adventures for every traveler. Experience world-class wildlife, ancient cultures, and breathtaking natural wonders.',
  'September to November, March to May',
  'Australian Dollar (AUD)',
  'English',
  'UTC+8 to UTC+11',
  'eVisitor or ETA required for most tourists',
  ARRAY['Sydney Opera House', 'Great Barrier Reef', 'Uluru-Kata Tjuta', 'Great Ocean Road', 'Bondi Beach', 'Daintree Rainforest', 'Fraser Island', 'Blue Mountains']
);

-- Step 2: Insert top destinations for Australia
INSERT INTO landing_page_destinations (landing_page_id, name, image_url, description, display_order)
VALUES 
  ((SELECT id FROM landing_pages WHERE slug = 'australia'), 'Sydney', 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400', 'Iconic Opera House, Harbour Bridge, and stunning beaches', 1),
  ((SELECT id FROM landing_pages WHERE slug = 'australia'), 'Great Barrier Reef', 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=400', 'World''s largest coral reef system with incredible marine life', 2),
  ((SELECT id FROM landing_pages WHERE slug = 'australia'), 'Melbourne', 'https://images.unsplash.com/photo-1514395462725-fb4566210144?w=400', 'Cultural capital with art, coffee culture, and sports', 3),
  ((SELECT id FROM landing_pages WHERE slug = 'australia'), 'Uluru', 'https://images.unsplash.com/photo-1540961235228-b90082c4c6bb?w=400', 'Sacred monolith in the heart of the Red Centre', 4);

-- Step 3: Insert experiences for Australia
INSERT INTO landing_page_experiences (landing_page_id, icon, title, description, display_order)
VALUES 
  ((SELECT id FROM landing_pages WHERE slug = 'australia'), 'FaUmbrellaBeach', 'Beach & Surf', 'World-class beaches and surfing spots', 1),
  ((SELECT id FROM landing_pages WHERE slug = 'australia'), 'FaMountain', 'Adventure', 'Hiking, diving, and outdoor thrills', 2),
  ((SELECT id FROM landing_pages WHERE slug = 'australia'), 'FaUtensils', 'Food & Wine', 'Fresh seafood and premium wines', 3),
  ((SELECT id FROM landing_pages WHERE slug = 'australia'), 'FaCamera', 'Wildlife', 'Unique animals in natural habitats', 4);

-- Step 4: Insert travel tips for Australia
INSERT INTO landing_page_travel_tips (landing_page_id, icon, title, tip, display_order)
VALUES 
  ((SELECT id FROM landing_pages WHERE slug = 'australia'), 'FaClock', 'Best Time', 'Spring (Sep-Nov) and Autumn (Mar-May) offer mild weather', 1),
  ((SELECT id FROM landing_pages WHERE slug = 'australia'), 'FaPlane', 'Getting Around', 'Domestic flights connect major cities; rent a car for road trips', 2),
  ((SELECT id FROM landing_pages WHERE slug = 'australia'), 'FaMoneyBillWave', 'Budget', 'Expect $100-150 AUD per day for mid-range travel', 3),
  ((SELECT id FROM landing_pages WHERE slug = 'australia'), 'FaPassport', 'Visa', 'Apply for eVisitor or ETA online before departure', 4);


-- ============================================
-- INSERT JAPAN (second country)
-- ============================================

-- Step 1: Insert main landing page for Japan
INSERT INTO landing_pages (
  country_name,
  slug,
  tagline,
  hero_image_url,
  description,
  best_time,
  currency,
  language,
  timezone,
  visa,
  attractions
) VALUES (
  'Japan',
  'japan',
  'Where Tradition Meets Innovation',
  'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200',
  'Experience the perfect blend of ancient temples and futuristic cities. From cherry blossoms to snow-capped mountains, Japan offers a unique journey through time and culture that captivates every visitor.',
  'March to May (Spring), October to November (Autumn)',
  'Japanese Yen (JPY)',
  'Japanese',
  'UTC+9',
  'Visa-free for 90 days for most Western tourists',
  ARRAY['Fushimi Inari Shrine', 'Tokyo Skytree', 'Hiroshima Peace Memorial', 'Nara Deer Park', 'Shibuya Crossing', 'Arashiyama Bamboo Grove', 'Hakone Hot Springs', 'Nikko Toshogu Shrine']
);

-- Step 2: Insert top destinations for Japan
INSERT INTO landing_page_destinations (landing_page_id, name, image_url, description, display_order)
VALUES 
  ((SELECT id FROM landing_pages WHERE slug = 'japan'), 'Tokyo', 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400', 'Bustling metropolis with modern tech and traditional temples', 1),
  ((SELECT id FROM landing_pages WHERE slug = 'japan'), 'Kyoto', 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400', 'Ancient capital with stunning temples and geisha districts', 2),
  ((SELECT id FROM landing_pages WHERE slug = 'japan'), 'Mount Fuji', 'https://images.unsplash.com/photo-1578637387939-43c525550085?w=400', 'Iconic snow-capped volcano and sacred mountain', 3),
  ((SELECT id FROM landing_pages WHERE slug = 'japan'), 'Osaka', 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=400', 'Food capital with vibrant nightlife and historic castle', 4);

-- Step 3: Insert experiences for Japan
INSERT INTO landing_page_experiences (landing_page_id, icon, title, description, display_order)
VALUES 
  ((SELECT id FROM landing_pages WHERE slug = 'japan'), 'FaCamera', 'Cherry Blossoms', 'Witness stunning sakura season', 1),
  ((SELECT id FROM landing_pages WHERE slug = 'japan'), 'FaUtensils', 'Culinary Journey', 'Sushi, ramen, and street food delights', 2),
  ((SELECT id FROM landing_pages WHERE slug = 'japan'), 'FaGlobe', 'Cultural Heritage', 'Ancient temples and tea ceremonies', 3),
  ((SELECT id FROM landing_pages WHERE slug = 'japan'), 'FaMountain', 'Nature & Hot Springs', 'Mountains, forests, and onsen relaxation', 4);

-- Step 4: Insert travel tips for Japan
INSERT INTO landing_page_travel_tips (landing_page_id, icon, title, tip, display_order)
VALUES 
  ((SELECT id FROM landing_pages WHERE slug = 'japan'), 'FaClock', 'Best Time', 'Visit during cherry blossom season (late March-April) or autumn foliage (October-November)', 1),
  ((SELECT id FROM landing_pages WHERE slug = 'japan'), 'FaPlane', 'Getting Around', 'JR Pass for unlimited train travel is a must for tourists', 2),
  ((SELECT id FROM landing_pages WHERE slug = 'japan'), 'FaMoneyBillWave', 'Budget', '¥10,000-15,000 per day for mid-range travel', 3),
  ((SELECT id FROM landing_pages WHERE slug = 'japan'), 'FaGlobe', 'Etiquette', 'Remove shoes indoors, bow when greeting, and be quiet on public transport', 4);

