import React from 'react'
import Image from 'next/image'

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
  // type narrowing
  if (!data || data.length === 0) {
    return null
  }

  return (
    <div className='h-[500px] relative'>
      <Image
        src={data[0].image_url}
        alt={data[0].heading || 'Hero image'}
        fill
        priority
        className='object-cover object-center'
        sizes='100vw'
      />

      {/* Use clamp() for the headings */}

      <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[#47566d7b] z-10'>
        <div>
          <h1 className='capitalize text-5xl text-white'>{data[0].heading}</h1>
          <p className='text-3xl text-white text-center capitalize'>
            {data[0].subheading}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
