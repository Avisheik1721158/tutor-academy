// import React from 'react';

// import Link from '../Link/Link'
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';

// const Navbar = () => {


//     const [user] = useAuthState(auth);
//     const routes = [
//         {
//             id: 1, name: 'Home', link: '/home'
//         },
//         {
//             id: 2, name: 'Services', link: '/services'
//         },

//         {
//             id: 3, name: 'About', link: '/about'
//         },
//         {
//             id: 4, name: 'Others', link: '/others'
//         },

//         {

//             id: 5, name: user ? 'logout' : 'login', link: user ? '/logout' : '/login'



//         },
//         {

//             id: 6, name: 'Sign Up', link: '/register'



//         },


//     ]



//     return (



//         <nav className='bg-slate-800 p-4'>

//             <ul className='md:flex justify-center'>
//                 {
//                     routes.map(route => <Link key={route.id} route={route}


//                     ></Link>)
//                 }
//             </ul>

//         </nav>
//     );
// };

// export default Navbar;

import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <nav className='bg-slate-800 p-4'>
            <div className='text-'>
                <ul className='md:flex justify-center text-rose-50 gap-5'>
                    <Link to="/home">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/blogs">Blogs</Link>

                    <Link to="/About">About</Link>
                    <Link to="/others">Others</Link>

                    {
                        user ?
                            <button onClick={handleSignOut}>Sign out</button> :
                            <Link to="/login">Log in</Link>}

                    <Link to="/register">Register</Link>

                </ul>

            </div>
        </nav>
    );
};

export default Navbar;