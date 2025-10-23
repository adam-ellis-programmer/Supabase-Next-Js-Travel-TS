import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'

export default function Page() {
  return (
    <div className='flex justify-center items-center  h-[88vh] overflow-hidden  relative'>
      <div className='absolute w-full h-full top-0 left-0 bottom-0 right-0 bg-[#24344b77] z-10'></div>
      <img
        className='h-full w-full object-cover object-bottom'
        src='https://ldnjbkiqxrljdlauxbqe.supabase.co/storage/v1/object/public/site/elizeu-dias-xarhNpLSHTk-unsplash.jpg'
        alt=''
      />
      <div className=' max-w-sm absolute z-30'>
        <div className='flex flex-col gap-6'>
          <Card>
            <CardHeader>
              <CardTitle className='text-2xl'>
                <p>Check Your Email and </p>
                Thank you for signing up!
              </CardTitle>
              <CardDescription>Check your email to confirm</CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-sm text-muted-foreground'>
                You&apos;ve successfully signed up. Please check your email to
                confirm your account before signing in.
              </p>
              <Link
                className='bg-orange-600 text-white px-5 py-[3px] rounded-lg mt-5 inline-block text-sm'
                href={`/auth/login`}
              >
                Sign In Now
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
