"use client"
import { useMutation, useQuery } from "@tanstack/react-query";
import { UserLogin, alredyRegisteredUSer } from "./CourseApi";


export const useUserLogin = () => {
    return useMutation({
        mutationKey: ["useGetAllCourses"],
        mutationFn: UserLogin,
    });
};


