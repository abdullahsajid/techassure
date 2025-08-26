import React from "react";
import { motion } from "framer-motion";


const WorkModel = () => {
  return (
    <div id="services" className="py-12 overflow-x-clip">
      <div className="container">
        <motion.p
          initial={{ y: 80, scale: 0.8, opacity: 0 }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          viewport={{ once: true }}
          className="text-primary text-center origin-left font-SatoshiBold font-bold text-4xl leading-[21px] tracking-widest uppercase mb-4"
        >
          Work Model
        </motion.p>
      </div>
        
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
            duration: 1,
            ease: [0.34, 1.56, 0.64, 1],
        }}
        viewport={{ once: true }}
        className="w-full origin-center flex items-center justify-center relative group my-7 mt-10"
      >
        <h4 className="container text-center text-[#111] font-SatoshiBold xl:text-[64px] md:text-5xl sm:text-4xl text-2xl">
            Remote consultancy (per hour/day)
        </h4>
    </motion.div>

        <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            viewport={{ once: true }}
            className="w-full origin-center flex items-center relative group my-5"
        >
            <h4 className="container text-[#111] text-center font-SatoshiBold xl:text-[64px] md:text-5xl sm:text-4xl text-2xl">
              On-site project management (short-term)
            </h4>
        </motion.div>      
        
                <motion.div
                  initial={{ y: 80, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  viewport={{ once: true }}
                  className="w-full flex items-center relative group my-7"
                >
                  <h4 className="container text-[#111] text-center font-SatoshiBold xl:text-[64px] md:text-5xl sm:text-4xl text-2xl">
                    Retainer model for ongoing support
                  </h4>
    </motion.div>
          
    </div>
  );
};

export default WorkModel;
