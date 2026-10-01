import React, { useState } from 'react';
import { Review } from '../types';
import { INITIAL_REVIEWS } from '../data';

export const Testimonials: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [showAddReview, setShowAddReview] = useState(false);
  const [newName, setNewName] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newComment.trim()) return;

    const initials = newName
      .trim()
      .split(' ')
      .map((w) => w[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();

    const created: Review = {
      id: `rev-${Date.now()}`,
      name: newName.trim(),
      role: newRole.trim() || 'Pelanggan Setia',
      location: 'Jabodetabek',
      comment: newComment.trim(),
      rating: newRating,
      avatarBg: 'bg-[#ffb95f]/30 text-[#ffb95f]',
      initials: initials || 'PL',
      date: 'Baru saja',
    };

    setReviews([created, ...reviews]);
    setNewName('');
    setNewRole('');
    setNewComment('');
    setShowAddReview(false);
  };

  const averageRating = (
    reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <section className="w-full px-5 md:px-12 py-16 bg-[#1b1b1d] border-b border-[#2a2a2c]">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <span className="font-['Space_Grotesk'] text-xs font-bold text-[#8aebff] tracking-widest uppercase">
              COMMUNITY TASTE CHECK
            </span>
            <h2 className="font-['Bricolage_Grotesque'] text-2xl sm:text-3xl lg:text-4xl text-[#e5e1e4] uppercase font-extrabold">
              KATA MEREKA YANG SUDAH KETAGIHAN
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-[#ffb95f]">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              ))}
              <span className="font-['Space_Grotesk'] text-sm font-bold text-[#e5e1e4] ml-2">
                {averageRating} / 5.0 Rating Pelanggan
              </span>
            </div>

            <button
              onClick={() => setShowAddReview(!showAddReview)}
              className="px-3.5 py-1.5 bg-[#201f21] hover:bg-[#2a2a2c] text-[#8aebff] border border-[#22d3ee]/40 rounded-full font-['Space_Grotesk'] text-xs font-bold transition-all cursor-pointer flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-sm">edit</span>
              <span>{showAddReview ? 'Batal' : 'Tulis Ulasan'}</span>
            </button>
          </div>
        </div>

        {/* Add Review Form */}
        {showAddReview && (
          <form
            onSubmit={handleSubmitReview}
            className="bg-[#201f21] p-5 rounded-2xl border border-[#22d3ee] shadow-[4px_4px_0px_#000000] flex flex-col gap-3 animate-in fade-in"
          >
            <h4 className="font-['Bricolage_Grotesque'] text-base font-bold text-[#8aebff] uppercase">
              Bagikan Pengalaman Rasa Anda
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] text-[#bbc9cd] uppercase font-bold block mb-1">
                  Nama Anda *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Misal: Budi Santoso"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full px-3 py-2 bg-[#131315] border border-[#2a2a2c] rounded-lg text-sm text-[#e5e1e4] focus:outline-none focus:border-[#22d3ee]"
                />
              </div>
              <div>
                <label className="text-[11px] text-[#bbc9cd] uppercase font-bold block mb-1">
                  Profesi / Lokasi
                </label>
                <input
                  type="text"
                  placeholder="Misal: Ibu Rumah Tangga • Depok"
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value)}
                  className="w-full px-3 py-2 bg-[#131315] border border-[#2a2a2c] rounded-lg text-sm text-[#e5e1e4] focus:outline-none focus:border-[#22d3ee]"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] text-[#bbc9cd] uppercase font-bold block mb-1">
                Komentar Ulasan Rasa *
              </label>
              <textarea
                required
                rows={2}
                placeholder="Ceritakan rasa bumbu kuning, kerenyahan kulit, atau kepraktisan packnya..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full px-3 py-2 bg-[#131315] border border-[#2a2a2c] rounded-lg text-sm text-[#e5e1e4] focus:outline-none focus:border-[#22d3ee]"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <span className="text-xs text-[#bbc9cd] mr-2">Rating Bintang:</span>
                {[1, 2, 3, 4, 5].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setNewRating(s)}
                    className="text-[#ffb95f] cursor-pointer"
                  >
                    <span
                      className="material-symbols-outlined text-lg"
                      style={{ fontVariationSettings: s <= newRating ? "'FILL' 1" : "'FILL' 0" }}
                    >
                      star
                    </span>
                  </button>
                ))}
              </div>
              <button
                type="submit"
                className="px-5 py-2 bg-[#ffb95f] text-[#472a00] font-['Space_Grotesk'] text-xs font-bold uppercase rounded-lg shadow-[2px_2px_0px_#000000] hover:bg-[#ee9800] cursor-pointer"
              >
                Kirim Ulasan
              </button>
            </div>
          </form>
        )}

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={rev.id}
              className={`bg-[#2a2a2c] p-6 rounded-2xl flex flex-col justify-between gap-4 border border-[#353437] ${
                idx === 1 ? 'shadow-[4px_4px_0px_#22D3EE]' : 'shadow-[4px_4px_0px_#000000]'
              }`}
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1 text-[#ffb95f]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-['Space_Grotesk'] text-sm sm:text-base text-[#e5e1e4] italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-[#353437]">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${rev.avatarBg}`}
                >
                  {rev.initials}
                </div>
                <div className="flex flex-col">
                  <span className="font-['Space_Grotesk'] text-sm font-bold text-[#e5e1e4]">
                    {rev.name}
                  </span>
                  <span className="font-['Space_Grotesk'] text-xs text-[#859397]">
                    {rev.role} • {rev.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
