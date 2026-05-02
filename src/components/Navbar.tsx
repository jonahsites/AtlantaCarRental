import React from 'react';
import { motion } from 'motion/react';
import { Menu, User } from 'lucide-react';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-8 flex items-center justify-between mix-blend-difference"
    >
      <div className="flex items-center gap-4">
        <img 
          src="https://static.wixstatic.com/media/98d485_5ce05e2318fc4972bfc37e0537c73519~mv2.png/v1/crop/x_324,y_285,w_1265,h_733/fill/w_266,h_154,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/98d485_5ce05e2318fc4972bfc37e0537c73519~mv2.png" 
          className="h-10 md:h-12 w-auto brightness-200 contrast-200 grayscale-0" 
          alt="Over The Edge Logo" 
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="hidden lg:flex items-center gap-16">
        {['Fleet', 'Services', 'Info', 'About'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="text-[10px] font-bold tracking-[0.4em] uppercase hover:text-[#FF3131] transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-8">
        <button className="hidden md:block text-[10px] font-bold tracking-[0.4em] uppercase py-3 px-6 border border-white/20 hover:bg-[#FF3131] hover:border-[#FF3131] hover:text-white transition-all cursor-pointer">
          Book Now
        </button>
        <Menu className="w-6 h-6 cursor-pointer hover:text-[#FF3131] transition-colors" />
      </div>
    </motion.nav>
  );
};

export default Navbar;
