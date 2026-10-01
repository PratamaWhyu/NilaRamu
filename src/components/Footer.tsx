import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0e0e10] text-[#e5e1e4] border-t border-[#2a2a2c]">
      <div className="w-full px-5 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Col 1 */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="font-['Bricolage_Grotesque'] text-2xl font-bold text-[#ffb95f] uppercase tracking-tight">
                Nila Bumbu Kuning
              </span>
            </div>
            <p className="font-['Space_Grotesk'] text-sm text-[#bbc9cd] max-w-sm leading-relaxed">
              Ikan nila ungkep bumbu kuning marinasi vacuum pack (Ready-to-Cook). Praktis disimpan di
              freezer, siap digoreng atau air-fry renyah kapan saja.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#201f21] border border-[#2a2a2c] rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-[#22d3ee] animate-pulse"></span>
              <span className="font-['Space_Grotesk'] text-xs font-bold text-[#22d3ee] tracking-wider">
                OPEN KITCHEN // READY TO DELIVER
              </span>
            </div>
          </div>

          {/* Col 2 */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="font-['Space_Grotesk'] text-xs font-bold text-[#22d3ee] uppercase tracking-wider">
              Navigasi Cepat
            </span>
            <div className="flex flex-col gap-2">
              <a
                className="font-['Space_Grotesk'] text-sm text-[#bbc9cd] hover:text-[#ffb95f] transition-colors"
                href="#beranda"
              >
                Beranda
              </a>
              <a
                className="font-['Space_Grotesk'] text-sm text-[#bbc9cd] hover:text-[#ffb95f] transition-colors"
                href="#menu-favorit"
              >
                Menu Favorit
              </a>
              <a
                className="font-['Space_Grotesk'] text-sm text-[#bbc9cd] hover:text-[#ffb95f] transition-colors"
                href="#tentang"
              >
                Filosofi Rasa
              </a>
              <a
                className="font-['Space_Grotesk'] text-sm text-[#bbc9cd] hover:text-[#ffb95f] transition-colors"
                href="#galeri"
              >
                Galeri & Cara Masak
              </a>
              <a
                className="font-['Space_Grotesk'] text-sm text-[#bbc9cd] hover:text-[#ffb95f] transition-colors"
                href="#cara-order"
              >
                Alur Pemesanan
              </a>
            </div>
          </div>

          {/* Col 3 */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="font-['Space_Grotesk'] text-xs font-bold text-[#22d3ee] uppercase tracking-wider">
              Kanal Sosial
            </span>
            <div className="flex flex-col gap-2 font-['Space_Grotesk'] text-sm text-[#bbc9cd]">
              <a
                className="hover:text-[#8aebff] transition-colors flex items-center gap-1.5"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[16px]">tag</span>
                Instagram
              </a>
              <a
                className="hover:text-[#8aebff] transition-colors flex items-center gap-1.5"
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[16px]">tag</span>
                TikTok
              </a>
              <a
                className="hover:text-[#8aebff] transition-colors flex items-center gap-1.5"
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[16px]">tag</span>
                X (Twitter)
              </a>
              <a
                className="hover:text-[#8aebff] transition-colors flex items-center gap-1.5"
                href="https://threads.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[16px]">tag</span>
                Threads
              </a>
              <span className="font-['Space_Grotesk'] text-xs font-bold text-[#ffb95f] pt-1">
                @nilabumbukuning
              </span>
            </div>
          </div>

          {/* Col 4 */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="font-['Space_Grotesk'] text-xs font-bold text-[#22d3ee] uppercase tracking-wider">
              Kontak & Pengiriman
            </span>
            <div className="flex flex-col gap-3 font-['Space_Grotesk'] text-xs text-[#bbc9cd]">
              <div>
                <div className="text-[#e5e1e4] font-bold uppercase text-[#ffb95f]">
                  WhatsApp Order Hub:
                </div>
                <a
                  className="hover:text-[#8aebff] font-bold text-sm text-[#e5e1e4] transition-colors"
                  href="https://wa.me/628563090805"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +62 812-3456-7890
                </a>
              </div>
              <div>
                <div className="text-[#e5e1e4] font-bold uppercase text-[#ffb95f]">
                  Pengiriman Frozen Pack:
                </div>
                <p>Jabodetabek (Instant / Sameday + Thermal Bag & Ice Gel)</p>
              </div>
              <div>
                <div className="text-[#e5e1e4] font-bold uppercase text-[#ffb95f]">
                  Jam Pengiriman:
                </div>
                <p>Senin - Minggu: 08:30 - 20:00 WIB</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-[#2a2a2c] flex flex-col sm:flex-row items-center justify-between gap-4 font-['Space_Grotesk'] text-xs text-[#859397]">
          <p>© 2025 Nila Bumbu Kuning. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="font-bold uppercase tracking-wider text-[#859397]">
              Authentic Indonesian Spice Lab
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffb95f]"></span>
            <span className="font-bold uppercase tracking-wider text-[#8aebff]">
              Jakarta, ID
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
