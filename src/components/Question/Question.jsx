import React from 'react';

const Question = ({questionData}) => {
    console.log(questionData);
    const {options, question, correctAnswer} = questionData;
    return (
        <div>
           <div>
            <h4 className='text-lg font-semibold mt-2 text-left'>
              <li>{question}</li>
            </h4>
           </div>
        </div>
    );
};

export default Question;