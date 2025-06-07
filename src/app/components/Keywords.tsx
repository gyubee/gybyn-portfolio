import React from "react";
import { motion } from "framer-motion";

const keywords = [
  "React",
  "TypeScript",
  "Node.js",
  "TailwindCSS",
  "GraphQL",
  "Docker",
];

const bubbleVariants = {
  float: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Keywords: React.FC = () => {
  return (
    <>
      {keywords.map((word, i) => (
        <motion.div
          key={word}
          className="absolute px-3 py-1 bg-yellow-400 text-white rounded-full shadow-lg cursor-default select-none"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + (i % 2) * 70}%`,
            fontSize: "0.9rem",
            whiteSpace: "nowrap",
          }}
          variants={bubbleVariants}
          animate="float"
          transition={{ delay: i * 0.3 }}
          whileHover={{ scale: 1.1, backgroundColor: "#FBBF24" }}
        >
          {word}
        </motion.div>
      ))}
    </>
  );
};

export default Keywords;
