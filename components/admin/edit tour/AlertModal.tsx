import React from 'react'

const AlertModal = () => {
  return (
    <div className='w-[600px] max-w-[600px p-10 rounded-xl bg-[#ffffff] shadow-2xl'>
      <div className='flex justify-center items-center  h-full flex-col'>
        <p className='text-center text-2xl'>update complete</p>
        <div className='flex justify-center'>
          <button className='bg-green-300 text-lg  py-[2px] px-3 rounded-lg mt-5'>
            close
          </button>
        </div>
      </div>
    </div>
  )
}

export default AlertModal
