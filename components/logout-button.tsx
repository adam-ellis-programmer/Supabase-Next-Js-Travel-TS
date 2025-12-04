'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { logoutAction } from '@/lib/supabase/actions/auth-actions'
import { useState } from 'react'

// window.location.href: Nuke everything (slow but guaranteed)
// router.push(): Navigate smoothly (fast but state persists)
// router.refresh(): Update server data (fast but stay on page)

export function LogoutButton({
  handleMobileTourNav,
  className = '',
  mobile = false,
}: {
  handleMobileTourNav?: () => void
  className?: string
  mobile?: boolean
}) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogout = async () => {
    setIsLoading(true)

    try {
      // Close mobile nav first if needed
      if (mobile && handleMobileTourNav) {
        handleMobileTourNav()
      }

      // Call the server action (this already does signOut)
      await logoutAction()

      // Navigate to home
      window.location.href = '/'
      router.push('/')

      // Refresh to update all server components
      router.refresh()
    } catch (error) {
      console.error('Error logging out:', error)
      setIsLoading(false)
    }
  }

  return (
    <Button
      onClick={handleLogout}
      disabled={isLoading}
      className={`ml-5 bg-gray-700 font-bold ${className} ${mobile && 'border bg-rose-400 w-full h-full ml-0' }`}
    >
      {isLoading ? 'Logging out...' : 'Logout'}
    </Button>
  )
}
