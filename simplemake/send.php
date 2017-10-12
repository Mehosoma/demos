<?php header('Content-Type: text/html; charset=utf-8');

$fio = $_POST['fio'];
$phone = $_POST['phone'];
$formData = $_POST['formData'];

$fio = htmlspecialchars($fio);
$email = htmlspecialchars($phone);
$formData = htmlspecialchars($formData);
$fio = urldecode($fio);
$phone = urldecode($phone);
$formData = urldecode($formData);
$fio = trim($fio);
$phone = trim($phone);
$formData = trim($formData);

$address = "freenincha@yandex.ru";
$sub = "Сообщение с сайта SimpleMake";

$mes = "Сообщение с сайта SimpleMake \n
Имя отправителя: $fio
Телефон: $phone
Причина обращения: $formData 
$messaga";

$mail = mail($address, $sub, $mes, $headers);
 
echo 'ok';
?>