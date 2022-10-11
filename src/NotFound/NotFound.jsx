import React from 'react';

const NotFound = () => {
    return (
        <div className='flex items-center justify-center  bg-gray-800 h-screen'>
            <div className='text-red-600'>
                <h1 className='font-bold text-9xl'>404</h1>
                <h2 className='font-bold text-5xl'>Not Found</h2>
            </div>
        </div>
    );
};

export default NotFound;