import { useEffect, useRef, useState } from 'react';

const SPEED_PX_PER_SEC = 60;
const START_DELAY_MS = 4000;

const AutoScroll = () => {
  // Mati dulu saat undangan dibuka (jeda lihat judul), nyala sendiri setelahnya
  const [playing, setPlaying] = useState(false);
  const rafRef = useRef(null);
  const lastTsRef = useRef(0);
  const timerRef = useRef(null);

  // Jeda awal: beri waktu tamu melihat judul hero, baru jalan sendiri.
  // Kalau tamu keburu scroll manual, timer dibatalkan (tetap mode manual).
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      timerRef.current = null;
      setPlaying(true);
    }, START_DELAY_MS);
    const cancelPending = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
    window.addEventListener('wheel', cancelPending, { passive: true });
    window.addEventListener('touchmove', cancelPending, { passive: true });
    window.addEventListener('keydown', cancelPending);
    return () => {
      cancelPending();
      window.removeEventListener('wheel', cancelPending);
      window.removeEventListener('touchmove', cancelPending);
      window.removeEventListener('keydown', cancelPending);
    };
  }, []);

  useEffect(() => {
    if (!playing) return;

    const step = (ts) => {
      if (lastTsRef.current) {
        const dt = (ts - lastTsRef.current) / 1000;
        window.scrollBy(0, SPEED_PX_PER_SEC * dt);
      }
      lastTsRef.current = ts;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setPlaying(false);
        return;
      }
      rafRef.current = requestAnimationFrame(step);
    };

    lastTsRef.current = 0;
    rafRef.current = requestAnimationFrame(step);

    // Tamu tetap pegang kendali: sentuhan / scroll manual langsung menjeda
    const pauseOnInteract = () => setPlaying(false);
    window.addEventListener('wheel', pauseOnInteract, { passive: true });
    window.addEventListener('touchmove', pauseOnInteract, { passive: true });
    window.addEventListener('keydown', pauseOnInteract);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('wheel', pauseOnInteract);
      window.removeEventListener('touchmove', pauseOnInteract);
      window.removeEventListener('keydown', pauseOnInteract);
    };
  }, [playing]);

  const toggle = () => {
    if (playing) {
      setPlaying(false);
      return;
    }
    // Kalau diklik saat masih jeda awal, langsung jalan tanpa menunggu
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    // Kalau sudah di paling bawah, mulai lagi dari atas
    const atBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 2;
    if (atBottom) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
    setPlaying(true);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={playing ? 'Jeda scroll otomatis' : 'Putar scroll otomatis'}
      aria-pressed={playing}
      className="fixed bottom-6 right-6 sm:right-[calc(50%-12.5rem)] z-40 flex h-12 w-12 items-center justify-center rounded-full border border-[#d4a15f]/80 bg-[#463e34]/90 text-[#eac07a] shadow-lg backdrop-blur-sm transition-transform hover:scale-105"
    >
      {playing ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5 4h4v12H5V4zm6 0h4v12h-4V4z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 translate-x-[1px]" viewBox="0 0 20 20" fill="currentColor">
          <path d="M6 4l10 6-10 6V4z" />
        </svg>
      )}
    </button>
  );
};

export default AutoScroll;
