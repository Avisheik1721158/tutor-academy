import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import Social from '../Social/Social';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { ButtonGroup } from 'react-bootstrap';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorSignal;
    // const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    // if (error1) {
    //     return (
    //         <div>
    //             <p className='text-danger'>Error: {error1.message}</p>
    //         </div>
    //     );
    // }

    // if (user1) {
    //     navigate('/home')
    // }


    // useauthstate


    // Sign with Email and pass
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth)

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        errorSignal = <div>
            <p className='text-danger'>Email or password did not match</p>
        </div>

    }

    // handle Submit
    const handleSubmit = event => {
        event.preventDefault();
        // email and pass value
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password)

        signInWithEmailAndPassword(email, password)
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast('Sent email');

    }
    return (

        <div className="flex flex-col h-screen bg-gray-100">

            <div className="grid place-items-center mx-2 my-20 sm:my-auto">




                <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg">


                    <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
                        Please Login!!!
                    </h2>
                    <p>{errorSignal}</p>

                    <form onSubmit={handleSubmit} className="mt-10" method="POST">

                        <label for="email" className="block text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                        <input id="email" ref={emailRef} type="email" name="email" placeholder="e-mail address" required autoComplete="email"
                            className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                        />


                        <label for="password" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
                        <input id="password" ref={passwordRef} type="password" name="password" placeholder="password" required autoComplete="current-password"
                            className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                        />


                        <button type="submit"
                            className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none">
                            Login
                        </button>

                        <Social></Social>
                        <ToastContainer />

                        <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
                            <Link to='/register' className="flex-2 underline">
                                Create an Account
                            </Link>
                            <p className="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">
                                or
                            </p>
                            {/* <Link to="login" className="flex-2 underline" onClick={resetPassword} >
                                Forgot password?
                            </Link> */}
                            <ButtonGroup className="flex-2 underline cursor-pointer " onClick={resetPassword} >
                                Forgot password?
                            </ButtonGroup>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;