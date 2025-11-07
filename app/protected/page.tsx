import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'
import { InfoIcon } from 'lucide-react'
import { FetchDataSteps } from '@/components/tutorial/fetch-data-steps'
import Link from 'next/link'
import { LogoutButton } from '@/components/logout-button'
export default async function ProtectedPage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getClaims()
  if (error || !data?.claims) {
    redirect('/auth/login')
  }

  return (
    <div className='relative'>
      <div className='absolute top-0 left-0 w-full h-full bg-[#3741556f] flex justify-center items-center'>
        <div className='w-[700px] max-w-[700px] h-[340px] bg-[#ffffff93] rounded-lg p-5'>
          <section>
            <p className='text-3xl text-center'>Welcome Back Amy</p>
          </section>
          {/* prettier-ignore */}
          <section className='mt-10'>
            <p className='text-2xl mb-5'>Where to?</p>
            <div className='flex justify-center flex-col items-center'>
            <Link  className='bg-rose-500 block w-1/2 text-center text-white mb-2 text-lg rounded-md' href={`/`}>Home</Link>
            <Link  className='bg-rose-500 block w-1/2 text-center text-white mb-2 text-lg rounded-md'href={`/auth/account`}>My Account</Link>
            <LogoutButton />
            </div>
          </section>
        </div>
      </div>
      <img
        className='w-full h-screen'
        src='https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2340'
        alt=''
      />
    </div>
  )
}
