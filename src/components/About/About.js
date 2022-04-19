// 

import React from 'react';


const About = () => {
    return (
        <div className="p-10">

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img src='images/avi.jpg' alt=''></img>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mt-2">About Myself</div>
                    <h2 className='font-bold mt-2'> Avisheik Barua </h2>
                    <p className="text-gray-700 text-base mt-5">
                        Hi, This is Avi. I have recently learned Web development at Programming Hero.
                        I am from Chittagong. Till now, this development journey are quite impressive. I want to become a full stack developer. I am studying Computer Science and Engineering.
                        Hopefully i will enough capable to build my skill. And the upcoming day, i wish i could be a better skilled full person.
                        One day i will teach other person to build the skill.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Myself</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Self Motivation</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#web dev</span>
                </div>
            </div>
        </div>
    );
};

export default About;