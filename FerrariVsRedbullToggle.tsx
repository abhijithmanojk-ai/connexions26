import { Shield, Zap, Flame } from 'lucide-react';
import { f1Audio } from '../utils/f1Audio';

interface FerrariVsRedbullToggleProps {
  selectedTeam: 'all' | 'Ferrari' | 'RedBull';
  onSelectTeam: (team: 'all' | 'Ferrari' | 'RedBull') => void;
}

export default function FerrariVsRedbullToggle({ selectedTeam, onSelectTeam }: FerrariVsRedbullToggleProps) {
  return (
    <div className="py-6 border-b border-neutral-800 bg-[#0a0d14]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Header text */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-[#fcd500]" />
              Constructor Rivalry Focus
            </div>
            <h2 className="text-lg font-bold text-white font-racing uppercase tracking-wide">
              Scuderia Ferrari vs Oracle Red Bull Racing
            </h2>
            <p className="text-xs text-neutral-400">
              Filter the 8 championship events by paddock constructor theme
            </p>
          </div>

          {/* Interactive filter control (allowed button group with click handlers) */}
          <div className="inline-flex items-center p-1 bg-neutral-900 border border-neutral-800 rounded-lg">
            {/* All Events */}
            <button
              onClick={() => {
                f1Audio.playRevClick();
                onSelectTeam('all');
              }}
              className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                selectedTeam === 'all'
                  ? 'bg-neutral-100 text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Full Grid (8)
            </button>

            {/* Scuderia Ferrari */}
            <button
              onClick={() => {
                f1Audio.playRevClick();
                onSelectTeam('Ferrari');
              }}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                selectedTeam === 'Ferrari'
                  ? 'bg-[#e10600] text-white shadow-md shadow-red-950'
                  : 'text-neutral-400 hover:text-[#e10600]'
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              Ferrari Garage (4)
            </button>

            {/* Red Bull Racing */}
            <button
              onClick={() => {
                f1Audio.playRevClick();
                onSelectTeam('RedBull');
              }}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                selectedTeam === 'RedBull'
                  ? 'bg-[#041026] border border-[#fcd500]/60 text-[#fcd500] shadow-md shadow-blue-950'
                  : 'text-neutral-400 hover:text-[#fcd500]'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-[#fcd500]" />
              Red Bull Garage (4)
            </button>
          </div>
        </div>

        {/* Dynamic livery highlights strip */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {/* Ferrari card */}
          <div className="p-3 rounded border border-red-900/40 bg-red-950/15 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-8 rounded-sm bg-[#e10600] shrink-0" />
              <div>
                <span className="font-bold text-white uppercase tracking-wider block font-racing">
                  Scuderia Ferrari Fleet
                </span>
                <span className="text-neutral-400 text-[11px]">
                  Pole Position · Grid Quiz · The Last Lap · Livery Design
                </span>
              </div>
            </div>
            <span className="font-mono text-red-400 text-[11px] font-semibold">ROSSO CORSA</span>
          </div>

          {/* Red Bull card */}
          <div className="p-3 rounded border border-blue-900/40 bg-blue-950/15 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-8 rounded-sm bg-[#fcd500] shrink-0" />
              <div>
                <span className="font-bold text-white uppercase tracking-wider block font-racing">
                  Oracle Red Bull Racing Fleet
                </span>
                <span className="text-neutral-400 text-[11px]">
                  Paddock TV · Driver Duel · Race Investigation · Gridshots
                </span>
              </div>
            </div>
            <span className="font-mono text-yellow-400 text-[11px] font-semibold">MATTE NAVY & GOLD</span>
          </div>
        </div>

      </div>
    </div>
  );
}
