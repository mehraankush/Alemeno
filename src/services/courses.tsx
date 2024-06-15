"use client"
import { useMutation, useQuery } from "@tanstack/react-query";
import { getAllCourses, getCoursesById, getSyllabusc } from "./CourseApi";


export const useGetAllCourses = () => {
    return useQuery({
        queryKey: ["useGetAllCourses"],
        queryFn: getAllCourses,
    });
};

export const useGetCoursesById = (id: string) => {
    return useQuery({
        queryKey: ["useGetCoursesById"],
        queryFn: () => getCoursesById(id),
        enabled: !!id
    });
};

export const useGetSyllabus = (id: string) => {
    return useQuery({
        queryKey: ["useGetSyllabus"],
        queryFn: () => getSyllabusc(id),
        enabled: !!id
    });
};


