import React from 'react'
import PopularCard from './cards/PopularCard'

export interface Popular {
  banner_img_url: string
  country_name: string
  currency_code: string
  flag_emoji: string
  img_url: string
  continent: string
}

interface PopularData {
  data: Popular[]
}

const PopularDest = ({ data }: PopularData) => {
  return (
    <section className='mt-5'>
      <h3 className='my-10 capitalize text-3xl text-center'>
        popular destinations
      </h3>
      <div className=' grid md:grid-cols-[repeat(4,minmax(320px,1fr))] md:w-[80%] mx-auto gap-4 '>
        {data.map((item, i) => {
          return <PopularCard key={i} item={item} />
        })}
      </div>
    </section>
  )
}

export default PopularDest
