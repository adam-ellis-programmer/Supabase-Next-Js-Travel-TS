import React from 'react'
import Link from 'next/link'
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

const AccordionNav = ({
  sortedTours,
  setIsNaveOpen,
}: {
  sortedTours: any
  setIsNaveOpen: (isNaveOpen: boolean) => null
}) => {
  // console.log('accordion sortedTours: ', sortedTours)

  const tourData = Object.entries(sortedTours)
  console.log('tourDAta', tourData)

  const handleMobileTourNav = () => {
    ///..
    setIsNaveOpen(false)
  }
  return (
    <>
      <span className='text-lg py-1 bg-pink-500 px-2 rounded-lg text-white mb-5 inline-block cursor-pointer'>
        open all
      </span>
      {tourData.map((item, i) => {
        return (
          <Accordion type='single' collapsible className='mb-3' key={i}>
            <AccordionItem value='item-1' className=''>
              <AccordionTrigger className='bg-pink-500 px-5 py-2 text-white text-lg font-bold'>
                Tours in {item[0]}
              </AccordionTrigger>
              <ul className='ml-2 '>
                {item[1].tours.map((item, i) => {
                  console.log(item)

                  return (
                    <li className='text-lg ' key={i}>
                      <AccordionContent className='mt-2'>
                        <p className='font-bold text-lg cursor-pointer'>
                          <Link
                            href={`/tours/${item.id}`}
                            onClick={handleMobileTourNav}
                          >
                            {item.tour_name}
                          </Link>
                        </p>
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
