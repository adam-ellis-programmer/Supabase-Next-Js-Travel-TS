import { LoginForm } from '@/components/login-form'
import { LandingPage } from '@/lib/supabase/services/site/landing-page-service'
import Image from 'next/image'
import { BackgroundImageLoader } from '@/components/auth/background-image-loader'

export default async function Page() {
  const res = await LandingPage.auth('auth_screen')

  return (
    <div className='relative h-[88vh]'>
      <BackgroundImageLoader imageUrl={res[0].image_url} />
      <div className='absolute w-full z-30 top-52 md:pr-20'>
        <div className='flex justify-end'>
          <LoginForm className='max-w-[600px]' />
        </div>
      </div>
    </div>
  )
}
