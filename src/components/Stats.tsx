import React from 'react';

const Stats = () => (
  <section className="relative w-full flex flex-col p-8 md:p-12 overflow-hidden bg-[#C5A47E] text-black font-serif italic">
    <div className="flex-1 grid grid-cols-2 md:grid-cols-4 border-t-8 border-black">
       {[ 
          {l: "FLEET CAPACITY", v: "OVER 50"}, 
          {l: "GLOBAL DESTINATIONS", v: "120+"}, 
          {l: "CLIENT FIDELITY", v: "99.9%"},
          {l: "YEARS OF SERVICE", v: "25"} 
       ].map((s, i) => (
         <div key={i} className="border-r-8 border-black border-b-8 md:border-b-0 p-8 md:p-12 flex flex-col justify-between hover:bg-black hover:text-[#C5A47E] transition-colors group">
            <span className="text-[10px] uppercase tracking-widest leading-none opacity-60 group-hover:opacity-100">{s.l}</span>
            <span className="text-6xl md:text-[8vw] leading-none tracking-tighter mt-4">{s.v}</span>
         </div>
       ))}
    </div>
    <div className="h-16 md:h-24 bg-black text-[#C5A47E] flex items-center justify-between px-12 overflow-hidden -mx-12">
       <div className="flex gap-24 animate-infinite-scroll whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-[10px] font-bold tracking-[1em] uppercase">
              ATLANTA CAR RENTALS // EXCELLENCE IN MOTION // WORLDWIDE PRESTIGE
            </span>
          ))}
       </div>
    </div>
  </section>
);

export default Stats;
