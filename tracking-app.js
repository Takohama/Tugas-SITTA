new Vue({
    el: '#app',
    data: {
        judulHalaman: 'Tracking Pengiriman DO SITTA UT',
        inputNomorDO: '',
        hasilDO: null,
        pesanWatcher: ''
    },
    watch: {
        inputNomorDO(valBaru) {
            if (valBaru.length > 0 && valBaru.length < 5) {
                this.pesanWatcher = 'Peringatan: Ketik minimal 5 karakter nomor DO...';
            } else {
                this.pesanWatcher = '';
            }
        },
        hasilDO(DOBaru) {
            if (DOBaru) {
                console.log('Watcher mendeteksi DO ditemukan:', DOBaru.nomorDO);
            }
        }
    },
    methods: {
        cariDataDO() {
            // Pastikan dataTracking dari data.js sudah terbaca
            if (typeof dataTracking !== 'undefined') {
                let ditemukan = null;
                
                // Looping pencarian super aman (cocok untuk Object maupun Array)
                for (let key in dataTracking) {
                    if (dataTracking[key] && dataTracking[key].nomorDO === this.inputNomorDO) {
                        ditemukan = dataTracking[key];
                        break;
                    }
                }
                
                this.hasilDO = ditemukan;
                
                if (!ditemukan) {
                    console.log("Nomor belum ada di file data.js");
                }
            } else {
                this.hasilDO = null;
                alert("File data.js gagal dimuat! Cek nama file di HTML.");
            }
        }
    }
});