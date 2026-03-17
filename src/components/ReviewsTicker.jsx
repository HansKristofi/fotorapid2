import { motion, useMotionValue, useAnimation, useAnimationFrame } from "motion/react";
import { useRef, useState } from "react";

const reviews = [
  { text: "Very pleasant experience. The guy is waiting for you. He's going to put a smile on your face. Very professional.", author: "I G", rating: "5/5", source: "Google", date: "a year ago" },
  { text: "Foarte bună calitate şi executat rapid! Chiar între sărbători mi-a fost life-saving ;)", author: "Brigi Berei", rating: "5/5", source: "Google", date: "a year ago" },
  { text: "Készséges kiszolgálás, pedig egy különleges kéréssel jelentkeztem!!!!", author: "mihai hanga", rating: "5/5", source: "Google", date: "10 months ago" }
];

export default function ReviewsTicker() {
  const repeatedReviews = [...reviews, ...reviews, ...reviews, ...reviews];
  
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Manual ticker logic using animation frames so dragging works flawlessly
  useAnimationFrame((t, delta) => {
    if (isHovered || isDragging) return; // Pause on hover or drag
    
    // Move left continuously
    let moveBy = -0.5 * (delta / 16); // speed coefficient
    
    // If we've scrolled past one full set of reviews (~ width / 4)
    // we reset x to 0 to create the infinite loop effect.
    // For a robust calculation without precise measurements, we just reset 
    // when x goes too far negative and use enough duplicate arrays to be safe.
    if (containerRef.current) {
        const itemWidth = 324; // 300px + 24px gap approx
        const singleSetWidth = itemWidth * reviews.length;
        
        if (x.get() <= -singleSetWidth) {
           x.set(x.get() + singleSetWidth);
        } else {
           x.set(x.get() + moveBy);
        }
    }
  });

  return (
    <div 
      className="w-full overflow-hidden relative group py-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient masks */}
      <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-dark-card to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-dark-card to-transparent z-10 pointer-events-none"></div>

      <motion.div
        ref={containerRef}
        className="flex gap-6 w-max cursor-grab active:cursor-grabbing"
        style={{ x }}
        drag="x"
        dragConstraints={{ right: 0, left: -2000 }} // Rough constraint, enough to not fly off screen
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
      >
        {repeatedReviews.map((review, index) => (
          <div 
            key={index} 
            className="glass-panel p-6 w-[300px] shrink-0 flex flex-col justify-between"
          >
            <div>
              <div className="flex text-yellow-500 text-sm mb-3">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              {review.text && (
                <p className="text-stone-300 italic mb-4 text-sm line-clamp-4 select-none pointer-events-none">
                  "{review.text}"
                </p>
              )}
            </div>
            
            <div className="mt-auto flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary shrink-0 select-none pointer-events-none">
                {review.author.charAt(0)}
              </div>
              <div className="min-w-0 select-none pointer-events-none">
                <div className="font-bold text-white text-sm truncate">{review.author}</div>
                <div className="text-stone-400 text-xs flex items-center gap-1">
                  <i className="fab fa-google text-[10px]"></i>
                  <span>· {review.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
