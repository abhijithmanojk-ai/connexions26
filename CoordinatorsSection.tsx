import { Phone, User, FileText, ExternalLink, CheckCircle, ShieldAlert, Award } from 'lucide-react';
import { 
  OFFICIAL_GENERAL_RULES, 
  HEAD_COORDINATORS, 
  FACULTY_COORDINATORS, 
  COLLEGE_DIGNITARIES, 
  RULEBOOK_GOOGLE_DRIVE_URL 
} from '../data/eventsData';

export default function CoordinatorsSection() {
  return (
    <section id="coordinators" className="py-16 sm:py-20 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section 1: Exact General Rules from Rulebook (Page 3) */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-neutral-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e10600] mb-2">
                <span>OFFICIAL RULEBOOK GUIDELINES</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#fcd500]">CONNEXIONS '26</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white font-racing tracking-tight uppercase">
                General Rules
              </h2>
              <p className="mt-1 text-sm text-neutral-400">
                Official rules as published in the Connexions '26 Rulebook.
              </p>
            </div>

            <a
              href={RULEBOOK_GOOGLE_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-md transition-colors"
            >
              <FileText className="w-4 h-4 text-[#fcd500]" />
              <span>Full Rulebook (Google Drive)</span>
              <ExternalLink className="w-3 h-3 text-neutral-400" />
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {OFFICIAL_GENERAL_RULES.map((rule, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800 flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-[#e10600]/20 text-[#e10600] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 font-mono">
                  {idx + 1}
                </div>
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-medium">
                  {rule}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Head Co-ordinators from Rulebook (Page 2) */}
        <div>
          <div className="pb-4 border-b border-neutral-800">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#fcd500] mb-1">
              <span>STUDENT LEADERSHIP</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-racing tracking-tight uppercase">
              Head Co-ordinators
            </h3>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {HEAD_COORDINATORS.map((coord, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#e10600]/20 text-[#e10600] flex items-center justify-center font-bold mb-3">
                    <User className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#fcd500] font-mono">
                    {coord.role}
                  </span>
                  <h4 className="text-lg font-bold text-white font-racing uppercase mt-1">
                    {coord.name}
                  </h4>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-800">
                  <a 
                    href={`tel:${coord.phone}`} 
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#fcd500] hover:underline font-bold"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    {coord.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Faculty Co-ordinators & Department Leadership (Page 1) */}
        <div className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800">
          <div className="flex flex-col sm:flex-row items-center justify-between pb-4 border-b border-neutral-800 gap-2 text-center sm:text-left">
            <div>
              <span className="text-xs font-bold uppercase text-[#e10600] tracking-wider font-racing">
                {COLLEGE_DIGNITARIES.presentedBy}
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white font-racing uppercase mt-0.5">
                Department of B.Com Accounting and Finance
              </h4>
              <p className="text-xs text-neutral-400">
                {COLLEGE_DIGNITARIES.collegeName}
              </p>
            </div>
            <div className="text-xs font-mono text-[#fcd500] text-center sm:text-right">
              <div>14th October 2026</div>
              <div className="text-neutral-400">9:00 AM Onwards · Dwaraka Auditorium</div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-xs">
            <div className="p-3 rounded bg-neutral-950/60 border border-neutral-800/80">
              <span className="text-[11px] text-neutral-400 uppercase block font-semibold">Faculty Co-ordinator</span>
              <span className="text-white font-bold block mt-0.5">Dr. K. Tamilselvi</span>
              <span className="text-[11px] text-neutral-400">Assistant Professor</span>
            </div>

            <div className="p-3 rounded bg-neutral-950/60 border border-neutral-800/80">
              <span className="text-[11px] text-neutral-400 uppercase block font-semibold">Faculty Co-ordinator</span>
              <span className="text-white font-bold block mt-0.5">Mr. Balaji U</span>
              <span className="text-[11px] text-neutral-400">Assistant Professor</span>
            </div>

            <div className="p-3 rounded bg-neutral-950/60 border border-neutral-800/80">
              <span className="text-[11px] text-neutral-400 uppercase block font-semibold">Head of the Dept i/c</span>
              <span className="text-white font-bold block mt-0.5">Dr. D. Jayaprakash</span>
            </div>

            <div className="p-3 rounded bg-neutral-950/60 border border-neutral-800/80">
              <span className="text-[11px] text-neutral-400 uppercase block font-semibold">Principal</span>
              <span className="text-white font-bold block mt-0.5">Capt. Dr. S. Santhosh Baboo</span>
            </div>

            <div className="p-3 rounded bg-neutral-950/60 border border-neutral-800/80">
              <span className="text-[11px] text-neutral-400 uppercase block font-semibold">Secretary</span>
              <span className="text-white font-bold block mt-0.5">Shri. Ashok Kumar Mundhra</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
