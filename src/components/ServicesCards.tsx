import React from 'react';

const services = [
  {
    n: "Executive Suite",
    p: "Member Exclusive",
    d: "Access our most prestigious vehicles with full concierge support and seamless reservations.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2670"
  },
  {
    n: "Heritage Fleet",
    p: "Curated Classics",
    d: "A selection of timeless automotive icons restored to a level of perfection that transcends time.",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=2670"
  },
  {
    n: "Private Chauffeur",
    p: "Elite Escort",
    d: "Professional attendants providing discreet, secure, and impeccably timed transport services.",
    image: "https://images.unsplash.com/photo-1449965042940-062e75e921d7?auto=format&fit=crop&q=80&w=2670"
  },
  {
    n: "Group Expeditions",
    p: "First Class",
    d: "Sophisticated travel solutions for refined group gatherings and distinguished events.",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=2670"
  },
  {
    n: "The Estate",
    p: "Venue Access",
    d: "Stunning locations provided for exclusive events, cinematic productions, and high-end showcases.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2670"
  },
  {
    n: "Logistics",
    p: "Global Support",
    d: "Strategic transport solutions for luxury assets, ensuring security and precision in every move.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=2670"
  }
];

const ServicesCards = () => (
  <section id="services" className="relative min-h-screen w-full p-8 md:p-12 md:p-24 overflow-hidden bg-[#0a0a0a] text-white">
    <div className="flex flex-col gap-12 h-full">
       <div className="flex justify-between items-baseline border-b border-white/10 pb-8">
          <h2 className="text-4xl md:text-5xl font-serif italic tracking-tight uppercase">The Services_</h2>
          <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 font-bold overflow-hidden whitespace-nowrap hidden md:block">
            Bespoke Tiered Solutions // Since 1998 // Curated Fleet
          </span>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-8 md:p-12 flex flex-col justify-between group hover:border-[#C5A47E] transition-all duration-500 rounded-sm">
               <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] text-[#C5A47E] uppercase tracking-widest font-bold">Protocol_{i+1}</span>
                    <span className="text-[10px] opacity-20 uppercase tracking-widest font-black">Authorized</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif italic leading-none group-hover:text-[#C5A47E] transition-colors">{item.n}</h3>
                  <div className="aspect-video w-full overflow-hidden mt-6 rounded-xs grayscale group-hover:grayscale-0 transition-all duration-700 border border-white/5">
                    <img src={item.image} className="w-full h-full object-cover" alt={item.n} referrerPolicy="no-referrer" />
                  </div>
                  <p className="text-xs md:text-sm opacity-40 leading-relaxed font-sans mt-6 font-medium tracking-wide">{item.d}</p>
               </div>
               <div className="flex justify-between items-end mt-12">
                  <span className="text-xl font-bold font-serif uppercase tracking-tight">{item.p}</span>
                  <button className="px-8 py-4 bg-[#C5A47E] text-black text-[10px] font-black uppercase tracking-widest hover:bg-white transition-colors cursor-pointer">Inquire</button>
               </div>
            </div>
          ))}
       </div>
    </div>
  </section>
);

export default ServicesCards;
