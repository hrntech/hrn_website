"use client"
import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

function Images({src}) {

  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  return (
    <motion.div
    className="w-[100%]"
    animate={{ scale: [1, 1.2, 1] }} // zoom in, zoom out
    style={{ transformOrigin: 'right center' }} 
    transition={{
      duration: 20,       // full cycle time
      ease: 'easeInOut', // smooth start/end
      repeat: Infinity,}}  // loop forever
    >
      <img className='w-[100%] z-5' src={src} alt="banner image" />
    </motion.div>
  );
}



export default Images
