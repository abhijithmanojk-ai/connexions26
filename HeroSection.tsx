import { useState, useEffect, useRef } from 'react';
import { Flag, Timer, Zap, Play, RotateCcw, FileText, ExternalLink } from 'lucide-react';
import { f1Audio } from '../utils/f1Audio';
import { RULEBOOK_GOOGLE_DRIVE_URL } from '../data/eventsData';

export default function HeroSection() {
  // Countdown to 14th October 2026
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Target: October 14, 2026 09:00 AM IST (UTC+5:30)
    const targetDate = new Date('2026-10-14T09:00:00+05:30').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Starting Lights Interactive Mini-Game
  const [lightCount, setLightCount] = useState<number>(0);
  const [gameState, setGameState] = useState<'idle' | 'arming' | 'ready_to_react' | 'completed' | 'jump_start'>('idle');
  const [reactionTime, setReactionTime] = useState<number | null>(null);
  const lightTimerRef = useRef<NodeJS.Timeout[]>([]);
  const lightsOutTimeRef = useRef<number>(0);

  const startLightsSequence = () => {
    lightTimerRef.current.forEach(t => clearTimeout(t));
    lightTimerRef.current = [];

    setGameState('arming');
    setLightCount(0);
    setReactionTime(null);

    for (let i = 1; i <= 5; i++) {
      const t = setTimeout(() => {
        setLightCount(i);
        f1Audio.playLightBeep(440 + i * 80);
      }, i * 850);
      lightTimerRef.current.push(t);
    }

    const randomHold = 850 * 5 + 1200 + Math.random() * 1800;
    const finalTimer = setTimeout(() => {
      setLightCount(0); // Lights OUT!
      setGameState('ready_to_react');
      lightsOutTimeRef.current = performance.now();
      f1Audio.playLightsOutRev();
    }, randomHold);
    lightTimerRef.current.push(finalTimer);
  };

  const handleLightBoxClick = () => {
    if (gameState === 'arming') {
      lightTimerRef.current.forEach(t => clearTimeout(t));
      lightTimerRef.current = [];
      setGameState('jump_start');
      f1Audio.playLightBeep(180, 0.4);
    } else if (gameState === 'ready_to_react') {
      const elapsed = Math.round(performance.now() - lightsOutTimeRef.current);
      setReactionTime(elapsed);
      setGameState('completed');
      f1Audio.playRevClick();
    }
  };

  const resetGame = () => {
    lightTimerRef.current.forEach(t => clearTimeout(t));
    lightTimerRef.current = [];
    setGameState('idle');
    setLightCount(0);
    setReactionTime(null);
  };

  return (
    <section id="hero" className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-carbon-pattern border-b border-neutral-800">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#e10600]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#0044ff]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Institutional Trust Kicker */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-neutral-400 mb-6 text-center">
          <span className="text-white">DWARAKA DOSS GOVERDHAN DOSS VAISHNAV COLLEGE (AUTONOMOUS)</span>
          <span aria-hidden="true" className="text-[#e10600]">·</span>
          <span className="text-[#fcd500]">DEPARTMENT OF B.COM ACCOUNTING AND FINANCE</span>
          <span aria-hidden="true" className="text-[#e10600]">·</span>
          <span>CHENNAI</span>
        </div>

        {/* Marquee Title */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 rounded border border-neutral-800 bg-neutral-900/80 text-xs uppercase tracking-widest text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-[#e10600] animate-pulse" />
            <span className="text-[#fcd500] font-bold">LUCAFAMA</span> Presents
          </div>

          <h1 className="font-racing text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-none drop-shadow-2xl">
            CONNEXIONS <span className="text-[#e10600] drop-shadow-[0_0_25px_rgba(225,6,0,0.6)]">'26</span>
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-neutral-300 font-medium max-w-2xl mx-auto">
            Formula 1 themed intra-departmental fest bringing speed, strategy, and competition together.
          </p>

          {/* Date & Venue announcement bar */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-neutral-300 font-medium">
            <div className="flex items-center gap-1.5 bg-neutral-900/80 px-3 py-1.5 rounded border border-neutral-800">
              <span className="text-[#fcd500]">📅</span>
              <span className="font-semibold text-white">Wednesday, 14th October 2026</span>
            </div>
            <div className="flex items-center gap-1.5 bg-neutral-900/80 px-3 py-1.5 rounded border border-neutral-800">
              <span className="text-[#e10600]">📍</span>
              <span>Dwaraka Auditorium (9:00 AM Onwards)</span>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#events"
              onClick={() => f1Audio.playRevClick()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-[#e10600] hover:bg-[#c00000] active:scale-95 rounded-md transition-all shadow-lg shadow-red-950/60"
            >
              <Flag className="w-4 h-4" />
              <span>Explore 8 Events & Register</span>
            </a>

            <a
              href={RULEBOOK_GOOGLE_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => f1Audio.playRevClick()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-md transition-colors cursor-pointer group"
            >
              <FileText className="w-4 h-4 text-[#fcd500] group-hover:scale-110 transition-transform" />
              <span>Rule Book (Google Drive)</span>
              <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
            </a>
          </div>
        </div>

        {/* Dynamic Dual Module: Countdown & F1 Starting Lights Simulation */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-5xl mx-auto">
          
          {/* Module 1: Countdown Clock (5 cols) */}
          <div className="lg:col-span-5 bg-neutral-900/70 border border-neutral-800 rounded-lg p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <Timer className="w-4 h-4 text-[#fcd500]" />
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-300 font-racing">
                  Lights Out Countdown
                </span>
              </div>
              <span className="text-[11px] text-neutral-400 font-mono">14 OCT 2026</span>
            </div>

            <div className="grid grid-cols-4 gap-2 my-4 text-center">
              <div className="bg-neutral-950/80 p-2.5 rounded border border-neutral-800/80">
                <span className="block text-2xl sm:text-3xl font-black font-mono-numbers text-white">
                  {String(timeLeft.days).padStart(2, '0')}
                </span>
                <span className="text-[10px] uppercase font-semibold text-neutral-400">Days</span>
              </div>
              <div className="bg-neutral-950/80 p-2.5 rounded border border-neutral-800/80">
                <span className="block text-2xl sm:text-3xl font-black font-mono-numbers text-white">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="text-[10px] uppercase font-semibold text-neutral-400">Hours</span>
              </div>
              <div className="bg-neutral-950/80 p-2.5 rounded border border-neutral-800/80">
                <span className="block text-2xl sm:text-3xl font-black font-mono-numbers text-white">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="text-[10px] uppercase font-semibold text-neutral-400">Mins</span>
              </div>
              <div className="bg-neutral-950/80 p-2.5 rounded border border-neutral-800/80">
                <span className="block text-2xl sm:text-3xl font-black font-mono-numbers text-[#e10600]">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="text-[10px] uppercase font-semibold text-neutral-400">Secs</span>
              </div>
            </div>

            <div className="text-xs text-neutral-400 flex items-center justify-between pt-2 border-t border-neutral-800/60">
              <span>Status: <span className="text-emerald-400 font-medium">Registrations Open</span></span>
              <span>8 Events Live</span>
            </div>
          </div>

          {/* Module 2: Interactive F1 Starting Lights & Reaction Tester (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-900/70 border border-neutral-800 rounded-lg p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#e10600]" />
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-300 font-racing">
                  F1 Start Lights & Reaction Test
                </span>
              </div>
              <span className="text-[11px] text-neutral-400">Interactive</span>
            </div>

            {/* The 5 Starting Lights Gantry */}
            <div 
              onClick={handleLightBoxClick}
              className={`my-3 p-4 rounded-lg bg-neutral-950 border transition-all cursor-pointer select-none text-center ${
                gameState === 'ready_to_react' 
                  ? 'border-emerald-500 bg-emerald-950/20 ring-2 ring-emerald-500/50' 
                  : gameState === 'jump_start'
                  ? 'border-red-600 bg-red-950/20'
                  : 'border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {/* 5 Light Columns */}
              <div className="flex items-center justify-center gap-3 sm:gap-5 py-2">
                {[1, 2, 3, 4, 5].map((idx) => {
                  const isRedOn = lightCount >= idx;
                  return (
                    <div key={idx} className="flex flex-col items-center gap-1.5">
                      <div 
                        className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 transition-all duration-150 ${
                          isRedOn 
                            ? 'bg-[#ff1801] border-red-300 shadow-[0_0_18px_#ff1801]' 
                            : 'bg-neutral-900 border-neutral-800'
                        }`} 
                      />
                      <div 
                        className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 transition-all duration-150 ${
                          isRedOn 
                            ? 'bg-[#ff1801] border-red-300 shadow-[0_0_18px_#ff1801]' 
                            : 'bg-neutral-900 border-neutral-800'
                        }`} 
                      />
                    </div>
                  );
                })}
              </div>

              {/* Status Message */}
              <div className="mt-3 text-xs font-semibold uppercase tracking-wider">
                {gameState === 'idle' && (
                  <span className="text-neutral-400">Click "Arm Starting Lights" to test your reaction speed</span>
                )}
                {gameState === 'arming' && (
                  <span className="text-amber-400 animate-pulse">Wait for 5 lights... Click only when lights go OUT</span>
                )}
                {gameState === 'ready_to_react' && (
                  <span className="text-emerald-400 font-bold text-sm animate-bounce">LIGHTS OUT! CLICK NOW! GO!</span>
                )}
                {gameState === 'jump_start' && (
                  <span className="text-red-400 font-bold">FALSE START! 5-Second Penalty!</span>
                )}
                {gameState === 'completed' && reactionTime !== null && (
                  <div className="text-emerald-300 font-bold flex items-center justify-center gap-2">
                    <span>Reaction Time: <span className="font-mono text-base text-white">{reactionTime} ms</span></span>
                    <span className="text-xs text-neutral-400 font-normal">
                      {reactionTime < 240 ? '🏎️ Champion Tier!' : reactionTime < 340 ? '⚡ Fast Pace' : '🚦 Safe Driver'}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Control buttons */}
            <div className="flex items-center justify-between pt-1">
              <span className="text-[11px] text-neutral-400">
                Starting Lights Simulator
              </span>

              <div className="flex items-center gap-2">
                {gameState === 'idle' ? (
                  <button
                    onClick={startLightsSequence}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase text-black bg-[#fcd500] hover:bg-yellow-400 rounded transition-colors cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    Arm Starting Lights
                  </button>
                ) : (
                  <button
                    onClick={resetGame}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium uppercase text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Reset
                  </button>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
