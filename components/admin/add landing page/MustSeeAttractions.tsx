import React from 'react'
import { IoMdAddCircle } from 'react-icons/io'
import { TiDelete } from 'react-icons/ti'

interface MustSeeAttractionsProps {
  attractions: string[]
  setAttractions: React.Dispatch<React.SetStateAction<string[]>>
}

const MustSeeAttractions = ({
  attractions,
  setAttractions,
}: MustSeeAttractionsProps) => {
  const handleAddAttraction = () => {}

  return (
    <section className='mt-10'>
      <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b'>
        Must-See Attractions
      </h2>
      <div>
        {attractions.map((item, i) => {
          return (
            <div key={i}>
              <div className='grid grid-cols-[1fr_40px] gap-2'>
                <input
                  type='text'
                  className='border border-blue-500 w-full p-2 rounded-lg '
                  placeholder='Attraction Name'
                />
                <button className='text-red-400'>
                  <TiDelete className='text-5xl' />
                </button>
              </div>
            </div>
          )
        })}
      </div>
      <div className='mt-3 flex'>
        <button
          onClick={handleAddAttraction}
          className='flex space-x-2 items-center bg-blue-500 text-white p-2 rounded-md '
        >
          <IoMdAddCircle className='text-2xl' />
          <span> attraction</span>
        </button>
      </div>
    </section>
  )
}

export default MustSeeAttractions
