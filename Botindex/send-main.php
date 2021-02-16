<?php header('Content-Type: text/html; charset=utf-8');

$name = $_POST['name'];
$phone = $_POST['phone'];

$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$name = urldecode($name);
$phone = urldecode($phone);
$name = trim($name);
$phone = trim($phone); 

$address = "smirnovdg@gmail.com";
$sub = "Сообщение с сайта Botindex";

$mes = "Сообщение с сайта Botindex \n
Имя отправителя: $name
Телефон: $phone 
";

mail($address, $sub, $mes);
 
echo 'ok';
