import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quizData = useLoaderData();
    const quiz = quizData.data;
    // console.log(quiz)
    const {id, name, questions} = quiz;
    return (
        <div>
           <div className='bg-green-500'>
                <h2 className='text-xl font-bold p-3'>Welcome To <span className='text-amber-700'>{name}</span> Quiz</h2>
           </div>
           <div>
           {
              questions.map(questionData => <Question 
              key={id}
              questionData={questionData}
              ></Question>)
            }
           </div>
        </div>
    );
};

export default Quiz;