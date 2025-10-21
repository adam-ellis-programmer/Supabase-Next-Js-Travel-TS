import React from 'react'

import { IoMdAddCircle } from 'react-icons/io'
import { Button } from '../ui/button'
import { MdAdminPanelSettings } from 'react-icons/md'

import { RiMoneyPoundBoxLine } from 'react-icons/ri'
import Link from 'next/link'
const AdminNavButtons = () => {
  return (
    <div className='mb-5 border-b pb-3'>
      <div className='flex justify-end left-0 w-full absolute px-5'>
        <span className='bg-rose-500 text-sm p-1 px-2 rounded-lg text-white cursor-pointer'>
          close admin
        </span>
      </div>
      <h3 className='mb-3 flex items-center '>
        <MdAdminPanelSettings className='text-4xl text-rose-400' />
        <span className='bg-rose-400 text-lg  rounded-lg p-1 text-white'>
          Admin Controls
        </span>
      </h3>
      <div className=' inline space-x-2 '>
        <Button>
          <MdAdminPanelSettings />
          admin
        </Button>
        <Button>
          <RiMoneyPoundBoxLine />
          bookings
        </Button>
        <Button>
          <IoMdAddCircle />
          tour
        </Button>
        <Button>
          <IoMdAddCircle />
          user
        </Button>
        <Button>
          <IoMdAddCircle />
          landing
        </Button>

        <Button>
          <MdAdminPanelSettings />
          manage tours
        </Button>
        <Button>
          <MdAdminPanelSettings />
          log out
        </Button>
      </div>
    </div>
  )
}

export default AdminNavButtons
