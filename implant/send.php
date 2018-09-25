<?php header('Content-Type: text/html; charset=utf-8');

$fio = $_POST['fio'];
$phone = $_POST['phone'];

$fio = htmlspecialchars($fio);
$email = htmlspecialchars($phone);
$fio = urldecode($fio);
$phone = urldecode($phone);
$fio = trim($fio);
$phone = trim($phone);

$address = "123@yandex.ru";
$sub = "Сообщение с сайта Dental";

$mes = "Сообщение с сайта Dental \n
Имя отправителя: $fio
Телефон: $phone
$messaga";

$mail = mail($address, $sub, $mes, $headers);
 
echo 'ok';
?>