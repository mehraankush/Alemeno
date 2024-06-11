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

const CardComponent = ({ course }: any) => {
  return (
    <Card>
      <div className="bg-white text-black p-2 rounded-lg">
        <CardHeader className="p-0">
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
        <CardFooter className='px-2 pb-2 flex justify-between pt-2'>
          <div className='flex gap-2 items-center'>
            <ThumbsUp size={25} className='text-blue-700 cursor-pointer' />
            <p className='text-blue-500 font-semibold mt-1'>0</p>
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