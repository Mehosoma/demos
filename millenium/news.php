<?php
$paginate = !empty($_GET["page"]) ? $_GET["page"] * 10 : 0 ;
$request_params = array(
    'owner_id' => "-73433474",
    'offset' => $paginate,
    'count' => '10',
    'v' => '5.103',
    'access_token' => 'c5cc81d7a1faf4ee5b3f748a7fa6ee76f6c16acd11f236d94f20e79da77b1c7a758d1bfd81a4506f96f6d'
);
$get_params = http_build_query($request_params);
$result = json_decode(file_get_contents('https://api.vk.com/method/wall.get?'. $get_params));

?>

<!DOCTYPE html>
<html lang="ru">
<head>

	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">	

	<title>MP: ГЛАВНАЯ • НОВОСТИ</title>
	<meta name="description" content="">
	<meta name="keywords" content=""/>
	
	<link rel="shortcut icon" href="img/favicon/favicon.ico" type="image/x-icon">

	<meta property="og:image" content="https://mp.ru.net/prev.png" />
    <meta property="og:image:secure_url" content="https://mp.ru.net/prev.png" />
    <meta property="og:title" content="Millemium Project" />
    <meta property="og:description" content="Топовые игровые сервера Garry's Mod, с постоянной поддержкой и лучшей оптимизацией" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="100px" />
    <meta property="og:image:height" content="100px" />
    <meta charset="UTF-8">
	<meta name="keywords" content=" darkrp, gmod, garrysmod, fustrp, фуст, nefedoni, fust, fast, gambit, galaxy, codi, gubke, soft, донат umbrella, донат fust, донат fast, сервер для натуралов, крутой сервер, купон">

	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta name="format-detection" content="telephone=no">

	<link rel="stylesheet" href="libs/bootstrap/css/bootstrap.css">	

	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">

	<link rel="stylesheet" href="css/main.css">
	<link rel="stylesheet" href="css/media.css">

</head>

<body style="opacity: 0">

<!--Header-->
<header class="header">
	<div class="header-wrap">
		<div class="logo">
			<a href="#"><span>MP</span>Новости</a>
		</div>
		<div class="mobile-menu">
			<div class="menu-toggle-button click-mobile d-lg-none order-2 order-sm-3">
				<span></span>
				<span></span>		
				<span></span>
			</div>
		</div>
		<nav class="menu">
			<ul>
				<li><a href="index.html">Главная</a></li>
				<li><a href="info.html">Информация</a></li>
				<li><a href="donate.html">Донат</a></li>
				<li><a href="news.php" class="active-link">Новости</a></li>
				<li><a href="https://vk.com/millenium_project" target="_blank">Группа VK</a></li>
				<li><a href="https://vk.com/im?sel=-73433474" target="_blank">Помощь</a></li>
			</ul>
		</nav>
	</div>
</header>

<!--Content-->
<section class="content">	
	<div class="content-block content-block--donate">
		<div class="container-fluid d-flex justify-content-center">
			<div class="row d-flex w-100">
				<div class="col-12">
					<div class="content-wrap">
						<div class="subheader">
							<h2>Новости</h2>
						</div>
						<div class="news col-12 col-lg-4">
							<?php foreach ($result -> response -> items as $key): ?>
            				<div class="post">
                				<?php if ($key->post_type != 'poll') :?>
                    			<?php if (!empty($key->text)) : ?>
                        		<div class="post-text">
                            		<?= $key->text ?>
                        		</div>
                    			<?php endif;?>
                    			<?php if (!empty($key->attachments[0]->photo)) : ?>
                        		<div class="post-image ">
                            		<img class="img-fluid" src='<?= end($key->attachments[0]->photo->sizes)->url?>'>
                            	</div>
			                    <?php endif;?>
			                    <a href="https://vk.com/millenium_project?w=wall-73433474_<?=$key->id?>" target="_blank" style="text-decoration: none;" class="post-link">
			                    	<div>Перейти к посту</div>
			                    </a>
			                	<?php endif;?>
			            	</div>
			            	<?php endforeach; ?>
						</div>
						<div class="news-nav col-12">
							<nav aria-label="..." style="text-align: center; padding-left: 3.3vw;">
				                <ul class="pagination">
				                    <li class="page-item">
				                        <a id="back" class="page-link" href="#">Назад</a>
				                    </li>
				                    <li class="page-item">
				                        <a id="next" class="page-link" href="#">Далее</a>
				                    </li>
				                </ul>
            				</nav>
						</div>
					</div>					
				</div>
			</div>
		</div>
	</div>
</section>


<!--Footer-->
<footer class="footer">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="footer-wrap">
					<div class="copy">
						<span>&copy; Millenium Project & FustRP - Все права защищены - Garry’s Mod</span>
					</div>
					<div class="icons">
						<a href="http://discord.gg/rE6H2EN" target="_blank"><img src="images/discord.svg" class="svg" alt="discord-icon"></a>
						<a href="https://vk.com/millenium_project" target="_blank"><img src="images/vk.svg" class="svg" alt="vk-icon"></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>


	<script src="libs/jquery/jquery-3.3.1.js"></script>
	<script src="libs/bootstrap/js/bootstrap.js"></script>
	<script src="js/common.js"></script>
	
</body>
</html>