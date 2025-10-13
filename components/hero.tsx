import React from 'react'

interface HeroData {
  heading: string
  id: string
  image_url: string
  subheading: string
}

interface HeroProps {
  data: HeroData[] | null
}

const Hero = ({ data }: HeroProps) => {
  // console.log(data)
  // Add null check

  if (!data || data.length === 0) {
    return null // or return a fallback UI
  }

  // *****************
  // After this check, TypeScript KNOWS data is not null
  // This is called "narrowing" the type
  //
  // if we check at databsase get() function
  // we do not need to do the extra checks here
  // such as check for | null or !data || data.length === 0
  // *****************

  return (
    <div className='h-[500px] relative'>
      <img
        className='w-full object-cover object-center h-[500px]'
        src={data[0].image_url}
        alt=''
      />

      <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[#47566d7b]'>
        <div>
          <h1 className='capitalize text-5xl text-white '>{data[0].heading}</h1>
          <p className='text-3xl text-white text-center capitalize'>
            {data[0].subheading}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
