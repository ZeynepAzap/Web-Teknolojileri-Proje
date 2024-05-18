<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Form verilerini işleme veya başka bir işlem yapma
    // Örneğin, veritabanına kaydetme gibi işlemler yapılabilir.

    // Örnek bir geri dönüş
    echo "Form gönderildi! Ad Soyad: $name, E-posta: $email, Mesaj: $message";
} else {
    echo "Geçersiz istek!";
}
?>
