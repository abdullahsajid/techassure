import React from "react";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <div id="experience" className="py-12 overflow-x-clip">
      <div className="container">
        <motion.p
          initial={{ y: 80, scale: 0.8, opacity: 0 }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          viewport={{ once: true }}
          className="text-primary origin-left font-SatoshiBold font-bold text-xl leading-[21px] tracking-widest uppercase mb-4"
        >
          Why Work With Us
        </motion.p>
      </div>

      {/* one  */}

      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: [0.34, 1.56, 0.64, 1],
        }}
        viewport={{ once: true }}
        className="w-full xl:h-[210px] origin-left md:h-[150px] sm:h-[110px] max-sm:mb-3 flex items-center relative group"
      >
        <h4 className="container text-[#0088aa] font-SatoshiBold xl:text-[64px] md:text-5xl sm:text-4xl text-2xl">
            {/* I bring emotions to <span className="text-black">UI/UX.</span> */}
            <span className="text-black">15+ years technical & managerial experience</span> across MENA & South Asia
        </h4>
      </motion.div>

      {/* two  */}

      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: [0.34, 1.56, 0.64, 1],
        }}
        viewport={{ once: true }}
        className="w-full xl:h-[230px] origin-center md:h-[150px] sm:h-[110px] max-sm:mb-3 flex items-center relative group"
      >
        <h4 className="container text-[#0088aa] font-SatoshiBold xl:text-[64px] md:text-5xl sm:text-4xl text-2xl">
          <span className="text-black">Proven track record in packaging machinery projects</span>, process optimization, <span className="text-black">warehouse automation</span>, and compliance audits
        </h4>
      </motion.div>
      {/* three  */}

      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: [0.34, 1.56, 0.64, 1],
        }}
        viewport={{ once: true }}
        className="w-full xl:h-[230px] md:h-[150px] sm:h-[110px] max-sm:mb-3 flex items-center relative group"
      >
        <h4 className="container text-[#0088aa] font-SatoshiBold xl:text-[64px] md:text-5xl sm:text-4xl text-2xl">
          Strong network of equipment suppliers, <span className="text-black"> automation integrators</span>, and <span className="text-black">compliance bodies in UAE</span>
        </h4>
      </motion.div>
      {/* four  */}

      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: [0.34, 1.56, 0.64, 1],
        }}
        viewport={{ once: true }}
        className="w-full xl:h-[230px] md:h-[150px] sm:h-[110px] max-sm:mb-3 flex items-center relative group"
      >
        <h4 className="container text-[#0088aa] font-SatoshiBold xl:text-[64px] md:text-5xl sm:text-4xl text-2xl">
          <span className="text-black">Flexible</span> — available for <span className="text-black">short-term contracts, hourly consultancy</span>, or project-based assignments
        </h4>
      </motion.div>
      
    </div>
  );
};

export default Work;
