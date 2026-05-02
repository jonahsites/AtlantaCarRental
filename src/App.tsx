/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import StageHero from './components/StageHero';
import FleetGrid from './components/FleetGrid';
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ';
import Stats from './components/Stats';
import Spotlight from './components/Spotlight';
import ServicesCards from './components/ServicesCards';
import Strips from './components/Strips';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden selection:bg-[#C5A47E] selection:text-black">
      <Navbar />
      
      <section id="home">
        <StageHero />
      </section>

      <section id="fleet">
        <FleetGrid />
      </section>

      <section id="stats">
        <Stats />
      </section>

      <section id="services">
        <ServicesCards />
      </section>

      <section id="spotlight">
        <Spotlight />
      </section>

      <section id="categories">
        <Strips />
      </section>

      <section id="testimonials">
        <Testimonial />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      {/* Final Call to Action */}
      <section className="py-48 px-8 flex flex-col items-center justify-center text-center bg-[#050505] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-[#FF3131]/3 rounded-full blur-[150px] pointer-events-none" />
        <span className="text-[10px] font-bold tracking-[1em] text-[#FF3131] uppercase mb-8 relative z-10">Initiate Protocol</span>
        <h2 className="text-5xl md:text-8xl font-syne font-extrabold italic uppercase mb-16 relative z-10 leading-none">
          ELEVATE YOUR <br /> DRIVE EXPERIENCE.
        </h2>
        <div className="flex flex-col md:flex-row gap-8 relative z-10">
          <button className="px-16 py-6 bg-[#FF3131] text-white font-black uppercase text-xs tracking-[0.5em] hover:bg-white hover:text-black transition-all duration-500 cursor-pointer shadow-[0_0_50px_rgba(255,49,49,0.15)]">
            Book Now
          </button>
          <button className="px-16 py-6 border border-white/20 text-white font-black uppercase text-xs tracking-[0.5em] hover:bg-white hover:text-black transition-all duration-500 cursor-pointer">
            (609) 471-2238
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
