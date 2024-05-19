<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $gender =$_POST['gender'];



    // Örnek bir geri dönüş
    echo "Form gönderildi! Ad Soyad: $name, E-posta: $email, Mesaj: $message, Cinsiyet: $gender";
} else {
    echo "Geçersiz istek!";
}
?>
