import React, { useState } from 'react'
import { IoMdCloseCircle } from 'react-icons/io'
import { MdEditSquare } from 'react-icons/md'
import { deleteTourImages } from '@/lib/supabase/actions/admin/images/delete-tour-images'
const ImageListItem = ({
  item,
  i,
  fileInputRef,
}: {
  item: any
  i: number
  fileInputRef: React.RefObject<HTMLInputElement | null>
}) => {
  const [loading, setLoading] = useState(false)
  const [editId, setEditId] = useState<number | null>(null)

  const handleChangeImage = (index: number, id: number) => {
    console.log('changing image id: ', id)
    setEditId(id)
    // Trigger the file input click
    fileInputRef.current?.click()
  }

  const handleDeleteImage = async (index: number, id: number) => {
    console.log('deleting image id: ', id)
    setLoading(true)
    setEditId(id)

    const res = await deleteTourImages(id)
    console.log('res from server: ', res)

    if (res.success) {
      // ✅ Refresh the page or update state to remove the deleted image
      // window.location.reload() // Simple solution
      // OR trigger a state update in parent component
    } else {
      // alert(`Error: ${res?.error}`)
    }

    setLoading(false)
    setEditId(null)
  }

  return (
    <li key={i} className='relative h-[200px] lg:h-[100px]'>
      {loading && editId === item.id && (
        <div className='absolute top-0 left-0 w-full h-full bg-[#363f54d8] rounded-lg flex justify-center items-center'>
          <div className='h-10 w-10 border-white rounded-full border-t border-t-orange-600 border-[2px] animate-spin'></div>
        </div>
      )}
      <img
        className='h-full rounded-lg w-full object-cover object-center'
        src={item.image_url}
        alt=''
      />
      <div className='absolute top-0 left-0 w-full flex justify-between z-10 text-3xl px-2 py-1'>
        <button onClick={() => handleChangeImage(i, item.id)}>
          <MdEditSquare className='text-black' />
        </button>
        <button onClick={() => handleDeleteImage(i, item.id)}>
          <IoMdCloseCircle />
        </button>
      </div>
    </li>
  )
}

export default ImageListItem
