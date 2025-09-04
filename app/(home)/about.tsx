import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

const About = () => {
  const heading =
    "At TechAssure, our vision is to be the trusted leader in delivering innovative, reliable, and secure technology solutions. Backed by deep industry expertise, we simplify complexity and empower businesses to scale with confidence. We don't just provide technology — we assure performance, reliability, and growth, making us your partner in building a smarter, future-ready world.";

  return (
    <div id="about" className=" py-20">
      <div className="container">
        <motion.p
          initial={{ y: 80, scale: 0.8, opacity: 0 }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          viewport={{ once: true }}
          className="text-primary origin-center font-SatoshiBold font-[900] text-3xl leading-[21px] tracking-widest uppercase text-center mb-7"
        >
          About us
        </motion.p>
        <div className="border-2 rounded-lg p-2">
          <Character paragraph={heading} />
        </div>
      </div>
    </div>
  );
};

export default About;

export function Character({ paragraph }: { paragraph: string }) {
  const container = useRef(null);
  const [fontSize, setFontSize] = useState('large');

  // Detect screen size to adjust animation parameters
  useEffect(() => {
    const checkSize = () => {
      const element = container.current;
      if (element) {
        const computedStyle = window.getComputedStyle(element);
        const elementFontSize = parseFloat(computedStyle.fontSize);
        setFontSize(elementFontSize > 32 ? 'large' : 'small');
      }
    };

    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  // Dynamic scroll configuration based on font size
  const { scrollYProgress } = useScroll({
    target: container,
    offset: fontSize === 'large' 
      ? ["start 0.8", "start 0.20"]  // Original for large text
      : ["start 0.9", "start 0.1"],  // Adjusted for smaller text
  });

  const words = paragraph.split(" ");
  
  return (
    <div className="min-h-[300px] lg:min-h-full"> {/* Responsive min-height */}
      <h4
        ref={container}
        className="flex flex-wrap justify-start font-SatoshiBold mb-5
        font-medium text-lg md:text-xl lg:text-2xl xl:text-3xl text-center text-black leading-normal" 
        // Responsive font sizes: text-lg on mobile, xl on medium, 2xl on large, 3xl on xl
      >
        {words.map((word: string, i: number) => {
          const isHighlighted = word === "TechAssure," || word === "technology" || word === "solutions.";
          const start = i / words.length;
          const end = start + 1 / words.length;

          return (
            <Word
              key={i}
              progress={scrollYProgress}
              range={[start, end]}
              color={isHighlighted ? "text-[#0088aa]" : "text-black"}
            >
              {word}
            </Word>
          );
        })}
      </h4>
    </div>
  );
}

const Word = ({
  children,
  progress,
  range,
  color,
}: {
  children: any;
  progress: any;
  range: any;
  color: string;
}) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className={`relative mr-2 mt-1.5 ${color}`}>
      {children.split("").map((char: any, i: any) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

const Char = ({
  children,
  progress,
  range,
}: {
  children: any;
  progress: any;
  range: any;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span className="absolute opacity-30">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};