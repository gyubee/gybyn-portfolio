import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroTitleProps {
  onFinish: () => void;
  showContent: boolean;
}

const mainText = "Hey, I'm Gyubeen Lim";
const subTitle = "— your future software engineer.";

const HeroTitle: React.FC<HeroTitleProps> = ({ onFinish, showContent }) => {
  const [typedText, setTypedText] = useState("");
  const [showSub, setShowSub] = useState(false);
  const [exit, setExit] = useState(false);

  // Typing effect
  useEffect(() => {
    let idx = 0;
    const typing = setInterval(() => {
      setTypedText(mainText.slice(0, idx + 1));
      idx++;
      if (idx === mainText.length) {
        clearInterval(typing);
        setTimeout(() => setShowSub(true), 400);
      }
    }, 130);
    return () => clearInterval(typing);
  }, []);

  // subTitle fade-in, then disappear, then call onFinish
  useEffect(() => {
    if (showSub) {
      const timer = setTimeout(() => {
        setExit(true);
        setTimeout(() => {
          onFinish();
        }, 800); // subTitle exit duration
      }, 3000); // subTitle show duration
      return () => clearTimeout(timer);
    }
  }, [showSub, onFinish]);

  return (
    <div className="flex flex-col items-center">
      <span className="font-bold text-[#4F46E5] tracking-tight relative inline-block text-center text-4xl md:text-5xl">
        {typedText}
        <span
          className="absolute left-full ml-2 w-2 h-2 rounded-full bg-[#FACC15]"
          style={{ bottom: "0.1em" }}
        />
      </span>
      {!showContent && (
        <div className="mt-6" style={{ minHeight: '2.5rem' }}>
          <AnimatePresence>
            {showSub && !exit && (
              <motion.div
                className="text-[#94A3B8] text-3xl md:text-4xl text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: 20, transition: { duration: 0.8 } }}
                transition={{ duration: 0.7 }}
              >
                {subTitle}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default HeroTitle; 