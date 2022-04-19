import React from 'react';

const Blogs = () => {
    return (
        <div className="p-10">

            <div className=" w-full lg:max-w-full lg:flex">
                <h2> Blogs</h2>

            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">

                    <p className="text-sm text-gray-600 flex items-center text-center">
                        Q-1 Difference between authorization and authentication
                    </p>
                    <p className='mt-2'>
                        Authentication is a type of validating who entry the website in and the other hand Authorization validating or verifying what the type of page , documents, files , images are user or visitor will access to.
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
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">

                    <p className="text-sm text-gray-600 flex items-center text-center">
                        Q-3  What other services does firebase provide other than authentication
                    </p>
                    <p className='mt-2'>
                        There are so many service provide by FireBase. Most of them are so useful:
                        1. Cloud Firestore
                        2. Cloud Functions.
                        3.Authentication.
                        4. CLoud Stoage .
                        5. Google Analytics.
                        6. Cloud Messaging.

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
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">

                    <p className="text-sm text-gray-600 flex items-center text-center">
                        Q-2 Why are you using firebase? What other options do you have to implement authentication?
                    </p>
                    <p className='mt-2'>
                        Firebase provides may kind of works to modify our website. It provides authentication , backend, Ui librarires , Verifying , Sign=-in nad log-in many kind of things.
                        There are so many kinds of authentication using by Firebase.  It supports password, phone numbers user id by Google, Github, Twitter and more.
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
        </div >
    );
};

export default Blogs;