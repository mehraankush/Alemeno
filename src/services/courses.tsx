"use client"
import { useMutation, useQuery } from "@tanstack/react-query";
import { getAllCourses, getSyllabusc } from "./CourseApi";


export const useGetAllCourses = () => {
    return useQuery({
        queryKey: ["useGetAllCourses"],
        queryFn: getAllCourses,
    });
};

export const useGetSyllabus = (id: string) => {
    return useQuery({
        queryKey: ["useGetSyllabus"],
        queryFn: () => getSyllabusc(id),
        enabled: !!id
    });
};

