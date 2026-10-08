import { useState } from 'react';
import { Search, ExternalLink, BookOpen, Flag, FileText } from 'lucide-react';
import { EventDetail, RULEBOOK_GOOGLE_DRIVE_URL } from '../data/eventsData';
import { f1Audio } from '../utils/f1Audio';

interface EventsGridProps {
  events: EventDetail[];
  selectedTeam: 'all' | 'Ferrari' | 'RedBull';
  onSelectEventForBriefing: (event: EventDetail) => void;
  onSelectEventForRegistration: (event: EventDetail) => void;
}

export default function EventsGrid({
  events,
  selectedTeam,
  onSelectEventForBriefing,
  onSelectEventForRegistration
}: EventsGridProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvents = events.filter((evt) => {
    if (selectedTeam !== 'all' && evt.ferrariOrRedBull !== selectedTeam) {
      return false;
    }
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchTitle = evt.title.toLowerCase().includes(q);
      const matchSubtitle = evt.subtitle.toLowerCase().includes(q);
      const matchTagline = evt.tagline.toLowerCase().includes(q);
      const matchFormat = evt.formatType.toLowerCase().includes(q);
      const matchVenue = evt.venue.toLowerCase().includes(q);
      return matchTitle || matchSubtitle || matchTagline || matchFormat || matchVenue;
    }
    return true;
  });

  return (
    <section id="events" className="py-16 sm:py-20 bg-[#07090e] border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
              <span className="text-[#e10600]">STARTING GRID</span>
              <span aria-hidden="true">·</span>
              <span>8 EVENTS</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#fcd500]">GOOGLE FORMS REGISTRATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-racing tracking-tight uppercase">
              The 8 Events
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-400 max-w-2xl">
              Select an event to view its exact rules from the official rulebook and register via Google Form.
            </p>
          </div>

          {/* Link to Rulebook Google Drive */}
          <div className="flex items-center gap-3">
            <a
              href={RULEBOOK_GOOGLE_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-md transition-colors group"
            >
              <FileText className="w-4 h-4 text-[#fcd500] group-hover:scale-110 transition-transform" />
              <span>Rule Book (Google Drive)</span>
              <ExternalLink className="w-3 h-3 text-neutral-400" />
            </a>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by event title, format or venue..."
              className="w-full bg-neutral-900/80 border border-neutral-800 rounded-lg pl-10 pr-4 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#e10600]"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-500 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          <div className="text-xs text-neutral-400">
            Showing <span className="text-white font-bold">{filteredEvents.length}</span> of 8 Events
          </div>
        </div>

        {/* 8 Event Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredEvents.map((evt) => {
            const isFerrari = evt.ferrariOrRedBull === 'Ferrari';

            return (
              <div
                key={evt.id}
                className={`group relative rounded-xl border transition-all duration-200 flex flex-col justify-between overflow-hidden ${
                  isFerrari
                    ? 'border-neutral-800 hover:border-red-600/70 bg-[#0d0e14] hover:shadow-[0_0_20px_rgba(225,6,0,0.15)]'
                    : 'border-neutral-800 hover:border-blue-500/70 bg-[#0a0e1a] hover:shadow-[0_0_20px_rgba(4,16,38,0.4)]'
                }`}
              >
                {/* Top Livery Header */}
                <div 
                  className={`h-1.5 w-full ${
                    isFerrari ? 'bg-[#e10600]' : 'bg-[#fcd500]'
                  }`} 
                />

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="font-mono text-base font-black text-neutral-300">
                        #{evt.number}
                      </span>
                      <span className={`text-[11px] font-semibold tracking-wider uppercase ${
                        isFerrari ? 'text-[#e10600]' : 'text-[#fcd500]'
                      }`}>
                        {isFerrari ? 'Scuderia Ferrari' : 'Red Bull Racing'}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-xl sm:text-2xl font-black text-white font-racing tracking-wide uppercase group-hover:text-white transition-colors">
                      {evt.title}
                    </h3>
                    
                    <p className="text-xs font-semibold text-neutral-300 mt-0.5">
                      {evt.subtitle}
                    </p>

                    <p className="text-xs text-neutral-400 mt-3 line-clamp-3 leading-relaxed italic">
                      "{evt.tagline}"
                    </p>
                  </div>

                  {/* Clean unboxed metadata with separators */}
                  <div className="mt-5 pt-3 border-t border-neutral-800/80 text-[11px] text-neutral-400 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-500">Format:</span>
                      <span className="text-neutral-200 font-medium">{evt.formatType}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-500">Venue:</span>
                      <span className="text-neutral-200 font-medium truncate max-w-[140px]" title={evt.venue}>
                        {evt.venue}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-500">Timing:</span>
                      <span className="text-neutral-200 font-medium font-mono">{evt.timing}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-4 bg-neutral-950/70 border-t border-neutral-800/80 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      f1Audio.playRevClick();
                      onSelectEventForBriefing(evt);
                    }}
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold uppercase text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Rules</span>
                  </button>

                  <a
                    href={evt.googleFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => f1Audio.playRevClick()}
                    className={`inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-white rounded transition-all cursor-pointer shadow-sm ${
                      isFerrari
                        ? 'bg-[#e10600] hover:bg-[#c00000] active:scale-95'
                        : 'bg-[#002f6c] border border-[#fcd500]/50 text-[#fcd500] hover:bg-[#002250] active:scale-95'
                    }`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Google Form</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {filteredEvents.length === 0 && (
          <div className="mt-12 text-center py-12 border border-dashed border-neutral-800 rounded-xl bg-neutral-900/30">
            <Flag className="w-8 h-8 text-neutral-500 mx-auto mb-2" />
            <h4 className="text-base font-bold text-white font-racing">No Matching Events</h4>
            <p className="text-xs text-neutral-400 mt-1">Try refining your search keyword.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 px-4 py-2 text-xs font-semibold uppercase bg-neutral-800 hover:bg-neutral-700 rounded text-neutral-200"
            >
              Reset Search
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
