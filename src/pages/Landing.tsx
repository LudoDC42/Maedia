import { motion } from 'motion/react';
import { ArrowRight, Brain, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white flex flex-col">
      {/* Main Content Split */}
      <main className="grid grid-cols-1 md:grid-cols-2 flex-grow">
        {/* Consulting Section */}
        <Link 
          to="/consulting"
          className="group relative flex flex-col justify-center p-12 md:p-24 border-b md:border-b-0 md:border-r border-black/5 hover:bg-black/[0.04] transition-all duration-500 cursor-pointer overflow-hidden"
        >
          <div className="max-w-md relative z-10 transition-transform duration-700 group-hover:-translate-y-2">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.4 }}
              className="block text-[10px] uppercase tracking-[0.4em] mb-4"
            >
              Strategic Advisor
            </motion.span>
            <h2 className="text-6xl md:text-8xl font-serif font-light mb-8 italic transition-all duration-700 group-hover:tracking-tight">Consulting</h2>
            <p className="text-lg text-black/60 leading-relaxed font-light mb-12">
              MAEDIA Consulting is a premier strategic advisor to the innovation and knowledge based industry with a focus on the most advanced applications in life sciences and healthcare.
            </p>
            <div className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.2em] group/btn font-bold">
              Visit Website
              <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover/btn:translate-x-4" />
            </div>
          </div>
          <div className="absolute top-12 right-12 opacity-[0.03] transition-all duration-1000 group-hover:opacity-10 group-hover:scale-125 group-hover:-rotate-12 translate-x-12 -translate-y-12">
            <Brain className="w-64 h-64" />
          </div>
        </Link>

        {/* Publishing Section */}
        <Link 
          to="/publishing"
          className="group relative flex flex-col justify-center p-12 md:p-24 hover:bg-black/[0.04] transition-all duration-500 cursor-pointer overflow-hidden"
        >
          <div className="max-w-md relative z-10 transition-transform duration-700 group-hover:-translate-y-2">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.4 }}
              className="block text-[10px] uppercase tracking-[0.4em] mb-4"
            >
              Art & Culture
            </motion.span>
            <h2 className="text-6xl md:text-8xl font-serif font-light mb-8 italic transition-all duration-700 group-hover:tracking-tight">Publishing</h2>
            <p className="text-lg text-black/60 leading-relaxed font-light mb-12">
              Promotion, production, and dissemination of creations associated with urban and contemporary art in all its forms of expression.
            </p>
            <div className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.2em] group/btn font-bold">
              Visit Website
              <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover/btn:translate-x-4" />
            </div>
          </div>
          <div className="absolute top-12 right-12 opacity-[0.03] transition-all duration-1000 group-hover:opacity-10 group-hover:scale-125 group-hover:rotate-12 translate-x-12 -translate-y-12">
            <BookOpen className="w-64 h-64" />
          </div>
        </Link>
      </main>
    </div>
  );
}
