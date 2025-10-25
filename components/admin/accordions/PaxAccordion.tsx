import React from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { FaCheckCircle } from 'react-icons/fa'
import { IoCloseCircle } from 'react-icons/io5'

// pax name
// pax passport id proof
//
const PaxAccordion = () => {
  return (
    <Accordion type='single' collapsible className='mt-[10px]'>
      <AccordionItem value='item-1'>
        <AccordionTrigger className='bg-gray-100 px-5 pr-10 text-lg'>
          Passengers Details
        </AccordionTrigger>
        <AccordionContent className=''>
          <div className='grid grid-cols-3 border-b border-rose-300 text-md p-2 '>
            <div className='text-md capitalize'>pax name</div>
            <div className='text-md capitalize'>age</div>
            <div className='text-md'>ID Vefified</div>
          </div>

          <ul className=''>
            <li className='grid grid-cols-3 border-b text-md p-1 hover:bg-gray-200'>
              <div className='capitalize'>Kelly</div>
              <div>28</div>
              <div className='flex space-x-3 items-center'>
                <span>Passport</span>
                <FaCheckCircle className='text-green-400' />
              </div>
            </li>
            <li className='grid grid-cols-3 border-b text-md p-1 hover:bg-gray-200'>
              <div className='capitalize'>Sarah</div>
              <div>28</div>
              <div className='flex space-x-3 items-center'>
                <span>Passport</span>
                <FaCheckCircle className='text-green-400' />
              </div>
            </li>
            <li className='grid grid-cols-3 border-b text-md p-1 hover:bg-gray-200'>
              <div className='capitalize'>Susan</div>
              <span className=''>30</span>
              <div className='flex space-x-3 items-center'>
                <span>Passport</span>
                <IoCloseCircle className='text-rose-500 text-[1.1rem]' />
              </div>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default PaxAccordion
