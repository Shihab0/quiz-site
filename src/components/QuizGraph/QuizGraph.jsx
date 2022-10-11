import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const QuizGraph = ({data}) => {
    console.log(data);

    return (
        <div className='w-fit m-auto mt-5 bg-slate-100 md:p-20 p-2'>
            
            <LineChart
            width={350}
            height={300}
            data={data}
            >
            <XAxis dataKey="name" />
            <YAxis />
            <Line type="monotone" dataKey='total' stroke="#82ca9d" />
            <Tooltip></Tooltip>
            </LineChart>       
        </div>
    );
};

export default QuizGraph;