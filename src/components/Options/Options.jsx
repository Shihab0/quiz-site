import React from 'react';

const Options = ({option, showCorrectOrWrong}) => {


    return (
        <div>
            <div className='text-lg font-normal '>
                <h2 onClick={() => showCorrectOrWrong(option)} className='border p-2 md:w-3/5 border-gray-700 m-2 cursor-pointer hover:bg-gray-200'>{option}</h2>
            </div>
        </div>
    );
};

export default Options;