import React from 'react';
import { motion } from 'framer-motion';
import ImageUpload from './ImageUpload';
import ImagePreview from './ImagePreview';
import pic2 from '../assets/pic2.jpg';
import Testimonial from '../Layout/Testimonial';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='mt-20 w-full h-auto flex flex-col items-center'>
      <div className='text-center max-w-2xl'>
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className='text-5xl font-bold mb-10 text-gray-800 '
        >
          Welcome To Image Enhancer
        </motion.h1>
      </div>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className='w-full max-w-6xl mb-10'
      >
        <img 
          src={pic2} 
          alt="Enhanced photography example" 
          className='w-full h-auto rounded-lg shadow-xl'
        />
        
        <div className='flex justify-center mt-10 bg-gray-200 '>
        <Link to='/imageEnhancer'>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className='bg-blue-600 text-white px-10 py-5 rounded-lg font-medium shadow-md hover:bg-blue-700 transition-colors cursor-pointer'
        >
          Get Started
        </motion.button>
        </Link>
       
        </div>
        
      </motion.div>

      <Testimonial/>

    </div>
  );
};

export default Home;