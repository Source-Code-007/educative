import React, { useRef, useState } from 'react';
import { GoogleAuthProvider, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const SignIn = () => {
    const emailRef = useRef()
    const [user, setUser] = useState('')
    const [handleError, setHandleError] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)

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

    // sign in with email and password
    let signInWithEmailPassFunc = (e) => {
        e.preventDefault()
        setUser('')
        setHandleError('')
        const email = e.target.email.value
        const password = e.target.password.value
        e.target.reset()
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                const currentUser = res.user
                if (!currentUser.emailVerified) {
                    console.log('Please verified your email first!');
                    setHandleError('Please verified your email first')
                    return
                }
                console.log(currentUser);
                setUser(currentUser)
            }).catch(e => {
                const errorMessage = e.message.match(/\(([^)]+)\)/)[1].split('/')[1]
                setHandleError(errorMessage)
            })
    }

    // Forget password - password update with password reset email
    const forgetPassFunc = () => {
        const email = emailRef.current
        sendPasswordResetEmail(auth, email.value)
            .then(() => {
                console.log('Check your email for reset your password!');
            })
            .catch(e => {
                console.log(e.message);
            })
    }

    // Sign out
    const signOutFunc = () => {
        signOut(auth)
            .then(() => setUser(null))
            .catch((e) => console.log(e.message))
    }

    return (
        <div className='min-h-screen bg-slate-200 flex flex-col justify-evenly items-center'>
            {/* Log in form */}
            <div className='space-y-4 font-bold text-xl text-slate-50 px-10 py-5 bg-slate-50 rounded-lg shadow-inner'>
                <h2 className='font-bold text-slate-800 text-center text-3xl'>Login here</h2>
                <form onSubmit={signInWithEmailPassFunc} action="#" className='flex flex-col gap-5'>
                    <input type="email" ref={emailRef} name="email" id="email" className='p-4 w-full text-slate-700 rounded-lg bg-slate-200 shadow-inner border-none' placeholder='Your email here' />
                    <div className='relative'>
                        <input type={passwordVisible? `text` : `password`} name="password" id="password" className='p-4 w-full text-slate-700 rounded-lg bg-slate-200 shadow-inner border-none' placeholder='Your password here' />
                        <span onClick={()=> setPasswordVisible(!passwordVisible)} className='text-slate-700 text-lg absolute right-2 top-3'><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></span> 
                    </div>
                    <p className='text-red-500'>{handleError}</p>
                    <input type="submit" value="submit" className='p-4 rounded-lg bg-emerald-500 shadow' />
                </form>

                {/* Conditional Log in button */}
                {
                    !user ?
                        <div className='space-x-5'> <button onClick={signInWithGoogle} className='px-5 py-3 bg-green-500 rounded-lg shadow'>Sign in with Google</button>
                            <button className='px-5 py-3 bg-green-500 rounded-lg shadow'>Sign in with Github</button> </div> :
                        <button onClick={signOutFunc} className='px-5 py-3 bg-green-500 rounded-lg shadow'>Sign Out</button>
                }
                <p className='font-normal text-slate-700'>New user? <Link to='/register' className='underline text-blue-500'>Regester here</Link> </p>
                <a onClick={forgetPassFunc} href='#' className='font-normal text-slate-700'>Forget password?</a>
            </div>

            {/* This part render After successfully logged in */}
            <div className='space-y-4 text-xl font-semibold py-6'>
                {
                    user && <>
                        <p className='font-bold text-green-500'>Successfully log in</p>
                        <img className='mx-auto rounded-full' src={user?.photoURL} alt="" />
                        <h2>{user?.displayName}</h2>
                        <p>{user?.email}</p>
                    </>
                }
            </div>
        </div>
    );
};

export default SignIn;