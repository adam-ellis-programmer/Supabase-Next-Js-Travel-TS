import React from 'react'

import { IoMdAddCircle } from 'react-icons/io'

import { MdAdminPanelSettings } from 'react-icons/md'

import { RiMoneyPoundBoxLine } from 'react-icons/ri'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
const AdminControls = () => {
  return (
    <section className=''>
      <Accordion type='single' collapsible className='no-underline'>
        <AccordionItem value='item-1'>
          <AccordionTrigger>
            <h3 className='mb-3 flex items-center '>
              <MdAdminPanelSettings className='text-4xl text-rose-400' />
              <span className='bg-rose-400 text-lg  rounded-lg p-1 text-white'>
                Admin Controls
              </span>
            </h3>
          </AccordionTrigger>
          <AccordionContent>
            <Button className='flex w-full text-2xl justify-start p-0 px-4 mb-1 items-center'>
              <MdAdminPanelSettings />
              admin
            </Button>
            <Button className='flex w-full text-2xl justify-start p-0 px-4 mb-1 items-center'>
              <RiMoneyPoundBoxLine />
              bookings
            </Button>
            <Button className='flex w-full text-2xl justify-start p-0 px-4 mb-1 items-center'>
              <IoMdAddCircle />
              tour
            </Button>
            <Button className='flex w-full text-2xl justify-start p-0 px-4 mb-1 items-center'>
              <IoMdAddCircle />
              user
            </Button>
            <Button className='flex w-full text-2xl justify-start p-0 px-4 mb-1 items-center'>
              <IoMdAddCircle />
              landing
            </Button>

            <Button className='flex w-full text-2xl justify-start p-0 px-4 mb-1 items-center'>
              <MdAdminPanelSettings />
              manage tours
            </Button>
            <Button className='flex w-full text-2xl justify-start p-0 px-4 mb-1 items-center'>
              <MdAdminPanelSettings />
              log out
            </Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default AdminControls
