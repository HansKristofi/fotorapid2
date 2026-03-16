import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function FadeInUp({ 
  children, 
  delay = 0, 
  className = "", 
  once = true 
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.21, 0.47, 0.32, 0.98], 
        delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
