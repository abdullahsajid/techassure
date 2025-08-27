import React, { useRef, useState } from "react";
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
import { CheckCircle, ChevronDown, ChevronUp } from "lucide-react";

const FeaturesData = [
  {
    id: 1,
    header: "Project Management & Industrial Solutions",
    summary: "Comprehensive packaging machinery, process optimization, and automation solutions for industrial environments.",
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
    summary: "Expert auditing services ensuring workplace safety, environmental compliance, and regulatory adherence.",
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
    summary: "Strategic consulting for process improvement, vendor selection, and operational efficiency enhancement.",
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
            summary={feature.summary}
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
  summary,
  text1,
  link,
  buttonText,
}: {
    header: string;
  summary:string,
  text1: string[];
  link: any;
  buttonText: string;
}) => {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div className="h-auto transition-all max-w-[408px] min-w-[508px] max-[500px]:min-w-full overflow-clip group bg-white/70 rounded-[23px] workCardDiv p-3">
      <h4 className="card-font font-semibold transition-all duration-300 text-[32px] mt-3 text-[#0088aa] mb-3">
        {header}
      </h4>
      <p className="text-gray-600 text-lg mb-4 leading-relaxed">
        {summary}
      </p>
      <button
        onClick={toggleExpanded}
        className="flex items-center gap-2 text-[#0088aa] hover:text-[#006688] font-semibold mb-4 transition-colors duration-200 group"
      >
        <span>{isExpanded ? 'Show Less' : 'View Details'}</span>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
        ) : (
          <ChevronDown className="w-5 h-5 transition-transform group-hover:translate-y-0.5" />
        )}
      </button>
        <div className={`overflow-hidden transition-all duration-500 ${
        isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
                <div className="space-y-3 mb-6">
          {text1.map((item, index) => (
            <div key={index} className="flex gap-3 text-gray-700 leading-relaxed">
              <CheckCircle className="w-5 h-5 text-[#DBB238] mt-0.5 flex-shrink-0" />
              <p className="text-base">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default RoadmapCard;
