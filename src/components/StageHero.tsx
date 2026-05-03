import React from 'react';
import { motion } from 'motion/react';
import { Zap } from 'lucide-react';

const StageHero = () => (
  <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black text-white font-light">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2670" 
        className="w-full h-full object-cover opacity-30 grayscale" 
        alt="" 
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-radial-[at_50%_50%] from-transparent via-black/60 to-black" />
    </div>
    
    <div className="relative z-10 flex flex-col items-center text-center">
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.3, y: 0 }}
        transition={{ duration: 1 }}
        className="text-[11px] tracking-[1.5em] uppercase mb-8 border-b border-white/10 pb-4"
      >
        Atlanta Car Rentals
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-6xl md:text-9xl font-serif tracking-[0.1em] uppercase mb-16 px-12 leading-tight"
      >
        EXCELLENCE <br /> <span className="font-light italic text-[#C5A47E]">DEFINED</span>
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex gap-12 md:gap-24 items-center"
      >
        <span className="text-xl md:text-2xl italic font-serif opacity-50">Since 1998</span>
        <button className="w-16 h-16 border border-[#C5A47E]/30 rounded-full flex items-center justify-center hover:bg-[#C5A47E] hover:border-[#C5A47E] hover:text-black transition-all duration-500 cursor-pointer">
          <div className="w-2 h-2 bg-[#C5A47E] rounded-full animate-pulse" />
        </button>
        <span className="text-xl md:text-2xl italic font-serif opacity-50">Global Reach</span>
      </motion.div>
    </div>
  </section>
);

export default StageHero;
