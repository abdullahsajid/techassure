import React from "react";
import Marquee from "react-fast-marquee";
import { GoDotFill } from "react-icons/go";

const ServiceMarqueeTwo = () => {
  return (
    <Marquee speed={150} className="h-full">
      <div className="flex items-center gap-10 ">
        <GoDotFill className="xl:text-4xl md:text-3xl text-2xl text-white ms-10" />
        <h4 className="font-SatoshiBold xl:text-[64px] md:text-5xl sm:text-4xl text-2xl text-white">
          Pharmaceuticals & Healthcare
        </h4>
        <GoDotFill className="xl:text-4xl md:text-3xl text-2xl text-white" />
        <h4 className="font-SatoshiBold xl:text-[64px] md:text-5xl sm:text-4xl text-2xl text-white">
          Fertilizer Manufacturing 
        </h4>
        <GoDotFill className="xl:text-4xl md:text-3xl text-2xl text-white" />
        <h4 className="font-SatoshiBold xl:text-[64px] md:text-5xl sm:text-4xl text-2xl text-white">
          Processing
        </h4>
        <GoDotFill className="xl:text-4xl md:text-3xl text-2xl text-white" />
        <h4 className="font-SatoshiBold xl:text-[64px] md:text-5xl sm:text-4xl text-2xl text-white">
          Power Plants  
        </h4>
        <GoDotFill className="xl:text-4xl md:text-3xl text-2xl text-white" />
        <h4 className="font-SatoshiBold xl:text-[64px] md:text-5xl sm:text-4xl text-2xl text-white">
          Utilities
        </h4>
      </div>
    </Marquee>
  );
};

export default ServiceMarqueeTwo;
