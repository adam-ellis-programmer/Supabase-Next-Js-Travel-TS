'use client'

import { useState } from 'react'
import Image from 'next/image'

interface BackgroundImageLoaderProps {
  imageUrl: string
}

export function BackgroundImageLoader({
  imageUrl,
}: BackgroundImageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {/* Loader - shown while image is loading */}
      {isLoading && (
        <div className='absolute top-0 left-0 w-full h-full bg-[#364251] z-50 flex justify-center items-center flex-col space-y-5'>
          <p className='text-center text-3xl text-white'>
            loading login page...
          </p>
          <div className='animate-spin w-[70px] h-[70px] border-red-600 border-[7px] rounded-full border-t-blue-600'></div>
        </div>
      )}

      {/* Background Image */}
      <Image
        src={imageUrl}
        alt='Login background'
        fill
        priority
        quality={90}
        className='object-cover object-center'
        sizes='100vw'
        onLoad={() => setIsLoading(false)}
      />
    </>
  )
}
