
CREATE POLICY "Allow authenticated select tour-images"
ON storage.objects
FOR SELECT
TO authenticated
USING (bucket_id = 'tour-images');

SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies 
WHERE schemaname = 'storage' 
  AND tablename = 'objects';