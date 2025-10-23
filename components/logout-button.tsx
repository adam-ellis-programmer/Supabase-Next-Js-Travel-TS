'use client'

import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { logoutAction } from '@/lib/supabase/actions/auth-actions'
import { useState } from 'react'

export function LogoutButton({
  handleMobileTourNav,
  className = '',
  mobile = false,
}: {
  handleMobileTourNav?: () => void // ✅ Added type
  className?: string
  mobile?: boolean
}) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const logout = async () => {
    setIsLoading(true)
    try {
      const supabase = createClient()
      await supabase.auth.signOut()

      await logoutAction()

      // ✅ Refresh server components to get updated auth state
      router.refresh()

      // ✅ Navigate to home
      router.push('/')

      // ✅ Don't set isLoading(false) here - component will unmount during navigation
    } catch (error) {
      console.error('Error logging out:', error)
      // ✅ Only reset loading on error
      setIsLoading(false)
    }
  }

  const handleLogout = () => {
    if (mobile && handleMobileTourNav) {
      handleMobileTourNav()
    }
    logout()
  }

  return (
    <Button
      onClick={handleLogout}
      disabled={isLoading}
      className={`ml-5 bg-gray-700 font-bold ${className}`}
    >
      {isLoading ? 'Logging out...' : 'Logout'}
    </Button>
  )
}
