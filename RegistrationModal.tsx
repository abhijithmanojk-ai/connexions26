import { useState } from 'react';
import { X, ExternalLink, Copy, Check, QrCode, ShieldCheck } from 'lucide-react';
import { EventDetail } from '../data/eventsData';

interface RegistrationModalProps {
  event: EventDetail | null;
  onClose: () => void;
}

export default function RegistrationModal({ event, onClose }: RegistrationModalProps) {
  const [copied, setCopied] = useState(false);
  const [showQr, setShowQr] = useState(false);

  if (!event) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(event.googleFormUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenFormDirectly = () => {
    window.open(event.googleFormUrl, '_blank', 'noopener,noreferrer');
  };

  const isFerrari = event.ferrariOrRedBull === 'Ferrari';
  const qrSvgUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(event.googleFormUrl)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-[#0c1017] border border-neutral-800 rounded-xl w-full max-w-lg overflow-hidden shadow-2xl relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Top livery banner */}
        <div className={`h-2 w-full ${isFerrari ? 'bg-[#e10600]' : 'bg-[#fcd500]'}`} />

        {/* Modal Header */}
        <div className="p-6 border-b border-neutral-800 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
              <span className="font-mono text-white">EVENT {event.number}</span>
              <span aria-hidden="true">·</span>
              <span className={isFerrari ? 'text-[#e10600]' : 'text-[#fcd500]'}>
                {isFerrari ? 'Scuderia Ferrari Fleet' : 'Oracle Red Bull Fleet'}
              </span>
            </div>
            <h3 className="text-2xl font-black text-white font-racing tracking-wide uppercase mt-1">
              {event.title}
            </h3>
            <p className="text-xs text-neutral-400 mt-0.5">
              {event.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-md hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="Close Registration Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          <div className="bg-neutral-900/90 border border-neutral-800 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <span className="font-semibold text-white block text-sm">
                  Official Google Forms Entry Gateway
                </span>
                <p className="text-neutral-400 mt-1 leading-relaxed">
                  Submit your team rosters and student details directly to the department registration database.
                </p>
              </div>
            </div>
          </div>

          {/* Key Event Details Summary */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-neutral-900/50 p-2.5 rounded border border-neutral-800/80">
              <span className="text-neutral-500 block uppercase font-medium">Participation</span>
              <span className="text-white font-semibold">{event.formatType}</span>
            </div>
            <div className="bg-neutral-900/50 p-2.5 rounded border border-neutral-800/80">
              <span className="text-neutral-500 block uppercase font-medium">Venue</span>
              <span className="text-white font-semibold">{event.venue}</span>
            </div>
          </div>

          {/* Direct Google Form URL link box */}
          <div>
            <label className="block text-xs font-semibold uppercase text-neutral-400 mb-1.5">
              Google Form Link
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={event.googleFormUrl}
                className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 text-xs font-mono text-neutral-300 focus:outline-none select-all"
              />
              <button
                onClick={handleCopyLink}
                title="Copy link to clipboard"
                className="p-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded text-neutral-300 hover:text-white transition-colors cursor-pointer shrink-0"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            {copied && (
              <span className="text-[11px] text-emerald-400 font-medium mt-1 inline-block">
                Copied Google Form link to clipboard!
              </span>
            )}
          </div>

          {/* QR Code section */}
          {showQr && (
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg text-black text-center">
              <img
                src={qrSvgUrl}
                alt={`QR code for ${event.title}`}
                className="w-40 h-40 object-contain"
                loading="lazy"
              />
              <span className="text-[11px] text-neutral-800 font-bold uppercase mt-2">
                Scan on Mobile to Open Form
              </span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              onClick={handleOpenFormDirectly}
              className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider rounded-md text-white transition-all cursor-pointer shadow-md ${
                isFerrari 
                  ? 'bg-[#e10600] hover:bg-[#c00000] shadow-red-950' 
                  : 'bg-[#002f6c] border border-[#fcd500]/40 text-[#fcd500] hover:bg-[#002250] shadow-blue-950'
              }`}
            >
              <ExternalLink className="w-4 h-4" />
              <span>Launch Google Form Now</span>
            </button>

            <button
              onClick={() => setShowQr(!showQr)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider rounded-md bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-200 transition-colors cursor-pointer"
            >
              <QrCode className="w-4 h-4" />
              <span>{showQr ? 'Hide QR' : 'Show QR'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
