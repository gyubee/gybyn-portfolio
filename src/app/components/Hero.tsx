import React, { useState } from "react";
import { motion } from "framer-motion";
import HeroTitle from "./HeroTitle";

const Hero: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-center items-center bg-[#F9FAFB] overflow-hidden">
        {showContent && (
          <div className="flex flex-col items-center text-center space-y-6 px-4 mt-3">
            <motion.div
              className="mb-10 w-70 h-70 rounded-full border-4 border-[#FACC15] bg-white flex items-center justify-center overflow-hidden shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="/profile.jpg"
                alt="Gyubeen Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>
          </div>
        )}
        <div className="flex flex-col items-center text-center">
          <HeroTitle onFinish={() => setShowContent(true)} showContent={showContent} />
        </div>
        {showContent && (
          <div className="flex flex-col items-center text-center space-y-6 px-4 mt-8">
            <motion.h3
              className="text-2xl md:text-3xl font-semibold text-[#94A3B8]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              A Full-Stack Developer
            </motion.h3>
            <motion.p
              className="text-lg md:text-xl text-gray-700 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              I build with <span className="inline border-b-2 border-[#FACC15] align-baseline">structure</span>,<br />
              grow through <span className="inline border-b-2 border-[#FACC15] align-baseline">feedback</span>, and design for <span className="inline border-b-2 border-[#FACC15] align-baseline">users</span>.
            </motion.p>
            <a
              href="/cv.pdf"
              download
              className="mt-6 inline-block px-6 py-3 bg-[#4F46E5] text-white font-semibold rounded-lg shadow hover:bg-indigo-800 transition-colors duration-200"
            >
              Download CV
            </a>
            {/* Down Arrow Button */}
            <button
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
              className="mt-20 w-12 h-12 flex items-center justify-center text-[#4F46E5] rounded-full hover:bg-[#4F46E5] hover:text-white transition-colors duration-200"
              aria-label="Scroll Down"
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="30 18 20 28 10 18"></polyline>
              </svg>
            </button>
          </div>
        )}
      </section>
      <div id="hero-end" style={{ height: 1 }} />
    </>
  );
};

export default Hero;
