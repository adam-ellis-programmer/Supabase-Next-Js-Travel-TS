import React from 'react'
import { TiInfoOutline } from 'react-icons/ti'
// prettier-ignore
const AlertDeleteModal = ({setShowDeleteModal}:{setShowDeleteModal: (boolean:  boolean) => void}) => {
  return (
    <div className='fixed top-0 left-0 w-full h-screen bg-[#32495570] z-[200] flex justify-center items-center'>
      <div className='relative w-[700px] max-w-[700px] bg-white  py-10 rounded-lg shadow-2xl'>
    <TiInfoOutline className='absolute top-2 left-7 text-6xl text-yellow-500 animate-pulse' />
        <p className='text-center text-2xl'>You are about to delete this tour</p>
        <p className='text-center text-2xl'>click OK to continue or CANCEL to go back</p>
        <p className='text-center text-2xl'>this action can't be undone!</p>

        <div className='flex justify-center space-x-3 mt-5'>
            <button className='bg-rose-400 rounded-lg text-white text-lg px-2 py-1'>delete</button>
            <button onClick={() => setShowDeleteModal(false)} className='bg-neutral-800 rounded-lg text-white text-lg px-2 py-1'>cancel</button>
        </div>
      </div>
    </div>
  )
}

export default AlertDeleteModal
