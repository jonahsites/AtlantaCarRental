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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-[#C5A47E]/3 rounded-full blur-[150px] pointer-events-none" />
        <span className="text-[10px] font-bold tracking-[1em] text-[#C5A47E] uppercase mb-8 relative z-10">Private Inquiry</span>
        <h2 className="text-5xl md:text-8xl font-serif italic uppercase mb-16 relative z-10 leading-tight">
          SECURE YOUR <br /> PRESTIGE.
        </h2>
        <div className="flex flex-col md:flex-row gap-8 relative z-10">
          <button className="px-16 py-6 bg-[#C5A47E] text-black font-black uppercase text-xs tracking-[0.5em] hover:bg-white transition-all duration-500 cursor-pointer shadow-[0_0_50px_rgba(197,164,126,0.15)]">
            Consultation
          </button>
          <button className="px-16 py-6 border border-white/20 text-white font-black uppercase text-xs tracking-[0.5em] hover:bg-[#C5A47E] hover:text-black transition-all duration-500 cursor-pointer">
            View Archive
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
