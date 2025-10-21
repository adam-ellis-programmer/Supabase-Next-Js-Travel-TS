import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const pr = [
  '12 Day Explorer',
  'Elephants Project',
  '99 problems beach aint one',
  'North to South',
  'Paid Teaching',
]

const cs = [
  'Thailand',
  'Cambodia',
  'Iceland',
  'Peru',
  'Egypt',
  'India',
  'Morocco',
  'Japan',
  'Indonisia',
]

const tempArr = Array.from({ length: 5 }, (item, i) => {
  return {
    item: pr[i],
  }
})

console.log(tempArr)
console.log('ran')

const AccordionNav = () => {
  return (
    <>
      {cs.map((item, i) => {
        return (
          <Accordion type='single' collapsible className='mb-3' key={i}>
            <AccordionItem value='item-1' className=''>
              <AccordionTrigger className='bg-pink-500 px-5 py-2 text-white text-lg font-bold'>
                Tours in {item}
              </AccordionTrigger>
              <ul className='ml-2 '>
                {tempArr.map((item, i) => {
                  return (
                    <li className='text-lg ' key={i}>
                      <AccordionContent className=''>
                        <p className='font-bold text-lg'>{item.item}</p>
                      </AccordionContent>
                    </li>
                  )
                })}
              </ul>
            </AccordionItem>
          </Accordion>
        )
      })}
    </>
  )
}

export default AccordionNav
