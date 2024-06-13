import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

type Props = {
  CourseBannerData: any;
  CourseCardData: any;
  CourseEnrollmentClosed: boolean;
  CourseEnrollmentLink: string;
  CourseUpcoming: boolean;
  videoVal?: string;
};
;

function CourseCard({
  CourseBannerData,
  CourseCardData,
  CourseEnrollmentClosed,
  CourseEnrollmentLink,
  CourseUpcoming,
  videoVal,
}: Props) {
  return (
    <>
      <div
        className={`lg:absolute rounded-2xl p-4 sm:p-8 -bottom-[550px] right-[1rem] min-h-[600px] max-w-[423px] mx-auto lg:translate-y-0 translate-y-10 flex flex-col gap-4 bg-neutral-9 border-[rgba(255,255,255,0.10)] border shadow-md shadow-grey100 backdrop-blur-md z-40`}
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
          <div className="flex justify-between text-sm text-slate-300">
            <p className="text-slate-200">{CourseCardData?.instructor}</p>
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

          <div className={`text-white`}>
            <p className={`font-semibold text-xl mb-4`}>
              Prerequisites:
            </p>
            <div className="flex flex-col gap-3">
              {CourseCardData?.prerequisites?.map((pre: any, i: number) => (
                <li key={i} className="text-slate-200">{pre}</li>
              ))}
            </div>
          </div>

          <div className={`text-white`}>
            <div className="flex flex-col gap-3">
              {CourseCardData?.schedule}
            </div>
          </div>



          {/* Buttons */}
          <div className="flex items-center gap-4 self-stretch flex-col-reverse sm:flex-row sm:items-start">
            {/* <CTAButtonComponenet className="bg-neutral-7 hover:bg-neutral-8">Start your free trail</CTAButtonComponenet> */}
            <Link
              href={
                CourseUpcoming
                  ? "#"
                  : CourseEnrollmentClosed
                    ? CourseEnrollmentLink
                    : CourseBannerData?.RazorPayLink
              }
              target={CourseEnrollmentClosed || CourseUpcoming ? '' : '_blank'}
              className="w-full text-center p-3 rounded-xl text-white h-auto bg-indigo-600 hover:bg-indigo-700"
            >
             Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseCard;
