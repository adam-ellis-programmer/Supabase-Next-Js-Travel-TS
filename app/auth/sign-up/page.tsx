import { BackgroundImageLoader } from '@/components/auth/background-image-loader'
import { SignUpForm } from '@/components/sign-up-form'
import { LandingPage } from '@/lib/supabase/services/site/landing-page-service'

export default async function Page() {
  const res = await LandingPage.auth('auth_screen')
  return (
    <div className='relative h-[88vh]'>
      <BackgroundImageLoader imageUrl={res[0].image_url} />
      <div className='absolute w-full  z-30 top-52 md:pr-20'>
        <div className=' flex justify-end'>
          <SignUpForm className='w-[600px] max-w-[600px]' />
        </div>
      </div>
    </div>
  )
}
