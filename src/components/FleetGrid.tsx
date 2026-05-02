import React from 'react';
import { ArrowRight } from 'lucide-react';

const FleetGrid = () => (
  <section id="fleet" className="relative min-h-screen w-full p-8 md:p-12 overflow-hidden bg-[#050505] text-white">
    <div className="flex justify-between items-end mb-12">
      <div className="flex flex-col gap-2">
        <span className="text-[10px] uppercase tracking-[0.6em] text-[#FF3131]">The Collection</span>
        <h2 className="text-4xl md:text-6xl font-syne font-black tracking-tighter uppercase">CURATED_FLEET</h2>
      </div>
      <button className="text-xs font-bold uppercase border-b border-[#FF3131] text-[#FF3131] pb-2 cursor-pointer">View All</button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[70vh]">
      <div className="col-span-1 md:col-span-2 md:row-span-2 bg-white/5 border border-white/5 relative group overflow-hidden h-[400px] md:h-auto">
        <img 
          src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=2670" 
          className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
          alt="Luxury Fleet"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-8">
           <span className="text-[10px] uppercase tracking-widest text-[#FF3131] mb-2 block font-bold">Premium Selection</span>
           <span className="text-4xl font-syne font-black italic">EXOTIC_X</span>
        </div>
      </div>
      
      <div className="col-span-1 bg-white/5 border border-white/5 p-8 flex flex-col justify-between group hover:bg-white/10 transition-colors">
         <span className="text-[10px] opacity-20 uppercase tracking-widest font-bold">Turo Platform</span>
         <div>
            <span className="text-2xl font-syne font-bold uppercase block mb-4">Aventador SVJ</span>
            <p className="text-[10px] opacity-40 uppercase tracking-wider mb-6">Verified Host Status // Seamless Booking</p>
            <ArrowRight size={24} className="opacity-20 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-[#FF3131]" />
         </div>
      </div>
      
      <div className="col-span-1 bg-[#FF3131] text-white p-8 flex flex-col justify-between group cursor-pointer">
         <span className="text-[10px] font-bold uppercase tracking-widest">Available Now</span>
         <div>
            <span className="text-2xl font-syne font-extrabold uppercase block mb-2">SF90 Stradale</span>
            <span className="text-[10px] font-bold uppercase block mb-6">Private Reservation Required</span>
            <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center font-bold font-syne">GT</div>
         </div>
      </div>
      
      <div className="col-span-1 md:col-span-2 bg-white/5 border border-white/5 p-8 flex items-center justify-between group hover:border-[#FF3131]/30 transition-colors">
         <div className="flex flex-col">
            <span className="text-[10px] opacity-20 uppercase tracking-widest font-bold">Chauffeur Service</span>
            <span className="text-xl md:text-2xl font-syne font-bold uppercase mt-2">Executive Transport Solutions</span>
         </div>
         <ArrowRight size={32} className="opacity-20 group-hover:opacity-100 group-hover:translate-x-4 transition-all" />
      </div>
    </div>
  </section>
);

export default FleetGrid;
