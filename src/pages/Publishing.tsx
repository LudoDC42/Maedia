import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Publishing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

        {/* SociableKIT Instagram Feed */}
        <section className="px-6 md:px-24 mt-24 mb-24 max-w-6xl mx-auto">
          <h2 className="text-xs uppercase tracking-[0.4em] font-medium opacity-40 mb-12 flex items-center gap-4">
            Visual Journal
            <div className="h-px flex-grow bg-black/5" />
          </h2>
          <div className="sk-instagram-feed" data-embed-id="25676794"></div>
        </section>
      </div>
      <footer className="p-8 text-center opacity-20 text-[10px] uppercase tracking-[0.4em]">
        © 2026 Maedia
      </footer>
    </div>
  );
}
