import React from 'react';

export const SocialStrip: React.FC = () => {
  return (
    <section id="social-media" className="w-full px-5 md:px-12 py-8 bg-[#1b1b1d] border-y border-[#2a2a2c]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-center md:text-left">
          <span className="font-['Bricolage_Grotesque'] text-lg sm:text-xl font-bold text-[#ffb95f] uppercase">
            FOLLOW THE FLAVOR
          </span>
          <span className="hidden sm:inline text-[#859397]">•</span>
          <span className="font-['Space_Grotesk'] text-xs sm:text-sm text-[#bbc9cd]">
            Ikuti giveaway mingguan & update menu rahasia
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            className="px-4 py-2 bg-[#201f21] hover:bg-[#2a2a2c] rounded-full text-[#e5e1e4] font-['Space_Grotesk'] text-xs font-bold hover:text-[#8aebff] transition-colors flex items-center gap-1.5 shadow-[2px_2px_0px_#000000] border border-[#2a2a2c]"
            href="https://instagram.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>@Instagram</span>
          </a>
          <a
            className="px-4 py-2 bg-[#201f21] hover:bg-[#2a2a2c] rounded-full text-[#e5e1e4] font-['Space_Grotesk'] text-xs font-bold hover:text-[#8aebff] transition-colors flex items-center gap-1.5 shadow-[2px_2px_0px_#000000] border border-[#2a2a2c]"
            href="https://tiktok.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>@TikTok</span>
          </a>
          <a
            className="px-4 py-2 bg-[#201f21] hover:bg-[#2a2a2c] rounded-full text-[#e5e1e4] font-['Space_Grotesk'] text-xs font-bold hover:text-[#8aebff] transition-colors flex items-center gap-1.5 shadow-[2px_2px_0px_#000000] border border-[#2a2a2c]"
            href="https://threads.net"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>@Threads</span>
          </a>
        </div>
      </div>
    </section>
  );
};
