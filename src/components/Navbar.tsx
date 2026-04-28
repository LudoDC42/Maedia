import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Menu, X } from 'lucide-react';

interface NavbarProps {
  backTo?: string;
  backLabel?: string;
}

export default function Navbar({ backTo = "/publishing", backLabel }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/publishing' },
    { label: 'Shop', path: '/shop' },
    { label: 'Profile', path: '/profile' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 p-6 md:p-8 flex justify-between items-center bg-white/80 backdrop-blur-sm">
        <Link 
          to={backTo} 
          className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] opacity-40 font-medium hover:opacity-100 transition-opacity group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          {backLabel && <span className="hidden md:inline">{backLabel}</span>}
        </Link>
        
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path === '/shop' && location.pathname.startsWith('/shop/'));
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-opacity ${
                  isActive ? 'opacity-100' : 'opacity-40 hover:opacity-100'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 opacity-60 hover:opacity-100 transition-opacity">
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-8 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-2xl font-serif italic tracking-tight border-b border-black/5 pb-4 ${
                    location.pathname === item.path ? 'opacity-100' : 'opacity-40'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}