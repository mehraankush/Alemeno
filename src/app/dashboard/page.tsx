"use client"
import useAuth from '@/CustomHooks/use-user'
import Navbar from '@/components/common/Navbar'
import { db } from '@/configs/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import EnrolledCourseCard from '@/components/common/EnrolledCourseCard'

const Dashboard = () => {

  // const user: any = useAppSelector((state) => state.user.user);
  const user: any = useAuth()
  const [courses, setCourses] = useState<any[]>([]);
  const router = useRouter();

  const handleClick = () => {
    router.push('/')
  }

  useEffect(() => {
    if (user) {
      fetchUserAndCourses();
    }
  }, [user]);

  const fetchUserAndCourses = async () => {
    try {
      // Fetch user data from Firebase
      const userDocRef = doc(db, 'student', user?.id);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        if (userData?.enrolledCourses) {
          // Fetch each course data based on the enrolled course IDs
          const coursesData = await Promise.all(
            userData.enrolledCourses.map(async (courseId: string) => {
              const courseDoc = await getDoc(doc(db, 'course', courseId));
              return courseDoc.exists() ? { id: courseId, ...courseDoc.data() } : null;
            })
          );

          setCourses(coursesData.filter(course => course !== null));
          // console.log('coursesData', coursesData);
        }
      }
    } catch (error) {
      console.error('Error fetching courses: ', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className='max-w-7xl mt-[80px] mx-auto text-black'>
        <div className='flex justify-center items-center flex-col gap-3 w-full'>
          {user ? (
            courses && courses.length > 0 ? (
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {courses.map((course, i) => (
                  <EnrolledCourseCard
                    key={i}
                    CourseCardData={course}
                    CourseBannerData={course?.thumbnail}
                  />
                ))}
              </div>
            ) : (
              <>
                <p className='font-semibold text-slate-500'>Not Enrolled in any course ...</p>
                <div>
                  <button
                    onClick={handleClick}
                    className='p-2 rounded-lg font-semibold text-sm px-7 text-blue-500 border-2 tracking-wider'>
                    Explore courses
                  </button>
                </div>
              </>
            )
          ) : (
            <p className='font-semibold text-slate-500'>You are not logged in ...</p>
          )}
        </div>
      </div>
    </>
  )
}

export default Dashboard