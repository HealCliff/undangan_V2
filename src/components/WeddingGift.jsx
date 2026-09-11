import { useState } from 'react';

const accounts = [
  { provider: 'DANA', number: '085794543276', owner: 'Ujang Muhammad' },
  { provider: 'BNI', number: '1848454205', owner: 'Virgia Alan Shndi' },
];
const giftAddress = 'Kp. Tarikolot RT. 01 RW. 04, Desa Cidahu, Kecamatan Cidahu';

const GiftCard = ({ provider, number, owner }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(number);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="text-center">
    <div className="relative w-56 h-32 mx-auto mb-5 overflow-hidden rounded-2xl bg-gradient-to-br from-[#7a6238] via-[#575046] to-[#37312a] p-5 text-left shadow-[0_12px_24px_rgba(70,62,52,0.3)] border border-[#d4a15f]/70">
      <div className="absolute -right-8 -bottom-10 w-32 h-32 rounded-full border border-[#eac07a]/25"></div>
      <div className="absolute -right-2 -bottom-4 w-20 h-20 rounded-full border border-[#eac07a]/20"></div>
      <div className="flex items-start justify-between">
        <div className="w-10 h-7 rounded-md bg-[#eac07a] border border-[#fff1d6]/60 grid grid-cols-2 gap-px p-1">
          <span className="border-r border-[#575046]/40"></span>
          <span></span>
          <span className="border-r border-[#575046]/40"></span>
          <span></span>
        </div>
        <span className="text-[9px] tracking-[0.2em] text-[#f8e0c1] uppercase">Gift</span>
      </div>
      <p className="absolute bottom-4 left-5 text-xs tracking-widest text-[#eac07a]">{provider}</p>
    </div>

    <h3 className="font-cursive text-3xl text-[#463e34]">Transfer ke {provider}</h3>
    <p className="font-handwriting text-lg text-[#6a6055]">a.n. {owner}</p>
    <p className="font-mono text-sm tracking-wider text-[#a87f3f] mt-1">{number}</p>
    <button type="button" onClick={handleCopy} className="mt-3 rounded-md bg-[#6e5a3e] hover:bg-[#57452f] px-4 py-2 text-xs font-semibold text-[#fff1d6] transition-colors">
      {copied ? 'Berhasil disalin' : 'Copy Nomor'}
    </button>
  </div>
  );
};

const WeddingGift = () => {
  const [addressCopied, setAddressCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(giftAddress);
      setAddressCopied(true);
      setTimeout(() => setAddressCopied(false), 2000);
    } catch {
      setAddressCopied(false);
    }
  };

  return (
    <section className="relative py-20 px-5 text-center">
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-8" data-aos="fade-down">
          <div className="text-[#a87f3f] text-2xl mb-3">✦</div>
          <h2 className="text-5xl text-[#463e34] font-cursive">Wedding Gift</h2>
        </div>

        <p className="font-handwriting text-lg text-[#6a6055] leading-relaxed max-w-xl mx-auto mb-10" data-aos="fade-up">
          Doa dan restu Anda merupakan hadiah terindah bagi kami. Bagi yang ingin memberikan tanda kasih, silakan melalui informasi berikut.
        </p>

        <div className="grid grid-cols-1 gap-14 items-start">
          <div className="border-b border-[#d4a15f]/50 pb-14" data-aos="fade-up">
            <h3 className="font-cursive text-4xl text-[#463e34] mb-7">Transfer Digital</h3>
            <div className="grid grid-cols-1 gap-12 max-w-md mx-auto">
              {accounts.map((account) => <GiftCard key={account.provider} {...account} />)}
            </div>
          </div>

          <div className="flex flex-col items-center max-w-md mx-auto" data-aos="fade-up">
            <h3 className="font-cursive text-4xl text-[#463e34] mb-5">Kirim Kado Fisik</h3>
            <div className="flex items-center justify-center w-24 h-24 rounded-full border border-[#d4a15f] bg-[#575046]/80 text-[#eac07a] mb-6">
              <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12" stroke="currentColor" strokeWidth="1.3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 12v8H4v-8m-2-4h20v4H2V8zm10 0v12M6 8c-1.1 0-2-.9-2-2s.9-2 2-2c1.6 0 3 2 6 4-3 2-4.4 4-6 4a2 2 0 01-2-2c0-1.1.9-2 2-2zm12 0c1.1 0 2-.9 2-2s-.9-2-2-2c-1.6 0-3 2-3 2 3 2 4.4 4 6 4a2 2 0 002-2c0-1.1-.9-2-2-2z" />
              </svg>
            </div>
            <div className="ornate-card w-full max-w-sm bg-[#fffdf7]/95 p-7 shadow-[0_12px_32px_rgba(70,62,52,0.18)] border border-[#d4a15f]/70">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#a87f3f] mb-3">Alamat pengiriman</p>
              <p className="font-handwriting text-xl leading-relaxed text-[#5a5148]">Kp. Tarikolot RT. 01 RW. 04<br />Desa Cidahu, Kecamatan Cidahu</p>
              <button type="button" onClick={handleCopyAddress} className="mt-6 rounded-md bg-[#6e5a3e] hover:bg-[#57452f] px-4 py-2 text-xs font-semibold text-[#fff1d6] transition-colors">
                {addressCopied ? 'Alamat tersalin' : 'Copy Alamat'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingGift;
