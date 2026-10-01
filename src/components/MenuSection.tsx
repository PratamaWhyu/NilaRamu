import React, { useState } from 'react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data';

interface MenuSectionProps {
  onSelectItemForOrder: (item: MenuItem) => void;
  onOpenProductDetail: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onSelectItemForOrder,
  onOpenProductDetail,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'bestseller' | 'family' | 'fillet'>('all');

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu-favorit" className="w-full px-5 md:px-12 py-16 bg-[#0e0e10]">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-[#2a2a2c]/60">
          <div className="flex flex-col gap-1.5">
            <span className="font-['Space_Grotesk'] text-xs font-bold text-[#8aebff] tracking-widest uppercase">
              THE SIGNATURE SELECTION
            </span>
            <h2 className="font-['Bricolage_Grotesque'] text-2xl sm:text-3xl lg:text-4xl text-[#e5e1e4] uppercase font-extrabold">
              PILIHAN PAKET SIAP GORENG (READY-TO-COOK)
            </h2>
          </div>
          <p className="font-['Space_Grotesk'] text-sm text-[#bbc9cd] max-w-md">
            Ikan nila ungkep marinasi bumbu kuning dalam kemasan vakum beku kedap udara. Praktis,
            higienis, dan bonus sambal korek siap cocol.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: 'all', label: 'Semua Menu' },
            { id: 'bestseller', label: 'Best Seller' },
            { id: 'family', label: 'Family Size' },
            { id: 'fillet', label: 'Fillet Tanpa Duri' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`px-4 py-2 rounded-full font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-[#22d3ee] text-[#00363e] shadow-[3px_3px_0px_#000000]'
                  : 'bg-[#201f21] text-[#bbc9cd] hover:text-[#e5e1e4] hover:bg-[#2a2a2c] border border-[#2a2a2c]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 3-Product Grid with Clickable Hotlink Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#201f21] border border-[#2a2a2c] rounded-2xl overflow-hidden flex flex-col justify-between shadow-[4px_4px_0px_#000000] hover:shadow-[4px_4px_0px_#22D3EE] transition-all group"
            >
              {/* Image Container wrapped in distinct click anchor URL */}
              <div className="relative overflow-hidden">
                <a
                  href={item.clickUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative cursor-pointer"
                  title={`Klik untuk order ${item.name} langsung ke URL WhatsApp`}
                >
                  <img
                    alt={item.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    src={item.imageUrl}
                    referrerPolicy="no-referrer"
                  />

                  {/* Hover link prompt */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-[#ffb95f] text-[#472a00] font-['Space_Grotesk'] font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-[2px_2px_0px_#000000] flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                      Buka Link Produk
                    </span>
                  </div>
                </a>

                {/* Badge top left */}
                <div
                  className={`absolute top-4 left-4 px-2.5 py-1 rounded font-['Bricolage_Grotesque'] text-xs font-black uppercase ${
                    item.badgeColor === 'primary'
                      ? 'bg-[#131315]/90 text-[#8aebff] border border-[#22d3ee]/40'
                      : 'bg-[#ffb95f] text-[#472a00]'
                  }`}
                >
                  {item.badge}
                </div>

                {/* Price tag bottom right */}
                <div className="absolute bottom-4 right-4 bg-[#ffb95f] text-[#472a00] px-3.5 py-1 font-['Space_Grotesk'] text-sm rounded-full font-bold shadow-[2px_2px_0px_#000000]">
                  Rp {item.price.toLocaleString('id-ID')}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-5 flex flex-col gap-3 flex-grow">
                <div className="flex flex-col">
                  <span className="font-['Space_Grotesk'] text-xs font-bold text-[#ffb95f] uppercase tracking-wider">
                    {item.subtitle}
                  </span>
                  <h3 className="font-['Bricolage_Grotesque'] text-lg sm:text-xl font-bold text-[#e5e1e4] uppercase">
                    {item.name}
                  </h3>
                </div>

                <p className="font-['Space_Grotesk'] text-xs text-[#bbc9cd] leading-relaxed">
                  {item.description}
                </p>

                {/* Contents checklist preview */}
                <div className="pt-1 flex flex-col gap-1">
                  {item.contents.slice(0, 2).map((c, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#859397]">
                      <span className="material-symbols-outlined text-xs text-[#22d3ee]">check</span>
                      <span>{c}</span>
                    </div>
                  ))}
                </div>

                {/* Actions: Direct Link + Customizer Modal */}
                <div className="pt-2 mt-auto flex flex-col gap-2">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenProductDetail(item)}
                      className="py-2.5 px-2 bg-[#2a2a2c] hover:bg-[#353437] text-[#e5e1e4] font-['Space_Grotesk'] text-xs font-bold uppercase rounded-lg border border-[#3c494c] transition-all cursor-pointer flex items-center justify-center gap-1"
                    >
                      <span className="material-symbols-outlined text-sm">info</span>
                      <span>Info Detail</span>
                    </button>
                    <button
                      onClick={() => onSelectItemForOrder(item)}
                      className="py-2.5 px-2 bg-[#22d3ee] hover:bg-[#8aebff] text-[#00363e] font-['Space_Grotesk'] text-xs font-bold uppercase rounded-lg shadow-[2px_2px_0px_#000000] transition-all cursor-pointer flex items-center justify-center gap-1"
                    >
                      <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                      <span>Pilih Porsi</span>
                    </button>
                  </div>

                  <a
                    className="w-full inline-flex items-center justify-center gap-1.5 py-3 bg-[#ffb95f] text-[#472a00] font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider rounded-lg shadow-[2px_2px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#000000] transition-all cursor-pointer"
                    href={item.clickUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-base">shopping_bag</span>
                    <span>Pesan Pack Sekarang</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
