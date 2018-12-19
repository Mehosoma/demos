<?php header('Content-Type: text/html; charset=utf-8');


$phone = $_POST['phone'];
$phone = htmlspecialchars($phone);
$phone = urldecode($phone);
$phone = trim($phone);

$address = "freenincha@yandex.ru";
$sub = "Сообщение с сайта MedeoDent";

$mes = "Сообщение с сайта MedeoDent \n
Телефон: $phone
$messaga";

$mail = mail($address, $sub, $mes, $headers);
 
echo 'ok';
?>