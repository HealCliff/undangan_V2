import { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Target date: 20 September 2026, 09:00 WIB
    const targetDate = new Date('2026-09-20T09:00:00+07:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center gap-2 md:gap-3 my-4">
      <div className="flex flex-col items-center justify-center w-[4.25rem] h-[5.75rem] bg-[#575046]/90 rounded-2xl border border-[#d4a15f]/70 shadow-[0_8px_20px_rgba(44,5,12,0.25)]">
        <span className="text-3xl text-[#fff1d6] font-sans font-semibold leading-none">{timeLeft.days}</span>
        <span className="text-sm text-[#eac07a] font-handwriting mt-2">Hari</span>
      </div>
      <div className="flex flex-col items-center justify-center w-[4.25rem] h-[5.75rem] bg-[#575046]/90 rounded-2xl border border-[#d4a15f]/70 shadow-[0_8px_20px_rgba(44,5,12,0.25)]">
        <span className="text-3xl text-[#fff1d6] font-sans font-semibold leading-none">{timeLeft.hours}</span>
        <span className="text-sm text-[#eac07a] font-handwriting mt-2">Jam</span>
      </div>
      <div className="flex flex-col items-center justify-center w-[4.25rem] h-[5.75rem] bg-[#575046]/90 rounded-2xl border border-[#d4a15f]/70 shadow-[0_8px_20px_rgba(44,5,12,0.25)]">
        <span className="text-3xl text-[#fff1d6] font-sans font-semibold leading-none">{timeLeft.minutes}</span>
        <span className="text-sm text-[#eac07a] font-handwriting mt-2">Menit</span>
      </div>
      <div className="flex flex-col items-center justify-center w-[4.25rem] h-[5.75rem] bg-[#575046]/90 rounded-2xl border border-[#d4a15f]/70 shadow-[0_8px_20px_rgba(44,5,12,0.25)]">
        <span className="text-3xl text-[#fff1d6] font-sans font-semibold leading-none">{timeLeft.seconds}</span>
        <span className="text-sm text-[#eac07a] font-handwriting mt-2">Detik</span>
      </div>
    </div>
  );
};

export default Countdown;
