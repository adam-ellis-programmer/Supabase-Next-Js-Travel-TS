import { LoginForm } from '@/components/login-form'
import { LandingPage } from '@/lib/supabase/services/site/landing-page-service'

export default async function Page() {
  const res = await LandingPage.auth('auth_screen')


  return (
    <div className='relative h-[88vh]'>
      <img
        src={res[0].image_url}
        className='absolute w-full top-0 left-0 h-full object-cover object-center z-10'
        alt=''
      />
      <div className='absolute w-full  z-30 top-52 md:pr-20'>
        <div className=' flex justify-end '>
          <LoginForm className='max-w-[600px]' />
        </div>
      </div>
    </div>
  )
}
