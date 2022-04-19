import React from 'react';

const Others = () => {
    return (
        // <div className="p-10">

        //     <div className="max-w-sm rounded overflow-hidden shadow-lg">
        //         <img src='images/avi.jpg' alt=''></img>
        //         <div className="px-6 py-4">
        //             <div className="font-bold text-xl mt-2">Other Services</div>
        //             <h2 className='font-bold mt-2'> Technology skills </h2>
        //             <p className="text-gray-700 text-base mt-5">
        //                 In this time, I just teach academic syllabus. I wish upcoming days i teach tech skill like programming, web development, Graphics design etc.
        //             </p>
        //         </div>
        //         <div className="px-6 pt-4 pb-2">
        //             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Tech skill</span>
        //             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Self Motivation</span>
        //             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#web dev</span>
        //         </div>
        //     </div>
        // </div>

        <div>
            <div className=" w-full lg:max-w-full lg:flex">
                <h2 className='font-bold mx-auto'> Tech Skills</h2>

            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">


                    <p className='mt-2'>
                        In this time, I just teach academic syllabus. I wish upcoming days i teach tech skill like programming, web development, Graphics design etc.
                    </p>
                    <div className="text-gray-900 font-bold text-xl mb-2"></div>
                    <p className="text-gray-700 text-base"></p>
                </div>
                <div className="flex items-center">
                    <img className='w-25' src='' alt=''></img>
                    <div className="text-sm">


                    </div>
                </div>

            </div>
        </div>

    );
};

export default Others;