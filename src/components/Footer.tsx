import React from 'react';
import { Instagram, Facebook, Smartphone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-24 px-8 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <img 
              src="https://scontent-lga3-3.cdninstagram.com/v/t51.82787-19/524807291_17901894318235513_3113184206121784787_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=106&cb=8438d1d6-89aba764&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy44MTYuQzMifQ%3D%3D&_nc_ohc=AzjBLgASdDoQ7kNvwFuX0v2&_nc_oc=Adr8BHZ2g_kO5d1z4mseDW1_34o5XYxp1vcwvBE9IA0qpoPO98zx0GOTI3s6ZQwPVGM35q-c0qMXdiCBqDcg8aNX&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent-lga3-3.cdninstagram.com&_nc_gid=pCcRAgf4cVI6_gYBAqfaDQ&_nc_ss=7a22e&oh=00_Af4Mc6tFpV_0i0b6U2VnfL4HCqKsqUpOoPai-S5MS06D6g&oe=69FD3789" 
              className="h-16 w-auto rounded-full border border-[#C5A47E]/20" 
              alt="Atlanta Car Rentals Logo"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="max-w-xs text-white/30 text-[11px] leading-relaxed tracking-wider uppercase font-bold">
            CURATED EXCELLENCE SINCE 1998. PROVIDING UNPARALLELED LUXURY TRANSPORT SOLUTIONS WORLDWIDE.
          </p>
          <div className="flex gap-6 items-center">
            <a href="#" className="text-white/20 hover:text-[#C5A47E] transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-white/20 hover:text-[#C5A47E] transition-colors"><Facebook size={20} /></a>
            <span className="text-[10px] font-bold font-sans text-white/40 tracking-widest uppercase">Member of Global Concierge Alliance</span>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 text-[10px] font-bold uppercase tracking-[0.2em]">
          <div className="flex flex-col gap-4">
            <span className="text-[#C5A47E]">PRESENCE</span>
            <span className="text-white/40">London</span>
            <span className="text-white/40">Paris</span>
            <span className="text-white/40">New York</span>
            <span className="text-white/40">Monaco</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[#C5A47E]">SERVICES</span>
            <a href="#" className="hover:text-white transition-colors">The Fleet</a>
            <a href="#" className="hover:text-white transition-colors">Private Escort</a>
            <a href="#" className="hover:text-white transition-colors">Asset Logistics</a>
            <a href="#" className="hover:text-white transition-colors">Concierge</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[#C5A47E]">INQUIRE</span>
            <span className="flex items-center gap-2 font-serif italic text-sm tracking-normal">Global HQ // +44 20 7946 0958</span>
            <span className="lowercase text-white/40">concierge@atlantacarrentals.com</span>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-bold tracking-[0.4em] uppercase text-white/10 text-center md:text-left">
        <span>© 2024 ATLANTA CAR RENTALS // ALL RIGHTS RESERVED</span>
        <div className="flex gap-8">
           <span>Terms of Service</span>
           <span>Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
