const Acara = () => {
  return (
    <section className="relative py-20 text-center">
      
      {/* Vertical Layout with gap-8 and px-4 */}
      <div className="relative z-10 flex flex-col gap-8 px-4">
        
        {/* Resepsi Card */}
        <div className="ornate-card bg-[#fffdf7]/95 p-8 shadow-[0_12px_32px_rgba(70,62,52,0.15)] border border-[#d4a15f]/70 text-center" data-aos="fade-up" data-aos-delay="100">
          <div className="w-12 h-12 text-[#a87f3f] mx-auto mb-6">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
            </svg>
          </div>
          <h3 className="text-4xl text-[#463e34] mb-4 font-cursive">Resepsi Pernikahan</h3>
          <div className="text-[#6a6055] space-y-2">
            <p className="font-handwriting font-bold text-xl text-[#463e34]">Minggu</p>
            <p className="text-3xl font-cursive text-[#463e34] mt-[-5px]">20 September 2026</p>
            <p className="font-handwriting text-[17px] mt-1">09.00 WIB - Selesai</p>
            <p className="font-handwriting text-sm mt-4 text-[#989086] font-medium">Kp. Tarikolot RT. 01 RW. 04<br />Desa Cidahu, Kecamatan Cidahu</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
            <a href="https://maps.app.goo.gl/W8KHf8PwSWNArPPK6?g_st=aw" target="_blank" rel="noopener noreferrer" className="bg-[#6e5a3e] text-white px-5 py-2 rounded-md inline-flex items-center justify-center hover:bg-[#57452f] shadow-sm transition-all text-sm font-medium w-full sm:w-auto">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 mr-2" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Lihat Lokasi
            </a>
            
            <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Resepsi+Pernikahan+Virgia+%26+Kujeng&dates=20260920T020000Z/20260920T060000Z&details=Acara+Resepsi+Pernikahan+Virgia+dan+Kujeng.+Kehadiran+Anda+sangat+berarti+bagi+kami.%0A%0ALink+Maps:+https://maps.app.goo.gl/W8KHf8PwSWNArPPK6?g_st=aw&location=Kp.+Tarikolot+RT.+01+RW.+04,+Desa+Cidahu,+Kecamatan+Cidahu" target="_blank" rel="noopener noreferrer" className="bg-[#6e5a3e] text-white px-5 py-2 rounded-md inline-flex items-center justify-center hover:bg-[#57452f] shadow-sm transition-all text-sm font-medium w-full sm:w-auto">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 mr-2" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Save the Date
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Acara;
