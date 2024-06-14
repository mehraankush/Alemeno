
"use client"
import React from 'react'
import SearchBar from './SearchBar'
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '@/configs/firebase';

const Navbar = ({onSearch}:any) => {
     
    const handleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log('User Info:', user);
            // You can handle user information here, e.g., save to state or database
        } catch (error) {
            console.error('Error during sign-in:', error);
        }
    };

    return (
        <div className='text-black border-b border-slate-500 p-3 flex justify-end fixed top-0 w-full bg-white'>
            <div className="flex  w-full mx-auto justify-center xl:max-w-[1300px]">
                <SearchBar onSearch={onSearch} />
            </div>
            <button
                onClick={handleSignIn}
                className='p-2 rounded-lg font-semibold text-sm px-7 text-blue-500  border-2 tracking-wider'>
                Login
            </button>
        </div>
    )
}

export default Navbar