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
  const [demoLoading, setdemoLoading] = useState(false)
  const [regLoading, setRegLoading] = useState(false)
  const router = useRouter()
  const { refreshAuth } = useAuthAdmin() // ✅ Get refreshAuth

  const handleLogin = async (e: React.FormEvent, from: string) => {
    console.log(from)
    e.preventDefault()
    setError(null)

    try {
      // Call the server action
      if (from === 'demo') {
        setdemoLoading(true)
        const result = await loginAction('demo@admin.com', '11111111')
        if (result.error) {
          throw new Error(result.error)
        }
      }
      if (from === 'reg') {
        setRegLoading(true)
        const result = await loginAction(email, password)
        if (result.error) {
          throw new Error(result.error)
        }
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
      setdemoLoading(false)
      setRegLoading(false)
    }
  }

  return (
    <div
      className={cn('flex flex-col gap-6  w-full  h-full', className)}
      {...props}
    >
      <div className=' h-full bg-white/30 rounded-lg'>
        <span className='bg-orange-500 text-white px-4 py-2 rounded-lg'>
          Login
        </span>
        <CardContent className='mt-5'>
          <form onSubmit={(e) => handleLogin(e, 'reg')}>
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
                    <span className='bg-gray-600 text-white px-2 rounded-sm'>
                      {' '}
                      Forgot your password?
                    </span>
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
              <div className='flex items-center space-x-3'>
                <button
                  type='submit'
                  className='w-1/2 rounded-md py-2 text-white bg-neutral-800'
                  disabled={regLoading || demoLoading}
                >
                  {regLoading ? 'Logging in...' : 'Login'}
                </button>

                <button
                  onClick={(e) => handleLogin(e, 'demo')}
                  type='button'
                  className='w-1/2  rounded-md py-2 bg-orange-400 text-black'
                  disabled={regLoading || demoLoading}
                >
                  {demoLoading ? 'Logging in As Demo...' : 'Test Drive'}
                </button>
              </div>
            </div>
            <div className='mt-4 text-center text-sm bg-gray-600 rounded-lg text-white w-1/2 p-2 mx-auto'>
              Don&apos;t have an account?{' '}
              <Link
                href='/auth/sign-up'
                className='underline underline-offset-4'
              >
                <p> Sign up</p>
              </Link>
            </div>
          </form>
        </CardContent>
      </div>
    </div>
  )
}
