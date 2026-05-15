"use strict";
// Tugas 3: Implementasikan fungsi-fungsi manajemen buku
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBook = addBook;
exports.listBooks = listBooks;
exports.searchBook = searchBook;
const books_1 = require("../data/books");
/**
 * Fungsi untuk menambahkan buku baru ke dalam array
 * Menerima parameter bertipe Book
 */
function addBook(book) {
    books_1.books.push(book);
    console.log(`✨ Sukses: Buku "${book.title}" berhasil ditambahkan ke sistem.`);
}
/**
 * Fungsi untuk menampilkan semua koleksi buku
 */
function listBooks() {
    console.log("\n📚 DAFTAR KOLEKSI BUKU:");
    if (books_1.books.length === 0) {
        console.log("Sistem: Belum ada buku yang tersimpan.");
    }
    else {
        books_1.books.forEach((b, index) => {
            console.log(`${index + 1}. ${b.title} - ${b.author} (${b.publicationYear})`);
        });
    }
}
/**
 * Fungsi untuk mencari buku berdasarkan judul
 * Parameter 'title' bersifat opsional (?)
 */
function searchBook(title) {
    console.log(`\n🔍 MENCARI BUKU: "${title || "Tampilkan Semua"}"`);
    // Jika parameter tidak diberikan, jalankan fungsi listBooks()
    if (!title) {
        listBooks();
        return;
    }
    // Cari buku yang judulnya mengandung kata kunci
    const results = books_1.books.filter((b) => b.title.toLowerCase().includes(title.toLowerCase()));
    if (results.length > 0) {
        results.forEach((b) => {
            console.log(`Hasil Ditemukan: ${b.title} | Penulis: ${b.author} (${b.publicationYear})`);
        });
    }
    else {
        console.log(`Hasil: Maaf, buku "${title}" tidak ditemukan.`);
    }
}
