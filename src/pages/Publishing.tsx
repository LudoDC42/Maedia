import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Publishing() {

  useEffect(() => {
    // SociableKIT Instagram Feed script
    const skScript = document.createElement('script');
    skScript.src = "https://widgets.sociablekit.com/instagram-feed/widget.js";
    skScript.async = true;
    skScript.defer = true;
    document.body.appendChild(skScript);
    
    return () => {
      document.body.removeChild(skScript);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white flex flex-col">
      <Navbar backTo="/" />

      <div className="flex-grow">
        {/* Hero */}
        <header className="pt-24 px-6 md:px-24 mb-16">
          <div className="max-w-6xl mx-auto text-right">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-serif font-light mb-8 italic leading-tight whitespace-nowrap">
                MAEDIA Publishing.
              </h1>
              <p className="text-xl md:text-2xl text-black/60 leading-relaxed font-light ml-auto max-w-2xl">
                Nurturing the pulse of the streets into a gallery of whispers, where urban spirit and contemporary grace find their voice through the art of creation and the beauty of shared discovery.
              </p>
            </motion.div>
          </div>
        </header>

        {/* SociableKIT Instagram Feed */}
        <section className="px-6 md:px-24 mt-24 mb-24 max-w-6xl mx-auto">
          <h2 className="text-xs uppercase tracking-[0.4em] font-medium opacity-40 mb-12 flex items-center gap-4">
            Visual Journal
            <div className="h-px flex-grow bg-black/5" />
          </h2>
          <div className="sk-instagram-feed" data-embed-id="25676794"></div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
