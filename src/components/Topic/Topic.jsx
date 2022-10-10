import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
    const {id, name, logo} = topic;
    return (
        <div>
            <div className='p-5'>
                <img className='w-52 m-auto' src={logo} alt="" />
                <h3 className='font-semibold text-lg'>Topics: {name}</h3>
                <button className='py-2 px-3 bg-blue-900 text-white font-bold border rounded-md'><Link to={`/quiz/${id}`}>Play Quiz</Link> </button>
            </div>
        </div>
    );
};

export default Topic;