-- ============================================
-- MIGRATION: Auto-Create Profile on User Signup
-- Description: Function and trigger to automatically create a profile when a user signs up
-- ============================================

-- ============================================
-- FUNCTION: Handle New User
-- ============================================
--  public.profiles (id, email, full_name)  -- where to place the data 
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name) 
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', '')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
-- NEW is a special variable in trigger functions:
-- Represents the new row being inserted/updated



-- ============================================
-- TRIGGER: Auto-create profile on user signup
-- ============================================
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();



--   Two Types of Triggers:
-- 1. FOR EACH ROW (Row-level trigger)
--      Executes once for each row affected by the operation
-- 2. FOR EACH STATEMENT (Statement-level trigger)
--      Executes once for the entire statement, regardless of how many rows are affected

