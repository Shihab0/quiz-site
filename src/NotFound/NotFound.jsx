import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='flex items-center justify-center  bg-gray-800 h-screen'>
            <div className='text-red-600'>
                <h1 className='font-bold text-9xl'>404</h1>
                <h2 className='font-bold text-5xl'>Not Found</h2>
                <h2 className='font-bold mt-3  text-white underline'>
                    <Link to='/'>Back to home</Link>
                </h2>
            </div>
        </div>
    );
};

export default NotFound;