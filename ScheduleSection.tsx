import { useState } from 'react';
import { Clock, MapPin, Calendar, Globe, Award, Sparkles } from 'lucide-react';
import { CIRCUIT_SCHEDULE, CircuitScheduleEntry } from '../data/eventsData';
import { f1Audio } from '../utils/f1Audio';

export default function ScheduleSection() {
  const [filter, setFilter] = useState<'All' | 'Campus' | 'Online'>('All');

  const filteredEntries = CIRCUIT_SCHEDULE.filter((entry) => {
    if (filter === 'All') return true;
    if (filter === 'Campus') return !entry.isOnline;
    if (filter === 'Online') return !!entry.isOnline;
    return true;
  });

  return (
    <section id="schedule" className="py-16 sm:py-20 bg-[#07090e] border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
              <span className="text-[#fcd500]">CIRCUIT SCHEDULE</span>
              <span aria-hidden="true">·</span>
              <span>RACE DAY TIMELINE</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#e10600]">WEDNESDAY, 14TH OCTOBER 2026</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-racing tracking-tight uppercase">
              Circuit Schedule
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-400 max-w-2xl">
              Official timeline for all Connexions '26 events across Dwaraka, KB Seminar Hall, Classrooms, and Online submissions.
            </p>
          </div>

          {/* Filter segment tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-lg">
            <button
              onClick={() => {
                f1Audio.playRevClick();
                setFilter('All');
              }}
              className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors cursor-pointer ${
                filter === 'All'
                  ? 'bg-neutral-100 text-neutral-950 font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All (10)
            </button>
            <button
              onClick={() => {
                f1Audio.playRevClick();
                setFilter('Campus');
              }}
              className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors cursor-pointer ${
                filter === 'Campus'
                  ? 'bg-neutral-100 text-neutral-950 font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              On-Campus (8)
            </button>
            <button
              onClick={() => {
                f1Audio.playRevClick();
                setFilter('Online');
              }}
              className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors cursor-pointer ${
                filter === 'Online'
                  ? 'bg-neutral-100 text-neutral-950 font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Online (2)
            </button>
          </div>
        </div>

        {/* Schedule Table (Desktop & Tablet) */}
        <div className="mt-8 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950/60 shadow-xl hidden md:block">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-neutral-800 bg-[#0c1017] text-neutral-400 uppercase font-racing text-[13px] tracking-wider">
                <th className="py-4 px-6 font-bold w-1/4">Format / Category</th>
                <th className="py-4 px-6 font-bold w-1/4">Event Name</th>
                <th className="py-4 px-6 font-bold w-1/4">Venue</th>
                <th className="py-4 px-6 font-bold w-1/4">Timings</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-850">
              {filteredEntries.map((item, idx) => {
                const isTitleEvent = item.type === 'Title Event';
                const isValedictory = item.type === 'Valedictory';
                const isOnline = item.isOnline;

                return (
                  <tr 
                    key={idx}
                    className={`transition-colors ${
                      isTitleEvent
                        ? 'bg-red-950/20 hover:bg-red-950/30'
                        : isValedictory
                        ? 'bg-yellow-950/20 hover:bg-yellow-950/30'
                        : 'hover:bg-neutral-900/50'
                    }`}
                  >
                    {/* Format / Type */}
                    <td className="py-4 px-6 font-medium">
                      <div className="flex items-center gap-2">
                        {isTitleEvent && <Award className="w-4 h-4 text-[#e10600]" />}
                        {isValedictory && <Sparkles className="w-4 h-4 text-[#fcd500]" />}
                        {isOnline && <Globe className="w-4 h-4 text-sky-400" />}
                        <span className={`font-semibold ${
                          isTitleEvent 
                            ? 'text-[#e10600] font-bold uppercase font-racing' 
                            : isValedictory
                            ? 'text-[#fcd500] font-bold uppercase font-racing'
                            : 'text-neutral-200'
                        }`}>
                          {item.type}
                        </span>
                      </div>
                    </td>

                    {/* Event Name */}
                    <td className="py-4 px-6 font-bold text-white text-sm font-racing uppercase tracking-wide">
                      {item.eventName || '-'}
                    </td>

                    {/* Venue */}
                    <td className="py-4 px-6">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{item.venue}</span>
                      </div>
                    </td>

                    {/* Timings */}
                    <td className="py-4 px-6">
                      <div className="inline-flex items-center gap-1.5 text-neutral-200 font-mono font-medium">
                        <Clock className="w-3.5 h-3.5 text-[#fcd500]" />
                        <span>{item.timing}</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile Schedule Cards View */}
        <div className="mt-8 space-y-3.5 md:hidden">
          {filteredEntries.map((item, idx) => {
            const isTitleEvent = item.type === 'Title Event';
            const isValedictory = item.type === 'Valedictory';
            const isOnline = item.isOnline;

            return (
              <div
                key={idx}
                className={`p-4 rounded-xl border transition-all ${
                  isTitleEvent
                    ? 'border-[#e10600]/80 bg-red-950/20'
                    : isValedictory
                    ? 'border-[#fcd500]/70 bg-yellow-950/20'
                    : 'border-neutral-800 bg-neutral-900/60'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <div className="flex items-center gap-1.5 font-semibold">
                    {isTitleEvent && <Award className="w-3.5 h-3.5 text-[#e10600]" />}
                    {isValedictory && <Sparkles className="w-3.5 h-3.5 text-[#fcd500]" />}
                    {isOnline && <Globe className="w-3.5 h-3.5 text-sky-400" />}
                    <span className={isTitleEvent ? 'text-[#e10600]' : isValedictory ? 'text-[#fcd500]' : 'text-neutral-400'}>
                      {item.type}
                    </span>
                  </div>

                  <span className="font-mono text-xs text-[#fcd500] font-semibold flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {item.timing}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white font-racing uppercase tracking-wide">
                  {item.eventName || item.type}
                </h4>

                <div className="mt-2.5 flex items-center gap-1.5 text-xs text-neutral-300">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="font-medium">Venue: {item.venue}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Helpful Footnote */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 p-4 rounded-lg bg-neutral-950 border border-neutral-800 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Participants are requested to report to their respective venue 10 minutes prior to flag-off.</span>
          </div>
          <span className="font-mono text-neutral-500">DG VAISHNAV · 14TH OCT 2026</span>
        </div>

      </div>
    </section>
  );
}
