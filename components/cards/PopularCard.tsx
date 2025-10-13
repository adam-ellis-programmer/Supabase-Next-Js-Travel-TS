import React from 'react'
import { Popular } from '../PopularDest'

interface popularData {
  item: Popular
}

const PopularCard = ({ item }: popularData) => {
  const { img_url, country_name, flag_emoji } = item
  return (
    <div className='h-[300px] relative  rounded-lg grid place-items-center overflow-hidden'>
      <img className='w-full h-full' src={img_url} alt='' />

      <div className='absolute bg-[#2e415785] top-0 bottom-0 w-full h-full grid place-items-center'>
        <div>
          <p className='text-3xl text-white'>{country_name}</p>
        </div>
      </div>
      <span className='absolute right-2 bottom-2 z-30 text-4xl'>{flag_emoji}</span>
    </div>
  )
}

export default PopularCard
