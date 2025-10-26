import React from 'react'
import { IoMdAddCircle } from 'react-icons/io'
import { Button } from '../ui/button'
import { MdAdminPanelSettings } from 'react-icons/md'
import { RiMoneyPoundBoxLine } from 'react-icons/ri'
import Link from 'next/link'
import { adminLinks } from '@/data/adminNavData'
import { IoCloseCircleSharp } from 'react-icons/io5'
import { IoCloseCircle } from 'react-icons/io5'

// Add this interface to define the prop types
interface AdminNavButtonsProps {
  showAdminButtons: boolean
  setshowAdminButtons: (show: boolean) => void
}

// Use the interface in the component definition
const AdminNavButtons = ({
  showAdminButtons,
  setshowAdminButtons,
}: AdminNavButtonsProps) => {
  return (
    <div className='mb-5 border-b pb-3'>
      <div className='flex justify-end left-0 w-full absolute px-5'>
        <span
          onClick={() => {
            setshowAdminButtons(false)
          }}
          className=' text-white cursor-pointer'
        >
          <IoCloseCircle className='text-red-500 text-4xl animate-bounce' />
        </span>
      </div>
      <h3 className='mb-3 flex items-center '>
        <MdAdminPanelSettings className='text-4xl text-rose-400' />
        <span className='bg-rose-400 text-lg  rounded-lg p-1 text-white'>
          Admin Controls
        </span>
      </h3>

      <div className=''>
        <ul className='space-x-2 flex items-center'>
          {adminLinks.map((item, i) => {
            const Icon = item.icon // ✅ Assign to variable with capital letter
            return (
              <li key={i} className=''>
                <Link href={item.href}>
                  <Button className='flex items-center gap-2'>
                    <Icon />
                    {item.text}
                  </Button>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default AdminNavButtons
