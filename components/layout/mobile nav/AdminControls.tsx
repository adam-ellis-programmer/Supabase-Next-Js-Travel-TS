import React from 'react'

import { MdAdminPanelSettings } from 'react-icons/md'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { adminLinks } from '@/data/adminNavData'
import Link from 'next/link'

const AdminControls = ({ handleToggle }) => {
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
            <ul>
              {adminLinks.map((item, i) => {
                const Icon = item.icon
                return (
                  <li key={i}>
                    <Link href={item.href} onClick={handleToggle}>
                      <Button className='flex w-full text-2xl justify-start p-0 px-4 mb-1 items-center'>
                        <Icon />
                        {item.text}
                      </Button>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default AdminControls
