import React from 'react';

export const SpicesSection: React.FC = () => {
  const spices = [
    {
      name: 'Kunyit Segar',
      subtitle: 'WARNA EMAS & ANTI-INFLAMASI',
      desc: 'Kunyit emprit Jawa pilihan yang disangrai untuk menghasilkan warna kuning keemasan pekat dan cita rasa tanah yang hangat.',
      icon: 'spa',
      iconColor: 'text-[#ffb95f]',
      iconBg: 'bg-[#ffb95f]/20',
      titleColor: 'text-[#ffb95f]',
      subColor: 'text-[#22d3ee]',
    },
    {
      name: 'Serai & Daun Jeruk',
      subtitle: 'AROMA SEGAR MEMIKAT',
      desc: 'Batang serai memar dan sobekan daun jeruk purut segar yang menghilangkan bau amis seketika dan memberi wangi sitrus alami.',
      icon: 'eco',
      iconColor: 'text-[#8aebff]',
      iconBg: 'bg-[#8aebff]/20',
      titleColor: 'text-[#8aebff]',
      subColor: 'text-[#ffb95f]',
    },
    {
      name: 'Kemiri Sangrai',
      subtitle: 'GURIH TEKSTUR KENTAL',
      desc: 'Kemiri butir disangrai perlahan untuk mengunci minyak atsiri gurih yang membuat bumbu menempel sempurna di kulit ikan.',
      icon: 'grain',
      iconColor: 'text-[#ffad8e]',
      iconBg: 'bg-[#ffad8e]/20',
      titleColor: 'text-[#ffd3c4]',
      subColor: 'text-[#22d3ee]',
    },
    {
      name: 'Cabai Rawit Merah',
      subtitle: 'SENGATAN PEDAS NIKMAT',
      desc: 'Pilihan cabai rawit merah petik segar yang diulek kasar sebagai penyeimbang rasa gurih legit bumbu rempah.',
      icon: 'local_fire_department',
      iconColor: 'text-[#ffb4ab]',
      iconBg: 'bg-[#ffb4ab]/20',
      titleColor: 'text-[#ffb4ab]',
      subColor: 'text-[#ffb95f]',
    },
  ];

  return (
    <section className="w-full px-5 md:px-12 py-16 bg-[#201f21] border-b border-[#2a2a2c]">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
          <span className="font-['Space_Grotesk'] text-xs font-bold text-[#ffb95f] tracking-widest uppercase">
            HERITAGE BOTANICAL LAB
          </span>
          <h2 className="font-['Bricolage_Grotesque'] text-2xl sm:text-3xl lg:text-4xl text-[#e5e1e4] uppercase font-extrabold">
            RAHASIA BUMBU KUNING NUSANTARA
          </h2>
          <p className="font-['Space_Grotesk'] text-sm sm:text-base text-[#bbc9cd]">
            Perpaduan rempah segar rimpang dan dedaunan alami tanpa pengawet atau pewarna sintetis.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {spices.map((spice, idx) => (
            <div
              key={idx}
              className="bg-[#2a2a2c] p-5 rounded-2xl flex flex-col gap-2 shadow-[3px_3px_0px_#000000] border border-[#353437] hover:border-[#22d3ee] transition-colors"
            >
              <div
                className={`w-10 h-10 rounded-lg ${spice.iconBg} flex items-center justify-center ${spice.iconColor} mb-1`}
              >
                <span className="material-symbols-outlined">{spice.icon}</span>
              </div>
              <span className={`font-['Bricolage_Grotesque'] text-xl font-bold ${spice.titleColor}`}>
                {spice.name}
              </span>
              <span className={`font-['Space_Grotesk'] text-xs font-bold ${spice.subColor} tracking-wide`}>
                {spice.subtitle}
              </span>
              <p className="font-['Space_Grotesk'] text-xs text-[#bbc9cd] leading-relaxed">
                {spice.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
