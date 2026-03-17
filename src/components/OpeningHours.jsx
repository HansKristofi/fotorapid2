import { motion } from "motion/react";
import FadeInUp from "./FadeInUp.jsx";

export default function OpeningHours() {
  const schedule = [
    { day: "Luni – Joi", hours: "09:00 – 17:00" },
    { day: "Vineri", hours: "09:00 – 16:00" },
    { day: "Sâmbătă – Duminică", hours: "Închis" }
  ];

  return (
    <FadeInUp delay={0.2} className="w-full">
      <div className="glass-panel p-6 sm:p-8 max-w-sm w-full mx-auto relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl">
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
            <i className="far fa-clock text-primary"></i> Program de lucru
          </h3>
          <ul className="space-y-4 mb-6">
            {schedule.map((item, idx) => (
              <li key={idx} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 last:pb-0">
                <span className="text-stone-300 font-medium">{item.day}</span>
                <span className={`font-semibold ${item.hours === 'Închis' ? 'text-red-400' : 'text-stone-100'}`}>
                  {item.hours}
                </span>
              </li>
            ))}
          </ul>
          
          <div className="bg-black/20 rounded-xl p-4 border border-white/5 space-y-2 text-sm text-stone-300 leading-relaxed shadow-inner">
            <p>
              <strong className="text-white">În caz de nevoie vă servim și în afara programului.</strong> Accesați telefonul <a href="tel:0771013142" className="text-primary hover:text-primary-light transition-colors font-bold">0771 013 142</a>.
            </p>
            <p className="border-t border-white/5 pt-2">
              Unitate Foto-Digital fondată în <strong className="text-white">1989</strong>. Dotată cu tehnică și aparatură modernă. Executăm orice fotografie pentru acte. Filmăm, pozăm orice eveniment.
            </p>
          </div>
        </div>
      </div>
    </FadeInUp>
  );
}
