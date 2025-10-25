// contexts/AuthContext.tsx
'use client'

import { createClient } from '@/lib/supabase/client'
import { createContext, useContext, useEffect, useState } from 'react'
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

interface AuthContextType {
  user: User | null
  profile: Profile | null
  loading: boolean
  isLoggedIn: boolean
  isAdmin: boolean
  roleLevel: string | null
  refreshAuth: () => Promise<void> // ✅ Add this
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  loading: true,
  isLoggedIn: false,
  isAdmin: false,
  roleLevel: null,
  refreshAuth: async () => {}, // ✅ Add default (why an object here but void above)
})

export const useAuthAdmin = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuthAdmin must be used within AuthProvider')
  }
  return context
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  // ✅ Move fetchProfile outside so it can be reused
  const fetchProfile = async (userId: string): Promise<Profile | null> => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()

      if (error) throw error
      return data as Profile
    } catch (error) {
      console.error('Error fetching profile:', error)
      return null
    }
  }

  //=============================================================
  // -- auth refresh used for login page
  //=============================================================
  const refreshAuth = async () => {
    console.log('🔄 Manually refreshing auth state...')
    try {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession()
      console.log('🔄 Refreshed session:', session)

      if (error) throw error

      setUser(session?.user ?? null)

      if (session?.user) {
        const profileData = await fetchProfile(session.user.id)
        setProfile(profileData)
        console.log('✅ Auth refreshed successfully', {
          user: session.user.email,
          isAdmin: profileData?.user_role === 'admin',
        })
      } else {
        setProfile(null)
        console.log('❌ No session found after refresh')
      }
    } catch (error) {
      console.error('Error refreshing auth:', error)
    }
  }

  //=============================================================
  // --
  //=============================================================

  useEffect(() => {
    //=============================================================
    // -- Initialize auth state
    //=============================================================
    const initializeAuth = async () => {
      try {
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession()
        console.log('session', session)

        if (error) {
          console.error('Error getting session:', error)
          setLoading(false)
          return
        }

        setUser(session?.user ?? null)

        if (session?.user) {
          const profileData = await fetchProfile(session.user.id)
          setProfile(profileData)
        }

        setLoading(false)
      } catch (error) {
        console.error('Error initializing auth:', error)
        setLoading(false)
      }
    }

    initializeAuth()

    //=============================================================
    // -- Listen for auth changes
    //=============================================================
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth event:', event)

      setUser(session?.user ?? null)

      if (session?.user) {
        const profileData = await fetchProfile(session.user.id)
        setProfile(profileData)
      } else {
        setProfile(null)
      }

      if (event !== 'INITIAL_SESSION') {
        setLoading(false)
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const value: AuthContextType = {
    user,
    profile,
    loading,
    isLoggedIn: !!user,
    isAdmin: profile?.user_role === 'admin',
    roleLevel: profile?.role_level || null,
    refreshAuth, // ✅ Expose it
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
