import React from 'react'
import { IoMdCheckmarkCircle } from 'react-icons/io'
import { FaWindowClose } from 'react-icons/fa'
const AlertModal = ({
  setShowAlert,
}: {
  setShowAlert: (boolean: boolean) => void
}) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-[#32475b6c] flex justify-center items-center'>
      <div className='w-[600px] max-w-[600px p-10 rounded-xl bg-[#ffffff] shadow-2xl relative mx-5 md:mx-0'>
        <div className='absolute top-0 left-0 w-full flex justify-end p-3 cursor-pointer'>
          <FaWindowClose
            onClick={() => {
              setShowAlert(false)
            }}
            className='text-3xl text-red-500'
          />
        </div>
        <div className='flex justify-center items-center  h-full flex-col'>
          <p className='text-center text-2xl'>update complete</p>
          <div className='flex justify-center'>
            <div className='text-5xl flex justify-center mt-1'>
              <IoMdCheckmarkCircle className='text-green-500 animate-pulse ' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlertModal
