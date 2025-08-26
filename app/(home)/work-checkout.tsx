"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import RoadmapCard from "@/src/components/checkout-cards";


const WorkCheckout: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const [screenSize, setScreenSize] = useState<
    "extraLarge" | "large" | "medium" | "small"
  >("large");
  const [currentPhase, setCurrentPhase] = useState<number>(1);

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "0%",
      screenSize === "extraLarge"
        ? "-50%"
        : screenSize === "large"
        ? "-110%"
        : screenSize === "medium"
        ? "-170%"
        : "-260%",
    ]
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1292) {
        setScreenSize("extraLarge");
      } else if (window.innerWidth > 992) {
        setScreenSize("large");
      } else if (window.innerWidth > 540) {
        setScreenSize("medium");
      } else {
        setScreenSize("small");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="services" className="max-sm:mt-10">
      <div ref={targetRef} className="md:h-[200vh] max-sm:hidden h-[300vh]">
        <div className="sticky top-12 case-sticky-div  min-h-screen overflow-hidden max-sm:pt-14">
          <div className="container">
            <motion.h4
              initial={{ y: 80, scale: 0.8, opacity: 0 }}
              whileInView={{ y: 0, scale: 1, opacity: 1 }}
              transition={{
                duration: 1,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              viewport={{ once: true }}
              className="font-SatoshiBold origin-left font-bold text-[64px]"
            >
              Core Freelance Services
            </motion.h4>
          </div>
          <motion.div
            style={{ x }}
            className="flex flex-nowrap items-center mt-6 gap-10 max-[500px]:gap-3 w-full lg:ms-[10.5rem] max-lg:ms-[6%] max-sm:ms-[5%]"
          >
            <RoadmapCard />
          </motion.div>
        </div>
      </div>
      <div className="container sm:hidden">
        <RoadmapCard />
      </div>
    </div>
  );
};

export default WorkCheckout;
