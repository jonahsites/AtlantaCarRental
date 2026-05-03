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
          src="https://scontent-lga3-3.cdninstagram.com/v/t51.82787-19/524807291_17901894318235513_3113184206121784787_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=106&cb=8438d1d6-89aba764&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy44MTYuQzMifQ%3D%3D&_nc_ohc=AzjBLgASdDoQ7kNvwFuX0v2&_nc_oc=Adr8BHZ2g_kO5d1z4mseDW1_34o5XYxp1vcwvBE9IA0qpoPO98zx0GOTI3s6ZQwPVGM35q-c0qMXdiCBqDcg8aNX&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent-lga3-3.cdninstagram.com&_nc_gid=pCcRAgf4cVI6_gYBAqfaDQ&_nc_ss=7a22e&oh=00_Af4Mc6tFpV_0i0b6U2VnfL4HCqKsqUpOoPai-S5MS06D6g&oe=69FD3789" 
          className="h-12 md:h-16 w-auto rounded-full border border-[#C5A47E]/20 grayscale-0" 
          alt="Atlanta Car Rentals Logo" 
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="hidden lg:flex items-center gap-16">
        {['The Fleet', 'Private Services', 'Concierge', 'Heritage'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className="text-[10px] font-bold tracking-[0.4em] uppercase hover:text-[#C5A47E] transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-8">
        <button className="hidden md:block text-[10px] font-bold tracking-[0.4em] uppercase py-3 px-6 border border-white/20 hover:bg-[#C5A47E] hover:border-[#C5A47E] hover:text-black transition-all cursor-pointer">
          Inquire
        </button>
        <Menu className="w-6 h-6 cursor-pointer hover:text-[#C5A47E] transition-colors" />
      </div>
    </motion.nav>
  );
};

export default Navbar;
