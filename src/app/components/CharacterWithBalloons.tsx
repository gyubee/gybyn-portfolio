import Character from "./Character";
import { motion } from "framer-motion";

const keywords = [
  { text: "# Structure & Clarity", color: "#1E293B", style: "font-semibold" },
  { text: "# Collaboration", color: "#FACC15", style: "font-semibold" },
  { text: "# Problem Solver", color: "#4F46E5", style: "font-semibold" },
  { text: "# Organization", color: "#94A3B8", style: "font-semibold" },
  { text: "# Responsibility", color: "#5C4033", style: "font-semibold" },
];

const balloonPositions = [
    { top: "-2%", left: "15%" }, 
    { top: "16%", left: "-28%" },  
    { top: "13%", left: "75%" }, 
    { top: "34%", left: "-24%" }, 
    { top: "52%", left: "-36%" }, 
];

export default function CharacterWithBalloons() {
  return (
    <div className="relative w-64 h-64">
      <Character />
      {keywords.map((kw, i) => (
        <motion.div
          key={kw.text}
          className={`absolute px-4 py-2 rounded-xl shadow-lg bg-white/80 backdrop-blur-sm text-sm whitespace-nowrap min-w-[120px] ${kw.style}`}
          style={balloonPositions[i]}
          initial={{ y: 0 }}
          animate={{ x: [0, -3, 0], y: [0, -8, 0] }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.15,
            backgroundColor: "rgba(216, 229, 242, 0.41)",
            color: kw.color,
            boxShadow: "0 4px 24px 0 rgba(0,0,0,0.12)",
          }}
        >
          <span style={{ color: kw.color }}>{kw.text}</span>
        </motion.div>
      ))}
    </div>
  );
}