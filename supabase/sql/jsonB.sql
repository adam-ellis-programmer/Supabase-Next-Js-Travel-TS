-- ✅ CORRECT - Stores ONE object with multiple properties
preferences JSONB DEFAULT '{}'
-- Example: {"theme": "dark", "language": "en", "notifications": true}

-- ✅ CORRECT - Stores ARRAY of objects
destinations JSONB DEFAULT '[]'
-- Example: [{"name": "Sydney", "image": "url"}, {"name": "Melbourne", "image": "url"}]

-- ✅ CORRECT - Stores array of strings
attractions TEXT[] NOT NULL DEFAULT '{}'
-- Example: {"Sydney Opera House", "Great Barrier Reef"}


-- TEXT[] can ONLY store strings (text)
-- For numbers, use INTEGER[] or NUMERIC[]
-- For booleans, use BOOLEAN[]



-- PostgreSQL Native Arrays
items TEXT[] DEFAULT '{}'           -- Empty array
items TEXT[] DEFAULT '{"a","b"}'    -- Array with items

-- JSONB Arrays  
items JSONB DEFAULT '[]'            -- Empty JSON array
items JSONB DEFAULT '[1, 2, 3]'     -- JSON array of numbers
items JSONB DEFAULT '["a", "b"]'    -- JSON array of strings
items JSONB DEFAULT '[{"x": 1}]'    -- JSON array of objects

-- JSONB Objects
item JSONB DEFAULT '{}'             -- Empty JSON object
item JSONB DEFAULT '{"key": "val"}' -- JSON object with data