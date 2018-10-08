<?php header('Content-Type: text/html; charset=utf-8');

$fio = $_POST['fio'];
$phone = $_POST['phone'];

$fio = htmlspecialchars($fio);
$email = htmlspecialchars($phone);
$fio = urldecode($fio);
$phone = urldecode($phone);
$fio = trim($fio);
$phone = trim($phone);

$address = "corp.manzana@yandex.ru";
$sub = "Сообщение с сайта Manzana";

$mes = "Сообщение с сайта Manzana \n
Имя отправителя: $fio
Телефон: $phone
$messaga";

$mail = mail($address, $sub, $mes, $headers);
 
echo 'ok';
?>