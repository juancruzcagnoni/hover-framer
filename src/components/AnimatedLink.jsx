import React from "react";
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

const AnimatedLink = ({ text, href = "#" }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black sm:text-7xl md:text-8xl lg:text-7xl font-inter"
      style={{
        lineHeight: 1.2,
      }}
    >
      <div className="relative h-full">
        <div className="relative">
          {text.split("").map((letter, i) => (
            <motion.span
              key={`top-${i}`}
              variants={{
                initial: { y: 0 },
                hovered: { y: "-120%" },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>
        <div className="absolute inset-0">
          {text.split("").map((letter, i) => (
            <motion.span
              key={`bottom-${i}`}
              variants={{
                initial: { y: "120%" },
                hovered: { y: 0 },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block text-gray-500"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};

export default AnimatedLink;