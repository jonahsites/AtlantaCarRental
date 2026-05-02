import React from 'react';

const services = [
  {
    n: "Turo Rentals",
    p: "Trusted Host",
    d: "Browse available vehicles, view pricing, and book directly through the Turo app.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2670"
  },
  {
    n: "Private Rentals",
    p: "Flexible Rates",
    d: "Custom affordable rates for short or long term rentals outside of Turo.",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=2670"
  },
  {
    n: "Chauffeur",
    p: "Pro Driver",
    d: "Professional airport transfers, corporate travel, and private trips in comfort.",
    image: "https://images.unsplash.com/photo-1449965042940-062e75e921d7?auto=format&fit=crop&q=80&w=2670"
  },
  {
    n: "Party Bus",
    p: "Group Event",
    d: "Spacious ride with a professional driver for birthdays, weddings, and nights out.",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=2670"
  },
  {
    n: "Venue Rental",
    p: "Stunning Backdrop",
    d: "Event rental spaces required for a flawless occasion and memorable events.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2670"
  },
  {
    n: "Box Trucks",
    p: "Business / Move",
    d: "Reliable box trucks and vans for your next move or business delivery.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=2670"
  }
];

const ServicesCards = () => (
  <section id="services" className="relative min-h-screen w-full p-8 md:p-12 md:p-24 overflow-hidden bg-[#0a0a0a] text-white">
    <div className="flex flex-col gap-12 h-full">
       <div className="flex justify-between items-baseline border-b border-white/10 pb-8">
          <h2 className="text-4xl md:text-5xl font-syne font-bold italic tracking-tight">The Services_</h2>
          <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 font-bold overflow-hidden whitespace-nowrap hidden md:block">
            Tiered Solutions // 2026 // Fully Vetted Fleet
          </span>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-8 md:p-12 flex flex-col justify-between group hover:border-[#FF3131] transition-all duration-500 rounded-sm">
               <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] text-[#FF3131] uppercase tracking-widest font-bold">Protocol_{i+1}</span>
                    <span className="text-[10px] opacity-20 uppercase tracking-widest font-black">Active</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-syne font-bold italic leading-none group-hover:text-[#FF3131] transition-colors">{item.n}</h3>
                  <div className="aspect-video w-full overflow-hidden mt-6 rounded-xs grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img src={item.image} className="w-full h-full object-cover" alt={item.n} referrerPolicy="no-referrer" />
                  </div>
                  <p className="text-xs md:text-sm opacity-40 leading-relaxed font-sans mt-6 font-medium tracking-wide">{item.d}</p>
               </div>
               <div className="flex justify-between items-end mt-12">
                  <span className="text-xl font-bold font-syne uppercase tracking-tighter">{item.p}</span>
                  <button className="px-8 py-4 bg-[#FF3131] text-white text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-colors cursor-pointer">Inquire</button>
               </div>
            </div>
          ))}
       </div>
    </div>
  </section>
);

export default ServicesCards;
