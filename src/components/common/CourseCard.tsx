"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "../ui/use-toast";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/configs/firebase";
import useAuth from "@/CustomHooks/use-user";
import useStoreUser from "@/CustomHooks/use-auth";

type Props = {
  CourseBannerData: any;
  CourseCardData: any;
};


function CourseCard({
  CourseBannerData,
  CourseCardData,
}: Props) {

  const user: any = useAuth();
  const router = useRouter();
  const [newuserData, setNewuserData] = useState<any[]>();
  const setuser = useStoreUser(newuserData)

  const handleEnroll = async (courseId: string) => {
    if (!user) {
      toast({
        duration: 1000,
        title: "You are not logged in",
      });
      router.push('/');
      return;
    }

    try {
      const studentDocRef = doc(db, "student", user?.id);
      const courseDocRef = doc(db, "course", courseId);

      // Fetch the student's document
      const studentDoc = await getDoc(studentDocRef);

      if (studentDoc.exists()) {
        const studentData = studentDoc.data();

        // Check if the user is already enrolled in the course
        if (studentData.enrolledCourses && studentData.enrolledCourses.includes(courseId)) {
          toast({
            duration: 1000,
            title: "You are already enrolled in this course",
          });
          return;
        }

        // Add courseId to enrolledCourses in students collection
        const res1 = await updateDoc(studentDocRef, {
          enrolledCourses: arrayUnion(courseId)
        });
        const updatedUser = await getDoc(studentDocRef);
        const newUserData: any = ({ id: updatedUser.id, ...updatedUser.data() })
        setNewuserData(newUserData)
        // Add studentId to enrolledStudents in courses collection
        const res2 = await updateDoc(courseDocRef, {
          enrolledStudents: arrayUnion(user?.id)
        });

        // console.log({ res1, res2 });

        toast({
          duration: 1000,
          title: "Enrollment Successful",
          description: "You have been enrolled in the course.",
        });
      } else {
        console.error("No such document!");
        toast({
          variant: "destructive",
          title: "Enrollment Failed",
          description: "Student document does not exist.",
        });
      }
    } catch (error) {
      console.error("Error enrolling in course: ", error);
      toast({
        variant: "destructive",
        title: "Enrollment Failed",
        description: "There was an error enrolling in the course.",
      });
    }
  };

  // console.log("CourseCardData", CourseCardData)
  return (
    <>
      <div
        className={`lg:absolute rounded-2xl p-4 sm:p-8 -bottom-[550px] right-[1rem] min-h-[600px] max-w-[423px] mx-auto lg:translate-y-0 translate-y-10 flex flex-col gap-4 bg-slate-100 border-[rgba(255,255,255,0.10)] border shadow-md shadow-grey100 backdrop-blur-md z-40`}
      >
        <Image
          src={CourseBannerData}
          className="md:max-w-full w-[400px] min-h-[180px] rounded-2xl overflow-hidden object-cover"
          alt="course image"
          width={400}
          quality={100}
          height={180}
        />
        <div className="flex flex-col gap-y-4 mt-4">
          <p className="text-2xl gap-x-3 font-semibold flex-wrap items-center">{CourseCardData?.name}</p>
          <div className="flex justify-between text-sm text-black">
            <p className="text-black">{CourseCardData?.instructor}</p>
            <p>{CourseCardData?.duration}</p>
          </div>
          <div className="flex text-3xl gap-x-3 font-semibold flex-wrap items-center">
            <span className={`text-brand`}>
              FREE
            </span>
            <span className={`text-shark-400 line-through text-2xl`}>
              ₹2000
            </span>
          </div>

          <div className={`text-black`}>
            <p className={`font-semibold text-xl mb-4`}>
              Prerequisites:
            </p>
            <div className="flex flex-col gap-3">
              {CourseCardData?.prerequisites?.map((pre: any, i: number) => (
                <li key={i} className="text-black">{pre}</li>
              ))}
            </div>
          </div>

          <div className={`text-black`}>
            <div className="flex flex-col gap-3">
              {CourseCardData?.schedule}
            </div>
          </div>



          {/* Buttons */}
          <div className="flex items-center gap-4 self-stretch flex-col-reverse sm:flex-row sm:items-start">

            <button
              onClick={!user?.enrolledCourses?.includes(CourseCardData?.id) ? () => handleEnroll(CourseCardData?.id) : undefined}
              className={` ${user?.enrolledCourses?.includes(CourseCardData?.id) ? "bg-green-600 hover:bg-green-700" : "bg-indigo-600 hover:bg-indigo-700"} w-full text-center p-3 rounded-xl text-white h-auto `}
            >
              {user?.enrolledCourses?.includes(CourseCardData?.id) ? "Start Learning" : "Enroll Now"}

            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseCard;
