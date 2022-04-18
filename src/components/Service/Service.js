import React from 'react';
import { useNavigate } from 'react-router';

const Service = (props) => {
    const { id, img, name, details } = props.item;
    const navigate = useNavigate();
    const navigateToCheckout = () => {
        navigate(`/proceed/${id}`);


    }
    return (
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

            <div className="rounded overflow-hidden shadow-lg">
                <img src={img}></img>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{name}</div>
                    <p className="text-gray-700 text-base">
                        {details}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <button onCLick={() => navigateToCheckout(id)} className="rounded bg-blue-400 p-2 text-white ">Checkout</button>
                </div>
            </div>

            {/* <div className="rounded overflow-hidden shadow-lg">
                <img src={img}></img>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{name}</div>
                    <p className="text-gray-700 text-base">
                        {details}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <button className="rounded bg-blue-400 p-2 text-white ">Checkout</button>
                </div>
            </div> */}


            {/* <div className="rounded overflow-hidden shadow-lg">
                <img src={img}></img>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{name}</div>
                    <p className="text-gray-700 text-base">
                        {details}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <button className="rounded bg-blue-400 p-2 text-white ">Checkout</button>
                </div>
            </div> */}

        </div>
    );
};

export default Service;