import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { app } from '../../firebase/firebase.config';


const Register = () => {
    // const [message, setMessage] = useState([])
    const [handleError, setHandleError] = useState('')
    const auth = getAuth(app)

    // Register user function
    const registerFunc = (e) => {
        setMessage([])
        setHandleError('')
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        e.target.reset()

        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                // console.log(res.user);
                updateProfileFunc(res.user, name)
                emailVerification(res.user)
            })
            .catch(e => {
                setHandleError(e.message)
                console.log(e.message);
            })
    }

    // verification email
    function emailVerification(user) {
        sendEmailVerification(user)
            .then(() => {
                // setMessage([...message, 'email verification send'])
                console.log('email verification send');
            });
    }

    // Update profile
    const updateProfileFunc = (user, name) => {
        updateProfile(user, {
            displayName: name
        }).then(() => {
            // setMessage([...message, 'Profile updated'])
            console.log('profile updated');
        }).catch((error) => {
            console.log(error.message);
        });
    }

    return (
        <>
            <div className='min-h-screen bg-slate-200 flex flex-col justify-evenly items-center'>
                <div className='space-y-4 font-bold text-xl px-10 py-5 bg-slate-50 rounded-lg shadow-inner'>
                    <h2 className='font-bold text-slate-800 text-center text-3xl'>New User? Register here</h2>
                    <form onSubmit={registerFunc} action="#" className='flex flex-col gap-5'>
                        <input type="name" name="name" id="name" className='p-4 text-slate-700 rounded-lg bg-slate-200 shadow-inner border-none' placeholder='Your name here' />
                        <input type="email" name="email" id="email" className='p-4 text-slate-700 rounded-lg bg-slate-200 shadow-inner border-none' placeholder='Your email here' />
                        <input type="password" name="password" id="password" className='p-4 text-slate-700 rounded-lg bg-slate-200 shadow-inner border-none' placeholder='Your password here' />
                        <input type="submit" value="Register" className='p-4 rounded-lg text-slate-50 bg-emerald-500 shadow' />
                        {handleError && <p className='text-red-500'>*{handleError}</p>}
                        <p className='font-normal text-slate-700'>Already registered? <Link to='/signin' className='underline text-blue-500'>Log in</Link> </p>
                    </form>
                </div>
                {/* {
                    message.length && message.map(m => {
                        <p className='font-bold text-green-500 text-xl'>{m}</p>
                    })
                } */}
            </div>
        </>
    );
};

export default Register;