-- create table if not exists tours (
--   id bigint primary key generated always as identity,
--   name text not null,
--   email text,
--   created_at timestamptz default now()
-- );

CREATE TABLE tours (
  id BIGSERIAL PRIMARY KEY,
  tourName TEXT NOT NULL,
  country TEXT NOT NULL,
  duration TEXT NOT NULL,
  price INTEGER NOT NULL,
  rating DECIMAL(2,1),
  destinations INTEGER,
  description TEXT,
  keyPoints TEXT,
--   
  max_people INTEGER,
  image TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);


-- {
--     "tourName": "Enim vero quam in co",
--     "country": "japan",
--     "duration": "Dignissimos quia nih",
--     "price": "90",
--     "maxPeople": "26",
--     "difficulty": "moderate",
--     "destinations": "26",
--     "description": "Non exercitationem o",
--     "keyPoints": [
--         "Omnis rerum perferen",
--         "Quod id esse in null"
--     ],
--     "whyTakeTrip": "Quia sunt quaerat ip",
--     "ageGroup": "Quam est laboris no",
--     "pickupPoint": "Repudiandae eiusmod ",
--     "dropoffPoint": "Vel reprehenderit de"
-- }