"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "../ui/use-toast";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/configs/firebase";
import useAuth from "@/CustomHooks/use-user";
import { Progress } from "@/components/ui/progress"
import useStoreUser from "@/CustomHooks/use-auth";
type Props = {
  CourseBannerData: any;
  CourseCardData: any;
};

const EnrolledCourseCard = ({
  CourseBannerData,
  CourseCardData,
}: Props) => {

  const user: any = useAuth();
  const router = useRouter();
  const [newuserData, setNewuserData] = useState<any[]>()
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

      // Add courseId to enrolledCourses in students collection
      const res1 = await updateDoc(studentDocRef, {
        completedCourses: arrayUnion(courseId)
      });

      const studentDoc = await getDoc(studentDocRef);
      const newStudent: any = ({ id: studentDoc.id, ...studentDoc.data() })
      setNewuserData(newStudent)

      toast({
        duration: 1000,
        title: "You are a champ now 🥳",
        description: "Course completed successfully",
      });

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
        className={` rounded-2xl p-4 sm:p-8  right-[1rem] min-h-[400px] max-w-[423px] lg:translate-y-0 translate-y-10 flex flex-col gap-4 bg-slate-100 border-[rgba(255,255,255,0.10)] border shadow-md shadow-grey100 backdrop-blur-md `}
      >
        <Image
          src={CourseBannerData}
          className="md:max-w-full w-[400px]  h-[260px] rounded-2xl overflow-hidden object-cover"
          alt="course image"
          width={400}
          quality={100}
          height={180}
        />
        <div className="flex flex-col gap-y-2 ">
          <p className="text-xl gap-x-3 font-semibold flex-wrap items-center">{CourseCardData?.name}</p>
          <div className="flex justify-between text-sm text-neutral-9">
            <p className="text-neutral-9">{CourseCardData?.instructor}</p>
            <p>{CourseCardData?.duration}</p>
          </div>
          <Progress className={`${user?.completedCourses?.includes(CourseCardData?.id) ? 'w-[100%]' : `w-[${Math.random()*10}%]`} bg-blue-400 h-2`} />

          <div className={`text-neutral-9`}>
            <div className="flex flex-col gap-3">
              {CourseCardData?.schedule}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4 self-stretch flex-col-reverse sm:flex-row sm:items-start">

            <button
              onClick={!user?.completedCourses?.includes(CourseCardData?.id) ? () => handleEnroll(CourseCardData?.id) : undefined}
              className={` bg-green-600 hover:bg-green-700 w-full text-center p-3 rounded-xl text-white h-auto `}
            >
              {user?.completedCourses?.includes(CourseCardData?.id) ? 'Course completed' : ' Mark as complete'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}


export default EnrolledCourseCard
