"use strict";
// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Book Management Application - Week 6");
console.log("=====================================");
// Mulai pengujian di bawah ini
const bookManager_1 = require("./functions/bookManager");
// --- TESTING AREA ---
// 1. Menambah Buku
(0, bookManager_1.addBook)({
    title: "Filosofi Teras",
    author: "Henry Manampiring",
    publicationYear: 2018,
});
(0, bookManager_1.addBook)({
    title: "Atomic Habits",
    author: "James Clear",
    publicationYear: 2018,
});
(0, bookManager_1.addBook)({ title: "Hujan", author: "Tere Liye", publicationYear: 2016 });
// 2. Menampilkan List Buku
(0, bookManager_1.listBooks)();
// 3. Mencari Buku (Parameter Diisi)
(0, bookManager_1.searchBook)("Habits");
// 4. Mencari Buku (Tanpa Parameter / Kosong)
(0, bookManager_1.searchBook)();
// 5. Mencari Buku yang tidak ada
(0, bookManager_1.searchBook)("Harry Potter");
