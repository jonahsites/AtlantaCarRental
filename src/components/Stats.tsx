import React from 'react';

const Stats = () => (
  <section className="relative w-full flex flex-col p-8 md:p-12 overflow-hidden bg-[#FF3131] text-white font-syne font-black italic">
    <div className="flex-1 grid grid-cols-2 md:grid-cols-4 border-t-8 border-black">
       {[ 
          {l: "ACTIVE_FLEET", v: "42+"}, 
          {l: "TOTAL_SORTIES", v: "1,200+"}, 
          {l: "CLIENT_SAT", v: "99.8%"},
          {l: "RADIUS_MI", v: "25"} 
       ].map((s, i) => (
         <div key={i} className="border-r-8 border-black border-b-8 md:border-b-0 p-8 md:p-12 flex flex-col justify-between hover:bg-black hover:text-[#FF3131] transition-colors group">
            <span className="text-[10px] uppercase tracking-widest leading-none opacity-60 group-hover:opacity-100">{s.l}</span>
            <span className="text-6xl md:text-[8vw] leading-none tracking-tighter mt-4">{s.v}</span>
         </div>
       ))}
    </div>
    <div className="h-16 md:h-24 bg-black text-[#FF3131] flex items-center justify-between px-12 overflow-hidden -mx-12">
       <div className="flex gap-24 animate-infinite-scroll whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-[10px] font-bold tracking-[1em] uppercase">
              OVER THE EDGE SERVICES // SYSTEM_STABLE_DATA_FLOWING // EST. 2024
            </span>
          ))}
       </div>
    </div>
  </section>
);

export default Stats;
