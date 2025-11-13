import React from 'react'
import { IoIosInformationCircleOutline, IoMdCloseCircle } from 'react-icons/io'
import { MdEditSquare } from 'react-icons/md'
import EditButton from './EditButton'
import { FaCirclePlus } from 'react-icons/fa6'
const ArrayFields = ({ categorizedData }: { categorizedData: any }) => {
  const handleClick = () => {
    console.log('Handle Array updates...')
  }
  return (
    <div className='space-y-2 text-sm'>
      <div className='flex justify-between mb-4'>
        <h2 className='font-bold text-lg '>
          Array Fields ({Object.keys(categorizedData.array || {}).length})
        </h2>
        <EditButton onClick={handleClick} />
      </div>
      {Object.entries(categorizedData.array || {}).map(([key, value]) => (
        <div key={key}>
          {/* {console.log(value)} */}
          <div className='flex   items-center  justify-between'>
            <p className='text-orange-600 text-2xl my-3 '>{key}:</p>
            <button className='bg-blue-400 h-[30px] flex  items-center  space-x-2 p-1 px-3 ml-2 rounded'>
              <FaCirclePlus />
              <span>Point </span>
            </button>
          </div>
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
