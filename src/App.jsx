import { useState, useEffect, useRef } from 'react';
import Cover from './components/Cover';
import HeroSection from './components/HeroSection';
import HeroQuote from './components/HeroQuote';
import Mempelai from './components/Mempelai';
import Acara from './components/Acara';
import WeddingGift from './components/WeddingGift';
import AutoScroll from './components/AutoScroll';

import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isCoverVisible, setIsCoverVisible] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const handleOpen = () => {
    // Start playback from the user's click to satisfy browser autoplay rules.
    audioRef.current?.play().catch(() => {});
    setIsOpened(true);
    // Allow the 1-second slide-up transition to finish before removing Cover from DOM
    setTimeout(() => {
      setIsCoverVisible(false);
    }, 1000);
  };

  return (
    // Background for desktop viewing
    <div className="min-h-[100dvh] w-full overflow-x-hidden bg-slate-200 flex items-center justify-center font-sans text-slate-800">
      
      {/* MOBILE-FIRST CONTAINER */}
        <main className="w-full sm:max-w-md sm:mx-auto min-h-[100dvh] bg-[#f3eee3] overflow-x-hidden shadow-2xl relative">

        <audio ref={audioRef} loop preload="none" aria-hidden="true">
          <source src="/musik.mp3" type="audio/mpeg" />
        </audio>

        {/* Cover Overlay - Uses absolute instead of fixed to stay inside the mobile container */}
        {isCoverVisible && (
          <div className={`absolute inset-0 z-50 transition-transform duration-1000 ease-in-out ${isOpened ? '-translate-y-full' : 'translate-y-0'}`}>
            <Cover onOpen={handleOpen} />
          </div>
        )}
        
        {/* Main Content - Locked scroll & hidden until Cover is opened */}
        <div className={`${isOpened ? 'opacity-100' : 'opacity-0 h-[100dvh] overflow-hidden'} transition-opacity duration-1000 delay-300 relative`}>
          
          {/* SEAMLESS BACKGROUND SCROLL UNTUK KESELURUHAN PAGE */}
          <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full sm:max-w-md h-[100dvh] pointer-events-none z-0">
              <div className="absolute inset-0 bg-[url('/bg-taman.jpg')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-[#fffdf7]/30"></div>
          </div>

          {/* CONTENT MENGGUNAKAN RELATIVE Z-10 AGAR MUNCUL DI ATAS BACKGROUND */}
          <div className="relative z-10">
            {/* URUTAN KOMPONEN YANG BENAR */}
            <HeroSection isOpened={isOpened} />
            <Mempelai />
            <HeroQuote />
            <Acara />
            <WeddingGift />
            
            {/* Simple Footer */}
            <footer className="mt-auto border-t border-[#d4a15f]/35 bg-[#463e34] py-8 text-center text-xs text-[#f0d5bd]/70">
              <p className="mb-2 font-cursive text-3xl text-[#eac07a]">Virgia &amp; Kujeng</p>
              <p>© 2026. All rights reserved.</p>
            </footer>
          </div>
        </div>

        {/* Tombol scroll otomatis - hanya muncul setelah undangan dibuka */}
        {isOpened && <AutoScroll />}

      </main>
    </div>
  );
}

export default App;
