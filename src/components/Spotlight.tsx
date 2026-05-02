import React from 'react';

const Spotlight = () => (
  <section className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-black text-white px-8 py-24">
     <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <h2 className="text-[50vw] font-syne font-black italic tracking-tighter leading-none grayscale select-none">V_12</h2>
     </div>
     <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 md:grid-cols-12 items-center gap-12">
        <div className="md:col-span-4 flex flex-col gap-12">
           <div className="flex flex-col border-l-2 border-[#FF3131] pl-8">
              <span className="text-[10px] uppercase tracking-widest text-[#FF3131] mb-2 font-bold">Box Truck Fleet</span>
              <span className="text-3xl md:text-4xl font-syne font-bold italic">VERSATILE MOVE</span>
           </div>
           <div className="flex flex-col border-l-2 border-white/10 pl-8 opacity-40 group hover:opacity-100 transition-opacity">
              <span className="text-[10px] uppercase tracking-widest mb-2 font-bold font-sans">Business Delivery</span>
              <span className="text-3xl md:text-4xl font-syne font-bold italic">RELIABLE LOAD</span>
           </div>
        </div>
        <div className="md:col-span-8 relative aspect-video flex items-center justify-center">
           <div className="absolute inset-0 bg-[#FF3131]/5 blur-[120px] rounded-full scale-150" />
           <img 
            src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=2670" 
            className="w-full h-full object-cover grayscale brightness-125 z-10 rounded-sm" 
            alt="Commercial Fleet"
            referrerPolicy="no-referrer"
           />
           <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-black p-6 md:p-8 z-20 border border-white/10">
              <h3 className="text-xl md:text-2xl font-syne font-black uppercase italic leading-none">COMMERCIAL_GRADE.</h3>
           </div>
        </div>
     </div>
  </section>
);

export default Spotlight;
