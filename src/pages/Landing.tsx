import { motion } from 'motion/react';
import { ArrowRight, Brain, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white flex flex-col">
      {/* Top Logo */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
        <img 
          src="https://res.cloudinary.com/dazxzauko/image/upload/v1777460185/writing_pnpw5r.png" 
          alt="Maedia" 
          className="h-6 md:h-8" 
        />
      </div>

      {/* Main Content Split */}
      <main className="grid grid-cols-2 flex-grow">
        {/* Consulting Section */}
        <Link 
          to="/consulting"
          className="group relative flex flex-col justify-center p-6 md:p-24 border-r border-black/5 hover:bg-black/[0.04] transition-all duration-500 cursor-pointer overflow-hidden"
        >
          <div className="max-w-md relative z-10 transition-transform duration-700 group-hover:-translate-y-2">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.4 }}
              className="block text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] mb-4"
            >
              Strategic Advisor
            </motion.span>
            <h2 className="text-3xl md:text-8xl font-serif font-light mb-4 md:mb-8 italic transition-all duration-700 group-hover:tracking-tight">Consulting</h2>
            <p className="text-sm md:text-lg text-black/60 leading-relaxed font-light mb-6 md:mb-12">
              MAEDIA Consulting is a premier strategic advisor to the innovation and knowledge based industry.
            </p>
            <div className="inline-flex items-center gap-2 md:gap-4 text-[10px] md:text-xs uppercase tracking-[0.1em] md:tracking-[0.2em] group/btn font-bold">
              Visit Website
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 transition-transform duration-500 group-hover/btn:translate-x-4" />
            </div>
          </div>
          <div className="absolute top-6 right-6 md:top-12 md:right-12 opacity-[0.03] transition-all duration-1000 group-hover:opacity-10 group-hover:scale-125 group-hover:-rotate-12 translate-x-12 -translate-y-12">
            <Brain className="w-32 h-32 md:w-64 md:h-64" />
          </div>
        </Link>

        {/* Publishing Section */}
        <Link 
          to="/publishing"
          className="group relative flex flex-col justify-center p-6 md:p-24 hover:bg-black/[0.04] transition-all duration-500 cursor-pointer overflow-hidden"
        >
          <div className="max-w-md relative z-10 transition-transform duration-700 group-hover:-translate-y-2">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.4 }}
              className="block text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] mb-4"
            >
              Art & Culture
            </motion.span>
            <h2 className="text-3xl md:text-8xl font-serif font-light mb-4 md:mb-8 italic transition-all duration-700 group-hover:tracking-tight">Publishing</h2>
            <p className="text-sm md:text-lg text-black/60 leading-relaxed font-light mb-6 md:mb-12">
              Promotion, production, and dissemination of creations associated with urban and contemporary art.
            </p>
            <div className="inline-flex items-center gap-2 md:gap-4 text-[10px] md:text-xs uppercase tracking-[0.1em] md:tracking-[0.2em] group/btn font-bold">
              Visit Website
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 transition-transform duration-500 group-hover/btn:translate-x-4" />
            </div>
          </div>
          <div className="absolute top-6 right-6 md:top-12 md:right-12 opacity-[0.03] transition-all duration-1000 group-hover:opacity-10 group-hover:scale-125 group-hover:rotate-12 translate-x-12 -translate-y-12">
            <BookOpen className="w-32 h-32 md:w-64 md:h-64" />
          </div>
        </Link>
      </main>

      <Footer />
    </div>
  );
}
