<?php header('Content-Type: text/html; charset=utf-8');

$fio = $_POST['name'];
$phone = $_POST['phone'];
$mail = $_POST['mail'];
$mes = $_POST['message'];
$sel = $_POST['clergyman'];

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
$sub = "Сообщение с сайта Нижневартовск православный";

if (!isset($sel)) {
	$message = "Сообщение с сайта Нижневартовск православный \n
	Имя отправителя: $fio
	Email: $mail
	Телефон: $phone  
	$mes";
}
else {
	$message = "Вопрос священнику с сайта Нижневартовск православный \n
	Имя отправителя: $fio
	Email: $mail 
	Священнику: $sel
	$mes";
}

// $message = "Сообщение с сайта Нижневартовск православный \n
// Имя отправителя: $fio
// Email: $mail 
// Священнику: $sel
// $mes";

$mail = mail($address, $sub, $message, $headers);
 
echo 'ok';
?>