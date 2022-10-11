import React from 'react';
import img from '../img/banner.jpg';

const Header = () => {
    return (
        <div className='flex bg-slate-600 text-yellow-200 p-6 text-center justify-between'>
             <div>
                <img className='w-40' src={img} alt="" />
             </div>
             <div className=''>
                <h2 className='text-xl font-bold'>Test Your Programming Knowledge!!!</h2>
                <p className='mt-3'>Go Up! Easy way to gather Knowledge by playing quiz. Target a marks and drive to play quiz.</p>
             </div>
             <div>
                <img className='w-40' src={img} alt="" />
             </div>
        </div>
    );
};

export default Header;