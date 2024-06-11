"use client"
import React from 'react'
import CardComponent from '../common/CardComponent'
import { useGetAllCourses } from '@/services/courses'
import { useRouter } from 'next/navigation'

const CourseList = () => {
    const router = useRouter()
    const { data: allcourses } = useGetAllCourses();

    const handleClick = (id: string) => (
        router.push(`course/${id}`)
    )
    
    return (
        <div className='text-black'>
            {
                allcourses && allcourses.length > 0 ? (
                    <div className="grid grid-cols-3 gap-5 items-center mt-5 pb-8">
                        {allcourses.map((course: any, i: number) => (
                            <div key={i} onClick={() => handleClick(course.id)} className='cursor-pointer'>
                                <CardComponent course={course} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='flex justify-center items-center'>
                        <p>No avalible courses</p>
                    </div>
                )
            }
        </div>
    )
}

export default CourseList