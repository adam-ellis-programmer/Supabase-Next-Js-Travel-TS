'use client'

import React, { useState } from 'react'
import { Profile } from '@/types/database'
import { updateUserProfileAction } from '@/lib/supabase/actions'
import { User } from '@supabase/supabase-js'

const UserDetailsCard = ({
  profile,
  user,
}: {
  profile: Profile
  user: User
}) => {
  interface ProfileFormData {
    full_name: string
    email: string
  }

  const [isEditMode, setIsEditMode] = useState<boolean>(false)
  const [isSaving, setIsSaving] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [formData, setFormData] = useState<ProfileFormData>({
    full_name: profile.full_name ?? '',
    email: profile.email,
  })

  const toggleEdit = () => {
    if (isEditMode) {
      // Reset form to original values when canceling
      setFormData({
        full_name: profile.full_name ?? '',
        email: profile.email,
      })
      setError(null)
      setSuccessMessage(null)
    }
    setIsEditMode(!isEditMode)
  }

  const handleUpdateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  // components/auth/user/UserDetailsCard.tsx
  const handleSave = async () => {
    setIsSaving(true)
    setError(null)
    setSuccessMessage(null)

    try {
      const result = await updateUserProfileAction({
        email: formData.email,
        full_name: formData.full_name,
      })

      // ✅ Handle undefined (though it shouldn't happen with the fix above)
      if (!result) {
        setError('No response from server')
        return
      }

      if (result.success) {
        setSuccessMessage('Profile updated successfully!')
        setIsEditMode(false)
        setTimeout(() => setSuccessMessage(null), 3000)
      } else {
        setError(result.error || 'Failed to update profile')
      }
    } catch (err) {
      setError('An unexpected error occurred')
      console.error('Error saving profile:', err)
    } finally {
      setIsSaving(false)
    }
  }
  return (
    <div className='bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8 relative'>
      {isEditMode && (
        <div className='bg-rose-400 text-center text-white absolute -top-5 p-2 rounded-lg'>
          Edit mode active
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className='mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg'>
          {error}
        </div>
      )}

      {/* Success Message */}
      {successMessage && (
        <div className='mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg'>
          {successMessage}
        </div>
      )}

      <div className='flex items-start justify-between mb-6'>
        <h2 className='text-xl font-semibold text-slate-800'>
          Account Details
        </h2>
        <span className='px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full'>
          Active
        </span>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div>
          <label className='text-sm font-medium text-slate-500 uppercase tracking-wide'>
            Email
          </label>
          {isEditMode ? (
            <input
              className='block border border-rose-600 w-full p-2 rounded-md mt-1'
              type='email'
              placeholder='Enter email'
              value={formData.email}
              name='email'
              onChange={handleUpdateChange}
              disabled={isSaving}
            />
          ) : (
            <p className='mt-1 text-slate-800 font-medium'>{profile.email}</p>
          )}
        </div>

        <div>
          <label className='text-sm font-medium text-slate-500 uppercase tracking-wide'>
            Full Name
          </label>
          {isEditMode ? (
            <input
              className='block border border-rose-600 w-full p-2 rounded-md mt-1'
              type='text'
              placeholder='Enter full name'
              value={formData.full_name}
              name='full_name'
              onChange={handleUpdateChange}
              disabled={isSaving}
            />
          ) : (
            <p className='mt-1 text-slate-800 font-medium'>
              {profile.full_name || 'Update full name'}
            </p>
          )}
        </div>

        <div>
          <label className='text-sm font-medium text-slate-500 uppercase tracking-wide'>
            User ID
          </label>
          <p className='mt-1 text-slate-800 font-mono text-sm'>{profile.id}</p>
        </div>

        <div>
          <label className='text-sm font-medium text-slate-500 uppercase tracking-wide'>
            Member Since
          </label>
          <p className='mt-1 text-slate-800'>
            {new Date(profile.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>

        <div>
          <label className='text-sm font-medium text-slate-500 uppercase tracking-wide'>
            Last Sign In
          </label>
          <p className='mt-1 text-slate-800'>
            {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      </div>

      <div className='mt-6 pt-6 border-t border-slate-200 flex gap-3'>
        {isEditMode ? (
          <>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className='px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {isSaving ? 'Saving...' : 'Save Changes'}
            </button>
            <button
              onClick={toggleEdit}
              disabled={isSaving}
              className='px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg font-medium transition-colors disabled:opacity-50'
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={toggleEdit}
            className='px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors'
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  )
}

export default UserDetailsCard
