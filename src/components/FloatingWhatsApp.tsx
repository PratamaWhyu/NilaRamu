import React from 'react';

interface FloatingWhatsAppProps {
  onOpenOrderModal: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenOrderModal }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
      {/* Quick Custom Order Trigger */}
      <button
        onClick={onOpenOrderModal}
        className="hidden md:flex items-center gap-1.5 px-4 py-3 bg-[#201f21] text-[#8aebff] rounded-full font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_#000000] border border-[#22d3ee]/40 hover:bg-[#2a2a2c] transition-all cursor-pointer"
      >
        <span className="material-symbols-outlined text-base">receipt_long</span>
        <span>Buat Order</span>
      </button>

      {/* Main Direct WhatsApp Link Button */}
      <a
        className="flex items-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 bg-[#ffb95f] text-[#472a00] rounded-full font-['Space_Grotesk'] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0px_#22D3EE] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#22D3EE] active:translate-x-1 active:translate-y-1 transition-all group cursor-pointer"
        href="https://wa.me/628563090805?text=Halo%20Admin%20Nila%20Bumbu%20Kuning,%20saya%20mau%20order%20ikan%20bumbu%20kuning!"
        rel="noopener noreferrer"
        target="_blank"
        title="Hubungi WhatsApp Order Hub"
      >
        <span className="material-symbols-outlined text-xl text-[#472a00] group-hover:scale-110 transition-transform">
          chat
        </span>
        <span className="hidden sm:inline">Order WA Cepat</span>
      </a>
    </div>
  );
};
