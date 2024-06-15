import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { ThumbsUp } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import useAuth from '@/CustomHooks/use-user'
import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '@/configs/firebase'
import { toast } from '../ui/use-toast'
import { queryClient } from '../Providers/QueryClientProvider'

const CardComponent = ({ course, onclick }: any) => {

  const user: any = useAuth()

  const likeCourse = async (courseId: string) => {
    if (!user) {
      toast({
        duration: 1000,
        title: "Yor are not loggedin cry 🥲",
      });
      return
    }
    try {
      const courseRef = doc(db, 'course', courseId);
      const courseDoc = await getDoc(courseRef);

      if (!courseDoc.exists()) {
        throw new Error('Course not found');
      }

      // Check if user ID is already in likedBy array
      const likedBy = courseDoc.data().likedBy || [];
      if (likedBy.includes(user.id)) {
        toast({
          duration: 1000,
          title: "User already liked this course",
        });
        return
      }

      // Update course document to add userId to likedBy array
      await updateDoc(courseRef, {
        likedBy: arrayUnion(user.id)
      });

      toast({
        duration: 1000,
        title: "Thank you for your contribution 🥳",
      });
      queryClient.invalidateQueries({ queryKey: ["useGetAllCourses"] });

    } catch (error: any) {
      console.error('Error liking course:', error.message);
      toast({
        variant: 'destructive',
        duration: 1000,
        title: "Error liking course",
      });
    }
  };

  return (
    <Card>
      <div className="w-[400px] lg:w-full mx-auto bg-slate-100 border border-slate-200 text-black p-2 rounded-lg">
        <div className='cursor-pointer' onClick={() => onclick(course.id)}>
          <CardHeader className="px-2">
            <div className="border rounded-lg">
              <Image
                src={course.thumbnail}
                alt="course image"
                width={1000}
                height={1000}
                className="w-[400px] h-[270px] object-cover rounded-lg"
              />
            </div>
            <CardTitle className='px-2 pt-1'>{course.name}</CardTitle>
            <CardDescription className='px-2 pb-1 h-[40px] overflow-hidden'>{course.description}</CardDescription>
          </CardHeader>
          <CardContent className='flex justify-between p-0 px-2 text-sm py-1'>
            <p className='font-semibold'>{course.instructor}</p>
            <p className='text-slate-500'>{course.duration}</p>
          </CardContent>
        </div>

        <CardFooter className='px-4 pb-2 flex justify-between pt-2'>
          <div className='flex gap-2 items-center cursor-pointer' onClick={() => likeCourse(course.id)}>
            <ThumbsUp size={25} className='text-blue-700 cursor-pointer' />
            <p className='text-blue-500 font-semibold mt-1'>{course?.likedBy?.length || 0}</p>
          </div>
          <div className='flex '>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </CardFooter>
      </div>
    </Card>
  )
}

export default CardComponent