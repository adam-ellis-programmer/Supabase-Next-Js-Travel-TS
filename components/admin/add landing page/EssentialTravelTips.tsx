import React from 'react'
import { IoMdAddCircle } from 'react-icons/io'
import { TiDelete } from 'react-icons/ti'
import { TiInfo } from 'react-icons/ti'

type TravelTip = {
  icon: string
  title: string
  tip: string
}

interface EssentialTravelTipsProps {
  travelTips: TravelTip[]
  setTravelTips: React.Dispatch<React.SetStateAction<TravelTip[]>>
}

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
const EssentialTravelTips = ({
  travelTips,
  setTravelTips,
}: EssentialTravelTipsProps) => {
  const handleAddTip = () => {}
  const handleDelte = (index: number) => {}
  return (
    <section className='my-10'>
      <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b flex items-center space-x-3'>
        <TiInfo />
        <span> Essential Travel Tips</span>
      </h2>

      <div>
        {travelTips.map((item, i) => {
          return (
            <div key={i} className='relative shadow-md p-7 mt-5'>
              <button
                onClick={() => handleDelte(i)}
                className='absolute top-2 right-3 text-5xl text-red-400'
              >
                <TiDelete />
              </button>
              <p className='text-lg font-bold mb-4'>Tip {i + 1}</p>
              <select
                name=''
                id=''
                className='w-full border border-blue-500 p-3 rounded-lg mb-3'
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
                className='w-full border border-blue-500 p-3 rounded-lg mb-3'
                placeholder='Tip Title (Best Time etc)'
              />

              <textarea
                name=''
                id=''
                className='border border-blue-500 min-h-[100px] p-5 rounded-lg w-full'
                placeholder='Travel Tip Details'
              ></textarea>
            </div>
          )
        })}
      </div>
      <div className='mt-3 flex'>
        <button
          onClick={handleAddTip}
          className='flex space-x-2 items-center bg-blue-500 text-white p-2 rounded-md '
        >
          <IoMdAddCircle className='text-2xl' />
          <span> experience</span>
        </button>
      </div>
    </section>
  )
}

export default EssentialTravelTips
