import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className=''>
            <div className='flex justify-between bg-slate-700 text-white text-lg py-4 px-6 font-semibold'>
               <div>
                  <h4 className='text-3xl font-bold text-yellow-500'>
                  <FontAwesomeIcon className='inline-block' icon={faLightbulb}></FontAwesomeIcon> <span className='md:inline-block hidden'>Test YourSelf</span></h4>
               </div>
               <div className='flex gap-5 '>
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