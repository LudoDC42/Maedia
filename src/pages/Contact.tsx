import { motion } from 'motion/react';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const phoneNumber = "+32 479 330 863";

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white flex flex-col">
      <Navbar />

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
              <button 
                onClick={handleCopy}
                className="flex items-center justify-center md:justify-start gap-4 p-6 border border-black/5 rounded-sm hover:bg-black hover:text-white transition-all group w-full"
              >
                <Phone className="w-5 h-5 opacity-40 group-hover:opacity-100" />
                <span className="text-sm font-mono tracking-wider">
                  {copied ? 'Copied to clipboard' : phoneNumber}
                </span>
              </button>

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

      <Footer />
    </div>
  );
}
