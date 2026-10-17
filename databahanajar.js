// Database Daftar Bahan Ajar & Tracking SITTA UT (databahanajar.js)

const daftarBahanAjar = [
    { 
        kode: "STSI4209", 
        judul: "BMP Kepemimpinan / Pemrograman Berbasis Web", 
        kategori: "MK Wajib", 
        upbjj: "Palangka Raya", 
        lokasiRak: "PKU-01-01", 
        harga: 75000, 
        qty: 150, 
        safety: 10, 
        status: "Aman", 
        catatan: "Modul Terbaru UT",
        cover: "https://i.postimg.cc/tsFBsjn2/cover1-jpg.jpg"
    },
    { 
        kode: "STSI4310", 
        judul: "BMP Mikrobiologi", 
        kategori: "MK Wajib", 
        upbjj: "Palangka Raya", 
        lokasiRak: "PKU-01-02", 
        harga: 70000, 
        qty: 85, 
        safety: 10, 
        status: "Aman", 
        catatan: "Buku Utama",
        cover: "https://i.postimg.cc/Mn19nSfP/cover2-jpg.webp"
    },
    { 
        kode: "EKMA4116", 
        judul: "BMP Perkembangan dan Konsep Dasar PAUD", 
        kategori: "MK Wajib", 
        upbjj: "Palangka Raya", 
        lokasiRak: "PKU-02-01", 
        harga: 65000, 
        qty: 120, 
        safety: 20, 
        status: "Aman", 
        catatan: "Edisi Reguler",
        cover: "https://i.postimg.cc/NKRdKc2x/cover3-jpg.jpg"
    }
];

// Simulasi Data Tracking / DO Pengiriman
const trackingData = {
    "DO2026-0001": { 
        nim: "012345678", 
        nama: "Annajmus Tsaaqir", 
        status: "Dalam Perjalanan", 
        ekspedisi: "JNE Regular", 
        tanggalKirim: "2026-10-15", 
        paket: "BMP Sistem Informasi", 
        total: 145000, 
        perjalanan: [ 
            { waktu: "2026-10-15 10:12:20", keterangan: "Penerimaan di Loket: Palangka Raya" }, 
            { waktu: "2026-10-15 14:07:56", keterangan: "Tiba di Hub Transit UPBJJ-UT" }, 
            { waktu: "2026-10-16 08:44:01", keterangan: "Kurir membawa paket ke alamat tujuan" } 
        ] 
    }
};
