import React from 'react';

export const OrderProcess: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Pilih Menu',
      desc: 'Tentukan porsi: Single Ekor, Paket Komplit, atau Paket Pesta Keluarga.',
      color: 'text-[#ffb95f]',
    },
    {
      num: '02',
      title: 'Klik WhatsApp',
      desc: 'Tekan tombol pesan untuk langsung membuka chat admin responsif kami.',
      color: 'text-[#8aebff]',
    },
    {
      num: '03',
      title: 'Konfirmasi',
      desc: 'Kirim detail pesanan, jumlah, tingkat kepedasan sambal, dan alamat tujuan.',
      color: 'text-[#ffb95f]',
    },
    {
      num: '04',
      title: 'Bayar Mudah',
      desc: 'Pilihan pembayaran fleksibel: QRIS semua bank/e-wallet atau Transfer Bank.',
      color: 'text-[#8aebff]',
    },
    {
      num: '05',
      title: 'Kirim Hangat',
      desc: 'Ikan digoreng seketika dan langsung meluncur via kurir instan/sameday.',
      color: 'text-[#ffb95f]',
    },
  ];

  return (
    <section id="cara-order" className="w-full px-5 md:px-12 py-16 bg-[#0e0e10]">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="text-center max-w-xl mx-auto flex flex-col gap-2">
          <span className="font-['Space_Grotesk'] text-xs font-bold text-[#8aebff] tracking-widest uppercase">
            EASY 5-STEP ORDER
          </span>
          <h2 className="font-['Bricolage_Grotesque'] text-2xl sm:text-3xl lg:text-4xl text-[#e5e1e4] uppercase font-extrabold">
            ALUR PEMESANAN PRAKTIS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="bg-[#1b1b1d] p-5 rounded-2xl flex flex-col gap-2 relative shadow-[3px_3px_0px_#000000] border border-[#2a2a2c] hover:border-[#22d3ee]/40 transition-colors"
            >
              <span className={`font-['Bricolage_Grotesque'] text-5xl font-black ${st.color} opacity-50`}>
                {st.num}
              </span>
              <span className="font-['Bricolage_Grotesque'] text-lg font-bold text-[#e5e1e4] uppercase">
                {st.title}
              </span>
              <p className="font-['Space_Grotesk'] text-xs text-[#bbc9cd] leading-relaxed">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
