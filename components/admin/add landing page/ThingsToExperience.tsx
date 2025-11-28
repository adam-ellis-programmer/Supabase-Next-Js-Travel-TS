import React from 'react'

import { IoMdAddCircle } from 'react-icons/io'
import { TiDelete } from 'react-icons/ti'

const iconOptions = [
  'FaUmbrellaBeach',
  'FaMountain',
  'FaUtensils',
  'FaCamera',
  'FaPlane',
  'FaClock',
  'FaMoneyBillWave',
  'FaPassport',
  'FaGlobe',
  'FaMapMarkedAlt',
] as const

type Experience = {
  icon: string
  title: string
  description: string
}

interface ThingsToExperienceProps {
  experiences: Experience[]
  setExperiences: React.Dispatch<React.SetStateAction<Experience[]>>
}

const ThingsToExperience = ({
  experiences,
  setExperiences,
}: ThingsToExperienceProps) => {
  const handleAddExperience = () => {}
  const handleDelte = (index: number) => {}
  return (
    <section className='mt-10'>
      <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b'>
        Things to Experience
      </h2>

      <div>
        {experiences.map((item, i) => {
          return (
            <div key={i} className='min-h-[200px] border p-5 relative mb-5'>
              <button
                onClick={() => handleDelte(i)}
                className='absolute top-2 right-3 text-5xl text-red-400'
              >
                <TiDelete />
              </button>
              <h3 className='font-semibold text-lg mb-3'>Experience {i + 1}</h3>
              <select
                name=''
                id=''
                className='border border-blue-500 w-full p-2 rounded-md'
              >
                {iconOptions.map((item, i) => {
                  return (
                    <option key={i} value={item}>
                      {item}
                    </option>
                  )
                })}
              </select>

              <input
                type='text'
                className='border mt-3 border-blue-500 w-full rounded-lg p-2'
                placeholder='Experience Title'
              />
              <input
                type='text'
                className='border mt-3 border-blue-500 w-full rounded-lg p-2'
                placeholder='Short Description'
              />
            </div>
          )
        })}
      </div>

      <div className='mt-3 flex'>
        <button
          onClick={handleAddExperience}
          className='flex space-x-2 items-center bg-blue-500 text-white p-2 rounded-md '
        >
          <IoMdAddCircle className='text-2xl' />
          <span> experience</span>
        </button>
      </div>
    </section>
  )
}

export default ThingsToExperience
