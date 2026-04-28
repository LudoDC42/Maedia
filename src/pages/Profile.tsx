import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Profile() {
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
          <Link to="/profile" className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-100">Profile</Link>
          <Link to="/contact" className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 hover:opacity-100 transition-opacity">Contact</Link>
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
              <Link to="/profile" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif italic tracking-tight border-b border-black/5 pb-4 opacity-100">Profile</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif italic tracking-tight border-b border-black/5 pb-4 opacity-40">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow flex items-center justify-center px-6 pt-32 pb-24">
        <div className="max-w-6xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-serif font-light mb-16 italic tracking-tight text-center md:text-left">Brigadier PLIPP.</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
              {/* English Version */}
              <div className="space-y-8 text-lg font-light leading-relaxed text-black/80">
                <p>
                  Brigadier PLIPP aims to serve as a critical bridge between artists of alternative disciplines and society.
                </p>
                <p>
                  Acting more as an observer and chronicler than a player in the scene, Brigadier PLIPP seeks to document and explain the motivations and approaches of emerging artists who express themselves primarily through urban interventions.
                </p>
                <p>
                  Among these, stencil graffiti holds a prominent place, but the field of discovery remains wide open to electronic music, photographic variations, and new media.
                </p>
                <p>
                  Brigadier PLIPP's preferred approach is the face-to-face interview, often in the artist's workshop or studio, following a methodology proven through over a hundred encounters.
                </p>
                <p>
                  Each conversation is then adapted into a blog post or a contribution to a book.
                </p>
                <p>
                  The capacity for awareness and wonder are the two forces that sustain Brigadier PLIPP's dedication to serving a community of artists where sharing and emulation are more essential than ever in an uncertain and conflictual society.
                </p>
              </div>

              {/* French Version */}
              <div className="space-y-8 text-lg font-light leading-relaxed text-black/40 italic">
                <p>
                  Le Brigadier PLIPP souhaite servir de vecteur critique entre les artistes de disciplines alternatives et la société.
                </p>
                <p>
                  Plus observateur et chroniqueur qu’acteur de la scène concernée, le Brigadier PLIPP cherche à documenter et à expliquer la motivation et la démarche des artistes émergents qui s’expriment essentiellement au travers d’interventions urbaines.
                </p>
                <p>
                  Parmi celles-ci, le graffiti-pochoir occupe une place prépondérante mais le champ des découvertes est largement ouvert aux musiques électroniques, aux variations photographiques ainsi qu’aux nouveaux médias.
                </p>
                <p>
                  L’approche privilégiée par le Brigadier PLIPP est l’interview en face à face, souvent dans l’atelier ou le studio de l’artiste et selon une méthodologie éprouvée par plus d’une centaine de rencontres.
                </p>
                <p>
                  Chaque conversation est ensuite déclinée en parution sur un blog ou en contribution dans un livre.
                </p>
                <p>
                  Les capacités d’éveil et d’émerveillement sont les deux forces qui soutiennent le dévouement du Brigadier PLIPP à servir une communauté d’artistes dont le partage et l’émulation sont plus que jamais essentiels dans une société incertaine et conflictuelle.
                </p>
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
