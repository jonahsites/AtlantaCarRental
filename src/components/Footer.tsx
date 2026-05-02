import React from 'react';
import { Instagram, Facebook, Smartphone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-24 px-8 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <img 
              src="https://static.wixstatic.com/media/98d485_5ce05e2318fc4972bfc37e0537c73519~mv2.png/v1/crop/x_324,y_285,w_1265,h_733/fill/w_266,h_154,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/98d485_5ce05e2318fc4972bfc37e0537c73519~mv2.png" 
              className="h-12 w-auto brightness-200" 
              alt="Over The Edge Logo"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="max-w-xs text-white/30 text-[11px] leading-relaxed tracking-wider uppercase font-bold">
            EST. 2024. COMMITTED TO PROVIDING CAR RENTALS OF THE HIGHEST QUALITY AND CLEANLINESS IN NJ & PHL.
          </p>
          <div className="flex gap-6 items-center">
            <a href="#" className="text-white/20 hover:text-[#FF3131] transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-white/20 hover:text-[#FF3131] transition-colors"><Facebook size={20} /></a>
            <span className="text-[10px] font-bold font-sans text-white/40 tracking-widest">TIKTOK // PASSIVE_INCOME</span>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 text-[10px] font-bold uppercase tracking-[0.2em]">
          <div className="flex flex-col gap-4">
            <span className="text-[#FF3131]">LOCATIONS</span>
            <span className="text-white/40">Blackwood, New Jersey</span>
            <span className="text-white/40">Gloucester, New Jersey</span>
            <span className="text-white/40">Philadelphia Int Airport (PHL)</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[#FF3131]">PROTOCOLS</span>
            <a href="#" className="hover:text-white transition-colors">Turo Rentals</a>
            <a href="#" className="hover:text-white transition-colors">Private Rentals</a>
            <a href="#" className="hover:text-white transition-colors">Chauffeur Service</a>
            <a href="#" className="hover:text-white transition-colors">Box Truck & Vans</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[#FF3131]">ESTABLISH</span>
            <span className="flex items-center gap-2 font-syne italic"><Smartphone size={10} /> (609) 471-2238</span>
            <span className="lowercase text-white/40">Overtheedgeservicesllc@gmail.com</span>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-bold tracking-[0.4em] uppercase text-white/10 text-center md:text-left">
        <span>© 2024 Over The Edge Services LLC // ALL RIGHTS RESERVED</span>
        <div className="flex gap-8">
           <span>Secure_Portal_Active</span>
           <span>Data_Stream_Stable</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
