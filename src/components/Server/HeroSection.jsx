  import  Images from '@/components/image';
  import Image from 'next/image';
  import { Twitter, Instagram, Linkedin, Play} from 'lucide-react'; // Placeholder social icons
  import { headingWrapper } from '@/cssWrapper';  
import AnimatedHeading from '../client/AnimatedHeading';
import Link from 'next/link';
import styles from '@/components/client/Animation.module.css'


  const socialIcons = [
    '/images/icons/facebook.svg',
    '/images/icons/instagram.svg',
    '/images/icons/twitter.svg',
    '/images/icons/pinterest.svg',
  ];

  const HeroSection = () => {
    return (
      <div className="flex  min-h-screen">
        {/* Left Side: Social Bar and Banner Content */}
      <div className='flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen'>

        <div className="flex flex-row  justify-around items-start md:flex-1 sm:pt-6 lg:pt-0 " data-aos="slide-right" data-aos-duration="700">
          {/* Left Bar (Social Icons) */}
          <div className="flex flex-col items-center justify-center px-6 sm:pr-8 sm:pl-12" data-aos="fade-right" data-aos-duration="1000">
            <div className="flex flex-col space-y-12  ">
              <Link href="#"><Linkedin className='text-[#777777] hover:text-[#dd4545] text-[2rem]'/></Link>
              <Link href="#"><Twitter className='text-[#777777] hover:text-[#dd4545] text-[2rem]'/></Link>
              <Link href="#"><Instagram className='text-[#777777] hover:text-[#dd4545] text-[2rem]'/></Link>
              <Link href="#"><Linkedin className='text-[#777777] hover:text-[#dd4545] text-[2rem]'/></Link>
            </div>
            <Link className=" flex-col items-center justify-center hidden md:flex " href="#">
              <span className="inline-block w-4 h-4 bg-[#dd4545] rounded-full mt-12"></span>
              <span className="h-25 w-[1px] bg-black inline-block mt-2"></span>
              <span className="text-black transform -rotate-90  whitespace-nowrap mt-8">
                SCROLL
              </span>
            </Link>
          </div>

          {/* Banner Content */}
            <div className="flex-1 z-10 p-4  w-full ">
              <div className="flex items-center mb-4 font-semibold text-[#777777] text-[1.2rem] hover:text-[#dd4545]" >
                <div className="w-10 bg-[#777777] h-[2px] rounded mr-2" ></div>
                <div className="w-2 h-2 rounded-full bg-[#dd4545] mr-2 "></div>
                <span>Innovative Ideas</span>
              </div>

              <h1 className={`${headingWrapper}`} data-aos="slide-right" data-aos-duration="900">
                <AnimatedHeading text="We Offer You "/>
                <span className="text-[#dd4545]"><AnimatedHeading text="A" delay={400}/>  <br /><AnimatedHeading text="Digital " delay={800}/> </span><AnimatedHeading text="Platform." delay={1000}/>
              </h1>

              <p className="leading-tight text-[#777777] mb-8" data-aos="slide-right" data-aos-duration="900">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="flex  items-center  sm:space-y-0 sm:space-x-8 text-sm font-semibold " data-aos="slide-right" data-aos-duration="700">
                <Link href="#" className="flex items-center text-[1rem]">
                  <div className="w-10 h-[1px]  bg-[#777777] mr-2"></div>
                  <div className="w-2 h-2 rounded-full bg-[#dd4545] mr-2"></div>
                  <span className='hover:text-[#dd4545]'>Start Now</span>
                </Link>
                <Link href="#" className="flex items-center text-base relative">
                  {/* Play button with the wave animation as its child */}
                  <div className="relative z-10 w-14 h-14 rounded-full bg-[#dd4545] flex justify-center items-center mr-2">
                    {/* The animated wave div, absolutely positioned to fill the parent */}
                    <div className={`absolute inset-0 ${styles.shadoWave}`}></div>
                    <Play fill="currentColor" className="relative" />
                  </div>
                  <span className='hover:text-[#dd4545]'>View Video</span>
                </Link>
              </div>
            </div>
        </div>
        <div className="flex-1 relative  min-h-[150px] md:min-h-screen overflow-y-hidden lg:overflow-y-visible" data-aos="slide-left" data-aos-duration="800">
          <Images src={'/images/slider-1.jpg'} width={300} height={300}/>
          </div>
      </div>
      
        {/* Right Side: Image with Zoom Effect */}
        
      </div>
    );
  };

  export default HeroSection;