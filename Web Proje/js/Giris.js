function validateForm() {
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (username == "" || password == "") {
        alert("Kullanıcı adı ve şifre alanları boş bırakılamaz.");
        return false;
    }

    if (!emailPattern.test(username)) {
        alert("Lütfen geçerli bir e-posta adresi girin.");
        return false;
    }

    return true;
}