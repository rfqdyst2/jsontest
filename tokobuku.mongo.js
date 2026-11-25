// === Dummy MongoDB Shell Script ===
// File: seed-data.mongo.js
// Deskripsi: Inisialisasi koleksi dan insert data dummy untuk testing

// 1. Pilih database
const dbName = "tokobuku_online";
db = db.getSiblingDB(dbName);
print(`📦 Connected to database: ${dbName}`);

// 2. Bersihkan data lama (hati-hati di production!)
db.buku.drop();
db.kategori.drop();
print("🗑️  Koleksi lama dibersihkan");

// 3. Insert kategori
db.kategori.insertMany([
  { _id: ObjectId(), nama: "Fiksi", slug: "fiksi" },
  { _id: ObjectId(), nama: "Teknologi", slug: "teknologi" },
  { _id: ObjectId(), nama: "Sejarah", slug: "sejarah" },
]);
print(`✅ ${db.kategori.countDocuments()} kategori ditambahkan`);

// 4. Insert buku dengan referensi kategori
const katTeknologi = db.kategori.findOne({ slug: "teknologi" });
const katFiksi = db.kategori.findOne({ slug: "fiksi" });

db.buku.insertMany([
  {
    judul: "Belajar MongoDB dalam 7 Hari",
    penulis: "Budi Santoso",
    harga: 125000,
    stok: 50,
    kategoriId: katTeknologi._id,
    tags: ["database", "nosql", "pemula"],
    createdAt: new Date(),
  },
  {
    judul: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    harga: 89000,
    stok: 120,
    kategoriId: katFiksi._id,
    tags: ["novel", "indonesia", "bestseller"],
    createdAt: new Date(),
  },
  {
    judul: "Sapiens: Riwayat Singkat Umat Manusia",
    penulis: "Yuval Noah Harari",
    harga: 175000,
    stok: 30,
    kategoriId: db.kategori.findOne({ slug: "sejarah" })._id,
    tags: ["sejarah", "antropologi"],
    createdAt: new Date(),
  },
]);
print(`✅ ${db.buku.countDocuments()} buku ditambahkan`);

// 5. Buat index untuk performa pencarian
db.buku.createIndex({ judul: "text", penulis: "text" });
db.buku.createIndex({ kategoriId: 1, harga: 1 });
print("🔍 Index berhasil dibuat");

// 6. Verifikasi akhir
print("\n=== Ringkasan ===");
print(`Database : ${dbName}`);
print(`Kategori : ${db.kategori.countDocuments()} dokumen`);
print(`Buku     : ${db.buku.countDocuments()} dokumen`);
print("🎉 Seeding selesai!");
