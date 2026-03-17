import { motion } from "motion/react";
import FadeInUp from "./FadeInUp.jsx";

const services = [
  { id: 1, title: "Poze legitimație", desc: "Fotografii realizate pentru legitimații", icon: "fa-id-badge" },
  { id: 2, title: "Poze 3×4", desc: "Fotografii pentru diverse documente", icon: "fa-id-card" },
  { id: 3, title: "Poze buletin provizoriu", desc: "Fotografii pentru buletin temporar", icon: "fa-address-card" },
  { id: 4, title: "Poze pașaport", desc: "Fotografii realizate conform cerințelor pentru pașaport", icon: "fa-passport" },
  { id: 5, title: "Poze viză 5×5", desc: "Fotografii pentru documente de viză", icon: "fa-plane" },
  { id: 6, title: "Poze studio 10×15", desc: "Fotografii realizate în studio", icon: "fa-camera-retro" },
  { id: 7, title: "Print foto 10×15", desc: "Printare fotografii de pe telefon sau stick", icon: "fa-print" },
  { id: 8, title: "Print foto 13×18", desc: "Printare fotografii în format 13×18", icon: "fa-print" },
  { id: 9, title: "Print foto 15×21", desc: "Printare fotografii în format 15×21", icon: "fa-print" },
  { id: 10, title: "Print foto 20×30", desc: "Printare fotografii în format 20×30", icon: "fa-print" },
  { id: 11, title: "Copiere casete video", desc: "Transfer video de pe VHS, MiniDV și Hi-8 pe DVD sau VHS", icon: "fa-video" },
  { id: 12, title: "Foto-video pentru nunți", desc: "Servicii de fotografiere și filmare pentru evenimente", icon: "fa-ring" },
  { id: 13, title: "Fotografii magnetice", desc: "Fotografii tip magnet disponibile în studio", icon: "fa-magnet" }
];

export default function ServiceGallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
      {services.map((service, index) => (
        <FadeInUp key={service.id} delay={index * 0.05}>
          <motion.div 
            whileHover={{ scale: 1.02, y: -5 }}
            className="glass-panel p-6 rounded-2xl h-full flex flex-col justify-center border-t-4 border-t-primary/50 hover:border-t-primary transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                <i className={`fas ${service.icon} text-primary text-xl`}></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </div>
          </motion.div>
        </FadeInUp>
      ))}
    </div>
  );
}
