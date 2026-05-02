import React from 'react';
import { ArrowRight } from 'lucide-react';

const FleetGrid = () => (
  <section id="fleet" className="relative min-h-screen w-full p-8 md:p-12 overflow-hidden bg-[#050505] text-white">
    <div className="flex justify-between items-end mb-12">
      <div className="flex flex-col gap-2">
        <span className="text-[10px] uppercase tracking-[0.6em] text-[#C5A47E]">The Collection</span>
        <h2 className="text-4xl md:text-6xl font-serif tracking-tight uppercase">CURATED_FLEET</h2>
      </div>
      <button className="text-xs font-bold uppercase border-b border-[#C5A47E] text-[#C5A47E] pb-2 cursor-pointer">View Archive</button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[70vh]">
      <div className="col-span-1 md:col-span-2 md:row-span-2 bg-white/5 border border-white/5 relative group overflow-hidden h-[400px] md:h-auto">
        <img 
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2670" 
          className="w-full h-full object-cover opacity-50 sepia-[0.3] group-hover:sepia-0 group-hover:scale-105 transition-all duration-700" 
          alt="Luxury Fleet"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-8">
           <span className="text-[10px] uppercase tracking-widest text-[#C5A47E] mb-2 block font-bold">Signature Series</span>
           <span className="text-4xl font-serif italic">MAJESTIC_I</span>
        </div>
      </div>
      
      <div className="col-span-1 bg-white/5 border border-white/5 p-8 flex flex-col justify-between group hover:bg-white/10 transition-colors">
         <span className="text-[10px] opacity-20 uppercase tracking-widest font-bold">Bespoke Experience</span>
         <div>
            <span className="text-2xl font-serif font-bold uppercase block mb-4">Grand Touring</span>
            <p className="text-[10px] opacity-40 uppercase tracking-wider mb-6">Concierge Driven // Unparalleled Comfort</p>
            <ArrowRight size={24} className="opacity-20 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-[#C5A47E]" />
         </div>
      </div>
      
      <div className="col-span-1 bg-[#C5A47E] text-black p-8 flex flex-col justify-between group cursor-pointer">
         <span className="text-[10px] font-bold uppercase tracking-widest">Exclusive Access</span>
         <div>
            <span className="text-2xl font-serif font-bold uppercase block mb-2">Prestige Class</span>
            <span className="text-[10px] font-bold uppercase block mb-6">Private Invitation Only</span>
            <div className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center font-bold font-serif italic">E</div>
         </div>
      </div>
      
      <div className="col-span-1 md:col-span-2 bg-white/5 border border-white/5 p-8 flex items-center justify-between group hover:border-[#C5A47E]/30 transition-colors">
         <div className="flex flex-col">
            <span className="text-[10px] opacity-20 uppercase tracking-widest font-bold">Premium Services</span>
            <span className="text-xl md:text-2xl font-serif uppercase mt-2">Executive Mobility Solutions</span>
         </div>
         <ArrowRight size={32} className="opacity-20 group-hover:opacity-100 group-hover:translate-x-4 transition-all" />
      </div>
    </div>
  </section>
);

export default FleetGrid;
