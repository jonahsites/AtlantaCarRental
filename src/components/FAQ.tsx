import React from 'react';

const FAQ = () => (
  <section id="info" className="relative min-h-screen w-full flex flex-col p-8 md:p-12 overflow-hidden bg-black text-white font-black">
    <div className="flex justify-between items-start mb-16 border-b border-white pb-8">
      <h2 className="text-6xl md:text-9xl font-syne uppercase tracking-tighter">I N F O .</h2>
      <div className="text-right">
        <span className="text-xs opacity-40 block">Operational clearance</span>
        <span className="text-xs opacity-40 block">System_Data_V.2026</span>
      </div>
    </div>
    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-1 px-1">
      {[ 
         {q: "MINIMUM AGE?", a: "Operational clearance requires 25+ with verified credentials." },
         {q: "INSURANCE?", a: "Comprehensive shield protocols active on all sorties. Turo provides platform protection, private rentals require verification." },
         {q: "DELIVERY?", a: "Synchronized drop-off within 25 mile radius of Gloucester / PHL Airport." },
         {q: "DEPOSIT?", a: "Refundable security hold applied to crypto or fiat depending on asset tier." }
      ].map((item, i) => (
        <div key={i} className="border border-white/10 p-8 md:p-12 hover:bg-white hover:text-black hover:border-white transition-all group flex flex-col justify-between cursor-default">
           <span className="text-xl md:text-2xl uppercase italic font-syne group-hover:text-[#FF3131] transition-colors">{item.q}</span>
           <p className="text-xs font-bold uppercase tracking-widest leading-loose mt-4 opacity-40 group-hover:opacity-100">{item.a}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FAQ;
