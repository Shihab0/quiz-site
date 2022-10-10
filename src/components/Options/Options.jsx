import React from 'react';

const Options = ({option, showCorrectOrWrong}) => {


    return (
        <div>
            <div className='text-lg font-normal w-3/4 bg-emerald-100 m-auto'>
                <h2 onClick={() => showCorrectOrWrong(option)} className='p-2 border-gray-700 m-2 cursor-pointer hover:bg-green-400'>{option}</h2>
            </div>
        </div>
    );
};

export default Options;