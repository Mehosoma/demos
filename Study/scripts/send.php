<?php header('Content-Type: text/html; charset=utf-8');

$fio = $_POST['fio'];
$tel = $_POST['tel'];


$fio = htmlspecialchars($fio);
$tel = htmlspecialchars($tel);
$fio = urldecode($fio);
$tel = urldecode($tel);
$fio = trim($fio);
$tel = trim($tel);

$address = "deedushka@gmail.com";
$sub = "Сообщение с сайта repetitor.ru";

$mes = "Сообщение с сайта repetitor.ru \n
Имя отправителя: $fio
Телефон: $tel";

$mail = mail($address, $sub, $mes, $headers);
 
echo 'ok';
?>