# World Trivia App

Aplikasi web trivia sederhana tentang negara-negara di seluruh dunia. Aplikasi ini menyediakan tiga jenis permainan/aktivitas:

1. Tebak Bendera Negara
2. Tebak Landmark Terkenal
3. Eksplorasi Negara dari A sampai Z

## Struktur Project

Project dibagi menjadi dua bagian utama:

- **Backend**: API server menggunakan Node.js dan Express
- **Frontend**: Aplikasi web menggunakan React

## Cara Menjalankan

### Persiapan

1. Pastikan Node.js dan npm terinstal di sistem Anda
2. Clone repository ini ke komputer lokal Anda

### Menjalankan Backend

1. Buka terminal dan navigasi ke folder backend
2. Install dependensi:
   ```
   npm install
   ```
3. Jalankan server:
   ```
   npm run dev
   ```
   Server akan berjalan di `http://localhost:8080`

### Menjalankan Frontend

1. Buka terminal baru dan navigasi ke folder frontend
2. Install dependensi:
   ```
   npm install
   ```
3. Jalankan aplikasi:
   ```
   npm start
   ```
   Aplikasi akan terbuka di browser pada `http://localhost:3000`

## Teknologi yang Digunakan

### Backend

- Node.js
- Express
- CORS untuk penanganan cross-origin requests

### Frontend

- React
- React Router untuk navigasi
- CSS untuk styling

## Fitur

### 1. Tebak Bendera

- Menampilkan bendera negara secara acak
- Memberikan 4 pilihan nama negara
- Melacak skor pengguna

### 2. Tebak Landmark

- Menampilkan landmark terkenal secara acak
- Memberikan 4 pilihan nama negara
- Melacak skor pengguna

### 3. Daftar Negara A-Z

- Menampilkan daftar negara dikelompokkan berdasarkan huruf awal
- Tampilan interaktif dengan opsi expand/collapse untuk setiap huruf

## Pengembangan Lanjutan

Beberapa ide untuk pengembangan lanjutan:

1. Menambahkan database untuk menyimpan skor tertinggi
2. Menambahkan lebih banyak negara dan landmark
3. Menambahkan lebih banyak jenis trivia (ibukota, mata uang, bahasa, dll)
4. Menambahkan fitur login untuk menyimpan progres pengguna
5. Menambahkan timer untuk meningkatkan tantangan
