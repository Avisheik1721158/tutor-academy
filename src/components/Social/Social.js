import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import google from '../../../src/components/Home/Banner/images/google.png';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
const Social = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let errorElement;

    if (loading) {
        return <Loading></Loading>
    }
    if (error) {

        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>

    }

    if (user) {
        navigate('/home')
    }
    return (

        <div>
            {errorElement}
            <button onClick={() => signInWithGoogle()} className='w-50 mt-3'>
                <img src={google} alt=''></img>

            </button>
        </div>
    );
};

export default Social;