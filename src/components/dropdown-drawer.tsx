import { SiLinkedin } from "react-icons/si";
import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ImBehance2 } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { Linkedin, Mail, Phone } from "lucide-react";
// import uri from "../constants/external-links";

export default function Example() {
  return (
    <div className="relative z-[9999] ">
      <Nav />
    </div>
  );
}

const Nav = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <HamburgerButton active={active} setActive={setActive} />
      <AnimatePresence>
        {active && <LinksOverlay setActive={setActive} />}
      </AnimatePresence>
    </>
  );
};

const LinksOverlay = ({
  setActive,
}: {
  setActive: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <nav className="fixed right-4  top-4 z-40 h-[calc(100vh_-_52px)] w-[calc(100%_-_32px)] overflow-hidden">
      <LinksContainer setActive={setActive} />
      <FooterCTAs setActive={setActive} />
    </nav>
  );
};

const LinksContainer = ({
  setActive,
}: {
  setActive: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <motion.div className="space-y-4 p-12 pl-4 md:pl-20">
      {LINKS.map((l, idx) => (
        <NavLink key={l.title} href={l.href} idx={idx} setActive={setActive}>
          {l.title}
        </NavLink>
      ))}
    </motion.div>
  );
};

const NavLink = ({
  children,
  href,
  idx,
  setActive,
}: {
  children: ReactNode;
  href: string;
  idx: number;
  setActive: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // Close the drawer after scrolling completes (smooth scrolling typically takes 500-1000ms)
      setTimeout(() => setActive(false), 600);
    } else {
      // If element doesn't exist, still close the drawer
      setActive(false);
    }
  };

  return (
    <motion.a
      initial={{ opacity: 0, y: -8 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.75 + idx * 0.125,
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
      exit={{ opacity: 0, y: -8 }}
      href={href}
      onClick={handleClick}
      className="block text-5xl font-semibold text-white transition-colors hover:text-violet-50 md:text-7xl"
    >
      {children}.
    </motion.a>
  );
};

const HamburgerButton = ({
  active,
  setActive,
}: {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <motion.div
        initial={false}
        animate={active ? "open" : "closed"}
        variants={UNDERLAY_VARIANTS}
        style={{ top: 12, right: 12 }}
        className="fixed z-10 rounded-xl bg-primary shadow-lg shadow-violet-800/20 "
      />

      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className={`group fixed right-3 top-3 z-50 h-14 w-14 bg-white/0 transition-all hover:bg-white/20 ${
          active ? "rounded-bl-xl rounded-tr-xl" : "rounded-xl"
        }`}
      >
        <motion.span
          variants={HAMBURGER_VARIANTS.top}
          className="absolute block h-[3px] w-6 bg-white"
          style={{ y: "-50%", left: "50%", x: "-50%" }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.middle}
          className="absolute block h-[3px] w-6 bg-white"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.bottom}
          className="absolute block h-[3px] w-4 bg-white"
          style={{ x: "150%", y: "200%" }}
        />
      </motion.button>
    </>
  );
};

const FooterCTAs = ({
  setActive,
}: {
  setActive: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleContactClick = () => {
    // Close the drawer when contact button is clicked
    setActive(false);
  };

  return (
    <>
      <div className="absolute bottom-6 left-6 flex gap-4 md:flex-col">
        <motion.a
          initial={{ opacity: 0, y: -8 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay: 0.5,
              ease: "easeInOut",
            },
          }}
          exit={{ opacity: 0, y: -8 }}
        >
          <div className="flex items-center gap-4">
            <Phone
              onClick={() => window.open("http://wa.me/+971525850238", "_blank")}
              className="text-white text-3xl -mt-1 -mr-1"
            />
            <Linkedin
              onClick={() => window.open("https://www.linkedin.com/in/mariam-waris", "_blank")}
              className="text-white text-2xl"
            />
            <Mail
              onClick={() => window.open("mailto:waris.mariam@outlook.com", "_blank")}
              className="text-white text-2xl"
            />
          </div>
        </motion.a>
      </div>
    </>
  );
};

const LINKS = [
  { title: "Home", href: "#hero" },
  { title: "About", href: "#about" },
  { title: "Experience", href: "#experience" },
  { title: "Services", href: "#services" },
];

const UNDERLAY_VARIANTS = {
  open: {
    width: "calc(100% - 32px)",
    height: "calc(100vh - 32px)",
    transition: { type: "spring", mass: 3, stiffness: 400, damping: 50 },
  },
  closed: {
    width: "56px", // Match hamburger size
    height: "56px", // Match hamburger size
    transition: {
      delay: 0.75,
      type: "spring",
      mass: 3,
      stiffness: 400,
      damping: 50,
    },
  },
};

const HAMBURGER_VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      opacity: 0, // 👈 hide when opened
    },
    closed: {
      opacity: 1, // 👈 show when closed
    },
  },
};
