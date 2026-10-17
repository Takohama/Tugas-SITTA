// Logika Pelacakan / Tracking Pengiriman Bahan Ajar (tracking-app.js)

document.addEventListener("DOMContentLoaded", function() {
    const btnCekTracking = document.getElementById("btnCekTracking");
    const inputResi = document.getElementById("inputResi");
    const hasilTracking = document.getElementById("hasilTracking");

    if (btnCekTracking && inputResi && hasilTracking) {
        btnCekTracking.addEventListener("click", function() {
            const keyword = inputResi.value.trim();

            if (keyword === "") {
                alert("Silakan masukkan Nomor Resi atau NIM terlebih dahulu!");
                return;
            }

            // Cek apakah data tracking tersedia (trackingData atau dbTracking)
            let dataDitemukan = null;
            if (typeof trackingData !== 'undefined' && trackingData[keyword]) {
                dataDitemukan = trackingData[keyword];
            } else if (typeof dbTracking !== 'undefined' && dbTracking[keyword]) {
                dataDitemukan = dbTracking[keyword];
            }

            // Jika data ditemukan
            if (dataDitemukan) {
                let riwayatHTML = "";
                if (dataDitemukan.perjalanan && Array.isArray(dataDitemukan.perjalanan)) {
                    dataDitemukan.perjalanan.forEach(item => {
                        riwayatHTML += `
                            <li style="margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px dashed #ddd;">
                                <span style="font-size: 0.85rem; color: #666; display: block;">${item.waktu}</span>
                                <strong>${item.keterangan}</strong>
                            </li>
                        `;
                    });
                }

                hasilTracking.innerHTML = `
                    <div style="background: #f9f9f9; padding: 15px; border-radius: 6px; border-left: 4px solid #003366;">
                        <h5 style="margin: 0 0 10px 0; color: #003366;">Detail Pengiriman Resi: ${keyword}</h5>
                        <p style="margin: 5px 0;"><strong>Penerima:</strong> ${dataDitemukan.nama || 'Mahasiswa UT'} (NIM: ${dataDitemukan.nim || '-'})</p>
                        <p style="margin: 5px 0;"><strong>Paket BMP:</strong> ${dataDitemukan.paket || 'Bahan Ajar UT'}</p>
                        <p style="margin: 5px 0;"><strong>Ekspedisi:</strong> ${dataDitemukan.ekspedisi || 'JNE / Kurir UT'}</p>
                        <p style="margin: 5px 0;"><strong>Status Terakhir:</strong> <span style="color: #008000; font-weight: bold;">${dataDitemukan.status}</span></p>
                        
                        <h6 style="margin: 15px 0 5px 0; color: #333;">Riwayat Perjalanan:</h6>
                        <ul style="list-style-type: none; padding-left: 0; margin: 0;">
                            ${riwayatHTML || '<li>Status pengiriman diperbarui.</li>'}
                        </ul>
                    </div>
                `;
            } else {
                // Contoh dummy dinamis jika mengetik sembarang nomor resi untuk keperluan presentasi
                hasilTracking.innerHTML = `
                    <div style="background: #fff3f3; padding: 15px; border-radius: 6px; border-left: 4px solid #ff4d4d;">
                        <h5 style="margin: 0 0 5px 0; color: #cc0000;">Hasil Pelacakan: ${keyword}</h5>
                        <p style="margin: 5px 0; color: #333;">Status: <strong>Dalam Proses Pengiriman oleh UPBJJ-UT Palangka Raya</strong></p>
                        <p style="margin: 5px 0; font-size: 0.9rem; color: #555;">Paket bahan ajar sedang disiapkan dan dikirim ke alamat mahasiswa.</p>
                    </div>
                `;
            }
        });
    }
});
