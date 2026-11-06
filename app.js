// Inisialisasi Vue Root untuk STSI4209 Tugas 3
document.addEventListener('DOMContentLoaded', function () {
    new Vue({
        el: '#app',
        data: {
            // State untuk mengontrol navigasi tab halaman (stok, tracking, order)
            tab: 'stok',
            
            // State penampung data global dari JSON / data.js
            state: {
                upbjjList: typeof upbjjList !== 'undefined' ? upbjjList : [],
                kategoriList: typeof kategoriList !== 'undefined' ? kategoriList : [],
                pengirimanList: typeof pengirimanList !== 'undefined' ? pengirimanList : [],
                paket: typeof paket !== 'undefined' ? paket : [],
                stok: typeof stok !== 'undefined' ? stok : [],
                tracking: typeof tracking !== 'undefined' ? tracking : []
            }
        },
        methods: {
            // Handler saat pesanan baru dibuat dari komponen order-form
            handleNewOrder(orderBaru) {
                // Masukkan data tracking baru ke dalam state
                let objBaru = {};
                objBaru[orderBaru.doNumber] = {
                    nim: orderBaru.nim,
                    nama: orderBaru.nama,
                    status: 'Dalam Proses',
                    ekspedisi: orderBaru.ekspedisi,
                    tanggalKirim: orderBaru.tanggalKirim,
                    paket: orderBaru.paket,
                    total: 120000, // Sesuaikan dengan harga paket
                    perjalanan: [
                        {
                            waktu: new Date().toISOString().slice(0, 19).replace('T', ' '),
                            keterangan: 'Delivery Order berhasil dibuat'
                        }
                    ]
                };
                
                this.state.tracking.push(objBaru);
                alert('Delivery Order ' + orderBaru.doNumber + ' berhasil ditambahkan ke sistem!');
                
                // Pindah otomatis ke tab tracking untuk melihat hasil
                this.tab = 'tracking';
            }
        }
    });
});