"use client"
import React from 'react'
import CardComponent from '../common/CardComponent'
import { useRouter } from 'next/navigation'

const CourseList = ({ allcourses }: any) => {
    const router = useRouter()

    const handleClick = (id: string) => (
        router.push(`course/${id}`)
    )

    return (
        <div className='text-black'>
            {/* <button onClick={()=>addCourse()}>Add weeks</button> */}
            {
                allcourses && allcourses.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 items-center mt-5 pb-8">
                        {allcourses.map((course: any, i: number) => (
                            <div key={i}>
                                <CardComponent course={course} onclick={handleClick} />
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