<?php header('Content-Type: text/html; charset=utf-8');

$fio = $_POST['name'];
$phone = $_POST['phone'];
$formData = $_POST['mail'];
$mes = $_POST['message'];

$fio = htmlspecialchars($fio);
$phone = htmlspecialchars($phone);
$formData = htmlspecialchars($mail);
$mes = htmlspecialchars($mes);
$fio = urldecode($name);
$phone = urldecode($phone);
$formData = urldecode($formData);
$mes = urldecode($mes);
$fio = trim($fio);
$phone = trim($phone);
$formData = trim($formData);
$mes = trim($mes);

$address = "info@web-nv.ru";
$sub = "Сообщение с сайта InfoWeb";

$message = "Сообщение с сайта InfoWeb \n
Имя отправителя: $fio
Телефон: $phone
Email: $mail 
$mes";

$mail = mail($address, $sub, $message, $headers);
 
echo 'ok';
?>