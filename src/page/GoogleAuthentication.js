import React from 'react'
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { googleProvider, auth } from '../Firebase/fireBase'
import { updateUserAuthentication } from '../redux/slices/applicationSlice'
import { useDispatch } from 'react-redux'
import { FcGoogle } from "react-icons/fc";

const GoogleAuthentication = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(updateUserAuthentication(user?.email))
            } else {
                dispatch(updateUserAuthentication(""))
            }
        });
    }, [auth]);


    async function login() {
        googleProvider.setCustomParameters({ prompt: 'select_account' });
        await signInWithPopup(auth, googleProvider);
    }

    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div className='flex flex-row gap-[10px] items-center border rounded-lg p-3 text-white'>
                <FcGoogle className='text-[20px]' />
                <button onClick={login}>sign in with google</button>
            </div>
        </div>
    )
}

export default GoogleAuthentication
