<?php
// Post edilen kullanıcı adı ve şifre alınır
if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Kullanıcı adı boş olup olmadığını kontrol edilir
    if (empty($username) || empty($password)) {
        header("Location: Giris.html");
        exit;
    }

    // Kullanıcı adının e-posta formatında olup olmadığı kontrol edilir
    if (!filter_var($username, FILTER_VALIDATE_EMAIL)) {
        header("Location: Giris.html");
        exit;
    }

    //Kullanıcının bilgileri
    $valid_username = "G231210056@sakarya.edu.tr";
    $valid_password = "G231210056";

    if ($username === $valid_username && $password === $valid_password) {
        // Başarılı giriş
        echo "Hoşgeldiniz G231210056!";
    } else {
        // Başarısız giriş, kullanıcıyı login sayfasına yönlendir
        header("Location: Giris.html");
        exit;
    }
} else {
    // Post edilen veri yoksa kullanıcıyı tekrar login sayfasına yönlendir
    header("Location: Giris.html");
    exit;
}
?>
