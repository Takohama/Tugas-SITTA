// Logika Pengelolaan Stok Bahan Ajar (stok-app.js)

document.addEventListener("DOMContentLoaded", function() {
    const tabelStokBody = document.getElementById("tabelStokBody");

    // Pastikan elemen tabel stok ada di halaman dan datanya tersedia
    if (tabelStokBody && typeof dbStokBahanAjar !== 'undefined') {
        // Kosongkan dulu isi tabel
        tabelStokBody.innerHTML = "";

        // Looping data stok dari database (data.js)
        dbStokBahanAjar.forEach((item, index) => {
            const row = document.createElement("tr");
            
            // Tentukan gambar cover default atau dari item
            let gambarCover = item.cover || "https://i.postimg.cc/tsFBsjn2/cover1-jpg.jpg";
            if (index === 1) gambarCover = "https://i.postimg.cc/Mn19nSfP/cover2-jpg.webp";
            if (index === 2) gambarCover = "https://i.postimg.cc/NKRdKc2x/cover3-jpg.jpg";

            row.innerHTML = `
                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;"><img src="${gambarCover}" alt="Cover" style="width: 50px; height: 70px; object-fit: cover; border-radius: 4px;"></td>
                <td style="padding: 12px; border: 1px solid #ddd;">${item.kodeLokasi || 'PKU-01-0' + (index + 1)}</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${item.kodeBarang}</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${item.namaBarang}</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${item.jenis || 'BMP'}</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${item.edisi || '1'}</td>
                <td style="padding: 12px; border: 1px solid #ddd;"><strong>${item.stok}</strong></td>
            `;
            
            tabelStokBody.appendChild(row);
        });
    }
});
