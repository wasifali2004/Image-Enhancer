import React, { useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activePath, setActivePath] = useState('home');

  return (
    <nav className='w-full h-20 flex items-center justify-between px-16 bg-gray-500 text-white'>
      <Link 
        to="/" 
        className='w-24'
        onClick={() => setActivePath('home')}
      >
        <img 
          src={logo} 
          alt="Company Logo" 
          className='w-full h-auto object-contain' 
        />
      </Link>

      <div className='flex items-center gap-8'>
        <div className='flex gap-12'> {/* Added container for navigation links */}
          <Link
            to="/" 
            className={`hover:text-gray-300 transition-colors text-lg ${
              activePath === 'home' ? 'font-bold underline' : ''
            }`}
            onClick={() => setActivePath('home')}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`hover:text-gray-300 transition-colors text-lg ${
              activePath === 'about' ? 'font-bold underline' : ''
            }`}
            onClick={() => setActivePath('about')}
          >
            About Us
          </Link>
          <Link 
            to="/contact" 
            className={`hover:text-gray-300 transition-colors text-lg ${
              activePath === 'contact' ? 'font-bold underline' : ''
            }`}
            onClick={() => setActivePath('contact')}
          >
            Contact Us
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;