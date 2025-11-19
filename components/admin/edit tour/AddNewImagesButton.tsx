import React, { useEffect, useRef, useState } from 'react'
import { CiImageOn } from 'react-icons/ci'
import { CiCirclePlus } from 'react-icons/ci'

const images = [
  'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80', // Thai Temple
  'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80', // Tropical Beach
  'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRoYWlsYW5kfGVufDB8fDB8fHww', // Tropical Beach
  'https://plus.unsplash.com/premium_photo-1681582960531-7b5de57fb276?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHRoYWlsYW5kfGVufDB8fDB8fHww', // Tropical Beach
]

const AddNewImagesButton = () => {
  return (
    <div>
      {/* Staging area! */}
      {/* <div>
        <ul className='grid grid-cols-4 gap-2 '>
          {images.map((img, i) => {
            return (
              <li key={i} className='mt-4'>
                <img src={img} className='w-full h-[60px] rounded-lg' alt='' />
              </li>
            )
          })}
        </ul>
        <div className='mt-4'>
          <button className='flex space-x-3 items-center bg-green-300 rounded-lg px-1'>
            <CiCirclePlus /> <span>Add Images</span>
          </button>
        </div>
      </div> */}

      <div className='mt-5 h-[200px] border border-dashed border-neutral-600 flex justify-center items-center rounded-lg cursor-pointer'>
        <div className='flex justify-center items-center flex-col'>
          <p className='mb-2 text-lg capitalize '>drag or select new images here</p>
          <CiImageOn className='text-5xl animate-pulse' />
        </div>
      </div>
    </div>
  )
}

export default AddNewImagesButton
