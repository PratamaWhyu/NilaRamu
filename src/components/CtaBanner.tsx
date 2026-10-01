import React from 'react';

interface CtaBannerProps {
  onOpenOrderModal: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenOrderModal }) => {
  return (
    <section className="w-full px-5 md:px-12 py-16 bg-[#0e0e10]">
      <div className="max-w-7xl mx-auto relative rounded-2xl bg-gradient-to-r from-[#2a2a2c] via-[#201f21] to-[#2a2a2c] p-6 lg:p-12 overflow-hidden shadow-[8px_8px_0px_#22D3EE] border border-[#22d3ee]/30">
        {/* Subtle Decorative Elements */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#ffb95f]/10 blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-3 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0e0e10] rounded-full w-fit mx-auto lg:mx-0 shadow-[2px_2px_0px_#000000] border border-[#2a2a2c]">
              <span className="w-2 h-2 rounded-full bg-[#ffb95f]"></span>
              <span className="font-['Space_Grotesk'] text-xs font-bold text-[#ffb95f]">
                ESTIMASI TIBA: 30 - 45 MENIT
              </span>
            </div>

            <h2 className="font-['Bricolage_Grotesque'] text-2xl sm:text-3xl lg:text-4xl text-[#e5e1e4] uppercase font-extrabold tracking-tight">
              LAGI NGIDAM NILA BUMBU KUNING SEKARANG?
            </h2>

            <p className="font-['Space_Grotesk'] text-sm sm:text-base text-[#bbc9cd] leading-relaxed">
              Dapur kami siap menyalakan wajan untuk pesanan Anda. Renyahnya ikan, gurihnya rempah
              kuning, dan pedasnya sambal siap meluncur hangat ke meja Anda.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={onOpenOrderModal}
              className="flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#ffb95f] text-[#472a00] font-['Space_Grotesk'] text-xs sm:text-sm font-bold rounded-full uppercase tracking-wider shadow-[4px_4px_0px_#22D3EE] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#22D3EE] active:translate-x-1 active:translate-y-1 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-2xl">chat</span>
              <span>Order Pack via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
