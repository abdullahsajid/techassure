import React from "react";
import Marquee from "react-fast-marquee";
import { GoDotFill } from "react-icons/go";

const ServiceMarqueeOne = () => {
  return (
    <Marquee speed={150} className="h-full">
      <div className="flex items-center gap-10 ">
        <GoDotFill className="xl:text-4xl md:text-3xl text-2xl text-white ms-10" />
        <h4 className="font-SatoshiBold xl:text-[64px] md:text-5xl sm:text-4xl text-2xl text-[#0088aa]">
          FMCG – Home Care
        </h4>
        <GoDotFill className="xl:text-4xl md:text-3xl text-2xl text-white" />
        <h4 className="font-SatoshiBold xl:text-[64px] md:text-5xl sm:text-4xl text-2xl text-white">
          Personal Care
        </h4>
        <GoDotFill className="xl:text-4xl md:text-3xl text-2xl text-white" />
        <h4 className="font-SatoshiBold xl:text-[64px] md:text-5xl sm:text-4xl text-2xl text-white">
          Beauty & Wellbeing
        </h4>
        <GoDotFill className="xl:text-4xl md:text-3xl text-2xl text-white" />
        <h4 className="font-SatoshiBold xl:text-[64px] md:text-5xl sm:text-4xl text-2xl text-white">
          Food & Beverage Manufacturing 
        </h4>
        <GoDotFill className="xl:text-4xl md:text-3xl text-2xl text-white" />
        <h4 className="font-SatoshiBold xl:text-[64px] md:text-5xl sm:text-4xl text-2xl text-white">
          including Ice Cream Production 
        </h4>
      </div>
    </Marquee>
  );
};

export default ServiceMarqueeOne;
