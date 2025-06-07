import React from "react";
import { motion } from "framer-motion";

const Character: React.FC = () => {
  return (
    <motion.div
      className="w-64 h-64"
      animate={{
        y: [0, -10, 0],
        rotate: [0, 2, 0]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <img src="/assets/character.svg" alt="Gyubeen Character" />
    </motion.div>
  );
};

export default Character;
