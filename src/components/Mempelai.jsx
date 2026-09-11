const Mempelai = () => {
  return (
    <section className="relative py-16 px-4 text-center">
      
      <div className="relative z-10">
      {/* Dove Icon */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <img src="https://img.icons8.com/ios/100/000000/dove.png" alt="Dove" className="w-10 h-10 opacity-70" />
        <span className="text-[#a87f3f] text-xs">✦</span>
        <img src="https://img.icons8.com/ios/100/000000/dove.png" alt="Dove" className="w-10 h-10 opacity-70 scale-x-[-1]" />
      </div>

      {/* Title */}
      <div className="mb-6" data-aos="fade-down">
          <h2 className="text-2xl text-[#a87f3f] font-cursive mb-0">Pasangan</h2>
          <h2 className="text-[3.5rem] text-[#463e34] font-cursive leading-none mt-[-5px]">Mempelai</h2>
      </div>

      {/* Intro Text */}
       <p className="font-handwriting text-[17px] text-[#6a6055] leading-relaxed max-w-[95%] mx-auto mb-12 px-1" data-aos="fade-up">
        Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, <br/>
        insyaaAllah kami akan menyelenggarakan acara pernikahan anak kami :
      </p>

      {/* Vertical Layout */}
      <div className="flex flex-col items-center w-full">

        {/* Bride Photo */}
        <div className="bg-white p-3 shadow-md border border-slate-100 w-11/12 max-w-[320px] mx-auto mb-10" data-aos="fade-right">
          <img
            src="/m-wanita-removebg-preview.png"
            alt="Virgia"
            className="h-[420px] w-full object-cover object-top bg-slate-200"
          />
        </div>

        {/* Bride Text */}
        <div className="flex flex-col items-center text-center mb-16 w-full" data-aos="fade-up">
          <h3 className="text-[2.5rem] text-[#a87f3f] mb-[-5px] font-cursive">Virgia</h3>
          <h2 className="text-[2rem] text-[#463e34] font-handwriting font-bold tracking-wide mb-2">Virgia</h2>
          <div className="w-56 h-[1.5px] bg-[#d4a15f] mb-3"></div>
          <p className="font-handwriting font-bold text-xs mb-1 text-[#6a6055]">Putri</p>
          <p className="font-handwriting text-xl text-[#6a6055]">Bapak Suherlan</p>
          <p className="font-handwriting text-xl text-[#6a6055] my-1">&amp;</p>
          <p className="font-handwriting text-xl text-[#6a6055]">Ibu Widiyati</p>
        </div>

        {/* Groom Photo */}
        <div className="bg-white p-3 shadow-md border border-slate-100 w-11/12 max-w-[320px] mx-auto mb-10" data-aos="fade-left">
          <img
            src="/m-laki-removebg-preview.png"
            alt="Kujeng"
            className="h-[420px] w-full object-cover object-top bg-slate-200"
          />
        </div>

        {/* Groom Text */}
        <div className="flex flex-col items-center text-center mb-10 w-full" data-aos="fade-right">
          <h3 className="text-[2.5rem] text-[#a87f3f] mb-[-5px] font-cursive">Kujeng</h3>
          <h2 className="text-[2rem] text-[#463e34] font-handwriting font-bold tracking-wide mb-2">Kujeng</h2>
          <div className="w-56 h-[1.5px] bg-[#d4a15f] mb-3"></div>
          

          <p className="font-handwriting font-bold text-xs mb-1 text-[#6a6055]">Putra</p>
          <p className="font-handwriting text-xl text-[#6a6055]">Bapak Didi</p>
          <p className="font-handwriting text-xl text-[#6a6055] my-1">&amp;</p>
          <p className="font-handwriting text-xl text-[#6a6055]">Ibu Elih</p>
        </div>

      </div>
      </div>
    </section>
  );
};

export default Mempelai;
