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
          src="https://scontent-lga3-2.cdninstagram.com/v/t51.82787-19/524807291_17901894318235513_3113184206121784787_n.jpg?cb=8438d1d6-89aba764&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby44MTYuYzIifQ&_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=101&_nc_oc=Q6cZ2gFBri5t2xICSTHAidWK9gUgduEgAA0eDiyAlob-qAWDSUmqxnEWUrm2oCPJt1GA_DY9Vm8Ykf9fBxGbMhxjXLoB&_nc_ohc=l5X0qCgNtmMQ7kNvwGSU5hN&_nc_gid=K4HL3EjXarNDo1Hpzl52TQ&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_Af6HYb6oFEB2yiKSVc13OkoCcRZKO813cHQeQu6xjJzNUw&oe=69FC5689&_nc_sid=7a9f4b" 
          className="h-12 md:h-16 w-auto rounded-full border border-[#C5A47E]/20 grayscale-0" 
          alt="Elysian Logo" 
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
