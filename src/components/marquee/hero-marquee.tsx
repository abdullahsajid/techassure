import React from "react";
import Marquee from "react-fast-marquee";
import { GoDotFill } from "react-icons/go";

const HeroMarquee = () => {
  return (
    <Marquee>
      <div className="h-fit overflow-clip flex items-center justify-between space-x-10">
        <h4 className="md:text-[128px] text-[90px] ms-5 font-SatoshiBlack uppercase text-black">
          Freelance Project Manager 
        </h4>
        <GoDotFill className="md:text-6xl  text-5xl"/>
        <h4 className="md:text-[128px] text-[90px] font-SatoshiBlack uppercase text-black">
          Industrial Compliance Auditor
        </h4>
      </div>
    </Marquee>
  );
};

export default HeroMarquee;
