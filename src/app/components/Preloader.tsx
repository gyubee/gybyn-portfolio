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
          key="preloader-backdrop"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-[#0a0a0a]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 1,
            transition: { delay: 0.48, duration: 0 },
          }}
        >
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.05 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
            }}
          >
            <div className="mb-2 flex space-x-2">
              <span
                className="h-3 w-3 animate-bounce rounded-full bg-[#FACC15]"
                style={{ animationDelay: "0s" }}
              />
              <span
                className="h-3 w-3 animate-bounce rounded-full bg-[#4F46E5]"
                style={{ animationDelay: "0.2s" }}
              />
              <span
                className="h-3 w-3 animate-bounce rounded-full bg-[#94A3B8]"
                style={{ animationDelay: "0.4s" }}
              />
            </div>
            <span className="mt-3 text-2xl text-[#4F46E5] dark:text-indigo-400">
              Welcome to gybyn :)
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
