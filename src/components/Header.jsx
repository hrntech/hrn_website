"use client"
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Using Lucide React for icons
import { Twitter, Instagram, Linkedin } from 'lucide-react'; // Placeholder social icons
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Projects', href: '#' },
  { name: 'Contact Us', href: '#' },
];

const socialLinks = [
  { icon: <Twitter size={20} />, href: '#' },
  { icon: <Instagram size={20} />, href: '#' },
  { icon: <Linkedin size={20} />, href: '#' },
];

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to toggle the mobile drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="shadow-lg sticky top-0 z-50 text-[1rem] ">
      <div className=" bg-white/30 backdrop-blur-lg mx-[0] px-4 sm:px-6 lg:px-8 w-[100%] py-[.5rem]">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 py-[.5rem]">
            <a href="#" className=" focus:outline-0">
                <img className=" w-[60%]" src="/images/logo/logo.png"  alt="HRN"></img>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="  hidden md:flex md:items-center md:space-x-8 basis-[65%]  md:justify-between">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-black hover:text-[#dd4242] transition duration-300 ease-in-out font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <button className="group px-5 py-2 text-sm font-semibold text-black border hover:text-[#dd4242] transition duration-300 ease-in-out">
             <span className='inline-block rounded-full roun w-2 h-2 mr-2 bg-[#dd4242] group-hover:bg-black'></span>Let's start
          </button>
          </nav>
          

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleDrawer}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded={isDrawerOpen}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 w-full max-w-xs h-full bg-white shadow-xl z-50 transform ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="relative h-full flex flex-col p-6">
          {/* Drawer Close Button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={toggleDrawer}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          {/* Drawer Nav Links */}
          <nav className="flex-1">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block text-xl text-gray-700 hover:text-indigo-600 font-medium transition duration-300 ease-in-out p-2"
                    onClick={toggleDrawer} // Close drawer on link click
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="mt-auto pt-6 border-t border-gray-200">
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-indigo-600 transition duration-300 ease-in-out"
                >
                  <span className="sr-only">{link.icon}</span>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay to close drawer when clicking outside */}
      {/* {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleDrawer}
        ></div>
      )} */}
    </header>
  );
}

export default Header;
