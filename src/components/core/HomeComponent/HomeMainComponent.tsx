"use client"
import Navbar from "@/components/common/Navbar";
import CourseList from "@/components/core/CourseList";
import { useGetAllCourses } from "@/services/courses";
import React, { useEffect } from "react";

const HomeMainComponent = () => {
    const { data: allcourses, isLoading, error } = useGetAllCourses();
    const [filteredCourses, setFilteredCourses] = React.useState<any[]>();

    // const addCourse = async () => {

    //   const sampleCourse = {
    //     name: 'Introduction to React Native',
    //     instructor: 'John Doe',
    //     description: 'Learn the basics of React Native development and build your first mobile app.',
    //     enrollmentStatus: 'Open',
    //     thumbnail: 'https://www.google.com/imgres?q=react%20native&imgurl=https%3A%2F%2Fwww.igmguru.com%2Fblog%2Fwp-content%2Fuploads%2F2024%2F05%2FWhat-Is-React-Native.png&imgrefurl=https%3A%2F%2Fwww.igmguru.com%2Fblog%2Fwhat-is-react-native%2F&docid=N93PS_t9uYe7bM&tbnid=pAPgVSgypxrKfM&vet=12ahUKEwjp7vvQttOGAxUvZWwGHVAWDt0QM3oFCIYBEAA..i&w=1024&h=631&hcb=2&ved=2ahUKEwjp7vvQttOGAxUvZWwGHVAWDt0QM3oFCIYBEAA',
    //     duration: '8 weeks',
    //     schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    //     location: 'Online',
    //     prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    //     backendTechnologies: ['Node.js', 'Express.js', 'MongoDB']
    //   };

    //   try { 
    //     const res = await addDoc(collection(db, "course"), sampleCourse);
    //     console.log("Course added successfully", res);
    //   } catch (error) {
    //     console.error("Error adding course: ", error);
    //   }
    // };
    // console.log("allcourses", allcourses)

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