// Data Pengguna untuk Login
const dataPengguna = [
    {
        email: "admin@ut.ac.id",
        password: "adminpassword",
        nama: "Administrator UT"
    },
    {
        email: "mahasiswa@ut.ac.id",
        password: "password123",
        nama: "Annajmus Tsaaqir"
    }
];

// Data Informasi Stok Bahan Ajar BMP
const dataBahanAjar = [
    {
        cover: "https://i.postimg.cc/tsFBsjn2/cover1-jpg.jpg",
        kodeLokasi: "PKU-01-01",
        kodeBarang: "STSI4209",
        namaBarang: "BMP Kepemimpinan",
        jenis: "BMP",
        edisi: "1",
        stok: 278
    },
    {
        cover: "https://i.postimg.cc/Mn19nSFP/cover2-jpg.webp",
        kodeLokasi: "PKU-01-02",
        kodeBarang: "BIOL4211",
        namaBarang: "BMP Mikrobiologi Dasar",
        jenis: "BMP",
        edisi: "2",
        stok: 165
    },
    {
        cover: "https://i.postimg.cc/NKRdKc2x/cover3-jpg.jpg",
        kodeLokasi: "PKU-02-01",
        kodeBarang: "PAUD4401",
        namaBarang: "BMP Perkembangan Anak Usia Dini",
        jenis: "BMP",
        edisi: "3",
        stok: 204
    },
    {
        cover: "https://i.postimg.cc/SncgnhY1/cover4-jpg.jpg",
        kodeLokasi: "PKU-02-02",
        kodeBarang: "ISIP4211",
        namaBarang: "BMP Pengantar Ilmu Komunikasi",
        jenis: "BMP",
        edisi: "1",
        stok: 95
    },
    {
        cover: "https://i.postimg.cc/K2wt2MRZ/cover5-jpg.jpg",
        kodeLokasi: "PKU-02-03",
        kodeBarang: "EKMA4116",
        namaBarang: "BMP Perkembangan dan Konsep Dasar Pengembangan Anak Usia Dini",
        jenis: "BMP",
        edisi: "2",
        stok: 120
    }
];

// Data Tracking Pengiriman Delivery Order (DO)
const dataTracking = {
    "2023001234": {
        nomorDO: "2023001234",
        nama: "Paket Semester 2 - Annajmus Tsaaqir",
        status: "Dalam Perjalanan",
        ekspedisi: "SiCepat Ekspres",
        tanggalKirim: "05 Juni 2026",
        total: "Rp 210.000",
        perjalanan: [
            { waktu: "05 Jun 2026 08:00", keterangan: "Paket dipickup oleh kurir dari Gudang UT Pusat" },
            { waktu: "05 Jun 2026 14:30", keterangan: "Paket tiba di Sorting Center Jakarta" },
            { waktu: "06 Jun 2026 09:15", keterangan: "Paket diteruskan ke Kantor Antar Wilayah Tujuan" }
        ]
    }
};