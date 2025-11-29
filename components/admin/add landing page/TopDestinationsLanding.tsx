import React, { useRef, useState } from 'react'
import { MdOutlineCloudUpload } from 'react-icons/md'
import { CiCirclePlus } from 'react-icons/ci'
import { TiDelete } from 'react-icons/ti'
import { IoMdAddCircle } from 'react-icons/io'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { AiFillCloseSquare } from 'react-icons/ai'

interface TopDest {
  topDestinations: Array<{
    name: string
    image: File | null
    imagePreview: string | null
    description: string
  }>

  setTopDestinations: React.Dispatch<
    React.SetStateAction<
      Array<{
        name: string
        image: File | null
        imagePreview: string | null
        description: string
      }>
    >
  >
}
const TopDestinationsLanding = ({
  topDestinations,
  setTopDestinations,
}: TopDest) => {
  const fileInputRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [trackItem, setTrackItem] = useState<number | null>(null)

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

  const handleDragOver = (e, index: number) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
    setTrackItem(index)
  }
  const handleDragLeave = (e, index: number) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    setTrackItem(index)
  }
  const handleDrop = (e, index: number) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    setTrackItem(index)
    const file = e.dataTransfer.files[0]
    console.log(file)
    handleFileUrl(file, index)
  }

  function handleFileUrl(file: File, index: number) {
    console.log('log index: ', index)

    const dest = [...topDestinations]
    const obj = dest[index]
    const url = URL.createObjectURL(file)
    obj.imagePreview = url
    setTopDestinations(dest)
    console.log(obj)
  }

  const handleFileInputClick = (i: number) => {
    const test = document.getElementById(`input-${i}`)
    test?.click()
  }
  //
  const handleFileChange = (e, index: number) => {
    setTrackItem(index)
    const file = e.target.files[0]
    handleFileUrl(file, index)
  }

  const handleRemoveUrl = (index: number) => {
    const dest = [...topDestinations]
    const obj = dest[index]
    obj.imagePreview = null
    setTopDestinations(dest)
  }
  return (
    <section className='mt-10 bg-blue-50 p-10 rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b flex items-center space-x-2'>
        <FaMapMarkerAlt />
        <span> Top Destinations</span>
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

                {/* Click or Drag File */}
                <div
                  className={`h-[200px] mt-6 rounded-md relative ${
                    trackItem === i &&
                    isDragging &&
                    'bg-blue-100 border-red-500'
                  }`}
                >
                  {item.imagePreview ? (
                    <div className='absolute top-0 left-0 w-full h-full overflow-hidden flex  items-center bg-[#ffffff] p-4'>
                      <img
                        className='w-1/4 object-cover object-center h-full  rounded-lg block shadow-lg'
                        src={item.imagePreview}
                        alt=''
                      />

                      <div className='ml-10'>
                        <button
                          onClick={() => handleRemoveUrl(i)}
                          className='text-5xl text-red-500'
                        >
                          <AiFillCloseSquare />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div
                      onDragOver={(e) => handleDragOver(e, i)}
                      onDragLeave={(e) => handleDragLeave(e, i)}
                      onDrop={(e) => handleDrop(e, i)}
                      onClick={() => handleFileInputClick(i)}
                      className=' border border-dashed  border-black flex justify-center items-center flex-col h-full cursor-pointer'
                    >
                      <p className='text-2xl mb-2'>
                        Click Or Drag to upload Destination Image
                      </p>
                      <MdOutlineCloudUpload className='text-5xl' />
                    </div>
                  )}
                  <input
                    onChange={(e) => handleFileChange(e, i)}
                    // ref={fileInputRef}
                    type='file'
                    name=''
                    id={`input-${i}`}
                    hidden
                  />
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
