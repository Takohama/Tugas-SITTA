var app = new Vue ({
  el: '#app',
  data: {
      upbjjList: ["Jakarta", "Surabaya", "Makassar", "Padang", "Denpasar"],
      kategoriList: ["MK Wajib", "MK Pilihan", "Praktikum", "Problem-Based"],
      pengirimanList: [
        { kode: "REG", nama: "Reguler (3-5 hari)" },
        { kode: "EXP", nama: "Ekspres (1-2 hari)" }
      ],
      paket: [
        { kode: "PAKET-UT-001", nama: "PAKET IPS Dasar", isi: ["EKMA4116","EKMA4115"], harga: 120000 },
        { kode: "PAKET-UT-002", nama: "PAKET IPA Dasar", isi: ["BIOL4201","FISIP4001"], harga: 140000 }
      ],
      const daftarBahanAjar = [
    {
        kode: "STSI4209",
        judul: "Pemrograman Berbasis Web",
        kategori: "MK Wajib",
        upbjj: "Palangka Raya",
        lokasiRak: "PKU-03-01",
        harga: 75000,
        qty: 25,
        safety: 10,
        status: "Aman",
        catatan: "Modul Terbaru UT"
    },
    {
        kode: "EKMA4115",
        judul: "Pengantar Akuntansi",
        kategori: "MK Wajib",
        upbjj: "Jakarta",
        lokasiRak: "R1-A4",
        harga: 60000,
        qty: 15,
        safety: 15,
        status: "Stok menipis",
        catatan: "Edisi Revisi"
    },
    {
        kode: "EKMA4116",
        judul: "Pengantar Manajemen",
        kategori: "MK Wajib",
        upbjj: "Jakarta",
        lokasiRak: "R1-A3",
        harga: 65000,
        qty: 28,
        safety: 20,
        status: "Aman",
        catatan: "Edisi Reguler"
    },
    {
        kode: "SKOM4431",
        judul: "Komunikasi Massa",
        kategori: "Pilihan",
        upbjj: "Surabaya",
        lokasiRak: "R2-B1",
        harga: 55000,
        qty: 8,
        safety: 10,
        status: "Stok menipis",
        catatan: "Cetakan ke-4"
    },
    {
        kode: "IDIK4008",
        judul: "Metode Penelitian",
        kategori: "MK Wajib",
        upbjj: "Palangka Raya",
        lokasiRak: "PKU-01-02",
        harga: 70000,
        qty: 30,
        safety: 10,
        status: "Aman",
        catatan: "Buku Utama"
    }
];
      // Simulasi status DO (opsional fitur Tracking DO)
      tracking: {
        "DO2025-0001": {
          nim: "123456789",
          nama: "Rina Wulandari",
          status: "Dalam Perjalanan",
          ekspedisi: "JNE",
          tanggalKirim: "2025-08-25",
          paket: "PAKET-UT-001",
          total: 120000,
          perjalanan: [
            { waktu: "2025-08-25 10:12:20", keterangan: "Penerimaan di Loket: TANGSEL" },
            { waktu: "2025-08-25 14:07:56", keterangan: "Tiba di Hub: JAKSEL" },
            { waktu: "2025-08-26 08:44:01", keterangan: "Diteruskan ke Kantor Tujuan" }
          ]
        }
      }
  }
});