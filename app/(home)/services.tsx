/** @format */

import React from 'react';
import { motion } from 'framer-motion';
import ServiceMarqueeOne from '@/src/components/service-marquee/service-marquee-one';
import ServiceMarqueeTwo from '@/src/components/service-marquee/service-marquee-two';
import ServiceMarqueeThree from '@/src/components/service-marquee/service-marquee-three';

const data = [
  "FMCG – Home Care",
  "Personal Care",
  "Beauty & Wellbeing",
  "Food & Beverage Manufacturing",
  "including Ice Cream Production",
  "Pharmaceuticals & Healthcare",
  "Fertilizer Manufacturing",
  "Processing",
  "Power Plants",
  "Utilities",
  "Logistics",
  "Warehousing",
  "Industrial Packaging",
  "Automation",
  "Environmental & Safety Compliance"
]

const Served = () => {
	return (
		<div
			id='services'
			className='py-12 overflow-x-clip'>
			<div className='container'>
				<motion.p
					initial={{ y: 80, scale: 0.8, opacity: 0 }}
					whileInView={{ y: 0, scale: 1, opacity: 1 }}
					transition={{
						duration: 1,
						ease: [0.34, 1.56, 0.64, 1],
					}}
					viewport={{ once: true }}
					className='text-primary origin-left font-SatoshiBold font-bold text-xl leading-[21px] tracking-widest uppercase mb-4'>
					Industries Served
        </motion.p>
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          viewport={{ once: true }}
          className='w-full origin-left flex flex-wrap gap-4 items-center relative group mb-4'>
          {data.map((item, index) => (
            <div key={index} className='inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 p-4 text-center bg-[#0088aa]/5 text-[#0088aa] border-[#0088aa]/20 hover:bg-[#0088aa]/10 transition-smooth text-sm text-[20px] font-medium'>
              {item}
            </div>
          ))}
			</motion.div>
			</div>

	

			{/* <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: [0.34, 1.56, 0.64, 1],
        }}
        viewport={{ once: true }}
        className="w-full xl:h-[150px] origin-left md:h-[120px] sm:h-[80px] h-[60px] flex items-center relative group mb-4"
      >
        <div className="absolute left-0 top-1/2 ease-in-out -translate-y-1/2 overflow-clip h-[150px] max-xl:h-[120px] max-md:h-[80px] max-sm:h-[60px] transition-all duration-500 flex items-center bg-black">
          <ServiceMarqueeOne />
        </div>
      </motion.div>


      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: [0.34, 1.56, 0.64, 1],
        }}
        viewport={{ once: true }}
        className="w-full xl:h-[150px] origin-center md:h-[120px] sm:h-[80px] h-[60px] flex items-center relative group mb-4"
      >
        <div className="absolute left-0 top-1/2 ease-in-out -translate-y-1/2 overflow-clip h-[150px] max-xl:h-[120px] max-md:h-[80px] max-sm:h-[60px] transition-all duration-500 flex items-center bg-black">
          <ServiceMarqueeTwo />
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: [0.34, 1.56, 0.64, 1],
        }}
        viewport={{ once: true }}
        className="w-full xl:h-[150px] md:h-[120px] sm:h-[80px] h-[60px] flex items-center relative group"
      >
        <div className="absolute left-0 top-1/2 ease-in-out -translate-y-1/2 overflow-clip h-[150px] max-xl:h-[120px] max-md:h-[80px] max-sm:h-[60px] transition-all duration-500 flex items-center bg-black">
          <ServiceMarqueeThree />
        </div>
      </motion.div> */}
		</div>
	);
};

export default Served;
