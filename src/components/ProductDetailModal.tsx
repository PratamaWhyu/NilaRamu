import React from 'react';
import { MenuItem } from '../types';

interface ProductDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onOrderNow: (item: MenuItem) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  item,
  onClose,
  onOrderNow,
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-xl bg-[#1b1b1d] border-2 border-[#22d3ee] rounded-2xl shadow-[8px_8px_0px_#ee9800] overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 bg-[#201f21] border-b border-[#2a2a2c] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#ffb95f]">restaurant</span>
            <h3 className="font-['Bricolage_Grotesque'] text-lg sm:text-xl font-bold text-[#e5e1e4] uppercase">
              {item.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#2a2a2c] hover:bg-[#39393b] text-[#bbc9cd] hover:text-[#e5e1e4] flex items-center justify-center cursor-pointer transition-colors"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex flex-col gap-5">
          {/* Image */}
          <div className="relative rounded-xl overflow-hidden border border-[#2a2a2c]">
            <a
              href={item.clickUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Buka link pesanan langsung di WhatsApp"
              className="block cursor-pointer group"
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-[#ffb95f] text-[#472a00] font-['Space_Grotesk'] font-bold text-xs px-3 py-1.5 rounded-full uppercase flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                  Buka Link Produk
                </span>
              </div>
            </a>
            <div className="absolute top-3 left-3 bg-[#ffb95f] text-[#472a00] px-3 py-1 rounded font-['Bricolage_Grotesque'] text-xs font-black uppercase">
              {item.badge}
            </div>
            <div className="absolute bottom-3 right-3 bg-[#201f21]/90 backdrop-blur-sm text-[#8aebff] px-3 py-1 rounded-full text-xs font-bold border border-[#22d3ee]/40">
              Berat Bersih: {item.weight}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="font-['Space_Grotesk'] text-xs font-bold text-[#ffb95f] uppercase tracking-wider">
                {item.subtitle}
              </span>
              <span className="font-['Bricolage_Grotesque'] text-2xl font-black text-[#ffb95f]">
                Rp {item.price.toLocaleString('id-ID')}
              </span>
            </div>
            <p className="font-['Space_Grotesk'] text-sm text-[#bbc9cd] leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Isi Dalam Kemasan */}
          <div className="p-4 bg-[#201f21] border border-[#2a2a2c] rounded-xl flex flex-col gap-2">
            <span className="font-['Space_Grotesk'] text-xs font-bold text-[#22d3ee] uppercase tracking-wider">
              Isi Dalam Satu Kemasan:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {item.contents.map((cnt, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#e5e1e4]">
                  <span className="material-symbols-outlined text-sm text-[#ffb95f]">check_circle</span>
                  <span>{cnt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Storage & Cooking Tips */}
          <div className="grid grid-cols-2 gap-3 text-xs text-[#bbc9cd]">
            <div className="p-3 bg-[#131315] border border-[#2a2a2c] rounded-xl flex flex-col gap-1">
              <span className="font-bold text-[#e5e1e4] flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-[#22d3ee]">ac_unit</span>
                Penyimpanan
              </span>
              <span>Simpan di freezer suhu -18°C. Tahan hingga 3 bulan tanpa penurunan rasa.</span>
            </div>
            <div className="p-3 bg-[#131315] border border-[#2a2a2c] rounded-xl flex flex-col gap-1">
              <span className="font-bold text-[#e5e1e4] flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-[#ffb95f]">skillet</span>
                Saran Memasak
              </span>
              <span>Thawing 10 menit lalu goreng di minyak panas 5-7 menit dengan api sedang.</span>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onOrderNow(item);
              }}
              className="flex-1 py-3.5 bg-[#ffb95f] text-[#472a00] font-['Space_Grotesk'] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl shadow-[3px_3px_0px_#22D3EE] hover:bg-[#ee9800] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">shopping_cart</span>
              <span>Pesan Porsi Ini</span>
            </button>
            <a
              href={item.clickUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-5 bg-[#201f21] hover:bg-[#2a2a2c] text-[#8aebff] font-['Space_Grotesk'] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl border border-[#22d3ee]/40 transition-all flex items-center justify-center gap-1.5"
            >
              <span className="material-symbols-outlined text-lg">chat</span>
              <span>Direct WA</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
