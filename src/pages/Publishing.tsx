import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function InstagramEmbed({ url }: { url: string }) {
  useEffect(() => {
    // @ts-ignore
    if (window.instgrm) {
      // @ts-ignore
      window.instgrm.Embeds.process();
    }
  }, [url]);

  return (
    <div className="w-full max-w-[500px] shadow-xl rounded-xl overflow-hidden border border-black/5 bg-white">
      <blockquote 
        className="instagram-media" 
        data-instgrm-captioned 
        data-instgrm-permalink={url}
        data-instgrm-version="14" 
        style={{ 
          background: '#FFF', 
          border: '0', 
          borderRadius: '3px', 
          boxShadow: 'none', 
          margin: '0', 
          padding: '0', 
          width: '100%' 
        }}
      >
      </blockquote>
    </div>
  );
}

export default function Publishing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white flex flex-col">
      {/* Back Navigation & Menu */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 md:p-8 flex justify-between items-center bg-white/80 backdrop-blur-sm">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] opacity-40 font-medium hover:opacity-100 transition-opacity group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {['Home', 'Shop', 'Profile', 'Contact'].map((item) => {
            if (item === 'Home') {
              return (
                <Link
                  key={item}
                  to="/publishing"
                  className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-100"
                >
                  {item}
                </Link>
              );
            }
            if (item === 'Shop') {
              return (
                <span
                  key={item}
                  className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 cursor-default"
                >
                  {item}
                </span>
              );
            }
            return (
              <Link
                key={item}
                to={item === 'Contact' ? '/contact' : '/profile'}
                className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 hover:opacity-100 transition-opacity"
              >
                {item}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 opacity-60 hover:opacity-100 transition-opacity"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-8 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {['Home', 'Shop', 'Profile', 'Contact'].map((item) => {
                if (item === 'Home') {
                  return (
                    <Link
                      key={item}
                      to="/publishing"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-2xl font-serif italic tracking-tight border-b border-black/5 pb-4 opacity-100"
                    >
                      {item}
                    </Link>
                  );
                }
                if (item === 'Shop') {
                  return (
                    <span
                      key={item}
                      className="text-2xl font-serif italic tracking-tight border-b border-black/5 pb-4 opacity-40"
                    >
                      {item}
                    </span>
                  );
                }
                return (
                  <Link
                    key={item}
                    to={item === 'Contact' ? '/contact' : '/profile'}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl font-serif italic tracking-tight border-b border-black/5 pb-4 opacity-40"
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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

        {/* Instagram Feed Section */}
        <section className="px-6 md:px-24 mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 justify-items-center max-w-6xl mx-auto">
            <InstagramEmbed url="https://www.instagram.com/p/DXZduqCDG4z/" />
            <InstagramEmbed url="https://www.instagram.com/p/DXHdYvpjBPW/" />
            <InstagramEmbed url="https://www.instagram.com/p/DW1eZdlDHgY/" />
            <InstagramEmbed url="https://www.instagram.com/p/DWjV2Z4jKC5/" />
          </div>
        </section>
      </div>
      <footer className="p-8 text-center opacity-20 text-[10px] uppercase tracking-[0.4em]">
        © 2026 Maedia
      </footer>
    </div>
  );
}
