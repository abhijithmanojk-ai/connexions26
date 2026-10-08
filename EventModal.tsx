import { X, ExternalLink, MapPin, Users, Clock, AlertTriangle, Phone, Sparkles } from 'lucide-react';
import { EventDetail } from '../data/eventsData';

interface EventModalProps {
  event: EventDetail | null;
  onClose: () => void;
  onOpenRegister: (event: EventDetail) => void;
}

export default function EventModal({ event, onClose, onOpenRegister }: EventModalProps) {
  if (!event) return null;

  const isFerrari = event.ferrariOrRedBull === 'Ferrari';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="bg-[#0c1017] border border-neutral-800 rounded-xl w-full max-w-2xl max-h-[92vh] flex flex-col shadow-2xl relative my-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Top livery band */}
        <div className={`h-2.5 w-full ${isFerrari ? 'bg-[#e10600]' : 'bg-[#fcd500]'}`} />

        {/* Header */}
        <div className="p-6 border-b border-neutral-800 flex items-start justify-between bg-neutral-900/40">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
              <span className="font-mono text-white">EVENT #{event.number}</span>
              <span aria-hidden="true">·</span>
              <span className={isFerrari ? 'text-[#e10600]' : 'text-[#fcd500]'}>
                {isFerrari ? 'Scuderia Ferrari Fleet' : 'Oracle Red Bull Fleet'}
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-white font-medium">{event.formatType}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-racing tracking-wide uppercase mt-1">
              {event.title}
            </h2>
            <p className="text-sm text-neutral-300 font-medium mt-1">
              {event.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-md hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="Close Event Dossier"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Tagline / Intro from Rulebook PDF */}
          <div className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-800">
            <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed italic">
              "{event.tagline}"
            </p>
          </div>

          {/* Key Details: Format, Venue, Timing */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-neutral-900/40 border border-neutral-800/80 rounded">
              <div className="flex items-center gap-1.5 text-neutral-400 mb-1">
                <Users className="w-3.5 h-3.5 text-[#e10600]" />
                <span className="uppercase font-semibold">Participation</span>
              </div>
              <span className="font-medium text-white">{event.formatType}</span>
            </div>

            <div className="p-3 bg-neutral-900/40 border border-neutral-800/80 rounded">
              <div className="flex items-center gap-1.5 text-neutral-400 mb-1">
                <Clock className="w-3.5 h-3.5 text-[#fcd500]" />
                <span className="uppercase font-semibold">Timings</span>
              </div>
              <span className="font-medium text-white">{event.timing}</span>
            </div>

            <div className="p-3 bg-neutral-900/40 border border-neutral-800/80 rounded">
              <div className="flex items-center gap-1.5 text-neutral-400 mb-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span className="uppercase font-semibold">Venue</span>
              </div>
              <span className="font-medium text-white">{event.venue}</span>
            </div>
          </div>

          {/* Specific Theme (if defined in rulebook, e.g. for Livery / Gridshots) */}
          {event.theme && (
            <div className="p-3.5 rounded-lg bg-yellow-950/20 border border-yellow-800/40 text-xs">
              <span className="text-[#fcd500] font-bold uppercase tracking-wider block mb-1">
                ★ Given Theme:
              </span>
              <p className="text-white font-medium text-sm">
                "{event.theme}"
              </p>
            </div>
          )}

          {/* Exact Event Rules from PDF */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 font-racing mb-3 flex items-center gap-2">
              <AlertTriangle className="w-3.5 h-3.5 text-[#e10600]" />
              Event Rules
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-200">
              {event.rules.map((rule, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2 rounded bg-neutral-950/60 border border-neutral-850">
                  <span className="text-[#e10600] font-bold font-mono shrink-0">{idx + 1}.</span>
                  <span className="leading-relaxed">{rule}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Exact Event Co-ordinators from PDF */}
          <div className="pt-2 border-t border-neutral-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-racing mb-2.5">
              Event Co-ordinators
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {event.coordinators.map((c, idx) => (
                <div key={idx} className="p-2.5 rounded bg-neutral-950 border border-neutral-800 flex items-center justify-between">
                  <span className="font-semibold text-white">{c.name}</span>
                  <a 
                    href={`tel:${c.phone}`}
                    className="flex items-center gap-1 text-[#fcd500] hover:underline font-mono text-[11px]"
                  >
                    <Phone className="w-3 h-3" />
                    {c.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-neutral-800 bg-neutral-950 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-neutral-400 text-center sm:text-left">
            <span>Date: </span>
            <span className="text-white font-semibold">14th October 2026</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 text-xs font-semibold uppercase text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded transition-colors cursor-pointer"
            >
              Close
            </button>

            <a
              href={event.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white rounded transition-all cursor-pointer shadow-md ${
                isFerrari 
                  ? 'bg-[#e10600] hover:bg-[#c00000] shadow-red-950' 
                  : 'bg-[#002f6c] border border-[#fcd500]/50 text-[#fcd500] hover:bg-[#002250] shadow-blue-950'
              }`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Register via Google Form</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
