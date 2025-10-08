-- ============================================
-- MIGRATION: Create Basic Profiles Table
-- Description: Minimal user profiles table
-- ============================================

-- ============================================
-- PROFILES TABLE (Basic Version)
-- ============================================
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email VARCHAR(255) UNIQUE NOT NULL,
  full_name VARCHAR(255),
  avatar_url TEXT,
  phone VARCHAR(50),
  date_of_birth DATE,
  nationality VARCHAR(100),
  address TEXT,
  city VARCHAR(100),
  country VARCHAR(100),
  postal_code VARCHAR(20),
  
  -- User preferences
  preferred_currency VARCHAR(3) DEFAULT 'GBP',
  newsletter_subscribed BOOLEAN DEFAULT false,
  
  -- User role
  user_role VARCHAR(50) DEFAULT 'customer', -- customer, admin, super_admin
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================
-- The id in the policy refers to a column in the table the policy is attached to.

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Users can view their own profile
CREATE POLICY "Users can view own profile" 
  ON profiles FOR SELECT 
  USING (auth.uid() = id);

-- Users can update their own profile
CREATE POLICY "Users can update own profile" 
  ON profiles FOR UPDATE 
  USING (auth.uid() = id);