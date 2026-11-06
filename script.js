// Script Utama Aplikasi SITTA UT
document.addEventListener("DOMContentLoaded", function() {
    const formLogin = document.getElementById("formLogin");
    
    if (formLogin) {
        formLogin.addEventListener("submit", function(e) {
            e.preventDefault();
            
            const emailInput = document.getElementById("email").value.trim();
            const passwordInput = document.getElementById("password").value.trim();
            
            // Bypass khusus untuk mahasiswa@ut.ac.id dengan sandi sederhana 12345
            if (emailInput === "mahasiswa@ut.ac.id" && passwordInput === "mahasiswa@12345") {
                alert("Login Berhasil! Masuk ke sistem...");
                localStorage.setItem("sitta_logged_in", "true");
                
                // Sesuaikan arah halaman tujuan setelah login berhasil
                window.location.href = "index.html"; 
            } else {
                alert("Email atau Password salah! Gunakan sandi 12345 untuk mahasiswa@ut.ac.id");
            }
        });
    }
});
