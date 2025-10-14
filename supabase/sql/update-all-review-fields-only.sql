-- UPDATE reviews              -- 1. Target table
-- SET review_text = ...       -- 2. Column to update
-- WHERE ...                   -- 3. Which rows to update


-- Think of it like a switch statement or if-else chain in programming:
-- typescriptif (reviewer_name === 'Sarah Mitchell') {
--   review_text = 'An absolutely incredible...'
-- } else if (reviewer_name === 'James Anderson') {
--   review_text = 'Best travel decision...'
-- } else {
--   review_text = review_text // keep original
-- }

UPDATE reviews
SET review_text = CASE reviewer_name
  WHEN 'Sarah Mitchell' THEN 
    'An absolutely incredible experience from start to finish! The tour was perfectly organized, our guide was knowledgeable and friendly, and every destination exceeded my expectations. The food, culture, and landscapes were breathtaking. I can''t recommend this enough!'
  
  WHEN 'James Anderson' THEN 
    'Best travel decision I have ever made in my life! The itinerary was perfectly paced, allowing us to truly immerse in each location. Our guide went above and beyond ensuring everyone had fun. The accommodations were excellent and experiences authentic!'
  
  WHEN 'Emily Chen' THEN 
    'Wonderful tour with beautiful sights and great company throughout! The cultural experiences and local cuisine were absolute highlights of the trip. Minor transportation delays occurred but the team handled it professionally. Would definitely book again!'
  
  WHEN 'Michael Rodriguez' THEN 
    'As a solo traveler I was nervous joining a group tour but this exceeded all expectations! Everyone was friendly, group size was perfect, and I felt safe the entire time. The balance of guided activities and free time was ideal. Made lifelong friends!'
  
  WHEN 'Sophie Williams' THEN 
    'Every moment was absolutely magical from beginning to end! From stunning temples to bustling markets, everything was thoughtfully planned. Our guide''s passion for their country was contagious. The small group size made it intimate and special!'
  
  WHEN 'David Park' THEN 
    'Great family-friendly tour that we all thoroughly enjoyed! The guides were patient with our kids and included activities everyone could enjoy. Hotels were comfortable and well-located throughout the trip. Wish we had more time at some destinations!'
  
  WHEN 'Maria Santos' THEN 
    'A photographer''s dream come true without a doubt! The tour was timed perfectly for golden hour shots at each location. The guide knew all best viewpoints and waited while we captured photos. The landscapes and architecture were incredibly photogenic!'
  
  WHEN 'Robert Thompson' THEN 
    'Outstanding value for money on every single level! The quality of accommodations, meals, and experiences far exceeded the price point. The company clearly has excellent relationships with vendors. Everything ran smoothly and professionally throughout!'
  
  WHEN 'Lisa Zhang' THEN 
    'The culinary experiences alone made this trip worthwhile! From street food tours to cooking classes with local chefs, every meal was an adventure. Cultural immersion activities were authentic and respectful. Our guide was like a local friend!'
  
  WHEN 'Alex Morrison' THEN 
    'Thrilling adventure with amazing scenery at every turn! The hiking and water activities were well-organized and safety was clearly a priority. Accommodations were comfortable after long activity days. Only wish there were more challenging options!'
  
  ELSE review_text
END
WHERE reviewer_name IN (
  'Sarah Mitchell',
  'James Anderson', 
  'Emily Chen',
  'Michael Rodriguez',
  'Sophie Williams',
  'David Park',
  'Maria Santos',
  'Robert Thompson',
  'Lisa Zhang',
  'Alex Morrison'
);



-- Without WHERE clause:
-- sqlUPDATE reviews
-- SET review_text = CASE reviewer_name
--   WHEN 'Sarah Mitchell' THEN '...'
--   ...
--   ELSE review_text
-- END
-- This would:

-- Scan EVERY SINGLE ROW in the entire reviews table
-- Process the CASE statement for all rows (even ones that don't match)
-- Even if you have 10,000 reviews, it checks all 10,000 rows
-- Slower performance, especially on large tables

--  =============================================================================

-- WHERE reviewer_name IN (
--   'Sarah Mitchell',
--   'James Anderson',
--   ...
-- )
-- ```

-- **This:**
-- - **Filters first** - Only looks at rows where reviewer_name matches the list
-- - Only processes 10 rows instead of potentially thousands
-- - Much faster execution
-- - More efficient database operation
-- - Prevents accidentally updating other rows