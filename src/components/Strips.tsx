import React from 'react';
import { ArrowRight } from 'lucide-react';

const Strips = () => (
  <section className="relative h-screen w-full flex overflow-hidden bg-black text-white font-syne font-black italic">
    {["HERITAGE", "PRIVATE", "LOGISTICS", "CONCIERGE"].map((cat, i) => (
      <div key={i} className="flex-1 border-r border-white/10 group cursor-pointer relative overflow-hidden hover:flex-[3] transition-all duration-1000">
         <div className="absolute inset-0 bg-[#C5A47E]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
         <div className="h-full flex flex-col items-center justify-center">
            <span className="text-[12vw] uppercase font-serif leading-none vertical-text tracking-tighter opacity-20 group-hover:opacity-100 group-hover:text-[#C5A47E] transition-all duration-700 whitespace-nowrap">
              {cat}
            </span>
         </div>
         <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-0 group-hover:opacity-100 transition-all translate-y-8 group-hover:translate-y-0 delay-100 duration-500">
            <span className="text-[10px] not-italic tracking-[0.4em] uppercase font-bold">Discover_Archive</span>
            <div className="w-10 h-10 rounded-full border border-[#C5A47E]/20 flex items-center justify-center">
              <ArrowRight size={20} className="-rotate-90 group-hover:translate-y-1 transition-transform group-hover:text-[#C5A47E]" />
            </div>
         </div>
      </div>
    ))}
  </section>
);

export default Strips;
