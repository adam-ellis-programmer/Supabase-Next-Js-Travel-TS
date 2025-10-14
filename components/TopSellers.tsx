import React from 'react'
import LongCard from './cards/LongCard'

export interface TopSellers {
  best_seller: string
  id: string
  tour_name: string
  destinations: string
  duration: string
  group_size: number
  description: string
  tags: string
  price: number
  image: {
    image_url: string
  }[]
}

export interface TopSellersData {
  data: TopSellers[]
}

const TopSellers = ({ data }: TopSellersData) => {
  // console.log('data----->', data.length)

  return (
    <div className=''>
      <h1 className='capitalize text-3xl text-center my-10'>best sellers</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5'>
        {data.map((item, i) => {
          return <LongCard data={item} key={i} />
        })}
      </div>
    </div>
  )
}

export default TopSellers
