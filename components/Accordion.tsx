import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Itinerary } from '@/types/tours'

// Add 'item' to the props type
const TourAccordion = ({ item, i }: { item: Itinerary; i: number }) => {
  console.log(item)

  return (
    <Accordion type='single' collapsible className='mb-2'>
      <AccordionItem value={`item-${i}`}>
        <AccordionTrigger className='bg-blue-50 p-2'>
          Day {item.day_number}: {item.day_title}
        </AccordionTrigger>
        <AccordionContent className='shadow-2xl p-5 text-[1rem] rounded'>
          {item.day_description}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default TourAccordion
