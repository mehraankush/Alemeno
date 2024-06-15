"use client"
import Navbar from "@/components/common/Navbar";
import CourseList from "@/components/core/CourseList";
import { useGetAllCourses } from "@/services/courses";
import React, { useEffect } from "react";

const HomeMainComponent = () => {
    const { data: allcourses, isLoading, error } = useGetAllCourses();
    const [filteredCourses, setFilteredCourses] = React.useState<any[]>();

    useEffect(() => {
        if (allcourses) {
            setFilteredCourses(allcourses);
        }
    }, [allcourses]);

    const handleSearch = (searchTerm: any) => {
        const lowercasedSearchTerm = searchTerm.toLowerCase();
        const filtered = allcourses?.filter((course: any) =>
            course.name.toLowerCase().includes(lowercasedSearchTerm) ||
            course.instructor.toLowerCase().includes(lowercasedSearchTerm)
        );
        // console.log("filtered", filtered)
        setFilteredCourses(filtered);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading courses: {error.message}</div>;
    }

    return (
        <div className="min-h-screen bg-white flex justify-center flex-col mt-[100px]">
            <Navbar onSearch={handleSearch} />
            <div className=" w-full mx-auto min-h-screen h-full text-black xl:max-w-[1300px]">
                <CourseList allcourses={filteredCourses} />
            </div>
        </div>
    );
}


export default HomeMainComponent