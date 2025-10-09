
--------------------------------------------------------------------------------
create policy "allow authenticate users to upload (insert) images to bucket"
--------------------------------------------------------------------------------
on storage.objects for insert
to authenticated 
with check (
    bucket_id = 'tour-images'
);
    --  add in admin check 