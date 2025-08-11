"use client"
import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

function Images() {

  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ 
                    opacity: 0 }}
      animate={{ opacity: imageIsLoaded ? 1 : 0 }}
      transition={{ duration: 5 }}
    >
      <Image
        src="/images/1.jpg"
        alt="Description"
        width={500}
        height={300}
        onLoad={() => setImageIsLoaded(true)}
      />
    </motion.div>
  );
}



export default Images
