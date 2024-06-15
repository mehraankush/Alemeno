"use client"
import React from 'react'
import CourseCard from '@/components/common/CourseCard';
import CourseOverview from '@/components/core/CourseOverview';
import FAQ_Section from '@/components/core/FAQ_Section';
import { useGetCoursesById } from '@/services/courses';
import { ChevronRight, Globe, Star, Video } from 'lucide-react';
import Link from 'next/link';

const CourseDetailsPage = ({ params }: { params: { id: string } }) => {
    const { data: courseData, isLoading } = useGetCoursesById(params.id)


    return (
        <div className="min-h-screen bg-white flex justify-center ">

            <div className='text-black w-full'>
                {/* Hero Section */}
                <div className={`w-full bg-white relative px-4 sm:px-10 xl:px-0 border-b border-slate-400`}>
                    <div className="mx-auto max-w-[1200px] pt-5 sm:pt-10 pb-20">
                        {/* Navigation */}
                        <div className="sm:flex hidden items-start gap-[0.375rem] text-base">
                            <div className="flex items-center gap-1">
                                <Link
                                    href={"/"}
                                    className="underline text-black font-medium  hover:text-brand"
                                >
                                    Home
                                </Link>
                            </div>

                            <div className="flex items-center gap-1">
                                <ChevronRight className="w-5 h-5  " />
                                <Link
                                    href={"/"}
                                    className="text-black font-medium underline  hover:text-brand"
                                >
                                    Course
                                </Link>
                            </div>

                            <div className="flex items-center gap-1">
                                <ChevronRight className="w-5 h-5 " />
                                <p className="text-black font-medium capitalize  hover:text-brand">
                                    <p>{courseData?.name}</p>
                                </p>
                            </div>
                        </div>

                        <div className="2xl:relative grid lg:grid-cols-2 grid-cols-1 gap-4 lg:gap-0 ">
                            {/* Text Content */}
                            <div
                                className={`flex flex-col gap-3 space-y-5 place-self-start sm:mt-7 mt-2  xl:min-w-[710px] text-black`}
                            >
                                <p className="text-lg font-medium">
                                    <p>Welcome to @dot-dev Family</p>
                                </p>
                                <h2 className="text-[2rem] font-semibold">
                                    {courseData?.name}
                                </h2>

                                {/* Course Info */}
                                <div className="flex items-center gap-4 text-base font-medium flex-wrap">
                                    {/* lectures */}
                                    <div className="flex text-green-500 items-center gap-2">
                                        <Video className="w-5 h-5" />
                                        <p >
                                            56 Lectures
                                        </p>
                                    </div>
                                    <div className="h-3 w-[1px] bg-neutral-8"></div>
                                    {/* Language */}
                                    <div className="flex text-blue-500 items-center gap-2">
                                        <Globe className="w-5 h-5" />
                                        <p >
                                            Hindi
                                        </p>
                                    </div>

                                    {/* lectures */}
                                    <div className="flex items-center gap-2 text-yellow-500">
                                        <p> 4 </p>
                                        <Star size={15} />
                                        <Star size={15} />
                                        <Star size={15} />
                                        <Star size={15} />
                                    </div>

                                </div>
                            </div>

                            {/* Courses Card */}
                            <div className="relative w-full min-h-[200px] px-2 sm:px-8">
                                <CourseCard
                                    CourseBannerData={courseData?.thumbnail}
                                    CourseCardData={courseData}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Page Content */}
                <div className="mx-auto max-w-[1200px] flex pt-4 px-4 sm:px-10 xl:px-0">
                    <CourseOverview courseData={courseData} />
                    <div className="relative w-full max-w-[500px] px-8 hidden lg:flex">
                    </div>
                </div>
                {/* FAQ Section */}
                <div className="max-w-screen-lg py-24 mx-auto px-4 sm:px-10 lg:px-0">
                    <FAQ_Section />
                </div>
            </div>
        </div>
    )
}

export default CourseDetailsPage