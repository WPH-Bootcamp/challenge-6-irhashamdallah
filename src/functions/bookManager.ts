// Tugas 3: Implementasikan fungsi-fungsi manajemen buku

// Fungsi addBook
// Fungsi ini digunakan untuk menambahkan buku baru ke dalam koleksi
// Parameter yang dibutuhkan: data buku sesuai tipe Book
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan bagaimana cara menambahkan buku ke array yang sudah disediakan

// Fungsi listBooks
// Fungsi ini digunakan untuk menampilkan semua buku yang tersimpan
// Tidak memerlukan parameter
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan cara menampilkan data buku dengan format yang mudah dibaca

// Fungsi searchBook
// Fungsi ini digunakan untuk mencari buku berdasarkan judul
// Parameter title bersifat opsional (bisa ada atau tidak)
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: jika parameter title diberikan, cari buku yang cocok
//           jika tidak diberikan, tampilkan semua buku atau berikan informasi yang sesuai

import { Book } from "../types";
import { books } from "../data/books";

/**
 * Fungsi untuk menambahkan buku baru ke dalam array
 * Menerima parameter bertipe Book
 */
export function addBook(book: Book): void {
  books.push(book);
  console.log(
    `✨ Sukses: Buku "${book.title}" berhasil ditambahkan ke sistem.`,
  );
}

/**
 * Fungsi untuk menampilkan semua koleksi buku
 */
export function listBooks(): void {
  console.log("\n📚 DAFTAR KOLEKSI BUKU:");
  if (books.length === 0) {
    console.log("Sistem: Belum ada buku yang tersimpan.");
  } else {
    books.forEach((b, index) => {
      console.log(
        `${index + 1}. ${b.title} - ${b.author} (${b.publicationYear})`,
      );
    });
  }
}

/**
 * Fungsi untuk mencari buku berdasarkan judul
 * Parameter 'title' bersifat opsional (?)
 */
export function searchBook(title?: string): void {
  console.log(`\n🔍 MENCARI BUKU: "${title || "Tampilkan Semua"}"`);

  // Jika parameter tidak diberikan, jalankan fungsi listBooks()
  if (!title) {
    listBooks();
    return;
  }

  // Cari buku yang judulnya mengandung kata kunci
  const results = books.filter((b) =>
    b.title.toLowerCase().includes(title.toLowerCase()),
  );

  if (results.length > 0) {
    results.forEach((b) => {
      console.log(
        `Hasil Ditemukan: ${b.title} | Penulis: ${b.author} (${b.publicationYear})`,
      );
    });
  } else {
    console.log(`Hasil: Maaf, buku "${title}" tidak ditemukan.`);
  }
}