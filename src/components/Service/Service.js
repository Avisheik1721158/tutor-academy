import React from 'react';
import { useNavigate } from 'react-router';

const Service = (props) => {
    const { id, img, name, details } = props.item;
    const navigate = useNavigate();
    const navigateToCheckout = (id) => {
        navigate(`/proceed/${id}`);


    }
    return (
        // <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

        //     <div className="rounded overflow-hidden shadow-lg">
        //         <img src={img}></img>
        //         <div className="px-6 py-4">
        //             <div className="font-bold text-xl mb-2">{name}</div>
        //             <p className="text-gray-700 text-base">
        //                 {details}
        //             </p>
        //         </div>
        //         <div className="px-6 pt-4 pb-2">
        //             <button onClick={() => navigateToCheckout(id)} className="rounded bg-blue-400 p-2 text-white ">Checkout</button>
        //         </div>
        //     </div>

        //     {/* <div className="rounded overflow-hidden shadow-lg">
        //         <img src={img}></img>
        //         <div className="px-6 py-4">
        //             <div className="font-bold text-xl mb-2">{name}</div>
        //             <p className="text-gray-700 text-base">
        //                 {details}
        //             </p>
        //         </div>
        //         <div className="px-6 pt-4 pb-2">
        //             <button className="rounded bg-blue-400 p-2 text-white ">Checkout</button>
        //         </div>
        //     </div> */}


        //     {/* <div className="rounded overflow-hidden shadow-lg">
        //         <img src={img}></img>
        //         <div className="px-6 py-4">
        //             <div className="font-bold text-xl mb-2">{name}</div>
        //             <p className="text-gray-700 text-base">
        //                 {details}
        //             </p>
        //         </div>
        //         <div className="px-6 pt-4 pb-2">
        //             <button className="rounded bg-blue-400 p-2 text-white ">Checkout</button>
        //         </div>
        //     </div> */}

        // </div>
        <div className="p-10">

            <div className=" w-full lg:max-w-full lg:flex">

            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center">
                        <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        Members only
                    </p>
                    <div className="text-gray-900 font-bold text-xl mb-2">{name}</div>
                    <p className="text-gray-700 text-base">{details}</p>
                </div>
                <div className="flex items-center">
                    <img className='w-25' src={img} alt=''></img>
                    <div className="text-sm">
                        <p className="text-gray-900 leading-none mx-5">Avisheik Barua</p>
                        <p className="text-gray-600">Lecturer (Science)
                        </p>
                    </div>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <button onClick={() => navigateToCheckout(id)} className="rounded bg-blue-400 p-2 text-white ">Checkout</button>
                </div>
            </div>
        </div>

    );
};

export default Service;