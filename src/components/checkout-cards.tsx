import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

// import HostGuru from "@assets/host-guru-img.png";
// import Savor from "@assets/savor-img.png";
// import Qryptum from "@assets/qryptum-img.png";
import Image, { StaticImageData } from "next/image";
import RealWord from "@assets/real-world-img.png";
import { BsDot } from "react-icons/bs";
import { IoIosArrowRoundDown } from "react-icons/io";
import JelloWrapper from "./jelly-animation";  

const FeaturesData = [
  {
    id: 1,
    header: "Project Management & Industrial Solutions",
    // image: HostGuru,
    txt1: [
      "Packaging machinery — business case development, vendor negotiations, evaluation, capacity utilization assessment, URS (User Requirement Specification), layout optimization, cost analysis.",
      "Process optimization — capacity utilization review, equipment selection and optimization, vendor negotiation, and efficiency evaluation.",
      "Automation projects — conveyors, sorters, pick-and-place systems, control and monitoring systems for manufacturing and logistics.",
      "Warehouse space optimization — layout planning, material flow design, and storage solutions.",
      "Logistics automation — automated sorting, scanning, loading and unloading systems for faster turnaround.",
      "Utilities equipment management — compressors, boilers, chillers, HVAC, and other plant support systems.",
    ],
    link: "#",
    buttonText: "Visit Site",
  },
  {
    id: 2,
    header: "Compliance & Technical Auditing",
    // image: Savor,
    txt1: [
      "Instrumentation & sensors — calibration and deployment for process and environment monitoring.",
      "Air quality monitoring — dust monitoring and optimization programs for workplace safety and compliance.",
      "Noise monitoring — Compliance check to meet local legislations and global HSE standards.",
      "Health compliance audits — workplace hygiene, PPE standards, and environmental health compliance.",
      "Enzyme audits — enzyme handling, equipment compliance, and audits for HC (Home Care) setups, food, pharma, and industrial applications.",
      "Hygiene audits — factory and warehouse hygiene inspections to meet ISO, HACCP, and local regulations.",
      "Safety compliance - project safety program, site safty framework development, machinery safety compliance and auditing"
    ],
    link: "#",
    buttonText: "Install App",
  },
  {
    id: 3,
    header: "Process & Vendor Advisory",
    // image: Qryptum,
    txt1: [
      "End-to-end process improvement — reducing downtime, improving throughput, and enhancing energy efficiency.",
      "Vendor evaluation & selection based on performance, compliance, and cost",
      "SOP creation and compliance documentation for audits & tenders",
      "Efficiency improvement programs for manufacturing and supply chain"
    ],
    link: "#",
    buttonText: "Visit Site",
  }
];

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const RoadmapCard = () => {
  return (
    <div className="flex max-sm:flex-col max-sm:gap-5 items-center md:gap-x-10 gap-x-2 text-white">
      <motion.h4
                    initial={{ y: 80, scale: 0.8, opacity: 0 }}
                    whileInView={{ y: 0, scale: 1, opacity: 1 }}
                    transition={{
                      duration: 1,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                    viewport={{ once: true }}
                    className="font-SatoshiBold origin-left font-bold text-[24px] text-primary hidden max-sm:flex"
                  >
                    Core Freelance Services
                  </motion.h4>
      {FeaturesData.map((feature:any) => (
        <motion.div
          initial={{ y: 80, scale: 0.8, opacity: 0 }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          viewport={{ once: true }}
          key={feature.id}
        >
          <TiltCard
            header={feature.header}
            text1={feature.txt1}
            // image={feature.image}
            link={feature.link}
            buttonText={feature.buttonText}
          />
        </motion.div>
      ))}
    </div>
  );
};

const TiltCard = ({
  header,
  text1,
  link,
  buttonText,
}: {
  header: string;
  text1: string[];
  link: any;
  buttonText: string;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    // hover:animate-jello-soft
    // <JelloWrapper>
    <motion.div className="h-auto transition-all max-w-[408px] min-w-[508px] max-[500px]:min-w-full overflow-clip group bg-white/70 rounded-[23px] workCardDiv p-3">
      <h4 className="card-font font-semibold transition-all duration-300 text-[32px] mt-3 text-[#0088aa] mb-3">
        {header}
      </h4>
      {text1.map((item, index) => (
        <p key={index} className="text-[#999999] flex gap-x-2 text-[18px] space-y-3 transition-all duration-300 mb-3 card-font leading-relaxed">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#DBB238" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check h-5 w-5 text-accent mt-0.5 flex-shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
          {item}
        </p>
      ))}
      {/* <div className="lg:absolute lg:-bottom-[15%] lg:group-hover:bottom-10 bottom-10 transition-all duration-300 lg:left-1/2 lg:-translate-x-1/2">
        <button
          onClick={() => window.open(link, "_blank")}
          className="bg-primary max-lg:mx-auto max-lg:mt-2 gap-2 px-4 whitespace-nowrap w-[145px] transition-all duration-300 flex items-center relative h-[48px] rounded-[40px] text-white font-medium group text-base overflow-clip"
        >
          {buttonText}
          <div className="min-w-[30px] absolute right-3 lg:-right-[30%] lg:group-hover:right-3 transition-all duration-500 h-[30px] flex items-center justify-center rounded-full bg-white">
            <IoIosArrowRoundDown className="text-primary text-2xl lg:group-hover:-rotate-90 lg:delay-200 -rotate-90 duration-500" />
          </div>
        </button>
      </div> */}
    </motion.div>
    // </JelloWrapper>
  );
};

export default RoadmapCard;
