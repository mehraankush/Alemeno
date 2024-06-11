"use client"
import { db } from '@/configs/firebase';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect } from 'react'

const CourseDetailsPage = ({ params }: { params: { id: string } }) => {

    console.log(params, "ids")
    useEffect(() => {
        if (params.id) {
            const fetchCourse = async () => {
                try {
                    const courseRef = doc(db, "course", params.id);
                    const courseSnap = await getDoc(courseRef);
                    if (courseSnap.exists()) {
                        console.table({ id: courseSnap.id, ...courseSnap.data() });
                    } else {
                        console.error("Course not found");
                    }
                } catch (error: any) {
                    console.error("Error fetching course: " + error.message);
                }
            };

            fetchCourse();
        }
    }, [params.id]);
    return (
        <div className="min-h-screen bg-white flex justify-center ">
            <div className=" w-full min-h-screen h-full text-black xl:max-w-[1300px]">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptas distinctio debitis temporibus vel sit atque, neque aliquam quisquam dolorum harum explicabo ex? Consequatur, nam. Ipsam unde perferendis laboriosam veniam!</p>
            </div>
        </div>
    )
}

export default CourseDetailsPage