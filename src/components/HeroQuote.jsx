import Countdown from './Countdown';

const HeroQuote = () => {
  return (
    <section className="flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden text-center">

      {/* Golden Rings Icon */}
      <div className="w-20 h-20 mb-2 relative z-10" data-aos="zoom-in">
        <img src="https://img.icons8.com/color/96/000000/wedding-rings.png" alt="Rings" className="w-full h-full object-contain drop-shadow-md" />
      </div>

       <h2 className="text-[3.5rem] text-[#463e34] mb-8 font-cursive relative z-10" data-aos="fade-down">Waktu & Tempat</h2>

      <div className="relative z-10 w-full mb-10" data-aos="fade-up">
        <Countdown />
      </div>

       <div className="ornate-card w-[calc(100%-2rem)] max-w-[440px] mx-auto bg-[#fffdf7]/95 p-6 md:p-8 shadow-[0_14px_40px_rgba(70,62,52,0.18)] border border-[#d4a15f]/70 relative z-10 mt-2" data-aos="zoom-in-up" data-aos-delay="200">
          <span className="block text-5xl leading-[0.6] text-[#b47a50] font-serif mb-4">&ldquo;</span>
          <p className="text-[#5a5148] leading-[1.7] text-[18px] md:text-lg mb-5 font-handwriting font-medium tracking-wide">
           Dan Di Antara Tanda-Tanda (Kebesaran)-Nya Ialah Dia Menciptakan Pasangan-Pasangan Untukmu Dari Jenismu Sendiri, Agar Kamu Cenderung Dan Merasa Tenteram Kepadanya, Dan Dia Menjadikan Di Antaramu Rasa Kasih Dan Sayang. Sesungguhnya Pada Yang Demikian Itu Benar-Benar Terdapat Tanda-Tanda (Kebesaran Allah) Bagi Kaum Yang Berpikir.
         </p>
          <p className="text-[#a87f3f] text-xl font-bold font-cursive">- Ar-Rum 21 -</p>
       </div>
    </section>
  );
};

export default HeroQuote;
