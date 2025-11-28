import React from 'react'
import { MdOutlineCloudUpload } from 'react-icons/md'
import { CiCirclePlus } from 'react-icons/ci'
import { TiDelete } from 'react-icons/ti'
import { IoMdAddCircle } from 'react-icons/io'

interface TopDest {
  topDestinations: Array<{
    name: string
    image: File | null
    imagePreview: string
    description: string
  }>

  setTopDestinations: React.Dispatch<
    React.SetStateAction<
      Array<{
        name: string
        image: File | null
        imagePreview: string
        description: string
      }>
    >
  >
}
const TopDestinationsLanding = ({
  topDestinations,
  setTopDestinations,
}: TopDest) => {
  const handleAddDest = () => {
    const newDestData = {
      name: '',
      image: '',
      imagePreview: '',
      description: '',
    }
    setTopDestinations((prev: any) => [...prev, newDestData])
  }

  const handleDelte = (index: number) => {
    // d = destinations
    const d = [...topDestinations]
    const filteredData = d.filter((_, i) => i !== index)
    setTopDestinations(filteredData)
  }
  return (
    <section className='mt-10'>
      <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b'>
        Top Destinations
      </h2>
      <div>
        {topDestinations.map((item, i) => {
          return (
            <div
              key={i}
              className='min-h-[200px] border p-5 shadow-md rounded-lg relative mt-5'
            >
              <button
                onClick={() => handleDelte(i)}
                className='absolute top-2 right-3 text-5xl text-red-400'
              >
                <TiDelete />
              </button>
              <p className='text-lg mb-3 '>
                Destination <span className=' '>{i + 1}</span>
              </p>
              <div className=''>
                <input
                  type='text'
                  className='border border-blue-500 w-full p-2 rounded-lg'
                  placeholder='Destination Name (Eg: Sydney) '
                />

                <div className='h-[200px] border border-dashed border-black mt-6 rounded-md'>
                  <div className='flex justify-center items-center flex-col h-full'>
                    <p className='text-2xl mb-2'>
                      Click Or Drag to upload Destination Image
                    </p>
                    <MdOutlineCloudUpload className='text-5xl' />
                  </div>
                </div>
                <textarea
                  name=''
                  className='mt-5 w-full border border-blue-500 min-h-[100px] text-lg p-3 rounded-md'
                  id=''
                  placeholder='Enter Description of Destination'
                ></textarea>
              </div>
            </div>
          )
        })}
      </div>
      <div className='mt-3 flex'>
        <button
          onClick={handleAddDest}
          className='flex space-x-2 items-center bg-blue-500 text-white p-2 rounded-md '
        >
          <IoMdAddCircle className='text-2xl' />
          <span> destination</span>
        </button>
      </div>
    </section>
  )
}

export default TopDestinationsLanding
