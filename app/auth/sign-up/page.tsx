import { SignUpForm } from '@/components/sign-up-form'

export default function Page() {
  return (
    <div className='relative h-[88vh]'>
      <img
        src='https://images.pexels.com/photos/758744/pexels-photo-758744.jpeg'
        className='absolute w-full top-0 left-0 h-full object-cover object-center z-10'
        alt=''
      />
      <div className='absolute w-full  z-30 top-52 md:pr-20'>
        <div className=' flex justify-end'>
          <SignUpForm className='w-[600px] max-w-[600px]' />
        </div>
      </div>
    </div>
  )
}
