import React from 'react';

export const Philosophy: React.FC = () => {
  const philosophyImgUrl =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuABYsmPfJyYb_ilEiEK0_IPrp3n8shFCY4ftGCNjK64nVniLs1azdotSNGsaRuXkYccbSvqRgKAVLkTE4FxFl_Ih1AQsEuZShz2DXFgY5Oe-ov5wMPHNd_Hke2L0n-gHSPIuH_89RWyyXuD5jlFtVeGdiVftVWy428IUJtPfxZG5wN7mkRpEmk0Tdsf-wrK3OOfzcem9v9WfnmnpyvVoW4oZ7BaDodIiBBeMhfjRqC8RoyWpbxqVL8';

  const distinctClickUrl =
    'https://wa.me/628563090805?text=Halo%20Nila%20Bumbu%20Kuning,%20saya%20mau%20konsultasi%20stok%20Sealed%20Fresh%20Pack%20Frozen%20Food!';

  return (
    <section id="tentang" className="w-full px-5 md:px-12 py-16 bg-[#1b1b1d] border-y border-[#2a2a2c]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Visual Card with Clickable Hotlink */}
        <div className="lg:col-span-6 relative order-2 lg:order-1">
          <div className="relative bg-[#201f21] rounded-2xl p-2 sm:p-3 shadow-[6px_6px_0px_#ee9800] border border-[#2a2a2c] group">
            <a
              href={distinctClickUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative overflow-hidden rounded-xl cursor-pointer"
              title="Klik gambar untuk konsultasi stok Sealed Fresh Pack"
            >
              <img
                alt="Vacuum packed raw seasoned tilapia fish in aromatic golden turmeric marinade"
                className="w-full h-[320px] sm:h-[380px] lg:h-[450px] object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                src={philosophyImgUrl}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-[#22d3ee] text-[#00363e] font-['Space_Grotesk'] font-bold text-xs px-4 py-2 rounded-full uppercase tracking-wider shadow-[3px_3px_0px_#000000] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">touch_app</span>
                  Klik Buka Detail Marinasi (WhatsApp)
                </span>
              </div>
            </a>

            <div className="absolute -top-3 -left-3 bg-[#22d3ee] text-[#00363e] font-['Bricolage_Grotesque'] text-xs font-black px-3 py-1.5 rounded -rotate-3 shadow-[2px_2px_0px_#000000]">
              SEALED FRESH PACK
            </div>
          </div>
        </div>

        {/* Content Breakdown */}
        <div className="lg:col-span-6 flex flex-col gap-4 order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 font-['Space_Grotesk'] text-xs font-bold text-[#ffb95f] tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-[#ffb95f]"></span>
            <span>Simple Ingredients. Big Flavor.</span>
          </div>

          <h2 className="font-['Bricolage_Grotesque'] text-2xl sm:text-3xl lg:text-4xl text-[#e5e1e4] tracking-tight uppercase font-extrabold leading-tight">
            BUKAN SEKADAR FROZEN FOOD BIASA.
          </h2>

          <p className="font-['Space_Grotesk'] text-base sm:text-lg text-[#bbc9cd] leading-relaxed">
            Praktis Tanpa Repot, Rasa Juara Restoran. Kami bersihkan sisik dan isi perutnya hingga
            tuntas, lalu dimarinasi dengan racikan 9 rempah kuning alami selama 12 jam hingga meresap
            ke serat daging terdalam.
          </p>

          <p className="font-['Space_Grotesk'] text-sm sm:text-base text-[#bbc9cd]">
            Anda tinggal panaskan minyak atau masukkan ke Air Fryer. Bumbu kuning meresap sampai ke
            tulang tanpa perlu marinasi ulang. Solusi santapan bergizi kilat untuk keluarga.
          </p>

          {/* Feature Pill Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-2.5 p-3 bg-[#201f21] border border-[#2a2a2c] rounded-xl shadow-[2px_2px_0px_#000000]">
              <span className="material-symbols-outlined text-[#8aebff] text-xl">skillet</span>
              <span className="font-['Space_Grotesk'] text-xs sm:text-sm font-bold text-[#e5e1e4]">
                Siap Goreng / Air Fryer Friendly
              </span>
            </div>

            <div className="flex items-center gap-2.5 p-3 bg-[#201f21] border border-[#2a2a2c] rounded-xl shadow-[2px_2px_0px_#000000]">
              <span className="material-symbols-outlined text-[#ffb95f] text-xl">inventory_2</span>
              <span className="font-['Space_Grotesk'] text-xs sm:text-sm font-bold text-[#e5e1e4]">
                Kemasan Vacuum Pack Higienis
              </span>
            </div>

            <div className="flex items-center gap-2.5 p-3 bg-[#201f21] border border-[#2a2a2c] rounded-xl shadow-[2px_2px_0px_#000000]">
              <span className="material-symbols-outlined text-[#22d3ee] text-xl">verified_user</span>
              <span className="font-['Space_Grotesk'] text-xs sm:text-sm font-bold text-[#e5e1e4]">
                Tanpa Pengawet & Pewarna
              </span>
            </div>

            <div className="flex items-center gap-2.5 p-3 bg-[#201f21] border border-[#2a2a2c] rounded-xl shadow-[2px_2px_0px_#000000]">
              <span className="material-symbols-outlined text-[#ffad8e] text-xl">ac_unit</span>
              <span className="font-['Space_Grotesk'] text-xs sm:text-sm font-bold text-[#e5e1e4]">
                Tahan 3 Bulan di Freezer
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
