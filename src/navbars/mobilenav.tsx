import './navbar.css';
import * as React from "react";
import { motion, useCycle } from "framer-motion";
import { useRef, useEffect } from 'react';
import { MenuToggle } from '../atoms/MenuToggle.tsx';
import { Link } from 'react-router-dom';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 0.3}px at 30px 30px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(22px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export const useDimensions = (ref) => {
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setDimensions({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [ref]);

  return dimensions;
};

function MobileNav() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
}

const navvariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <motion.ul className="mobile-nav-list" variants={navvariants}>
    {itemIds.map(i => (
      <MenuItem i={i} key={i} />
    ))}
  </motion.ul>
);

const itemIds = ['Home','About','Skills','Certificates','Project'];

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
export const MenuItem = ({ i }) => {
  //const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      className="mobile-nav-item"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="text-white self-center">
        <Link to="#" onClick={() => scrollToSection(i.toLowerCase())} className="text-white hover:text-gray-400">
              {i}
        </Link>
        
      </div>
    </motion.li>
  );
};

export default MobileNav;
