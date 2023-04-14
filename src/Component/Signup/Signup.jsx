import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../../firebase/firebase.config';

const Signup = () => {
    const [user, setUser] = useState()

    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()

    // Sign in with google
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => {
                const currentUser = res.user
                setUser(currentUser)
            })
            .catch(e => console.log(e.message))
    }

    // Sign out
    const signOutFunc = () => {
        signOut(auth)
            .then(() => setUser(null))
            .catch((e) => console.log(e.message))
    }

    return (
        <div className='min-h-screen bg-slate-200 flex flex-col justify-evenly items-center'>
            <div className='space-y-4 font-bold text-xl text-slate-50 px-10 py-5 bg-slate-50 rounded-lg shadow-inner'>
                <h2 className='font-bold text-slate-800 text-center text-3xl'>Login here</h2>
                <form action="#" className='flex flex-col gap-5'>
                    <input type="email" name="" id="" className='p-4 text-slate-700 rounded-lg bg-slate-200 shadow-inner border-none' placeholder='Your email here' />
                    <input type="password" name="" id="" className='p-4 text-slate-700 rounded-lg bg-slate-200 shadow-inner border-none' placeholder='Your email here'/>
                    <input type="submit" value="submit" className='p-4 rounded-lg bg-emerald-500 shadow' />
                </form>
                {
                    !user ?
                        <div className='space-x-5'> <button onClick={signInWithGoogle} className='px-5 py-3 bg-green-500 rounded-lg shadow'>Sign in with Google</button> 
                        <button className='px-5 py-3 bg-green-500 rounded-lg shadow'>Sign in with Github</button> </div> :
                        <button onClick={signOutFunc} className='px-5 py-3 bg-green-500 rounded-lg shadow'>Sign Out</button>
                }
            </div>

            <div className='space-y-4 text-xl font-semibold'>
                <img className='mx-auto rounded-full' src={user?.photoURL} alt="" />
                <h2>{user?.displayName}</h2>
                <p>{user?.email}</p>
            </div>
        </div>
    );
};

export default Signup;