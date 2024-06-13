import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { FAQS } from '@/data/FAQ'

const FAQ_Section = () => {
    return (
        <div>
            <div className='flex justify-center'>
                <p className='capitalize text-xl font-semibold'>Frequently asked questions</p>
            </div>
            {
                FAQS.map((Faq, i) => (
                    <Accordion key={i} type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>{Faq.question}</AccordionTrigger>
                            <AccordionContent>
                                {Faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                ))
            }


        </div>
    )
}

export default FAQ_Section