import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { AreaChart, BarChart, Bar, PieChart, Pie, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    // const [chart, setChart] = useState([])
    // useEffect(() => {
    //     fetch('data.json')
    //         .then(res => res.json())
    //         .then(data => setChart(data))

    // }, [])
    // console.log({ chart })
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]

    return (

        <div>
            <h2 className='text-2xl font-bold text-red-500'> Diagram with Chart

            </h2>
            <div className='grid md:grid-cols-2 mt-5 mx-12 px-6'>

                <div>
                    <LineChart width={400} height={500} data={data}>
                        <Line dataKey={'sell'}></Line>
                        <XAxis dataKey="month"></XAxis>
                        <YAxis dataKey="sell"></YAxis>
                        <Tooltip />
                    </LineChart>
                    <h2 className='text-cyan-300 font-bold text-2xl mr-20 border pr-20 sticky'> Sell </h2>
                </div>
                <div>
                    <AreaChart width={400}
                        height={500}
                        data={data}>
                        <XAxis dataKey="month"></XAxis>
                        <YAxis dataKey="investment"></YAxis>
                        <Tooltip />
                    </AreaChart>
                    <h2 className='text-cyan-300 font-bold text-2xl mr-20 border pr-20 sticky'> Investment </h2>
                </div>
                <div className='mt-5 mb-5'>
                    <BarChart width={400}
                        height={500}
                        data={data}>
                        <XAxis dataKey="month"></XAxis>
                        <YAxis dataKey="investment"></YAxis>
                        <YAxis dataKey="revenue"></YAxis>
                        <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                        <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                        <Tooltip />
                    </BarChart>
                    <h2 className='text-cyan-300 font-bold text-2xl mr-20 border pr-20 sticky'> Investment vs Revenue </h2>
                </div>
                <div className='mt-5 mb-5'>
                    <PieChart width={400}
                        height={500}
                    >
                        <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                        <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                        <Tooltip />
                    </PieChart>
                    <h2 className='text-cyan-300 font-bold text-2xl mr-20 border pr-20 sticky'> Investment vs Revenue </h2>



                </div>
            </div >
        </div>

    );
};

export default Dashboard;