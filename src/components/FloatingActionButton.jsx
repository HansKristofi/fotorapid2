import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export default function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on scroll down, typical for FABs
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 md:hidden flex flex-col gap-3"
        >
          {/* Phone Button */}
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="tel:+40771013142"
            className="w-14 h-14 bg-stone-800 text-white rounded-full flex items-center justify-center shadow-lg border border-white/10"
            aria-label="Sună-ne"
          >
            <i className="fas fa-phone-alt text-xl"></i>
          </motion.a>

          {/* WhatsApp Button */}
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://wa.me/40771013142?text=Bună!%20Vreau%20să%20dezvolt%20niște%20poze..."
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)]"
            aria-label="Scrie-ne pe WhatsApp"
          >
            <i className="fab fa-whatsapp text-3xl"></i>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
