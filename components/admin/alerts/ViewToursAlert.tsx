import React from 'react'

const ViewToursAlert = ({
  setShowAlert,
}: {
  setShowAlert: (boolean: boolean) => void
}) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-[#3c5f756f] z-20 flex items-center justify-center'>
      <div className='bg-white rounded-lg p-10 shadow-2xl'>
        <p className='capitalize'>You cannot delete this tour!</p>
        <div className='flex justify-center items-center mt-1'>
          <button
            onClick={() => setShowAlert(false)}
            className='bg-rose-400 text-white px-1 rounded-md'
          >
            close
          </button>
        </div>
      </div>
    </div>
  )
}

export default ViewToursAlert
