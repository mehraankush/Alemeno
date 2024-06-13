import React from "react";
import CourseDetailSection from "./CourseDetailsSection";
import CourseSyllabus from "./CourseSyllabus";


type Props = {
    courseData: any;
};




const CourseOverview = ({ courseData }: Props) => {
    return (
        <div className="w-full lg:max-w-[700px] flex flex-col gap-y-10 items-start">
            {/* About Course */}
            <div className="flex gap-y-6 items-start justify-center flex-col self-stretch">
                <p className="text-[2rem] font-medium">About Course</p>
                <div className="flex gap-y-3 items-start flex-col">
                    <p className="text-base font-normal">
                        {courseData?.description}
                        {/* <ReactMarkdown className="markdownMakeup">{courseData?.attributes?.CourseBanner?.CourseDescription}</ReactMarkdown> */}
                    </p>
                </div>
            </div>

            <CourseDetailSection />
            <div className="w-full">
                <CourseSyllabus id={courseData?.syllabusId} />
            </div>
            {/* Course Details Section */}
            {/* <CourseDetailSection DetailSectionData={courseData?.attributes?.CourseOverview?.BasicDetails}/> */}

            {/* Course Overview  */}
            {/* <Overview OverviewData={courseData?.attributes?.CourseOverview?.WhatYouWillLearn}/> */}

            {/* Course Content */}
            {/* <CourseContent CourseSections={courseData?.attributes?.CourseSection}/> */}

            {/* Instructor */}
            {/* <MeetInstructor/> */}

            {/* Testimonials */}
            {/* <CourseTestimonial/> */}

        </div>
    );
};

export default CourseOverview;
