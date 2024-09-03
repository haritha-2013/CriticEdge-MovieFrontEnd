import React from 'react';
import {Link} from 'react-router-dom';
import { DarkMode } from './ui/DarkMode';


export const Header = () => {
  return (
    <div className='flex items-center justify-between w-full h-32 px-20 shadow-xl bg-cover'>
        <div>
        <img src="https://res.cloudinary.com/decxaepjd/image/upload/v1725304082/LOGO_mxbz99.png" alt="" />
        </div>

        <nav className='flex gap-12 font-semibold'>
    <Link to={'/'}>Home</Link>
    <Link to={'/login'}>Sign In</Link>
    <Link to={'/signup'}>Create Account</Link>
    <Link to={'/movies'}>Films</Link>
  
   
    
        </nav>
        
        <div className='flex items-center gap-8'>
        <DarkMode />
        <Link to={'/signup'}>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Journals</button>
        </Link>
        
        </div>

    </div>
  );
};

