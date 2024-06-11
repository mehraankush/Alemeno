"use client"
import { useMutation, useQuery } from "@tanstack/react-query";
import { getAllCourses } from "./CourseApi";


export const useGetAllCourses = () => {
    return useQuery({
        queryKey: ["useGetAllCourses"],
        queryFn: getAllCourses,
    });
};

