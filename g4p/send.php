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

$address = "mail@pppoffice.ru";
$sub = "Сообщение с сайта ГЧП и концессии";

$mes = "Сообщение с сайта ГЧП и концессии \n
Имя отправителя: $fio
Телефон: $phone
Причина обращения: $formData 
$messaga";

$mail = mail($address, $sub, $mes, $headers);
 
echo 'ok';
?>