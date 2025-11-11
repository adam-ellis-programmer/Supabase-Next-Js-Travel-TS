import React from 'react'
import { IoIosInformationCircleOutline, IoMdCloseCircle } from 'react-icons/io'
import { MdEditSquare } from 'react-icons/md'

const ArrayFields = ({ categorizedData }: { categorizedData: any }) => {
  return (
    <div className='space-y-2 text-sm'>
      {Object.entries(categorizedData.array || {}).map(([key, value]) => (
        <div key={key}>
          {/* {console.log(value)} */}
          <p className='text-orange-600 text-2xl my-3 '>{key}:</p>{' '}
          {(value as any[]).length} items
          <ul>
            {(value as any[]).map((item, i) => {
              return (
                <li key={i}>
                  <p className='border-b border-orange-200 py-2 flex items-center space-x-5 justify-between'>
                    <IoIosInformationCircleOutline className='inline-block mr-3 text-lg' />
                    <span className=' flex-1 '>{item}</span>
                    <span className='flex space-x-3'>
                      <MdEditSquare className='text-black  cursor-pointer' />
                      <IoMdCloseCircle className='text-red-500 cursor-pointer' />
                    </span>
                  </p>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default ArrayFields
