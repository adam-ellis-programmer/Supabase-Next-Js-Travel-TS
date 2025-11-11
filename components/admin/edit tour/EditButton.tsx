import React from 'react'
import { MdEditSquare } from 'react-icons/md'
const EditButton = () => {
  return (
    <button className='bg-[#45535b] text-sm text-white rounded-md py-[2px] px-[8px] flex items-center space-x-2'>
      <MdEditSquare />  <span>update</span>
    </button>
  )
}

export default EditButton
