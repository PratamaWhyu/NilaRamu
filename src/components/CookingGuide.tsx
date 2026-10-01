import React, { useState, useEffect } from 'react';
import { playTimerChime } from '../utils/audio';

export const CookingGuide: React.FC = () => {
  // Kitchen timer state
  const [activeTimerMode, setActiveTimerMode] = useState<'thaw' | 'fry' | 'airfry' | null>(null);
  const [secondsLeft, setSecondsLeft] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const timerPresets = {
    thaw: { label: 'Thawing Rendam', duration: 10 * 60 },
    fry: { label: 'Wajan Goreng Minyak', duration: 6 * 60 },
    airfry: { label: 'Air Fryer 180°C', duration: 12 * 60 },
  };

  const startTimer = (mode: 'thaw' | 'fry' | 'airfry') => {
    setActiveTimerMode(mode);
    setSecondsLeft(timerPresets[mode].duration);
    setIsRunning(true);
  };

  const togglePause = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    if (activeTimerMode) {
      setSecondsLeft(timerPresets[activeTimerMode].duration);
      setIsRunning(false);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            playTimerChime();
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (secondsLeft === 0 && isRunning) {
      setIsRunning(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, secondsLeft]);

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section id="galeri" className="w-full px-5 md:px-12 py-16 bg-[#201f21] border-b border-[#2a2a2c]">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="text-center max-w-xl mx-auto flex flex-col gap-2">
          <span className="font-['Space_Grotesk'] text-xs font-bold text-[#8aebff] tracking-widest uppercase">
            EASY 3-STEP COOKING
          </span>
          <h2 className="font-['Bricolage_Grotesque'] text-2xl sm:text-3xl lg:text-4xl text-[#e5e1e4] uppercase font-extrabold">
            CARA MASAK PRAKTIS
          </h2>
          <p className="font-['Space_Grotesk'] text-sm sm:text-base text-[#bbc9cd]">
            Tanpa repot ulek bumbu, anti cipratan minyak berlebih. Cukup 3 langkah mudah:
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1b1b1d] p-6 rounded-2xl flex flex-col gap-2 relative shadow-[3px_3px_0px_#000000] border border-[#2a2a2c]">
            <span className="font-['Bricolage_Grotesque'] text-5xl font-black text-[#ffb95f]/50">
              01
            </span>
            <span className="font-['Bricolage_Grotesque'] text-xl font-bold text-[#e5e1e4] uppercase">
              Thawing Singkat
            </span>
            <p className="font-['Space_Grotesk'] text-xs sm:text-sm text-[#bbc9cd] leading-relaxed">
              Keluarkan pack dari freezer, rendam kemasan vakum di air keran atau diamkan pada suhu
              ruang selama 10-15 menit hingga melunak.
            </p>
            <div className="mt-auto pt-3">
              <button
                onClick={() => startTimer('thaw')}
                className="w-full py-2 bg-[#2a2a2c] hover:bg-[#353437] text-[#8aebff] font-['Space_Grotesk'] text-xs font-bold uppercase rounded-lg border border-[#3c494c] transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span className="material-symbols-outlined text-sm">timer</span>
                <span>Pasang Timer Thawing (10m)</span>
              </button>
            </div>
          </div>

          <div className="bg-[#1b1b1d] p-6 rounded-2xl flex flex-col gap-2 relative shadow-[3px_3px_0px_#22D3EE] border border-[#22d3ee]/40">
            <span className="font-['Bricolage_Grotesque'] text-5xl font-black text-[#8aebff]/50">
              02
            </span>
            <span className="font-['Bricolage_Grotesque'] text-xl font-bold text-[#e5e1e4] uppercase">
              Goreng / Air Fry
            </span>
            <p className="font-['Space_Grotesk'] text-xs sm:text-sm text-[#bbc9cd] leading-relaxed">
              Goreng di minyak panas sedang selama 5-7 menit hingga kuning keemasan ATAU panggang di
              Air Fryer 180°C selama 12 menit.
            </p>
            <div className="mt-auto pt-3 flex gap-2">
              <button
                onClick={() => startTimer('fry')}
                className="flex-1 py-2 bg-[#ffb95f] text-[#472a00] font-['Space_Grotesk'] text-xs font-bold uppercase rounded-lg shadow-[2px_2px_0px_#000000] hover:bg-[#ee9800] transition-all cursor-pointer flex items-center justify-center gap-1"
              >
                <span className="material-symbols-outlined text-sm">skillet</span>
                <span>Goreng (6m)</span>
              </button>
              <button
                onClick={() => startTimer('airfry')}
                className="flex-1 py-2 bg-[#22d3ee] text-[#00363e] font-['Space_Grotesk'] text-xs font-bold uppercase rounded-lg shadow-[2px_2px_0px_#000000] hover:bg-[#8aebff] transition-all cursor-pointer flex items-center justify-center gap-1"
              >
                <span className="material-symbols-outlined text-sm">air</span>
                <span>Air Fry (12m)</span>
              </button>
            </div>
          </div>

          <div className="bg-[#1b1b1d] p-6 rounded-2xl flex flex-col gap-2 relative shadow-[3px_3px_0px_#000000] border border-[#2a2a2c]">
            <span className="font-['Bricolage_Grotesque'] text-5xl font-black text-[#ffb95f]/50">
              03
            </span>
            <span className="font-['Bricolage_Grotesque'] text-xl font-bold text-[#e5e1e4] uppercase">
              Sajikan Hangat
            </span>
            <p className="font-['Space_Grotesk'] text-xs sm:text-sm text-[#bbc9cd] leading-relaxed">
              Angkat dan tiriskan. Nila bumbu kuning krispi siap disantap hangat bersama lalapan dan
              sambal korek pedas segar!
            </p>
            <div className="mt-auto pt-3">
              <div className="p-2 bg-[#201f21] rounded-lg border border-[#2a2a2c] flex items-center gap-2 text-xs text-[#ffb95f]">
                <span className="material-symbols-outlined text-base">restaurant</span>
                <span>Paling enak dimakan dengan nasi panas mengepul!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Live Interactive Kitchen Timer Panel */}
        {activeTimerMode && (
          <div className="bg-[#131315] border-2 border-[#22d3ee] rounded-2xl p-5 shadow-[6px_6px_0px_#ffb95f] flex flex-col sm:flex-row items-center justify-between gap-4 animate-in fade-in duration-300">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#22d3ee]/20 flex items-center justify-center text-[#22d3ee]">
                <span className="material-symbols-outlined text-2xl animate-pulse">timer</span>
              </div>
              <div className="flex flex-col">
                <span className="font-['Space_Grotesk'] text-xs text-[#bbc9cd] uppercase tracking-wider">
                  Timer Dapur Aktif: {timerPresets[activeTimerMode].label}
                </span>
                <span className="font-['Bricolage_Grotesque'] text-3xl sm:text-4xl font-black text-[#8aebff] tracking-tight tabular-nums">
                  {formatTime(secondsLeft)}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={togglePause}
                className="flex-1 sm:flex-none px-5 py-2.5 bg-[#ffb95f] text-[#472a00] font-['Space_Grotesk'] text-xs font-bold uppercase rounded-lg shadow-[2px_2px_0px_#000000] hover:bg-[#ee9800] transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span className="material-symbols-outlined text-base">
                  {isRunning ? 'pause' : 'play_arrow'}
                </span>
                <span>{isRunning ? 'Jeda' : 'Lanjut'}</span>
              </button>

              <button
                onClick={resetTimer}
                className="px-4 py-2.5 bg-[#2a2a2c] hover:bg-[#353437] text-[#e5e1e4] font-['Space_Grotesk'] text-xs font-bold uppercase rounded-lg border border-[#3c494c] transition-all cursor-pointer flex items-center justify-center gap-1"
              >
                <span className="material-symbols-outlined text-base">restart_alt</span>
                <span>Reset</span>
              </button>

              <button
                onClick={() => {
                  setIsRunning(false);
                  setActiveTimerMode(null);
                }}
                className="px-3 py-2.5 text-[#859397] hover:text-[#e5e1e4] text-xs font-bold"
              >
                Tutup
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
