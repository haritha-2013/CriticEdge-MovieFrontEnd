import React from 'react';
import {Link} from 'react-router-dom';
import { CircleUserRound, Heart } from 'lucide-react';
import { DarkMode } from '../ui/DarkMode';
import { SearchBar } from '../SearchBar';

export const UserHeader =  ({ onSeach }) => {
  return (
    <div className='flex items-center justify-between w-full h-32 px-20 shadow-xl'>
        <div>
            <h1 className='text 4xl font-bold'>Logo</h1>
        </div>

        <nav className='flex gap-12 font-semibold'>
    <Link to={'/'}>Home</Link>
    <Link to={'/movies'}>Films</Link>
    <Link to={'/movies'}>My reviews</Link>
    <SearchBar onSeach={onSeach}/>
    <CircleUserRound />
    <Heart />
        </nav>
        
        <div className='flex items-center gap-8'>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Journals</button>
        <DarkMode />
        </div>

    </div>
  );
};