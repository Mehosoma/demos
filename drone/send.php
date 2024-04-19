<?php header('Content-Type: text/html; charset=utf-8');

$fio = $_POST['name'];
$phone = $_POST['phone'];
$mes = $_POST['message'];

$fio = htmlspecialchars($fio);
$phone = htmlspecialchars($phone);
$mes = htmlspecialchars($mes);
$fio = urldecode($name);
$phone = urldecode($phone);
$mes = urldecode($mes);
$fio = trim($fio);
$phone = trim($phone);
$mes = trim($mes);

$address = "freenincha@yandex.ru";
$sub = "Сообщение с сайта Drone-NV";

$message = "Сообщение с сайта Drone-NV \n
Имя отправителя: $fio
Телефон: $phone
$mes";

$mail = mail($address, $sub, $message, $headers);
 
echo 'ok';
?>