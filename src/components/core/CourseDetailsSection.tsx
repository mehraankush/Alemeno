import React from "react";
import IconBox from "../common/IocnBox";
import { Video } from "lucide-react";


const Icons = [
    {
        icon: Video,
        des: "Mode of the Course LIVE + Recordings",
    },
    {
        icon: Video,
        des: "Class Recording Provided Yes [HD Quality]",
    },
    {
        icon: Video,
        des: "Class Recording Provided Yes [HD Quality]",
    },
    {
        icon: Video,
        des: "Class Recording Provided Yes [HD Quality]",
    },
    {
        icon: Video,
        des: "Class Recording Provided Yes [HD Quality]",
    },
    {
        icon: Video,
        des: "Class Recording Provided Yes [HD Quality]",
    },
    {
        icon: Video,
        des: "Class Recording Provided Yes [HD Quality]",
    },
    {
        icon: Video,
        des: "Class Recording Provided Yes [HD Quality]",
    },
    {
        icon: Video,
        des: "Class Recording Provided Yes [HD Quality]",
    },
];

const CourseDetailSection = () => {
    return (
        <div className="w-full p-5 grid grid-cols-1 sm:grid-cols-2 place-content-start sm:place-content-center place-items-start  border-slate-300 border rounded-lg bg-white gap-x-4 gap-y-8">
            {Icons?.map((card, idx) => (
                <div className="flex flex-row gap-x-3 items-center" key={idx}>
                    <IconBox className="border border-slate-300 bg-white">
                        <card.icon />
                    </IconBox>
                    <p className="text-base font-normal">
                        {card?.des}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default CourseDetailSection;
