document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Logika Halaman Login (index.html)
    const formLogin = document.getElementById("formLogin");
    if (formLogin) {
        const alertBox = document.getElementById("alertBox");
        const modalBox = document.getElementById("modalBox");
        const modalTitle = document.getElementById("modalTitle");
        const modalText = document.getElementById("modalText");
        const closeModal = document.getElementById("closeModal");

        formLogin.addEventListener("submit", (e) => {
            e.preventDefault();
            const emailInput = document.getElementById("email").value.trim();
            const passInput = document.getElementById("password").value.trim();

            const userValid = dataPengguna.find(u => u.email === emailInput && u.password === passInput);

            if (userValid) {
                alertBox.textContent = "Login Berhasil! Mengalihkan...";
                alertBox.className = "alert success";
                setTimeout(() => {
                    window.location.href = "dashboard.html";
                }, 1000);
            } else {
                alertBox.textContent = "email/password yang anda masukkan salah";
                alertBox.className = "alert error";
            }
        });

        document.getElementById("btnLupa").addEventListener("click", (e) => {
            e.preventDefault();
            modalTitle.textContent = "Reset Password";
            modalText.textContent = "Silakan hubungi administrator pusat UT untuk melakukan reset kata sandi.";
            modalBox.style.display = "flex";
        });

        document.getElementById("btnDaftar").addEventListener("click", (e) => {
            e.preventDefault();
            modalTitle.textContent = "Pendaftaran Akun Baru";
            modalText.textContent = "Pendaftaran akun baru harus melalui verifikasi akademik UT.";
            modalBox.style.display = "flex";
        });

        closeModal.addEventListener("click", () => {
            modalBox.style.display = "none";
        });
    }

    // 2. Logika Dashboard Greeting
    const greetingText = document.getElementById("greetingText");
    if (greetingText) {
        const jam = new Date().getHours();
        let waktu = "Pagi";
        if (jam >= 11 && jam < 15) waktu = "Siang";
        else if (jam >= 15 && jam < 18) waktu = "Sore";
        else if (jam >= 18) waktu = "Malam";

        greetingText.textContent = `Selamat ${waktu}, Rekan Mahasiswa`;
    }

    // 3. Logika Tracking Pengiriman DO (tracking.html)
    const btnCariDO = document.getElementById("btnCariDO");
    if (btnCariDO) {
        btnCariDO.addEventListener("click", () => {
            const noDo = document.getElementById("noDoInput").value.trim();
            const hasilContainer = document.getElementById("hasilTracking");
            
            const dataPaket = dataTracking[noDo];
            if (dataPaket) {
                let perjalananHTML = dataPaket.perjalanan.map(p => `
                    <li><strong>${p.waktu}</strong>: ${p.keterangan}</li>
                `).join('');

                hasilContainer.innerHTML = `
                    <div style="background: #e9ecef; padding: 15px; border-radius: 6px;">
                        <h3>${dataPaket.nama}</h3>
                        <p><strong>No DO:</strong> ${dataPaket.nomorDO}</p>
                        <p><strong>Status:</strong> <span style="color: green; font-weight: bold;">${dataPaket.status}</span></p>
                        <p><strong>Ekspedisi:</strong> ${dataPaket.ekspedisi} (${dataPaket.tanggalKirim})</p>
                        <p><strong>Total Pembayaran:</strong> ${dataPaket.total}</p>
                        <h4 style="margin-top: 15px;">Riwayat Perjalanan Paket:</h4>
                        <ul style="margin-left: 20px; margin-top: 5px;">${perjalananHTML}</ul>
                    </div>
                `;
                hasilContainer.classList.remove("hidden");
            } else {
                hasilContainer.innerHTML = `<p style="color: red;">Nomor Delivery Order (DO) tidak ditemukan dalam data.</p>`;
                hasilContainer.classList.remove("hidden");
            }
        });
    }

    // 4. Logika Informasi Stok & Manipulasi DOM (stok.html)
    const tabelStokBody = document.getElementById("tabelStokBody");
    if (tabelStokBody) {
        function renderStok() {
            tabelStokBody.innerHTML = "";
            dataBahanAjar.forEach(buku => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td><img src="img/${buku.cover}" class="thumbnail" alt="Cover" style="width: 50px; height: auto;"></td>
                    <td>${buku.kodeLokasi}</td>
                    <td>${buku.kodeBarang}</td>
                    <td>${buku.namaBarang}</td>
                    <td>${buku.jenisBarang}</td>
                    <td>${buku.edisi}</td>
                    <td><strong>${buku.stok}</strong></td>
                `;
                tabelStokBody.appendChild(tr);
            });
        }
        renderStok();

        const formTambahStok = document.getElementById("formTambahStok");
        if (formTambahStok) {
            formTambahStok.addEventListener("submit", (e) => {
                e.preventDefault();
                const lokasi = document.getElementById("lokasiInput").value;
                const kode = document.getElementById("kodeInput").value;
                const nama = document.getElementById("namaInput").value;
                const stok = document.getElementById("stokInput").value;

                dataBahanAjar.push({
                    kodeLokasi: lokasi,
                    kodeBarang: kode,
                    namaBarang: nama,
                    jenisBarang: "BMP",
                    edisi: "1",
                    stok: parseInt(stok),
                    cover: "cover4.jpg"
                });

                renderStok();
                formTambahStok.reset();
                alert("Berhasil menambahkan baris stok baru via DOM!");
            });
        }
    }
});