// 1. Data Transaksi Toko Elektronik
const transaksi = [
  { id: 1, barang: "Laptop", harga: 7500000, qty: 1, kategori: "Elektronik" },
  { id: 2, barang: "Mouse", harga: 150000, qty: 2, kategori: "Aksesoris" },
  { id: 3, barang: "Keyboard", harga: 250000, qty: 1, kategori: "Aksesoris" },
  { id: 4, barang: "Printer", harga: 1800000, qty: 1, kategori: "Elektronik" },
  { id: 5, barang: "Headset", harga: 300000, qty: 2, kategori: "Aksesoris" },
  { id: 6, barang: "Monitor", harga: 2200000, qty: 1, kategori: "Elektronik" }
];

// 2. Filter barang kategori Elektronik
const barangElektronik = transaksi.filter(
  ({ kategori }) => kategori === "Elektronik"
);

// 3. Map Untuk Menghitung Subtotal
const dataSubtotal = transaksi.map(
  ({ id, barang, harga, qty }) => ({
    id,
    barang,
    harga,
    qty,
    subtotal: harga * qty
  })
);

// 4. Reduce untuk menghitung total belanja
const totalBelanja = dataSubtotal.reduce(
  (total, { subtotal }) => total + subtotal,
  0
);

// 5. Reduce untuk menghitung total aksesoris
const barangAksesoris = transaksi.filter(
  ({ kategori }) => kategori === "Aksesoris"
);

const totalAksesoris = barangAksesoris.reduce(
  (total, { harga, qty }) => total + harga * qty,
  0
);

// 6. Menampilkan hasil
console.log("=== TRANSAKSI TOKO ELEKTRONIK ===");
console.table(transaksi);

console.log("=== BARANG ELEKTRONIK ===");
console.table(barangElektronik);

console.log("=== SUBTOTAL SETIAP BARANG ===");
console.table(dataSubtotal);

console.log("Total Belanja Aksesoris: Rp" + totalAksesoris);
console.log("Total Seluruh Belanja: Rp" + totalBelanja);