import React from 'react'
import { IoMdAddCircle } from 'react-icons/io'
import { TiDelete } from 'react-icons/ti'
import { MdCastle } from 'react-icons/md'

interface MustSeeAttractionsProps {
  attractions: string[]
  setAttractions: React.Dispatch<React.SetStateAction<string[]>>
}

const MustSeeAttractions = ({
  attractions,
  setAttractions,
}: MustSeeAttractionsProps) => {
  const handleAddAttraction = () => {
    setAttractions((prev) => [...prev, ''])
  }

  const deleteAttraction = (index: number) => {
    const copy = [...attractions]
    const filtered = copy.filter((_, i) => i != index)
    setAttractions(filtered)
  }

  const handleChange = (index: number, value: string) => {
    const copy = [...attractions]
    copy[index] = value
    setAttractions(copy)
  }
  return (
    <section className='mt-10 bg-blue-50 p-10 rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b flex items-center space-x-3'>
        <MdCastle />
        <span> Must-See Attractions</span>
      </h2>
      <div>
        {attractions.map((item, i) => {
          return (
            <div key={i}>
              <label htmlFor=''>
                <p className='mb-1'>Attraction {i + 1}</p>
                <div className='grid grid-cols-[1fr_40px] gap-2 mb-3'>
                  <input
                    type='text'
                    className='border border-blue-500 w-full p-2 rounded-lg '
                    placeholder='Attraction Name'
                    onChange={(e) => handleChange(i, e.target.value)}
                  />
                  <button
                    onClick={() => deleteAttraction(i)}
                    className='text-red-400'
                  >
                    <TiDelete className='text-5xl' />
                  </button>
                </div>
              </label>
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
