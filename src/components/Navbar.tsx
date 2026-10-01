import React, { useState } from 'react';

interface NavbarProps {
  onOpenOrderModal: () => void;
  cartCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal, cartCount = 0 }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Beranda', href: '#beranda', active: true },
    { label: 'Menu', href: '#menu-favorit' },
    { label: 'Tentang', href: '#tentang' },
    { label: 'Galeri', href: '#galeri' },
    { label: 'Cara Order', href: '#cara-order' },
    { label: 'Social Media', href: '#social-media' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#131315]/90 backdrop-blur-xl border-b border-[#2a2a2c]/60 shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
      <div className="h-20 w-full px-5 md:px-12 flex items-center justify-between gap-4">
        {/* Brand Lockup */}
        <div className="flex items-center gap-4">
          <a
            href="#beranda"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#beranda');
            }}
            className="flex flex-col group"
          >
            <div className="flex items-center gap-2">
              <span className="font-['Bricolage_Grotesque'] text-xl sm:text-2xl font-bold tracking-tight text-[#e5e1e4] uppercase group-hover:text-[#8aebff] transition-colors">
                Nila Bumbu Kuning
              </span>
              <span className="font-['Bricolage_Grotesque'] text-xs font-black px-2 py-0.5 bg-[#ffb95f] text-[#472a00] rounded -rotate-2 shadow-[2px_2px_0px_#000000]">
                HOT
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-['Space_Grotesk'] text-[11px] font-bold tracking-widest text-[#22d3ee] uppercase">
                EST. 2025 // REMPAH AUTHENTIC
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={`font-['Space_Grotesk'] text-sm tracking-wider uppercase transition-colors ${
                link.active
                  ? 'text-[#8aebff] font-bold border-b-2 border-[#22d3ee] pb-0.5'
                  : 'text-[#bbc9cd] hover:text-[#e5e1e4] hover:border-b-2 hover:border-[#ffb95f] pb-0.5'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={onOpenOrderModal}
            className="flex items-center gap-1.5 px-4 sm:px-6 py-2 sm:py-2.5 bg-[#ffb95f] text-[#472a00] font-['Space_Grotesk'] text-xs sm:text-sm font-bold rounded-full uppercase tracking-wider shadow-[4px_4px_0px_#22D3EE] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#22D3EE] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>Pesan Sekarang</span>
            {cartCount > 0 && (
              <span className="ml-1 px-1.5 py-0.2 bg-[#00363e] text-[#8aebff] text-[10px] rounded-full font-black">
                {cartCount}
              </span>
            )}
          </button>

          {/* Profile Avatar Hotlink with Click URL */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Kunjungi Profil Kitchen di Instagram"
            className="flex items-center pl-1 group relative cursor-pointer"
          >
            <img
              alt="Kitchen Master Profile"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover ring-2 ring-[#ffb95f] group-hover:ring-[#22d3ee] transition-all"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN2aajnMCnDBunpvgb2UUgEwBHZsb6AEF73TXkCfQNX0xNy-dAjTjWvMdIbwp-NewLYsHZedMRicN1_qFCmvbuFfvnR0Wr4GLYgU1ccms1i4OHSd_2bOsLeZ5g7gpBevxcWBdlEWbjq-GbPNF4mJNSRE90hXRNJjtUL9ihSUhJ9EOMtgkbD15-bS1VUFyke_WX3RQ99naqI5dxzTJ2Zy8qSuI9MXOXmc98VUv02XD1qBu_90XlmpY"
            />
            <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-400 border-2 border-[#131315] rounded-full"></span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#e5e1e4] hover:text-[#8aebff] focus:outline-none"
            aria-label="Toggle Navigation"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#1b1b1d] border-b border-[#2a2a2c] px-6 py-4 flex flex-col gap-3 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="font-['Space_Grotesk'] text-sm tracking-wider uppercase text-[#bbc9cd] hover:text-[#8aebff] py-1 border-b border-[#2a2a2c]/50 flex items-center justify-between"
            >
              <span>{link.label}</span>
              <span className="material-symbols-outlined text-base">arrow_forward_ios</span>
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#ffb95f] text-[#472a00] font-['Space_Grotesk'] text-sm font-bold uppercase rounded-lg shadow-[3px_3px_0px_#22D3EE]"
            >
              <span className="material-symbols-outlined text-lg">shopping_cart</span>
              <span>Buat Pesanan Custom</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
