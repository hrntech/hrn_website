import React from 'react'
import Image from 'next/image';
import NewsLetter from './client/NewsLetter';

function Footer() {
  const css = 'text-[#777777] text-[1rem]'
  return (
    <footer className='pt-10 '>
      <div className="flex flex-wrap justify-between px-5 columns-md-2 columns-1">
        <div className="news-letter  md:w-[100%] lg:w-[40%]">
          <div className="footer-logo relative ">
            <Image className=" object-cover  z-10 relative" src="/images/logo/logo.png" width={100} height={120} alt="HRN TEch Solutions"></Image>
          </div>
          <p className='sm:w-[50%] lg:w-[100%] my-10 text-[#777777]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique accusamus consectetur vero soluta corporis pariatur consequuntur. Pariatur voluptates totam sunt. Maiores impedit vel, veniam debitis nostrum ipsam explicabo voluptatum excepturi.</p>
          <div className="subscribe flex ">
            <NewsLetter/>
          </div>
        </div>
        <div className="max-w-5xl mt-5 sm:mt-0 py-12 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Us */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
            <p className="text-[#777777]  hover:text-[#dd4242]">
              No: 58 A, East Madison Street,<br />
              Baltimore, MD, USA 4508
            </p>
            <p className="mt-4 text-[#777777] hover:text-[#dd4242]">
              Phone : +000 - 123 - 456789
            </p>
            <p className="mt-4 text-[#777777] hover:text-[#dd4242]">
              Mail : info@example.com
            </p>
            <p className="mt-4 text-[#777777] hover:text-[#dd4242]">
              Working Hours : 8hrs
            </p>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Services</h2>
            <ul className="space-y-3 text-[#777777] ">
              <li className='hover:text-[#dd4242]'>Branding &amp; Identity</li>
              <li className='hover:text-[#dd4242]'>Web Design &amp; Development</li>
              <li className='hover:text-[#dd4242]'>Mobile App Development</li>
              <li className='hover:text-[#dd4242]'>UI &amp; UX Designing</li>
              <li className='hover:text-[#dd4242]'>Digital Marketing</li>
            </ul>
          </div>
        </div>

      </div>
      <hr className='text-[#777777] mb-5'/>
      <div className={`${css} text-center`}>Copyright &copy; All Right Reserved By HRN Tech Solutions</div>
    </footer>
  )
}

export default Footer;
