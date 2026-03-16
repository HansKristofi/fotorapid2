import { motion } from "motion/react";

export default function PhotographyBackground() {
  // Generate random floating elements representing camera lenses/apertures
  const elements = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    size: Math.random() * 150 + 50,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 20,
    delay: Math.random() * 10,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 via-dark-bg/60 to-dark-bg z-0"></div>

      {/* Floating lens/aperture shapes */}
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute rounded-full border border-white/5 bg-gradient-to-tr from-white/5 to-transparent backdrop-blur-[2px]"
          style={{
            width: el.size,
            height: el.size,
            left: `${el.x}%`,
            top: `${el.y}%`,
          }}
          animate={{
            y: ["0%", "-40%", "20%", "0%"],
            x: ["0%", "20%", "-20%", "0%"],
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: el.duration,
            ease: "linear",
            repeat: Infinity,
            delay: el.delay,
          }}
        >
          {/* Inner ring for lens effect */}
          <div className="absolute inset-4 rounded-full border border-white/10"></div>
        </motion.div>
      ))}

      {/* Subtle grid overlay to give a "viewfinder" feel */}
      <div 
        className="absolute inset-0 z-10 opacity-[0.03]" 
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Crosshairs indicative of a camera focus point */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 rounded-full z-10 hidden md:block">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-4 bg-primary/40"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[1px] h-4 bg-primary/40"></div>
        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-[1px] bg-primary/40"></div>
        <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-4 h-[1px] bg-primary/40"></div>
      </div>
    </div>
  );
}
