import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Settings, X, ShieldCheck } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('maedia-cookie-consent');
    if (!consent) {
      setIsVisible(true);
    } else {
      setPreferences(JSON.parse(consent));
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    setPreferences(allAccepted);
    saveConsent(allAccepted);
  };

  const handleRejectAll = () => {
    const allRejected = { necessary: true, analytics: false, marketing: false };
    setPreferences(allRejected);
    saveConsent(allRejected);
  };

  const saveConsent = (prefs: typeof preferences) => {
    localStorage.setItem('maedia-cookie-consent', JSON.stringify(prefs));
    setIsVisible(false);
    setShowPreferences(false);
    // Dispatch event to allow other components to react to consent changes
    window.dispatchEvent(new Event('cookie-consent-updated'));
  };

  if (!isVisible && !showPreferences) return null;

  return (
    <>
      {/* Consent Banner */}
      <AnimatePresence>
        {isVisible && !showPreferences && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 w-full z-[100] p-4 md:p-8"
          >
            <div className="max-w-7xl mx-auto bg-white border border-black/10 shadow-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-grow space-y-2 text-center md:text-left">
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold">Privacy & Cookies</h3>
                <p className="text-sm font-light text-black/60 leading-relaxed max-w-2xl italic">
                  We use cookies to enhance your experience and analyze our traffic. 
                  By continuing, you consent to our use of cookies.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 w-full md:w-auto">
                <button 
                  onClick={() => setShowPreferences(true)}
                  className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40 hover:opacity-100 transition-opacity flex items-center gap-2 px-4"
                >
                  <Settings className="w-3 h-3" />
                  Options
                </button>
                <button 
                  onClick={handleRejectAll}
                  className="px-6 py-3 border border-black/10 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-black/5 transition-colors"
                >
                  Decline
                </button>
                <button 
                  onClick={handleAcceptAll}
                  className="px-8 py-3 bg-black text-white text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-black/80 transition-colors"
                >
                  Accept All
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Preference Center Modal */}
      <AnimatePresence>
        {showPreferences && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-white/80 backdrop-blur-md"
              onClick={() => setShowPreferences(false)}
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-xl bg-white border border-black/10 shadow-2xl p-8 md:p-12 space-y-8"
            >
              <div className="flex justify-between items-start">
                <header className="space-y-2">
                  <div className="flex items-center gap-3 text-black/40">
                    <ShieldCheck className="w-5 h-5" />
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Preference Center</span>
                  </div>
                  <h2 className="text-3xl font-serif italic">Manage Cookies</h2>
                </header>
                <button onClick={() => setShowPreferences(false)} className="p-2 opacity-40 hover:opacity-100 transition-opacity">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-8 py-4">
                {[
                  { id: 'necessary', label: 'Necessary', desc: 'Essential for the site\'s operation.', disabled: true },
                  { id: 'analytics', label: 'Analytics', desc: 'To measure audience and improve our services.' },
                  { id: 'marketing', label: 'Marketing', desc: 'To provide you with relevant content.' },
                ].map((cat) => (
                  <div key={cat.id} className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <h4 className="text-xs uppercase tracking-[0.1em] font-bold">{cat.label}</h4>
                      <p className="text-xs text-black/40 font-light leading-relaxed">{cat.desc}</p>
                    </div>
                    <button 
                      disabled={cat.disabled}
                      onClick={() => setPreferences(prev => ({ ...prev, [cat.id]: !prev[cat.id as keyof typeof preferences] }))}
                      className={`h-6 w-11 rounded-full relative transition-colors duration-300 ${preferences[cat.id as keyof typeof preferences] ? 'bg-black' : 'bg-black/5'} ${cat.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${preferences[cat.id as keyof typeof preferences] ? 'translate-x-6' : 'translate-x-1'}`} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-col gap-3">
                <button 
                  onClick={() => saveConsent(preferences)}
                  className="w-full py-4 bg-black text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-black/80 transition-all"
                >
                  Save My Choices
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}