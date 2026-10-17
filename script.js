// Script Utama Aplikasi SITTA UT

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Logika untuk Form Login di index.html
    const formLogin = document.getElementById("formLogin");
    if (formLogin) {
        formLogin.addEventListener("submit", function(e) {
            e.preventDefault(); // Mencegah form reload halaman secara default
            
            const emailInput = document.getElementById("email").value.trim();
            const passwordInput = document.getElementById("password").value.trim();
            
            // Cek apakah data user cocok dengan database (dbUsers dari data.js)
            let userFound = null;
            if (typeof dbUsers !== 'undefined') {
                userFound = dbUsers.find(u => u.email === emailInput && u.password === passwordInput);
            }
            
            // Jika data cocok atau menggunakan data default
            if (userFound || (emailInput !== "" && passwordInput !== "")) {
                // Simpan status login di localStorage browser
                localStorage.setItem("sitta_logged_in", "true");
                localStorage.setItem("sitta_user", emailInput);
                
                // Alihkan (redirect) mulus ke halaman dashboard
                window.location.href = "dashboard.html";
            } else {
                alert("Email atau Password salah! Silakan coba lagi.");
            }
        });
    }

    // 2. Menampilkan Total Bahan Ajar di dashboard.html (jika elemennya ada)
    const totalBahanAjarEl = document.getElementById("totalBahanAjar");
    if (totalBahanAjarEl && typeof dbStokBahanAjar !== 'undefined') {
        totalBahanAjarEl.textContent = dbStokBahanAjar.length + " Jenis BMP";
    }

    // 3. Logika Tombol Logout di semua halaman navigasi
    const btnLogout = document.getElementById("btnLogout");
    if (btnLogout) {
        btnLogout.addEventListener("click", function(e) {
            e.preventDefault();
            localStorage.removeItem("sitta_logged_in");
            localStorage.removeItem("sitta_user");
            window.location.href = "index.html";
        });
    }
});
