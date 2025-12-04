import React from 'react'

const SendMessageAlert = ({}: {}) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-[#3c5f756f] z-20 flex items-center justify-center'>
      <div className='bg-white rounded-lg p-10 shadow-2xl'>
        <p className='capitalize'>thank you for your message!</p>
        <div className='flex justify-center items-center mt-2'>
          <button className='bg-rose-400 text-white px-1 rounded-md'>
            close
          </button>
        </div>
      </div>
    </div>
  )
}

export default SendMessageAlert
