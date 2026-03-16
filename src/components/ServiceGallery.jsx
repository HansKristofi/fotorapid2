import { motion } from "motion/react";
import FadeInUp from "./FadeInUp.jsx";

const services = [
  {
    id: "buletin",
    title: "Poze tip Buletin",
    desc: "Formate: 3×4, 4×5, 3.5×4.5 cm. Gata în 30 minute.",
    price: "De la 20 lei / set",
    img: "/fotorapid2/buletin.jpg",
    className: "col-span-1",
  },
  {
    id: "nunti",
    title: "Nunți",
    desc: "Fotografiem momentele speciale ale zilei tale. Album digital inclus.",
    price: "Prețuri la cerere",
    img: "/fotorapid2/nunti.jpg",
    className: "col-span-1",
  },
  {
    id: "evenimente",
    title: "Evenimente",
    desc: "Conferințe, petreceri, botezuri, evenimente corporate.",
    price: "Prețuri la cerere",
    img: "/fotorapid2/evenimente.jpg",
    className: "col-span-1",
  },
  {
    id: "print",
    title: "Poze printate",
    desc: "Printăm în formate 10×15, 13×18, 20×30 și mai mari pe hârtie premium.",
    price: "De la 1,5 lei / poză",
    img: "/fotorapid2/print.jpg",
    className: "col-span-1",
  }
];

export default function ServiceGallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[350px] gap-4 w-full max-w-7xl mx-auto">
      {services.map((service, index) => (
        <FadeInUp key={service.id} delay={index * 0.1} className={service.className}>
          <motion.div 
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.95 }}
            className="group relative w-full h-full rounded-2xl overflow-hidden cursor-pointer"
          >
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full bg-stone-800 flex items-center justify-center">
              <i className="fas fa-camera text-4xl text-white/10 absolute z-0"></i>
              <img 
                src={service.img} 
                alt={service.title} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105 relative z-10"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20 pointer-events-none"></div>
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 z-30 pointer-events-none">
              <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-stone-300 text-sm mb-3 line-clamp-2 md:line-clamp-none">{service.desc}</p>
              <div className="inline-block px-3 py-1 bg-primary/20 border border-primary/50 text-white rounded-full text-xs font-semibold backdrop-blur-md w-fit shadow-lg">
                <span className="text-primary-hover drop-shadow-md">{service.price}</span>
              </div>
            </div>
          </motion.div>
        </FadeInUp>
      ))}
    </div>
  );
}
