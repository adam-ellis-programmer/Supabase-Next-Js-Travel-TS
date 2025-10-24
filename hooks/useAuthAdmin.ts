// hooks/useAuth.ts
'use client'

import { createClient } from '@/lib/supabase/client'
import { useEffect, useState } from 'react'
import type { User } from '@supabase/supabase-js'

interface Profile {
  id: string
  email: string
  full_name: string | null
  avatar_url: string | null
  phone: string | null
  date_of_birth: string | null
  nationality: string | null
  address: string | null
  city: string | null
  country: string | null
  postal_code: string | null
  preferred_currency: string
  newsletter_subscribed: boolean
  user_role: string
  created_at: string
  updated_at: string
  role_level: string
}

export const useAuthAdmin = () => {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [test, settest] = useState(null)
  const supabase = createClient()

  const fetchProfile = async (userId: string) => {
    try {
      const { data: user, error } = await supabase
        .from('profiles')
        .select(`*`)
        .eq('id', userId)
        .single()

      if (!user || error) {
        throw new Error('Error Fetching User From UseAuthAdmin()')
      }
      return user as Profile
    } catch (error) {
      console.error('Error in fetchProfile:', error)
      return null
    }
  }

  useEffect(() => {
    // =====================================
    // -- get initial session data
    // =====================================
    const getInitialSession = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession()

      if (!session || error) {
        throw new Error('Error getting session data from useAuthAdmin!')
      }

      return session
    }

    // set the profile state in this function:
    getInitialSession()
    // =====================================
    // -- Listen for auth changes
    // =====================================

    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      //   console.log({ event, session })
      //   console.log('session', session)
      //   console.log('event', event)
      setUser(session?.user)

      if (session?.user) {
        const profileUser = await fetchProfile(session.user.id)
        setProfile(profileUser)
      } else {
        setProfile(null)
        setLoading(false)
      }

      if (event === 'INITIAL_SESSION') {
        // console.log('signed in...')
        // handle initial session
      } else if (event === 'SIGNED_IN') {
        // handle sign in event
      } else if (event === 'SIGNED_OUT') {
        // handle sign out event
      } else if (event === 'PASSWORD_RECOVERY') {
        // handle password recovery event
      } else if (event === 'TOKEN_REFRESHED') {
        // handle token refreshed event
      } else if (event === 'USER_UPDATED') {
        // handle user updated event
      }
      setLoading(false)
    })

    // call unsubscribe to remove the callback

    // console.log('data: -->', data)

    return () => {
      //
      data.subscription.unsubscribe()
    }
  }, [])
  //
  return {
    test: '-- dummy test --',
    user,
    profile,
    loading,
    isAdmin: profile?.user_role === 'admin',
  }
}
