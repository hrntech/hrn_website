// app/components/AOSProvider.js
'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSProvider({ children }) {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quad',
      once: true, // Animations will only happen once
      offset: 50, // Offset (in px) from the original trigger point
    });
  }, []);

  return <>{children}</>;
}