// Database Dummy untuk Aplikasi SITTA UT
const dbUsers = [
    { email: "mahasiswa@ut.ac.id", password: "password123", nama: "Annajmus Tsaaqir", role: "mahasiswa" }
];

const dbStokBahanAjar = [
    { kodeLokasi: "PKU-01-01", kodeBarang: "STSI4209", namaBarang: "BMP Kepemimpinan", jenis: "BMP", edisi: "1", stok: 150 },
    { kodeLokasi: "PKU-01-02", kodeBarang: "STSI4310", namaBarang: "BMP Mikrobiologi", jenis: "BMP", edisi: "2", stok: 85 },
    { kodeLokasi: "PKU-02-01", kodeBarang: "EKMA4116", namaBarang: "BMP Perkembangan dan Konsep Dasar PAUD", jenis: "BMP", edisi: "1", stok: 120 }
];

const dbTracking = {
    "PKU123456": { penerima: "Annajmus Tsaaqir", nim: "012345678", kurir: "JNE Regular", status: "Dalam Perjalanan menuju Palangka Raya" },
    "012345678": { penerima: "Annajmus Tsaaqir", nim: "012345678", kurir: "SiCepat Express", status: "Tiba di UPBJJ-UT Palangka Raya" }
};
