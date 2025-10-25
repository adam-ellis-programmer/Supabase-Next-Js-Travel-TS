'use client'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { loginAction } from '@/lib/supabase/actions/auth-actions'
import { useAuthAdmin } from '@/contexts/AuthContext' // ✅ Import the hook

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { refreshAuth } = useAuthAdmin() // ✅ Get refreshAuth

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      // Call the server action
      const result = await loginAction(email, password)

      if (result.error) {
        throw new Error(result.error)
      }

      console.log('✅ Login successful, refreshing auth...')

      // ✅ Wait for client-side auth to sync with server
      await refreshAuth()

      console.log('✅ Auth refreshed, redirecting...')

      // Now redirect with updated auth state
      router.push('/protected')
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div
      className={cn('flex flex-col gap-6  w-full  h-full', className)}
      {...props}
    >
      <div className=' h-full bg-white/30 rounded-lg p-5'>
        <CardHeader>
          <CardTitle className='text-2xl '>
            <span className='bg-orange-500 text-white px-4 py-2 rounded-lg'>
              Login
            </span>
          </CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className='flex flex-col gap-6'>
              <div className='grid gap-2'>
                <Label className='' htmlFor='email'>
                  <span className='bg-orange-400 p-1 rounded-lg'>Email</span>
                </Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='m@example.com'
                  required
                  value={email}
                  className='bg-white'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='grid gap-2'>
                <div className='flex items-center'>
                  <Label htmlFor='password'>
                    <span className='bg-orange-400 p-1 rounded-lg'>
                      Password
                    </span>
                  </Label>
                  <Link
                    href='/auth/forgot-password'
                    className='ml-auto inline-block text-sm underline-offset-4 hover:underline'
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id='password'
                  type='password'
                  required
                  value={password}
                  className='bg-white'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p className='text-sm text-red-500'>{error}</p>}
              <Button type='submit' className='w-full' disabled={isLoading}>
                {isLoading ? 'Logging in...' : 'Login'}
              </Button>
            </div>
            <div className='mt-4 text-center text-sm bg-gray-600 rounded-lg text-white w-1/2 mx-auto'>
              Don&apos;t have an account?{' '}
              <Link
                href='/auth/sign-up'
                className='underline underline-offset-4'
              >
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </div>
    </div>
  )
}
