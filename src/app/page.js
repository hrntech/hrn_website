import Image from "next/image";
import Images from '@/components/image'
import HeroSection from "@/components/Server/HeroSection";
import AnimatedHeading from "@/components/client/AnimatedHeading";
import FeaturesSection from "@/components/Server/FeaturesSection";

export default function Home() {
  return (
    <div className="">
      {/* <Images/> */}
      <section className=" pb-10"><HeroSection/></section>
      <FeaturesSection/>
    </div>
  );
}
