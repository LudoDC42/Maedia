import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Brain, Linkedin, Mail, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Consulting() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://widgets.sociablekit.com/linkedin-profile-posts/widget.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white flex flex-col">
      {/* Back Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-8 flex justify-between items-center bg-white/80 backdrop-blur-sm">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] opacity-40 hover:opacity-100 transition-opacity group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        </Link>
        <div className="flex items-center gap-8">
          <div className="relative group/phone flex items-center gap-2 cursor-pointer">
            <Phone className="w-4 h-4 opacity-60 group-hover/phone:opacity-100 transition-opacity" />
            <div className="absolute top-full right-0 mt-3 whitespace-nowrap bg-white border border-black/10 text-black text-[11px] py-2 px-4 rounded-full opacity-0 group-hover/phone:opacity-100 transition-all duration-500 pointer-events-none tracking-[0.1em] font-mono translate-y-2 group-hover/phone:translate-y-0 shadow-[0_8px_30px_rgb(0,0,0,0.04)] z-[60]">
              +32 479 330 863
            </div>
          </div>
          <a 
            href="mailto:pampfer@gmail.com" 
            className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold opacity-60 hover:opacity-100 transition-opacity group"
          >
            <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
            Get in Touch
          </a>
        </div>
      </nav>

      <div className="flex-grow">
        {/* Hero */}
        <header className="pt-24 px-6 md:px-24 mb-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-serif font-light mb-8 italic leading-tight whitespace-nowrap">
                MAEDIA Consulting.
              </h1>
              <p className="text-xl md:text-2xl text-black/60 leading-relaxed font-light max-w-2xl mb-8">
                A premier strategic advisor to the innovation and knowledge based industry with a focus on the most advanced applications in life sciences and healthcare.
              </p>
            </motion.div>

            {/* LinkedIn Profile Posts Widget */}
            <section className="mt-24 mb-24 max-w-6xl mx-auto px-4">
              <h2 className="text-xs uppercase tracking-[0.4em] font-medium opacity-40 mb-12 flex items-center gap-4">
                Profile Insights
                <div className="h-px flex-grow bg-black/5" />
              </h2>
              <div className="sk-ww-linkedin-profile-post" data-embed-id="25676778"></div>
            </section>
          </div>
        </header>
      </div>
      <footer className="p-8 text-center opacity-20 text-[10px] uppercase tracking-[0.4em]">
        © 2026 Maedia
      </footer>
    </div>
  );
}
