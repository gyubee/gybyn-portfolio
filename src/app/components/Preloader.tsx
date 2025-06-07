"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onFinish: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onFinish }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence
      onExitComplete={onFinish}
    >
      {show && (
        <motion.div
          className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          {/* Bouncing Dots */}
          <div className="flex flex-col items-center">
            <div className="flex space-x-2 mb-2">
              <span className="w-3 h-3 bg-[#FACC15] rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
              <span className="w-3 h-3 bg-[#4F46E5] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
              <span className="w-3 h-3 bg-[#94A3B8] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
            </div>
            <span className="mt-3 text-[#4F46E5] text-2xl">Welcome to gybyn :)</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
