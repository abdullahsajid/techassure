import React from "react";
import Marquee from "react-fast-marquee";
import { GoDotFill } from "react-icons/go";

const ServiceMarqueeThree = () => {
  return (
    <Marquee speed={150} className="h-full">
      <div className="flex items-center gap-10 ">
        <GoDotFill className="xl:text-4xl md:text-3xl text-2xl text-white ms-10" />
        <h4 className="font-SatoshiBold xl:text-[64px] md:text-5xl sm:text-4xl text-2xl text-white">
          Logistics
        </h4>
        <GoDotFill className="xl:text-4xl md:text-3xl text-2xl text-white" />
        <h4 className="font-SatoshiBold xl:text-[64px] md:text-5xl sm:text-4xl text-2xl text-white">
          Warehousing
        </h4>
        <GoDotFill className="xl:text-4xl md:text-3xl text-2xl text-white" />
        <h4 className="font-SatoshiBold xl:text-[64px] md:text-5xl sm:text-4xl text-2xl text-white">
          Industrial Packaging 
        </h4>
        <GoDotFill className="xl:text-4xl md:text-3xl text-2xl text-white" />
        <h4 className="font-SatoshiBold xl:text-[64px] md:text-5xl sm:text-4xl text-2xl text-white">
          Automation
        </h4>
        <GoDotFill className="xl:text-4xl md:text-3xl text-2xl text-white" />
        <h4 className="font-SatoshiBold xl:text-[64px] md:text-5xl sm:text-4xl text-2xl text-white">
          Environmental & Safety Compliance
        </h4>
      </div>
    </Marquee>
  );
};

export default ServiceMarqueeThree;
