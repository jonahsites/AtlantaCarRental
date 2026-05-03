import React from 'react';

const FAQ = () => (
  <section id="info" className="relative min-h-screen w-full flex flex-col p-8 md:p-12 overflow-hidden bg-black text-white font-black">
    <div className="flex justify-between items-start mb-16 border-b border-white pb-8">
      <h2 className="text-6xl md:text-9xl font-serif uppercase tracking-tighter">I N F O .</h2>
      <div className="text-right font-serif italic">
        <span className="text-xs opacity-40 block">Global Concierge</span>
        <span className="text-xs opacity-40 block">Membership Details</span>
      </div>
    </div>
    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-1 px-1">
      {[ 
         {q: "MEMBERSHIP?", a: "Access to the Elysian Fleet is granted through private invitation or referral from an active member." },
         {q: "CONCIERGE?", a: "Our dedicated attendants are available 24/7 to manage your transport requirements across all major capitals." },
         {q: "BESPOKE?", a: "Every engagement is tailored to your specific preferences, from climate settings to preferred vintage selection." },
         {q: "GLOBAL?", a: "Services are maintained through a networked alliance of premier asset providers globally." }
      ].map((item, i) => (
        <div key={i} className="border border-white/10 p-8 md:p-12 hover:bg-white hover:text-black hover:border-white transition-all group flex flex-col justify-between cursor-default">
           <span className="text-xl md:text-2xl uppercase italic font-serif group-hover:text-[#C5A47E] transition-colors">{item.q}</span>
           <p className="text-xs font-bold uppercase tracking-widest leading-loose mt-4 opacity-40 group-hover:opacity-100">{item.a}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FAQ;
