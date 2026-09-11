const Cover = ({ onOpen }) => {
  // Extract guest name from URL
  const urlParams = new URLSearchParams(window.location.search);
  const guestName = urlParams.get('to') || 'Tamu Undangan';

  return (
    // Uses absolute inset-0 to perfectly fill the mobile container wrapper
    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center min-h-[100dvh] bg-[url('/bg-taman.jpg')] bg-cover bg-center">
      
      {/* Semi-transparent white overlay */}
      <div className="absolute inset-0 bg-black/15 pointer-events-none"></div>

      
      <div className="relative z-10 flex flex-col items-center text-center p-6 w-full">
        <p className="text-xs font-semibold tracking-widest text-[#6a6055] uppercase mb-3">The Wedding Of</p>
        
        <h1 className="text-6xl text-[#463e34] mb-4 drop-shadow-sm font-cursive">Virgia &amp; Kujeng</h1>
        
        <p className="text-2xl text-[#a87f3f] mb-12 font-handwriting tracking-widest">20 . 09 . 2026</p>
        
        {/* Box Kepada Yth - Melayang Elegan */}
        <div className="shadow-lg backdrop-blur-sm bg-[#463e34]/85 rounded-xl p-6 mb-12 w-full max-w-[85%] border border-[#d4a15f]/80">
          <p className="text-xs font-semibold text-[#f0d5bd] mb-2 uppercase tracking-wide">Kepada Yth. Bapak/Ibu/Saudara/i:</p>
          <p className="text-xl font-bold text-[#fff1d6] font-sans">{guestName}</p>
        </div>

        <button 
          onClick={onOpen}
           className="bg-[#d4a15f] hover:bg-[#eac07a] text-[#463e34] px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm font-bold w-3/4 max-w-[200px]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          Buka Undangan
        </button>
      </div>
    </div>
  );
};

export default Cover;
