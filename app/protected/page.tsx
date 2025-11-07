import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'
import { InfoIcon } from 'lucide-react'
import Link from 'next/link'
import { LogoutButton } from '@/components/logout-button'
import { FaSignsPost } from 'react-icons/fa6'
export default async function ProtectedPage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getClaims()
  if (error || !data?.claims) {
    redirect('/auth/login')
  }

  const name = data?.claims?.email.split('@')[0]

  return (
    // prettier-ignore
    <div className='relative h-[calc(100vh-103px)]'>
      <div className='absolute top-0 left-0 w-full h-full bg-[#383c4278] flex justify-center items-center'>
        <div className='relative w-[700px] max-w-[700px] h-[340px] bg-[#ffffff93] rounded-lg p-5'>
          {/* <InfoIcon /> */}
          <FaSignsPost className='absolute right-5 top-5 text-7xl text-orange-700 rotate-12'  />

          <section>
            <p className='text-3xl text-center capitalize'>Welcome Back {name}</p>
          </section>
          {/* prettier-ignore */}
          <section className='mt-10'>
            <p className='text-2xl mb-5'>Where to?</p>
            <div className='flex justify-center flex-col items-center'>
            <Link  className='bg-rose-500 block w-[300px]  text-center text-white mb-2 text-lg rounded-md' href={`/`}>Home</Link>
            <Link  className='bg-rose-500 block w-[300px]  text-center text-white mb-2 text-lg rounded-md'href={`/auth/account`}>My Account</Link>
            <Link  className='bg-rose-500 block w-[300px]  text-center text-white mb-2 text-lg rounded-md'href={`/auth/account`}>Shopping Cart</Link>
            <LogoutButton />
            </div>
          </section>
        </div>
      </div>
      <img
        className='w-full h-full object-cover object-top'
        src='https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2340'
        alt=''
      />
    </div>
  )
}
