<?php header('Content-Type: text/html; charset=utf-8');

$fio = $_POST['name'];
$phone = $_POST['phone'];
$mail = $_POST['mail'];
$mes = $_POST['message'];

$fio = htmlspecialchars($fio);
$phone = htmlspecialchars($phone);
$mail = htmlspecialchars($mail);
$mes = htmlspecialchars($mes);
$fio = urldecode($fio);
$phone = urldecode($phone);
$mail = urldecode($mail);
$mes = urldecode($mes);
$fio = trim($fio);
$phone = trim($phone);
$mail = trim($mail);
$mes = trim($mes);

$address = "sergey-nv@mail.ru";
$from = "astnvru@vh287.sweb.ru";
$headers = "From:" . $from;
$sub = "Сообщение с сайта Академия образования";

$message = "Сообщение с сайта Академия образования \n
Имя отправителя: $fio
Телефон: $phone
Email: $mail 
$mes";

$mail = mail($address, $sub, $message, $headers);
 
echo 'ok';
?>