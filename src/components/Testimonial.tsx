import React from 'react';

const Testimonial = () => (
  <section className="relative min-h-[70vh] w-full flex items-center justify-center p-8 md:p-24 overflow-hidden bg-black text-white">
    <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden select-none">
       <span className="text-[40vw] font-syne font-black italic absolute -top-20 -left-20">"</span>
    </div>
    <div className="relative z-10 text-center max-w-5xl">
       <h2 className="text-3xl md:text-6xl font-light font-syne leading-tight tracking-tight mb-20 italic">
        "Great team, great experience, great support, and great vehicle! 10/10 would repeat!"
       </h2>
       <div className="flex flex-col items-center gap-4">
          <div className="w-24 h-[1px] bg-[#FF3131]" />
          <span className="text-xs font-bold uppercase tracking-[0.8em] text-[#FF3131]">Alex // VERIFIED_CLIENT</span>
       </div>
    </div>
  </section>
);

export default Testimonial;
