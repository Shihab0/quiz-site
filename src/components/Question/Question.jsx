import React from 'react';
import Options from '../Options/Options';
import toast, { Toaster } from 'react-hot-toast';

const correct = () => toast.success('Correct!! You Have Done.');
const wrong = () => toast.error('Wrong!! Try Again.')

const Question = ({questionData}) => {
    console.log(questionData);
    
    const {id, options, question, correctAnswer} = questionData;
    console.log(id)
    const showCorrectOrWrong = (option) => {
        if(correctAnswer === option){
            {correct()}
        }else{
            {wrong()}
        }
    }

    return (
        <div>
           <div className='w-3/4 my-8 mx-auto bg-slate-400 p-2 rounded-lg'>
            <h4 className='text-xl font-semibold mt-7 text-left'>
              <li>{question}</li>
              {
                options.map(option => <Options showCorrectOrWrong={showCorrectOrWrong} option={option}></Options> )
              }
            </h4>
           </div>
           <Toaster />
        </div>
    );
};

export default Question;