import { setUser } from '@/store/slices/userSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useStoreUser = (userData: any) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (userData) {
            localStorage.setItem('user', JSON.stringify(userData));
            dispatch(setUser(userData));
        }
    }, [userData, dispatch]);
};

export default useStoreUser;

