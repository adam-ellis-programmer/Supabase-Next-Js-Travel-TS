import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const TourAccordion = ({ i }: { i: number }) => {
  return (
    <Accordion type='single' collapsible className='mb-2 '>
      <AccordionItem value='item-1'>
        <AccordionTrigger className='bg-blue-50 p-2 '>
          Day {i + 1}
        </AccordionTrigger>
        {/* bg-[#567a98] */}
        <AccordionContent className='shadow-2xl p-5 text-[1rem] rounded '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          voluptatibus. Itaque, blanditiis molestiae repellendus eius cum aut
          earum nisi dolorem tempora aliquam voluptatem delectus, maxime,
          assumenda temporibus laudantium ab. Maxime dolorem accusantium harum
          doloribus sapiente repellat impedit, quos reprehenderit libero.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default TourAccordion
