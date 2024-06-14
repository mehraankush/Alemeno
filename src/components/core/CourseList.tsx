"use client"
import React from 'react'
import CardComponent from '../common/CardComponent'
import { useRouter } from 'next/navigation'

const CourseList = ({allcourses}:any) => {
    const router = useRouter()

    const handleClick = (id: string) => (
        router.push(`course/${id}`)
    )

    // const addCourse = async () => {
    //     const weeks = [
    //         {
    //             "week": 1,
    //             "topic": "Introduction to React Native",
    //             "content": "Overview of React Native, setting up the development environment, understanding the basic components."
    //         },
    //         {
    //             "week": 2,
    //             "topic": "Core Components and Layouts",
    //             "content": "Introduction to core components like View, Text, and Image. Understanding Flexbox for layout."
    //         },
    //         {
    //             "week": 3,
    //             "topic": "Handling User Input",
    //             "content": "Using TextInput, Button, and Touchable components. Handling user input and form submission."
    //         },
    //         {
    //             "week": 4,
    //             "topic": "Navigation in React Native",
    //             "content": "Setting up React Navigation. Creating stack and tab navigators. Passing data between screens."
    //         },
    //         {
    //             "week": 5,
    //             "topic": "Networking and APIs",
    //             "content": "Fetching data from APIs using fetch and axios. Displaying data with FlatList and SectionList."
    //         },
    //         {
    //             "week": 6,
    //             "topic": "State Management",
    //             "content": "Using useState and useEffect hooks. Introduction to context API and Redux for state management."
    //         },
    //         {
    //             "week": 7,
    //             "topic": "Working with Native Modules",
    //             "content": "Understanding native modules. Using third-party libraries and linking native code."
    //         },
    //         {
    //             "week": 8,
    //             "topic": "Deployment and Performance Optimization",
    //             "content": "Optimizing performance with useMemo and useCallback. Preparing and deploying apps to App Store and Google Play."
    //         }
    //     ]

    //     try {
    //         await addDoc(collection(db, "syllabuses"), {weeks});
    //         console.log("weeks added successfully");
    //     } catch (error) {
    //         console.error("Error adding course: ", error);
    //     }
    // };

    return (
        <div className='text-black'>
            {/* <button onClick={()=>addCourse()}>Add weeks</button> */}
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