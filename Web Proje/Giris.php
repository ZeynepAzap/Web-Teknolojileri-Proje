<?php 
    if ($_POST["username"] == "G231210056@sakarya.edu.tr" && $_POST["password"] == "G231210056") {
         echo "Hoşgeldin G231210056! ";
         exit();
                
    } else {
                   
        echo "Şifre ya da e-posta hatalı!";
        header("refresh:10; URL=giris.html");
        exit();
    }
?>