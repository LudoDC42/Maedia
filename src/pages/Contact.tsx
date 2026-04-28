import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Mail, Phone, Instagram, Facebook, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 md:p-8 flex justify-between items-center bg-white/80 backdrop-blur-sm">
        <Link 
          to="/publishing" 
          className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] opacity-40 font-medium hover:opacity-100 transition-opacity group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          <Link to="/publishing" className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 hover:opacity-100 transition-opacity">Home</Link>
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 cursor-default">Shop</span>
          <Link to="/profile" className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 hover:opacity-100 transition-opacity">Profile</Link>
          <Link to="/contact" className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-100">Contact</Link>
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
              <Link to="/publishing" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif italic tracking-tight border-b border-black/5 pb-4 opacity-40">Home</Link>
              <span className="text-2xl font-serif italic tracking-tight border-b border-black/5 pb-4 opacity-40">Shop</span>
              <Link to="/profile" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif italic tracking-tight border-b border-black/5 pb-4 opacity-40">Profile</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif italic tracking-tight border-b border-black/5 pb-4 opacity-100">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow flex items-center justify-center px-6 pt-32">
        <div className="max-w-xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-serif font-light mb-4 italic tracking-tight">Contact.</h1>
              <p className="text-black/40 text-sm uppercase tracking-[0.3em]">Brigadier Plipp</p>
            </div>

            <div className="grid gap-8">
              {/* Email Button */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="mailto:brigadier.plipp@gmail.com"
                className="flex items-center justify-center md:justify-start gap-4 bg-black text-white p-6 rounded-sm transition-all hover:bg-black/90 shadow-xl group"
              >
                <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span className="text-xs uppercase tracking-[0.3em] font-bold">Get in Touch</span>
              </motion.a>

              {/* Phone */}
              <div className="flex items-center justify-center md:justify-start gap-4 p-6 border border-black/5 rounded-sm">
                <Phone className="w-5 h-5 opacity-40" />
                <span className="text-sm font-mono tracking-wider">+32 479 330 863</span>
              </div>

              {/* Socials */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a 
                  href="https://www.instagram.com/brigadierplipp/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 border border-black/5 rounded-sm hover:bg-black/5 transition-colors group"
                >
                  <Instagram className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
                  <span className="text-sm font-medium">Brigadier Plipp</span>
                </a>
                <a 
                  href="https://www.facebook.com/brigadier.plipp?fref=ts" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 border border-black/5 rounded-sm hover:bg-black/5 transition-colors group"
                >
                  <Facebook className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
                  <span className="text-sm font-medium">Brigadier Plipp</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="p-8 text-center opacity-20 text-[10px] uppercase tracking-[0.4em]">
        © 2026 Maedia
      </footer>
    </div>
  );
}
