import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className=''>
            <div className='flex justify-between bg-slate-700 text-white text-lg py-4 px-6 font-semibold'>
               <div>
                  <h4 className='text-2xl font-bold text-yellow-500'>Test YourSelf</h4>
               </div>
               <div className='flex gap-4'>
                  {/* <Link to=''>Home</Link> */}
                  <Link to='topics'>Topics</Link>
                  <Link to='statistics'>Statistics</Link>
                  <Link to='blogs'>Blogs</Link>
               </div>
            </div>
        </div>
    );
};

export default Navbar;