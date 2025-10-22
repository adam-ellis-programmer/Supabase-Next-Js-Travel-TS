'use client'

import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { logoutAction } from '@/lib/supabase/actions/auth-actions'

export function LogoutButton({
  handleMobileTourNav,
  className = '',
}: {
  className?: string
}) {
  const router = useRouter()

  const logout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()

    await logoutAction()

    router.push('/')
  }

  const handleLogout = () => {
    logout()
    handleMobileTourNav()
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
