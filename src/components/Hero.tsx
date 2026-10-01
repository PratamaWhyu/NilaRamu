import React from 'react';

interface HeroProps {
  onOpenOrderModal: () => void;
  onOpenImageModal: (url: string, title: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal, onOpenImageModal }) => {
  const heroImageUrl =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDlHVcHwi8yDG7dRc5EEDBoaviaZE5SRI0TzG1jckEGakCOGcGkGDT5neoFi7XMKOzDH5C6O8vhSFSsqm6LmLPtkY4vnABNMTcEb9NJw0O8dMcUsOXZeMtOtewLqYOEFv2WcHiKk3spA-aknTd2-Reln6aOKeWjkAMXfCBRzzXqiXK6FaWDVQZdS6SIeUGSk9-UkzrzgOoSzz5a3udeH9NfCaNM-_PbzqEmvTE9qaSeR7iq_NtWTxw';

  // Specific distinct click URL for hero image as requested by user
  const heroImageClickUrl =
    'https://wa.me/628563090805?text=Halo%20Nila%20Bumbu%20Kuning,%20saya%20mau%20order%20Paket%20Hero%20Vacuum%20Pack%20Spesial!';

  return (
    <section
      id="beranda"
      className="relative w-full px-5 md:px-12 py-12 lg:py-24 bg-[#0e0e10] overflow-hidden"
    >
      {/* Ambient Neon Cyber Accents & Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#22d3ee] blur-[130px]"></div>
        <div className="absolute top-1/2 -right-32 w-[30rem] h-[30rem] rounded-full bg-[#ffb95f] blur-[160px]"></div>
        <div className="w-full h-full bg-[radial-gradient(#859397_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col gap-7">
        {/* Status Bar Tagline */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2a2a2c] rounded-full shadow-[2px_2px_0px_#000000]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8aebff] animate-ping"></span>
            <span className="font-['Space_Grotesk'] text-xs font-bold text-[#8aebff] tracking-widest uppercase">
              READY TO COOK // FRESH MARINATED PACK
            </span>
          </div>
          <div className="flex items-center gap-2 text-[#859397] font-['Space_Grotesk'] text-xs font-bold">
            <span className="text-[#22d3ee]">#AUTENTIK2025</span>
            <span>•</span>
            <span className="text-[#bbc9cd]">GEO: -6.2088, 106.8456</span>
          </div>
        </div>

        {/* Main Hero Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text Column */}
          <div className="lg:col-span-6 flex flex-col gap-4 z-10">
            <div className="relative flex flex-wrap gap-2">
              <span className="font-['Bricolage_Grotesque'] text-xs sm:text-sm font-black px-3 py-1 bg-[#39393b] text-[#e5e1e4] rounded -rotate-2 shadow-[3px_3px_0px_#000000]">
                FRESH • FLAVOR • LOCAL
              </span>
              <span className="font-['Bricolage_Grotesque'] text-xs sm:text-sm font-black px-3 py-1 bg-[#ffb95f] text-[#472a00] rounded rotate-1 shadow-[3px_3px_0px_#22D3EE]">
                100% REMPAH ALAMI
              </span>
              <span className="font-['Bricolage_Grotesque'] text-xs sm:text-sm font-black px-3 py-1 bg-[#8aebff] text-[#00363e] rounded -rotate-1 shadow-[3px_3px_0px_#ee9800]">
                RENYAH DI LUAR • JUICY DI DALAM
              </span>
            </div>

            <h1 className="font-['Bricolage_Grotesque'] text-4xl sm:text-5xl lg:text-7xl text-[#e5e1e4] tracking-tight uppercase leading-[0.95] font-extrabold">
              NILA BUMBU <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffb95f] via-[#ee9800] to-[#8aebff]">
                KUNING
              </span>
            </h1>

            <p className="font-['Space_Grotesk'] text-base sm:text-lg text-[#bbc9cd] max-w-xl leading-relaxed">
              Ikan nila segar pilihan yang sudah dibersihkan dan dimarinasi bumbu kuning rempah
              Nusantara. Praktis disimpan di freezer, tinggal goreng atau air-fry kapan saja tanpa
              repot ulek bumbu!
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#ffb95f] text-[#472a00] font-['Space_Grotesk'] text-xs sm:text-sm font-bold rounded-full uppercase tracking-wider shadow-[4px_4px_0px_#22D3EE] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#22D3EE] active:translate-x-1 active:translate-y-1 transition-all cursor-pointer"
                href="https://wa.me/628563090805?text=Halo%20Nila%20Bumbu%20Kuning,%20saya%20mau%20order%20paket%20spesial!"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-xl sm:text-2xl">chat</span>
                <span>Pesan via WhatsApp</span>
              </a>

              <button
                onClick={onOpenOrderModal}
                className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 bg-[#201f21] border border-[#2a2a2c] text-[#8aebff] font-['Space_Grotesk'] text-xs sm:text-sm font-bold rounded-full uppercase tracking-wider hover:bg-[#2a2a2c] hover:border-[#22d3ee] transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg sm:text-xl">restaurant_menu</span>
                <span>Lihat Menu Pilihan</span>
              </button>
            </div>

            {/* Decorative Ingredient Chips */}
            <div className="pt-3 flex flex-wrap items-center gap-1.5 text-[#bbc9cd] font-['Space_Grotesk'] text-xs font-bold">
              <span className="text-[#ffb95f]">RACIKAN KHAS:</span>
              <span className="px-2 py-0.5 bg-[#201f21] border border-[#2a2a2c] rounded">Kunyit Segar</span>
              <span className="px-2 py-0.5 bg-[#201f21] border border-[#2a2a2c] rounded">Serai Wangi</span>
              <span className="px-2 py-0.5 bg-[#201f21] border border-[#2a2a2c] rounded">Daun Jeruk</span>
              <span className="px-2 py-0.5 bg-[#201f21] border border-[#2a2a2c] rounded">Cabai Rawit</span>
              <span className="px-2 py-0.5 bg-[#201f21] border border-[#2a2a2c] rounded">Kemiri Gurih</span>
            </div>
          </div>

          {/* Visual Column with Clickable Hotlink */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Neo-Brutalist Frame Wrapped in Anchor to Unique URL */}
              <div className="relative bg-[#2a2a2c] rounded-2xl p-1.5 shadow-[8px_8px_0px_#22D3EE] overflow-hidden group">
                <a
                  href={heroImageClickUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative overflow-hidden rounded-xl cursor-pointer"
                  title="Klik untuk order Paket Hero via WhatsApp"
                >
                  <img
                    alt="Ikan Nila Marinasi Bumbu Kuning Vacuum Sealed Pack Siap Goreng"
                    className="w-full h-[360px] sm:h-[420px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    src={heroImageUrl}
                    referrerPolicy="no-referrer"
                  />

                  {/* Hover indicator banner */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-[#ffb95f] text-[#472a00] font-['Space_Grotesk'] font-bold text-xs px-4 py-2 rounded-full uppercase tracking-wider shadow-[3px_3px_0px_#000000] flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                      Klik Buka Link Order (WhatsApp)
                    </span>
                  </div>
                </a>

                {/* Floating Sticker Overlay */}
                <div className="absolute bottom-5 left-5 bg-[#131315]/95 backdrop-blur-md rounded-xl p-3 shadow-[4px_4px_0px_#ee9800] max-w-xs border border-[#2a2a2c]">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="material-symbols-outlined text-[#ffb95f] text-sm">inventory_2</span>
                    <span className="font-['Bricolage_Grotesque'] text-xs font-black text-[#ffb95f] uppercase tracking-wide">
                      Vacuum Pack Higienis
                    </span>
                  </div>
                  <p className="font-['Space_Grotesk'] text-xs text-[#e5e1e4]">
                    Kemasan Kedap Udara (Vacuum Pack) — Bumbu meresap sempurna, tahan lama & higienis.
                  </p>
                </div>

                {/* Price Tag Top Right */}
                <div className="absolute top-5 right-5 bg-[#ffb95f] text-[#472a00] font-['Bricolage_Grotesque'] text-sm sm:text-base font-extrabold px-3.5 py-1.5 rounded shadow-[3px_3px_0px_#000000] rotate-3">
                  Rp 35.000 / pack (Isi 2 Ekor)
                </div>
              </div>

              {/* Mini Spec Card Floating Underneath */}
              <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-[#0e0e10] text-[#e5e1e4] p-4 rounded-xl shadow-xl items-center gap-3 z-20 border border-[#2a2a2c]">
                <div className="w-12 h-12 rounded-full bg-[#ffb95f]/20 flex items-center justify-center text-[#ffb95f]">
                  <span className="material-symbols-outlined text-2xl">skillet</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-['Space_Grotesk'] text-xs font-bold text-[#8aebff] uppercase">
                    Siap Goreng Di Rumah
                  </span>
                  <span className="font-['Space_Grotesk'] text-xs text-[#bbc9cd]">
                    Tinggal goreng / air fry kapan saja
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
