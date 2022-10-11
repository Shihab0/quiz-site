import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizGraph from '../QuizGraph/QuizGraph';

const Statistics = () => {

    const data = useLoaderData();
    console.log(data.data);
    const quizData = data.data;

    return (
        <div>
            <h2 className='underline font-bold text-lg my-4'>The Graph show the number of quiz on every topic</h2>
            <QuizGraph data={quizData}></QuizGraph>
        </div>
    );
};

export default Statistics;