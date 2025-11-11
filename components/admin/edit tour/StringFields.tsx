'use client'
import React, { useState } from 'react'
import { MdEditSquare } from 'react-icons/md'

const StringFields = ({ categorizedData }: { categorizedData: any }) => {
  return (
    <div className='space-y-2 text-sm'>
      {Object.entries(categorizedData.string || {}).map(([key, value]) => (
        <div key={key} className='border-b pb-3'>
          <p className='text-orange-600  cursor-pointer flex items-center justify-between '>
            <span className='text-lg'>{key}</span>
            <MdEditSquare className='text-black text-md' />
          </p>
          <p className=''>{value as string}</p>
        </div>
      ))}
    </div>
  )
}

export default StringFields
