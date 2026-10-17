new Vue({
    el: '#app',
    data: {
        judulHalaman: 'Monitoring Stok Bahan Ajar UT',
        cariKeyword: '',
        pilihJenis: '',
        daftarBahanAjar: daftarBahanAjar,
        formBaru: {
            kodeBarang: '',
            namaBarang: '',
            kategori: 'MK Wajib',
            upbjj: 'Jakarta',
            lokasi: 'R1-A1',
            harga: 50000,
            stok: '',
            safety: 10,
            catatan: 'Baru'
        }
    },
    computed: {
        filterBahanAjar() {
            return this.daftarBahanAjar.filter(item => {
                const searchKey = this.cariKeyword ? this.cariKeyword.toLowerCase() : '';
                const matchKeyword = (item.judul && item.judul.toLowerCase().includes(searchKey)) ||
                                     (item.kode && item.kode.toLowerCase().includes(searchKey));
                const matchJenis = !this.pilihJenis || item.kategori === this.pilihJenis;
                return matchKeyword && matchJenis;
            });
        },
        totalJenisBuku() {
            return this.daftarBahanAjar.length;
        },
        totalJumlahStok() {
            return this.daftarBahanAjar.reduce((total, item) => total + Number(item.qty || item.stok || 0), 0);
        }
    },
    methods: {
        tambahDataBaru() {
            let kodeInput = this.formBaru.kodeBarang ? this.formBaru.kodeBarang.trim() : '';
            let namaInput = this.formBaru.namaBarang ? this.formBaru.namaBarang.trim() : '';
            let jumlahTambah = Number(this.formBaru.stok);

            if (!kodeInput || !namaInput || isNaN(jumlahTambah) || jumlahTambah <= 0) {
                alert('Mohon masukkan Kode, Judul, dan Jumlah Stok yang valid!');
                return;
            }

            // Menambahkan data baru ke array daftarBahanAjar
            this.daftarBahanAjar.push({
                kode: kodeInput,
                judul: namaInput,
                kategori: this.formBaru.kategori,
                upbjj: this.formBaru.upbjj,
                lokasiRak: this.formBaru.lokasi,
                harga: Number(this.formBaru.harga),
                qty: jumlahTambah,
                safety: Number(this.formBaru.safety),
                status: jumlahTambah <= Number(this.formBaru.safety) ? 'Stok menipis' : 'Aman',
                catatan: this.formBaru.catatan
            });

            alert(`Sukses! Bahan ajar "${namaInput}" berhasil ditambahkan.`);

            // Reset form
            this.formBaru.kodeBarang = '';
            this.formBaru.namaBarang = '';
            this.formBaru.stok = '';
        },
        resetForm() {
            this.formBaru.kodeBarang = '';
            this.formBaru.namaBarang = '';
            this.formBaru.stok = '';
        }
    }
});