
"use client"
import React, { useState } from 'react'
import SearchBar from './SearchBar'
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from '@/configs/firebase';
import { useAppDispatch } from '@/store/hooks';
import { clearUser } from '@/store/slices/userSlice';
import { useToast } from "@/components/ui/use-toast"
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { alredyRegisteredUSer } from '@/services/CourseApi';
import { useUserLogin } from '@/services/UserAuth';
import Link from 'next/link';
import BtnComponent from './BtnComponent';
import useAuth from '@/CustomHooks/use-user';
import useStoreUser from '@/CustomHooks/use-auth';
import Image from 'next/image';

type NavbarProps = {
    onSearch?: any;
}

const Navbar = ({ onSearch }: NavbarProps) => {

    const { toast } = useToast()
    const dispatch = useAppDispatch();
    const user: any = useAuth()
    // const user: any = useAppSelector((state) => state.user.user);
    const { mutate, isPending } = useUserLogin()
    const [userData, setUserData] = useState()
    const setuser = useStoreUser(userData)

    const handleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user: any = result.user;

            const userData: any = {
                name: user?.displayName,
                photo: user?.photoURL,
                email: user?.email
            }
            const registerUser: any = await alredyRegisteredUSer(user?.email)
            if (registerUser) {
                userData.id = registerUser.id
            }
            if (!registerUser) {
                mutate(userData, ({
                    onSuccess: (res) => {
                        // console.log("user login successfully", res)
                        userData.id = res.id
                    },
                    onError: (err) => {
                        console.log("Error in user login", err)
                    },
                }))
            }
            setUserData(userData)
            toast({
                duration: 2000,
                title: "Login Successfuly",
                description: "Now Can Enroll in courses",
            })

        } catch (error) {
            console.error('Error during sign-in:', error);
            toast({
                variant: "destructive",
                title: "Error In Login",
                description: "Something went wrong",
            })
        }
    };

    const handleLogout = async () => {
        try {
            const res = await signOut(auth);
            dispatch(clearUser());
            localStorage.removeItem('user')
            toast({
                title: "We will miss you ",
                description: "Signed out successfully",
            })
        } catch (error) {
            console.error("Error signing out: ", error);
            toast({
                duration: 1000,
                variant: "destructive",
                title: "Error signing out",
                description: "Something went wrong, try again",
            })
        }
    };
    // console.log("user", user)
    return (
        <div className='text-black border-b border-slate-500 p-3 flex justify-between fixed top-0 w-full bg-white gap-3'>
            <div className='p-2'>
                <Link href="/">
                    <Image src="/logo.png" width={100} height={100} className="w-[100px] h-auto cursor-pointer" alt="logo" />
                </Link>
            </div>

            {
                <div className="flex  w-full mx-auto justify-center xl:max-w-[1300px]">
                    <SearchBar onSearch={onSearch} />
                </div>
            }
            <BtnComponent >
                <Link href='/dashboard'>Dashboard</Link>
            </BtnComponent>

            {
                user ? (
                    <div className='flex gap-3'>
                        <Avatar>
                            <AvatarImage src={user.photo} alt="UserImage" />
                            <AvatarFallback>{user.name}</AvatarFallback>
                        </Avatar>
                        <button
                            onClick={handleLogout}
                            className='p-2 rounded-lg font-semibold text-sm px-7 text-blue-500  border-2 tracking-wider'>
                            LogOut
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={handleSignIn}
                        className='p-2 rounded-lg font-semibold text-sm px-7 text-blue-500  border-2 tracking-wider'>
                        Login
                    </button>)
            }

        </div>
    )
}

export default Navbar