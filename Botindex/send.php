<?php header('Content-Type: text/html; charset=utf-8');

$name = $_POST['name'];
$box = $_POST['box'];
$phone = $_POST['phone'];
$comment = $_POST['comment'];

$name = htmlspecialchars($name);
$box = htmlspecialchars($box);
$phone = htmlspecialchars($phone);
$comment = htmlspecialchars($comment);
$name = urldecode($name);
$box = urldecode($box);
$phone = urldecode($phone);
$comment = urldecode($comment);
$name = trim($name);
$box = trim($box);
$phone = trim($phone);
$comment = trim($comment);

$address = "smirnovdg@gmail.com";
$sub = "Сообщение с сайта Botindex";

$mes = "Сообщение с сайта Botindex \n
Имя отправителя: $name
Телефон: $phone
E-mail: $box
Причина обращения: $comment 
";

mail($address, $sub, $mes);
 
echo 'ok';
?>