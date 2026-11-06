// 1. Definisikan data array of objects (minimal 6 data transaksi belanja)
const transaksiBelanja = [
  { id: 1, barang: "Kemeja Flanel", harga: 150000, qty: 2, kategori: "Pakaian" },
  { id: 2, barang: "Laptop Asus", harga: 8500000, qty: 1, kategori: "Elektronik" },
  { id: 3, barang: "Celana Chino", harga: 200000, qty: 1, kategori: "Pakaian" },
  { id: 4, barang: "Mouse Wireless", harga: 125000, qty: 2, kategori: "Elektronik" },
  { id: 5, barang: "Sepatu Sneakers", harga: 400000, qty: 1, kategori: "Fashion" },
  { id: 6, barang: "Kaos Polos", harga: 75000, qty: 3, kategori: "Pakaian" }
];

console.log("=== DATA AWAL TRANSAKSI ===");
console.log(transaksiBelanja);

// Target kategori yang ingin disaring
const targetKategori = "Pakaian";

// 2. Gunakan filter() untuk menyaring kategori tertentu
// Menerapkan arrow function dan destructuring langsung pada parameter ({ kategori })
const produkTersaring = transaksiBelanja.filter(({ kategori }) => kategori === targetKategori);

// 3. Gunakan map() untuk menghitung subtotal tiap barang
// Menerapkan destructuring ({ barang, harga, qty, kategori }) dan mengembalikan object baru beserta subtotal
const produkDenganSubtotal = produkTersaring.map(({ barang, harga, qty, kategori }) => {
  const subtotal = harga * qty;
  return {
    barang,
    harga,
    qty,
    kategori,
    subtotal
  };
});

console.log(`\n=== HASIL FILTER KATEGORI "${targetKategori}" & HITUNG SUBTOTAL ===`);
console.log(produkDenganSubtotal);

// 4. Gunakan reduce() untuk menghitung total keseluruhan dari subtotal yang ada
// Menerapkan arrow function dan destructuring ({ subtotal }) pada setiap elemen array
const totalKeseluruhan = produkDenganSubtotal.reduce((acc, { subtotal }) => acc + subtotal, 0);

console.log("\n=== TOTAL KESELURUHAN ===");
console.log(`Rp ${totalKeseluruhan.toLocaleString('id-ID')}`);