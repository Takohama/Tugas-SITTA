document.addEventListener("DOMContentLoaded", function() {
    new Vue({
        el: '#stokApp',
        data: {
            cariKode: '',
            // Mengambil data dari file databahanajar.js atau array cadangan
            daftarStok: typeof dbStokBahanAjar !== 'undefined' ? dbStokBahanAjar : [
                { kode: "EKMA4116", judul: "Pengantar Manajemen", kategori: "Ekonomi", stok: 25 },
                { kode: "ISIP4210", judul: "Pengantar Sosiologi", kategori: "Sosial", stok: 5 }
            ]
        },
        computed: {
            // Filter pencarian menggunakan Computed Property
            filteredStok() {
                return this.daftarStok.filter(item => {
                    return item.judul.toLowerCase().includes(this.cariKode.toLowerCase()) ||
                           item.kode.toLowerCase().includes(this.cariKode.toLowerCase());
                });
            }
        }
    });
});
