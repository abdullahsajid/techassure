import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const About = () => {
  const heading =
    "I’m a results-driven Project Manager and Certified Auditor with a strong engineering background and extensive expertise in packaging solutions, industrial automation, warehouse optimization, and operational compliance. I help organizations plan, execute, and optimize technical projects while ensuring compliance with global standards. My approach blends technical know-how with strategic oversight to deliver cost savings, operational efficiency, and compliance excellence.";

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
          className="text-primary origin-center font-SatoshiBold text-3xl leading-[21px] tracking-widest uppercase text-center mb-7"
        >
          About me
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
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.8", "start 0.20"],
  });

  const words = paragraph.split(" ");
  return (
    <h4
      ref={container}
      className="flex flex-wrap justify-start font-SatoshiBold mb-5
      font-medium xl:text-[64px] lg:text-5xl sm:text-4xl text-3xl max-[440px]:text-2xl text-center text-black leading-normal"
    >
      {words.map((word: string, i: number) => {
        const isHighlighted = word === "UI/UX" || word === "designer";
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <Word
            key={i}
            progress={scrollYProgress}
            range={[start, end]}
            color={isHighlighted ? "text-[#EB5939]" : "text-black"}
          >
            {word}
          </Word>
        );
      })}
    </h4>
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
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
