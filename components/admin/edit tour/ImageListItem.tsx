import React, { useState } from 'react'
import { IoMdCloseCircle } from 'react-icons/io'
import { MdEditSquare } from 'react-icons/md'
import { deleteTourImages } from '@/lib/supabase/actions/admin/images/delete-tour-images'
import { useRouter } from 'next/navigation'
const ImageListItem = ({
  item,
  i,
  handleChangeImage,
}: {
  item: any
  i: number
  handleChangeImage: (index: number, id: number) => void
}) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [deleteId, setdeleteId] = useState<number | null>(null)

  const handleDeleteImage = async (index: number, id: number) => {
    console.log('deleting image id: ', id)
    setLoading(true)
    setdeleteId(id)

    try {
      const res = await deleteTourImages(id)
      console.log('res from server: ', res)

      if (res.success) {
        router.refresh()
        // window.location.reload() // Simple solution
      } else {
        // alert(`Error: ${res?.error}`)
      }
    } catch (error) {
    } finally {
      setLoading(false)
      setdeleteId(null)
    }
  }

  return (
    <li key={i} className='relative h-[200px] lg:h-[100px]'>
      {loading && deleteId === item.id && (
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
