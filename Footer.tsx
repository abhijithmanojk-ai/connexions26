import { ArrowUp, FileText, ExternalLink } from 'lucide-react';
import { f1Audio } from '../utils/f1Audio';
import { RULEBOOK_GOOGLE_DRIVE_URL } from '../data/eventsData';

export default function Footer() {
  const scrollToTop = () => {
    f1Audio.playRevClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070a] border-t border-neutral-800 text-neutral-400 text-xs">
      {/* Bottom racing curbs */}
      <div className="h-1 w-full curb-pattern-rb" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          
          {/* Col 1: Wordmark & College */}
          <div className="space-y-3">
            <a 
              href="#hero" 
              className="inline-flex items-center gap-2 font-racing text-2xl font-bold tracking-wider text-white uppercase"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#e10600]" />
              CONNEXIONS <span className="text-[#e10600]">'26</span>
            </a>
            <p className="text-neutral-400 max-w-sm leading-relaxed">
              Lucafama presents Connexions '26 — Intra-departmental fest conducted by Dwaraka Doss Goverdhan Doss Vaishnav College (Autonomous), Department of B.Com Accounting and Finance.
            </p>
            <div className="pt-2 text-[11px] text-neutral-500 space-y-0.5">
              <p>Gokul Bagh, 833, EVR Periyar High Road, Arumbakkam, Chennai - 600106</p>
              <p>Date: Wednesday, 14th October 2026</p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-2.5">
            <h4 className="text-white font-racing font-bold uppercase tracking-wider text-xs">
              Quick Links
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <a href="#events" className="hover:text-white transition-colors">8 Events</a>
              </li>
              <li>
                <a 
                  href={RULEBOOK_GOOGLE_DRIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors text-[#fcd500]"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Rule Book (Google Drive)</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-white transition-colors">Race Schedule</a>
              </li>
              <li>
                <a href="#coordinators" className="hover:text-white transition-colors">Help Desk Coordinators</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Registration Note */}
          <div className="space-y-2.5">
            <h4 className="text-white font-racing font-bold uppercase tracking-wider text-xs">
              Registration Info
            </h4>
            <p className="text-neutral-400 text-xs leading-relaxed">
              All 8 events are registered strictly through Google Forms. Click "Google Form" on any event card to submit your team rosters.
            </p>
            <div className="pt-2">
              <a
                href="#events"
                className="inline-block text-xs font-semibold uppercase text-black bg-[#fcd500] hover:bg-yellow-400 px-3 py-1.5 rounded transition-colors"
              >
                Go to Events Grid
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-neutral-500 text-center sm:text-left">
            © 2026 Dwaraka Doss Goverdhan Doss Vaishnav College (Autonomous), Department of B.Com Accounting and Finance.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold uppercase text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-800 rounded border border-neutral-800 transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
