
"use client"
import React from 'react'
import SearchBar from './SearchBar'
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from '@/configs/firebase';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { clearUser, setUser } from '@/store/slices/userSlice';
import { useToast } from "@/components/ui/use-toast"
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const Navbar = ({ onSearch }: any) => {

    const { toast } = useToast()
    const dispatch = useAppDispatch();
    const user:any = useAppSelector((state) => state.user.user);


    const handleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            const userData = {
                name: user?.displayName,
                photo: user?.photoURL,
                email: user?.email
            }
            const savingUserState = dispatch(setUser(userData))
            if (savingUserState) {
                toast({
                    duration: 2000,
                    title: "Login Successfuly",
                    description: "Now Can Enroll in courses",
                })
            }

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
            toast({
                title: "We will miss you ",
                description: "Signed out successfully",
            })
        } catch (error) {
            console.error("Error signing out: ", error);
            toast({
                variant: "destructive",
                title: "Error signing out",
                description: "Something went wrong, try again",
            })
        }
    };

    return (
        <div className='text-black border-b border-slate-500 p-3 flex justify-end fixed top-0 w-full bg-white'>
            <div className="flex  w-full mx-auto justify-center xl:max-w-[1300px]">
                <SearchBar onSearch={onSearch} />
            </div>
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

        </div >
    )
}

export default Navbar