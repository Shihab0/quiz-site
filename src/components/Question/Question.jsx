import React from 'react';
import Options from '../Options/Options';

const Question = ({questionData}) => {
    console.log(questionData);

    const {id, options, question, correctAnswer} = questionData;
    console.log(id)
    const showCorrectOrWrong = (option) => {
        if(correctAnswer === option){
            alert('correct')
        }else{
            alert(`wrong, correct ans is ${correctAnswer}`)
        }
    }

    return (
        <div>
           <div className='w-3/4 m-auto'>
            <h4 className='text-xl font-semibold mt-7 text-left'>
              <li>{question}</li>
              {
                options.map(option => <Options showCorrectOrWrong={showCorrectOrWrong} option={option}></Options> )
              }
            </h4>
           </div>
        </div>
    );
};

export default Question;