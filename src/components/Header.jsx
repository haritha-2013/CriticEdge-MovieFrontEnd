import React from 'react';
import {Link} from 'react-router-dom';
import { DarkMode } from './ui/DarkMode';

export const Header = () => {
  return (
    <div className='flex items-center justify-between w-full h-32 px-20 shadow-xl'>
        <div>
            <h1 className='text 4xl font-bold'>Logo</h1>
        </div>

        <nav className='flex gap-12 font-semibold'>
    <Link>Home</Link>
    <Link>Sign In</Link>
    <Link>Create Account</Link>
    <Link>Films</Link>
        </nav>
        
        <div className='flex items-center gap-8'>
        <DarkMode />
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Journals</button>
        </div>

    </div>
  );
};

