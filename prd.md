Product Requirements Document (PRD): Website Undangan Pernikahan Digital
1. Overview
Proyek ini adalah pembuatan website undangan pernikahan digital interaktif (Single Page Application/SPA). Web ini bertujuan untuk memberikan informasi detail acara pernikahan, memfasilitasi tamu untuk melakukan RSVP, memberikan ucapan, serta mengirimkan hadiah secara digital (cashless).

2. Tech Stack
Frontend: React.js (Direkomendasikan menggunakan Vite untuk SPA atau Next.js jika ingin routing bawaan Vercel).

Backend: Node.js (Express.js) - bertindak sebagai API layer untuk memproses request dari client sebelum masuk ke database.

Database: Supabase (PostgreSQL) - digunakan untuk menyimpan data RSVP dan ucapan.

Deployment: Vercel (mendukung Frontend React dan Backend Node.js sebagai Serverless Functions di folder /api).

Styling: Tailwind CSS (opsional namun sangat disarankan untuk mereplikasi UI pada referensi dengan cepat).

3. Fitur & UI/UX Requirements
Website akan terdiri dari satu halaman panjang (one-page scroll) dengan komponen/seksi berikut:

A. Cover Section (Landing)
Tampilan: Layar penuh (fullscreen).

Konten: Nama pasangan (Nadiya & Resdi), tanggal pernikahan, dan sapaan khusus untuk tamu (mengambil parameter URL, misal: ?to=Fajar).

Interaksi: Tombol "Buka Undangan" yang saat diklik akan memutar musik latar (auto-play kebijakan browser) dan menggulir ke bawah (scroll down) membuka sisa halaman web.

B. Hero & Quote Section
Konten: Efek transisi masuk, menampilkan kutipan ayat (contoh: Ar-Rum: 21).

Fitur: Countdown timer (Hari, Jam, Menit, Detik) menuju waktu akad nikah.

C. Pasangan Mempelai (Profiles)
Konten: Foto pengantin wanita dan pria.

Data Lengkap: Nama lengkap mempelai, status anak (Putra/Putri ke-), nama orang tua, dan tautan ke akun media sosial (Instagram).

D. Detail Acara (Event Info)
Terbagi menjadi dua kartu (cards): Akad Nikah dan Resepsi Pernikahan.

Data: Hari, Tanggal, Jam (WIB), dan Alamat lengkap lokasi.

Interaksi: Tombol "Lihat Lokasi" yang mengarahkan pengguna ke Google Maps.

E. RSVP & Guestbook (Ucapan & Doa Restu)
Statistik Live: Menampilkan jumlah tamu berdasarkan status kehadiran (Hadir, Tidak Hadir, Masih Ragu).

Form Input: * Nama (Text input).

Ucapan (Textarea).

Kehadiran (Dropdown: Hadir / Tidak Hadir / Masih Ragu).

Tombol "Kirim" (Submit).

Comment Feed: Daftar ucapan dari tamu lain yang bisa di-scroll (mengambil data dari Supabase).

F. Wedding Gift (Amplop Digital)
Konten: Ilustrasi menarik dan teks terima kasih.

Fitur: Menampilkan informasi rekening bank (contoh: SEABANK a.n Nadiya Alawiyah).

Interaksi: Tombol "Copy No. Rekening" yang menyalin nomor rekening langsung ke clipboard perangkat pengguna dan memunculkan toast/alert sukses.