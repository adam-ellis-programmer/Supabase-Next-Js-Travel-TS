'use client'

import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { logoutAction } from '@/lib/supabase/actions/auth-actions'

export function LogoutButton({
  handleMobileTourNav,
  className = '',
  mobile = false,
}: {
  className?: string
  mobile?: boolean
}) {
  const router = useRouter()

  const logout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()

    await logoutAction()

    router.push('/')
  }

  const handleLogout = () => {
    if (mobile) {
      handleMobileTourNav()
    }
    logout()
  }

  return (
    <Button
      onClick={handleLogout}
      className={`ml-5 bg-gray-700 font-bold ${className}`}
    >
      Logout
    </Button>
  )
}
