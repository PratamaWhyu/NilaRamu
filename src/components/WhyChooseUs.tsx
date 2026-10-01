import React from 'react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      num: '01',
      title: 'Bumbu Kaya Rempah',
      desc: 'Diracik dari rimpang asli tanpa bumbu instan atau penguat rasa berlebih. Gurihnya alami dan sedap.',
      accent: 'text-[#ffb95f] bg-[#ffb95f]/15',
    },
    {
      num: '02',
      title: 'Aroma Sedap Semerbak',
      desc: 'Wangi daun jeruk dan serai yang merekah begitu bungkus makanan dibuka, membangkitkan selera makan.',
      accent: 'text-[#8aebff] bg-[#8aebff]/15',
    },
    {
      num: '03',
      title: 'Goreng Dadakan',
      desc: 'Tidak ada ikan yang disimpan dingin. Setiap pesanan digoreng fresh saat notifikasi masuk.',
      accent: 'text-[#ee9800] bg-[#ee9800]/15',
    },
    {
      num: '04',
      title: 'Porsi Memuaskan',
      desc: 'Ukuran ikan standar besar (400-500 gram), daging tebal memuaskan untuk santap siang maupun malam.',
      accent: 'text-[#a2eeff] bg-[#a2eeff]/15',
    },
    {
      num: '05',
      title: 'Harga Terjangkau',
      desc: 'Mulai dari Rp 32.000 untuk kenikmatan kuliner tradisional sekelas restoran bintang lima.',
      accent: 'text-[#ffb95f] bg-[#ffb95f]/15',
    },
    {
      num: '06',
      title: 'Order WA Super Cepat',
      desc: 'Satu klik langsung terhubung ke WhatsApp dapur kami. Konfirmasi alamat dan kurir langsung jalan.',
      accent: 'text-[#22d3ee] bg-[#22d3ee]/15',
    },
  ];

  return (
    <section className="w-full px-5 md:px-12 py-16 bg-[#0e0e10]">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col gap-1.5">
          <span className="font-['Space_Grotesk'] text-xs font-bold text-[#22d3ee] tracking-widest uppercase">
            STANDAR KUALITAS KAMI
          </span>
          <h2 className="font-['Bricolage_Grotesque'] text-2xl sm:text-3xl lg:text-4xl text-[#e5e1e4] uppercase font-extrabold">
            KENAPA HARUS NILA BUMBU KUNING?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="bg-[#1b1b1d] p-5 rounded-2xl flex items-start gap-4 shadow-[4px_4px_0px_#000000] border border-[#2a2a2c] hover:border-[#8aebff]/40 transition-colors"
            >
              <div
                className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center font-['Bricolage_Grotesque'] text-xl font-bold ${pt.accent}`}
              >
                {pt.num}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-['Bricolage_Grotesque'] text-lg font-bold text-[#e5e1e4] uppercase">
                  {pt.title}
                </h3>
                <p className="font-['Space_Grotesk'] text-xs text-[#bbc9cd] leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
