import React from 'react'

const AddingLoader = ({ text = 'Createing Tour Please Wait...' }) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-[#334b6469] z-40 flex justify-center items-center'>
      <div className='bg-white rounded-lg p-12 relative'>
        <p className='animate-pulse'>{text}</p>
        <div className='flex justify-center mt-3'>
          <div className='h-[20px] w-[20px]  border-green-500 animate-spin rounded-full  border-2 border-t-black'></div>
        </div>
        {/* <button className='absolute right-2 bottom-2 text-white bg-blue-400 px-2 text-sm rounded-lg'>hide</button> */}
      </div>
    </div>
  )
}

export default AddingLoader
