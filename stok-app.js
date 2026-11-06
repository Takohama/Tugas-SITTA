document.addEventListener("DOMContentLoaded", function() {
    new Vue({
        el: '#stokApp',
        data: {
            cariKode: '',
            // Mengambil langsung variabel daftarBahanAjar dari databahanajar.js
            daftarStok: typeof daftarBahanAjar !== 'undefined' ? daftarBahanAjar : []
        },
        computed: {
            filteredStok() {
                if (!this.cariKode) {
                    return this.daftarStok;
                }
                const keyword = this.cariKode.toLowerCase().trim();
                return this.daftarStok.filter(item => {
                    const kode = item.kode ? item.kode.toLowerCase() : '';
                    const judul = item.judul ? item.judul.toLowerCase() : '';
                    return kode.includes(keyword) || judul.includes(keyword);
                });
            }
        }
    });
});
