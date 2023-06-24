import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen=useSelector(store=>store.nav.isMenuOpen);
    if(!isMenuOpen)return null;
    
  return (
    <div className="col-span-1 p-5 shadow-lg">
        <ul className='p-4 font-bold text-lg'> 
            <Link to="/"><li className='mb-4'>Home</li></Link>
            <li className='mb-4'>Shorts</li>
            <li className='mb-4'>Videos</li>
            <Link to="/live"><li>Live</li></Link>
        </ul>
        <h1 className='pt-5 font-bold text-xl'>Subscriptions</h1>
        <ul className='p-4 font-bold text-lg'>
            <li className='mb-4'>Music</li>
            <li className='mb-4'>Sports</li>
            <li className='mb-4'>Gaming</li>
            <li className='mb-4'>Movies</li>
        </ul>
        <h1 className='font-bold pt-5 text-xl'>Watch Later</h1>
        <ul className='p-4 font-bold text-lg'>
            <li className='mb-4'>Music</li>
            <li className='mb-4'>Sports</li>
            <li className='mb-4'>Gaming</li>
            <li className='mb-4'>Movies</li>
        </ul>
    </div>
  )
}

export default Sidebar