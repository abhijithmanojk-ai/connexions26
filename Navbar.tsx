import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Flag, FileText, ExternalLink } from 'lucide-react';
import { f1Audio } from '../utils/f1Audio';
import { RULEBOOK_GOOGLE_DRIVE_URL } from '../data/eventsData';

export default function Navbar() {
  const [isMuted, setIsMuted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const nextState = !isMuted;
    setIsMuted(nextState);
    f1Audio.setMuted(nextState);
    if (!nextState) {
      f1Audio.playRevClick();
    }
  };

  return (
    <header className={`sticky top-0 z-40 transition-colors duration-200 border-b ${
      scrolled 
        ? 'bg-[#07090e]/95 backdrop-blur-md border-neutral-800 shadow-xl' 
        : 'bg-[#07090e] border-neutral-800/80'
    }`}>
      {/* Curb racing top accent line */}
      <div className="h-1 w-full curb-pattern" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Zone 1: Single text element wordmark */}
          <a 
            href="#hero" 
            onClick={() => f1Audio.playRevClick()}
            className="flex items-center gap-2 group focus:outline-none"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#e10600] group-hover:scale-125 transition-transform" />
            <span className="font-racing text-xl sm:text-2xl font-bold tracking-wider text-white uppercase flex items-center gap-1">
              CONNEXIONS <span className="text-[#e10600]">'26</span>
            </span>
          </a>

          {/* Zone 2: Clean nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
            <a 
              href="#events" 
              className="hover:text-white transition-colors"
            >
              8 Events
            </a>

            <a 
              href={RULEBOOK_GOOGLE_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors text-[#fcd500] hover:underline"
              title="Open Official Rule Book on Google Drive"
            >
              <FileText className="w-4 h-4" />
              <span>Rule Book</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>

            <a 
              href="#schedule" 
              className="hover:text-white transition-colors"
            >
              Race Schedule
            </a>

            <a 
              href="#coordinators" 
              className="hover:text-white transition-colors"
            >
              Coordinators
            </a>
          </nav>

          {/* Zone 3: Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleSound}
              title={isMuted ? 'Unmute race audio' : 'Mute race audio'}
              className="p-2 text-neutral-400 hover:text-white rounded-md border border-neutral-800 hover:border-neutral-700 bg-neutral-900/60 transition-colors cursor-pointer"
              aria-label="Toggle F1 Audio"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-neutral-500" /> : <Volume2 className="w-4 h-4 text-[#fcd500]" />}
            </button>

            <a
              href="#events"
              onClick={() => f1Audio.playRevClick()}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#e10600] hover:bg-[#c00000] active:scale-95 rounded-md transition-all whitespace-nowrap shadow-sm shadow-red-950"
            >
              <Flag className="w-3.5 h-3.5" />
              Register on Forms
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-400 hover:text-white rounded-md border border-neutral-800"
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-800 bg-[#0a0d14] px-4 py-4 space-y-3">
          <a
            href="#events"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-neutral-200 hover:text-[#e10600]"
          >
            🏁 All 8 Events
          </a>
          
          <a
            href={RULEBOOK_GOOGLE_DRIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 py-2 text-sm font-medium text-[#fcd500] hover:text-yellow-300"
          >
            <FileText className="w-4 h-4" />
            <span>Rule Book (Google Drive)</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>

          <a
            href="#schedule"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-neutral-200 hover:text-[#e10600]"
          >
            ⏱️ Race Day Schedule
          </a>
          
          <a
            href="#coordinators"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-neutral-200 hover:text-[#e10600]"
          >
            📞 Coordinators
          </a>

          <div className="pt-2 border-t border-neutral-800">
            <a
              href="#events"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center py-2 text-xs font-semibold uppercase text-white bg-[#e10600] rounded"
            >
              Register on Forms
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
