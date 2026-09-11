import { useEffect, useRef } from 'react';

const HeroSection = ({ isOpened }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isOpened) {
      videoRef.current?.play().catch(() => {});
    }
  }, [isOpened]);

  return (
    // Global Container: Mobile-First
    <section className="relative w-full sm:max-w-md sm:mx-auto min-h-[100dvh] flex flex-col items-center justify-center bg-[url('/bg-taman.jpg')] bg-cover bg-center overflow-hidden">
      
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/hero-taman.mp4" type="video/mp4" />
      </video>

      {/* Overlay agar teks tetap terbaca di atas video */}
       <div className="absolute inset-0 bg-black/35 pointer-events-none"></div>

       {/* Konten Teks (Ditumpuk vertikal di tengah) */}
      <div className="relative z-10 flex flex-col items-center text-center p-6 w-full -mt-16">
        
        {/* Ikon Dekoratif Bintang */}
        <div className="text-[#e5bb78] mb-6" data-aos="zoom-in" data-aos-duration="1500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3z" />
          </svg>
        </div>

        {/* Teks Menengah */}
         <p className="text-xs font-semibold tracking-[0.3em] text-[#f0d5bd] uppercase mb-4 drop-shadow-md" data-aos="fade-down" data-aos-delay="200">
          Pernikahan Kami
        </p>

        {/* Nama Mempelai */}
         <h2 className="text-6xl sm:text-7xl text-[#f9e4c8] mb-6 font-cursive drop-shadow-md" data-aos="zoom-out" data-aos-delay="400">
            Virgia &amp; Kujeng
        </h2>

        {/* Tanggal */}
        <div className="flex items-center gap-4 text-[#eac07a] text-2xl font-handwriting tracking-[0.2em] mt-2 drop-shadow-md" data-aos="fade-up" data-aos-delay="600">
            <span>20</span>
          <span className="w-[1.5px] h-5 bg-[#d4a15f]"></span>
           <span>09</span>
          <span className="w-[1.5px] h-5 bg-[#d4a15f]"></span>
          <span>2026</span>
        </div>

      </div>

      {/* Bagian Bawah: Swipe Up */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-[#f0d5bd] drop-shadow-md">
        <span className="text-xs font-semibold tracking-widest uppercase mb-2">Geser ke atas</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </div>

    </section>
  );
};

export default HeroSection;
