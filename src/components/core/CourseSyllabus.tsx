"use client"
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useGetSyllabus } from '@/services/courses'

const CourseSyllabus = ({ id }: any) => {
    const { data: syllabus } = useGetSyllabus(id)

    return (
        <div>
            <div className='mb-5'>
                <p className="text-[2rem] font-medium">Course Syllabus:</p>
            </div>
            {
                syllabus?.weeks && syllabus.weeks.map((week: any, i: number) => (
                    <Accordion key={i} type="single" collapsible
                        className={`w-full  b-2 bg-neutral-10 mb-5 rounded-2xl border-2 border-slate-800 px-5 py-0`}
                    >
                        <AccordionItem value={`item-${i}-1`}
                            className="border-b border-slate-800 px-2"
                        >
                            <AccordionTrigger className="flex justify-between relative text-slate-500">
                                <p className="text-lg font-medium text-white capitalize">
                                    Week: {week.week}{'  '} {week.topic}
                                </p>
                            </AccordionTrigger>
                            <AccordionContent
                                className="overflow-auto w-[800px] md:w-full flex flex-col justify-center items-center"
                            >
                                {week.content}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                ))
            }

        </div>
    )
}

export default CourseSyllabus
