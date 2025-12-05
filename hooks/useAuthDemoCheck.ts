import { createClient } from '@/lib/supabase/client'
import { useState, useEffect } from 'react'

function useDemoCheck() {
  const [data, setData] = useState<{} | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [userData, setUserData] = useState<{ demo_user: boolean }[] | null>(
    null
  )
  const [isDemoUser, setIsDemoUser] = useState<boolean | null>(null) // Add state for isDemoUser

  useEffect(() => {
    const supabase = createClient()
    const fetchData = async () => {
      setLoading(true)
      const {
        data: { user },
      } = await supabase.auth.getUser()

      const userId = user?.id

      const { data: profileData, error } = await supabase
        .from('profiles')
        .select('demo_user')
        .eq('id', userId)

      setUserData(profileData)
      setData(user)

      // Set isDemoUser only after data is fetched
      if (profileData && profileData.length > 0) {
        setIsDemoUser(profileData[0].demo_user)
      }

      setLoading(false)
    }

    fetchData()
  }, [])

  return { data, loading, error, userData, isDemoUser }
}

export default useDemoCheck
