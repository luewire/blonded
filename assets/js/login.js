const btnTombol = document.querySelector("#tombol"); // Fix the id here
const txtUsername = document.querySelector("#Username");
const txtPassword = document.querySelector("#password");

btnTombol.addEventListener("click", function () {
    if (txtUsername.value == "User01" && txtPassword.value == "123") {
        window.location="landingpage.html"
    } else {
        alert("Username dan password anda salah. Silakan dicek kembali!!!");
    }
});