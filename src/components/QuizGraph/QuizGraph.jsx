import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const QuizGraph = ({data}) => {
    console.log(data);

    return (
        <div className='w-3/4 m-auto'>
            <LineChart
            width={500}
            height={400}
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