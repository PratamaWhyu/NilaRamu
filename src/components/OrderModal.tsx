import React, { useState } from 'react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedItem?: MenuItem | null;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  preselectedItem,
}) => {
  // Quantities for each menu item
  const [quantities, setQuantities] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    MENU_ITEMS.forEach((item) => {
      initial[item.id] = preselectedItem && preselectedItem.id === item.id ? 1 : 0;
    });
    // If nothing preselected, default 1 regular pack
    if (!preselectedItem) {
      initial['paket-reguler'] = 1;
    }
    return initial;
  });

  const [sambalLevel, setSambalLevel] = useState<'sedang' | 'pedas' | 'ekstra'>('pedas');
  const [extraSambal, setExtraSambal] = useState<boolean>(false);
  const [extraBumbu, setExtraBumbu] = useState<boolean>(false);
  const [extraThermal, setExtraThermal] = useState<boolean>(true); // default safe for frozen food

  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [deliveryNotes, setDeliveryNotes] = useState('');

  if (!isOpen) return null;

  const updateQuantity = (itemId: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[itemId] || 0;
      const updated = Math.max(0, current + delta);
      return { ...prev, [itemId]: updated };
    });
  };

  // Calculations
  const itemsSubtotal = MENU_ITEMS.reduce((sum, item) => {
    return sum + item.price * (quantities[item.id] || 0);
  }, 0);

  const addOnsTotal =
    (extraSambal ? 10000 : 0) + (extraBumbu ? 7000 : 0) + (extraThermal ? 5000 : 0);

  const grandTotal = itemsSubtotal + addOnsTotal;

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedLines: string[] = [];
    MENU_ITEMS.forEach((item) => {
      const q = quantities[item.id] || 0;
      if (q > 0) {
        selectedLines.push(`• ${item.name} (${q} pack) = Rp ${(item.price * q).toLocaleString('id-ID')}`);
      }
    });

    if (selectedLines.length === 0) {
      alert('Silakan pilih minimal 1 paket untuk dipesan!');
      return;
    }

    const addOnLines: string[] = [];
    if (extraSambal) addOnLines.push('• Ekstra Sambal Korek Jar (+Rp 10.000)');
    if (extraBumbu) addOnLines.push('• Ekstra Bumbu Ungkep Tumis (+Rp 7.000)');
    if (extraThermal) addOnLines.push('• Thermal Pouch + Ice Gel Ekstra (+Rp 5.000)');

    const sambalLabel =
      sambalLevel === 'sedang'
        ? 'Level 1 - Sedang Gurih'
        : sambalLevel === 'pedas'
        ? 'Level 2 - Pedas Mantap'
        : 'Level 3 - Ekstra Pedas Nampol';

    const message = `Halo Admin Nila Bumbu Kuning, saya mau order paket:\n\n` +
      `📦 PESANAN:\n${selectedLines.join('\n')}\n\n` +
      `🌶️ TINGKAT PEDAS SAMBAL: ${sambalLabel}\n` +
      (addOnLines.length > 0 ? `✨ TAMBAHAN:\n${addOnLines.join('\n')}\n\n` : '') +
      `💰 ESTIMASI TOTAL: Rp ${grandTotal.toLocaleString('id-ID')}\n\n` +
      `👤 PEMESAN:\n` +
      `• Nama: ${customerName.trim() || 'Pelanggan Nila'}\n` +
      `• Alamat: ${customerAddress.trim() || 'Akan dikirim di chat'}\n` +
      (deliveryNotes.trim() ? `• Catatan: ${deliveryNotes.trim()}\n` : '') +
      `\nMohon dicek ketersediaan stok & ongkirnya ya. Terima kasih!`;

    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/628563090805?text=${encoded}`;
    window.open(waUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-[#1b1b1d] border-2 border-[#22d3ee] rounded-2xl shadow-[8px_8px_0px_#ee9800] overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 bg-[#201f21] border-b border-[#2a2a2c] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#ffb95f]">shopping_cart</span>
            <h3 className="font-['Bricolage_Grotesque'] text-xl font-bold text-[#e5e1e4] uppercase">
              Pesan Nila Bumbu Kuning (Frozen Pack)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#2a2a2c] hover:bg-[#39393b] text-[#bbc9cd] hover:text-[#e5e1e4] flex items-center justify-center cursor-pointer transition-colors"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Scrollable Body */}
        <form onSubmit={handleSendWhatsApp} className="p-6 overflow-y-auto flex flex-col gap-6">
          {/* Item Selector */}
          <div className="flex flex-col gap-3">
            <span className="font-['Space_Grotesk'] text-xs font-bold text-[#22d3ee] uppercase tracking-wider">
              1. Pilih Porsi & Jumlah Pack
            </span>
            <div className="flex flex-col gap-2">
              {MENU_ITEMS.map((item) => {
                const qty = quantities[item.id] || 0;
                return (
                  <div
                    key={item.id}
                    className="p-3 bg-[#201f21] border border-[#2a2a2c] rounded-xl flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-12 h-12 rounded-lg object-cover border border-[#2a2a2c]"
                      />
                      <div className="flex flex-col">
                        <span className="font-['Bricolage_Grotesque'] text-sm font-bold text-[#e5e1e4]">
                          {item.name}
                        </span>
                        <span className="font-['Space_Grotesk'] text-xs text-[#ffb95f]">
                          Rp {item.price.toLocaleString('id-ID')}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-7 h-7 rounded-lg bg-[#2a2a2c] text-[#e5e1e4] hover:bg-[#353437] flex items-center justify-center font-bold text-base cursor-pointer"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-bold font-['Space_Grotesk'] text-sm text-[#8aebff]">
                        {qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-7 h-7 rounded-lg bg-[#ffb95f] text-[#472a00] hover:bg-[#ee9800] flex items-center justify-center font-bold text-base cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sambal Level Preference */}
          <div className="flex flex-col gap-2">
            <span className="font-['Space_Grotesk'] text-xs font-bold text-[#22d3ee] uppercase tracking-wider">
              2. Tingkat Kepedasan Sambal Korek
            </span>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'sedang', label: 'Sedang Gurih', icon: 'filter_1' },
                { id: 'pedas', label: 'Pedas Mantap', icon: 'filter_2' },
                { id: 'ekstra', label: 'Ekstra Nampol', icon: 'filter_3' },
              ].map((opt) => (
                <button
                  type="button"
                  key={opt.id}
                  onClick={() => setSambalLevel(opt.id as any)}
                  className={`py-2 px-2 rounded-xl font-['Space_Grotesk'] text-xs font-bold transition-all border cursor-pointer flex flex-col items-center gap-1 ${
                    sambalLevel === opt.id
                      ? 'bg-[#22d3ee] text-[#00363e] border-[#22d3ee] shadow-[2px_2px_0px_#000000]'
                      : 'bg-[#201f21] text-[#bbc9cd] border-[#2a2a2c] hover:border-[#3c494c]'
                  }`}
                >
                  <span className="material-symbols-outlined text-base">{opt.icon}</span>
                  <span>{opt.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Optional Add-Ons */}
          <div className="flex flex-col gap-2">
            <span className="font-['Space_Grotesk'] text-xs font-bold text-[#22d3ee] uppercase tracking-wider">
              3. Tambahan Pelengkap
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <label className="p-3 bg-[#201f21] border border-[#2a2a2c] rounded-xl flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={extraSambal}
                  onChange={(e) => setExtraSambal(e.target.checked)}
                  className="accent-[#ffb95f] w-4 h-4"
                />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#e5e1e4]">Sambal Korek Jar</span>
                  <span className="text-[11px] text-[#ffb95f]">+Rp 10.000</span>
                </div>
              </label>

              <label className="p-3 bg-[#201f21] border border-[#2a2a2c] rounded-xl flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={extraBumbu}
                  onChange={(e) => setExtraBumbu(e.target.checked)}
                  className="accent-[#ffb95f] w-4 h-4"
                />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#e5e1e4]">Bumbu Ungkep Ekstra</span>
                  <span className="text-[11px] text-[#ffb95f]">+Rp 7.000</span>
                </div>
              </label>

              <label className="p-3 bg-[#201f21] border border-[#2a2a2c] rounded-xl flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={extraThermal}
                  onChange={(e) => setExtraThermal(e.target.checked)}
                  className="accent-[#ffb95f] w-4 h-4"
                />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#e5e1e4]">Thermal Bag + Ice Gel</span>
                  <span className="text-[11px] text-[#ffb95f]">+Rp 5.000</span>
                </div>
              </label>
            </div>
          </div>

          {/* Delivery Details */}
          <div className="flex flex-col gap-2">
            <span className="font-['Space_Grotesk'] text-xs font-bold text-[#22d3ee] uppercase tracking-wider">
              4. Data Pengiriman
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] text-[#bbc9cd] font-bold block mb-1">
                  Nama Penerima
                </label>
                <input
                  type="text"
                  placeholder="Misal: Bu Ratna"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3 py-2 bg-[#131315] border border-[#2a2a2c] rounded-lg text-sm text-[#e5e1e4] focus:outline-none focus:border-[#22d3ee]"
                />
              </div>
              <div>
                <label className="text-[11px] text-[#bbc9cd] font-bold block mb-1">
                  Catatan Tambahan
                </label>
                <input
                  type="text"
                  placeholder="Misal: Tolong kirim pagi jam 09:00"
                  value={deliveryNotes}
                  onChange={(e) => setDeliveryNotes(e.target.value)}
                  className="w-full px-3 py-2 bg-[#131315] border border-[#2a2a2c] rounded-lg text-sm text-[#e5e1e4] focus:outline-none focus:border-[#22d3ee]"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] text-[#bbc9cd] font-bold block mb-1">
                Alamat Pengiriman (Jabodetabek)
              </label>
              <textarea
                rows={2}
                placeholder="Jl. Tebet Raya No. 45, Jakarta Selatan..."
                value={customerAddress}
                onChange={(e) => setCustomerAddress(e.target.value)}
                className="w-full px-3 py-2 bg-[#131315] border border-[#2a2a2c] rounded-lg text-sm text-[#e5e1e4] focus:outline-none focus:border-[#22d3ee]"
              />
            </div>
          </div>

          {/* Price Summary & Submit Button */}
          <div className="p-4 bg-[#131315] border border-[#2a2a2c] rounded-xl flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-[#bbc9cd]">
              <span>Subtotal Produk:</span>
              <span className="font-bold text-[#e5e1e4]">
                Rp {itemsSubtotal.toLocaleString('id-ID')}
              </span>
            </div>
            {addOnsTotal > 0 && (
              <div className="flex items-center justify-between text-xs text-[#bbc9cd]">
                <span>Pelengkap & Packing:</span>
                <span className="font-bold text-[#e5e1e4]">
                  + Rp {addOnsTotal.toLocaleString('id-ID')}
                </span>
              </div>
            )}
            <div className="flex items-center justify-between pt-2 border-t border-[#2a2a2c]">
              <span className="font-['Bricolage_Grotesque'] text-sm font-bold text-[#e5e1e4] uppercase">
                Total Estimasi:
              </span>
              <span className="font-['Bricolage_Grotesque'] text-2xl font-black text-[#ffb95f]">
                Rp {grandTotal.toLocaleString('id-ID')}
              </span>
            </div>

            <button
              type="submit"
              disabled={itemsSubtotal === 0}
              className={`w-full py-4 rounded-xl font-['Space_Grotesk'] text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[4px_4px_0px_#22D3EE] transition-all cursor-pointer ${
                itemsSubtotal > 0
                  ? 'bg-[#ffb95f] text-[#472a00] hover:bg-[#ee9800] active:translate-x-1 active:translate-y-1'
                  : 'bg-[#2a2a2c] text-[#859397] cursor-not-allowed'
              }`}
            >
              <span className="material-symbols-outlined text-xl">chat</span>
              <span>Lanjut Order WhatsApp Sekarang</span>
            </button>
            <p className="text-[11px] text-center text-[#859397]">
              Format pesanan otomatis dibuat & siap dikirim ke admin WhatsApp kami.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
