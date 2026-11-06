document.addEventListener("DOMContentLoaded", function() {
    new Vue({
        el: '#trackingApp',
        data: {
            nomorDO: '',
            hasilPencarian: null,
            pencarianDilakukan: false,
            // Data dummy tracking sesuai modul
            dataTracking: [
                { do: "DO-001", nim: "050224845", nama: "Annajmus Tsaaqir", ekspedisi: "JNE Regular", status: "Dalam Perjalanan" },
                { do: "DO-002", nim: "012345678", nama: "Mahasiswa UT", ekspedisi: "POS Indonesia", status: "Terkirim" }
            ]
        },
        methods: {
            cariTracking() {
                this.pencarianDilakukan = true;
                const found = this.dataTracking.find(item => item.do.toLowerCase() === this.nomorDO.trim().toLowerCase());
                this.hasilPencarian = found ? found : null;
            }
        }
    });
});
