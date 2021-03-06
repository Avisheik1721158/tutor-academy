import React, { useRef, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import Social from '../Social/Social';



const Register = () => {

    // Create User With Email and Password
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        // error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    //  Email, Pass Ref

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nameRef = useRef('');
    const confirmRef = useRef('');
    const [errorMessage, setErrorMessage] = useState('');


    // handle Register
    const handleRegister = event => {
        event.preventDefault();
        // input field Value
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const name = nameRef.current.value;
        const confirm = confirmRef.current.value;

        createUserWithEmailAndPassword(email, password)

        console.log(email, password, name, confirm)

        // confirm pass validation

        if (passwordRef.current.value !== confirmRef.current.value) {
            console.log('password did not match')
            setErrorMessage('password did not match');
        }
        else {
            setErrorMessage('Sign Up successfully');
        }
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        navigate('/home');
    }

    return (
        <div className="flex flex-col h-screen bg-gray-100">

            <div className="grid place-items-center mx-2 my-20 sm:my-auto">




                <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
        px-6 py-10 sm:px-10 sm:py-6 
        bg-white rounded-lg shadow-md lg:shadow-lg">


                    <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
                        Please Register!!!
                    </h2>

                    <form onSubmit={handleRegister} className="mt-10" method="POST">

                        <label for="name" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Your name</label>
                        <input id="name" ref={nameRef} type="text" name="name" placeholder="name" required autoComplete="current-password"
                            className="block w-full py-3 px-1 mt-2 mb-4
                text-gray-800 appearance-none 
                border-b-2 border-gray-100
                focus:text-gray-500 focus:outline-none focus:border-gray-200"
                        />

                        <label for="email" className="block text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                        <input id="email" ref={emailRef} type="email" name="email" placeholder="e-mail address" required autoComplete="email"
                            className="block w-full py-3 px-1 mt-2 
                text-gray-800 appearance-none 
                border-b-2 border-gray-100
                focus:text-gray-500 focus:outline-none focus:border-gray-200"
                        ></input>


                        <label for="password" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
                        <input id="password" ref={passwordRef} type="password" name="password" placeholder="password" required autoComplete="current-password"
                            className="block w-full py-3 px-1 mt-2 mb-4
                text-gray-800 appearance-none 
                border-b-2 border-gray-100
                focus:text-gray-500 focus:outline-none focus:border-gray-200"
                        />

                        <label for="confirm-password" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">confirm-password</label>
                        <input id="confirm-password" ref={confirmRef} type="password" name="confirm-password" placeholder="Confirm your password" required autoComplete="current-password"
                            className="block w-full py-3 px-1 mt-2 mb-4
                text-gray-800 appearance-none 
                border-b-2 border-gray-100
                focus:text-gray-500 focus:outline-none focus:border-gray-200"
                        />


                        <button type="submit"
                            className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                font-medium text-white uppercase
                focus:outline-none hover:bg-gray-700 hover:shadow-none">
                            SIGN UP
                        </button>
                        <p className='text-red-500'> {errorMessage}</p>
                        <Social></Social>


                        <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
                            <Link to='/login' className="flex-2 underline">
                                Already have an account?
                            </Link>


                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;