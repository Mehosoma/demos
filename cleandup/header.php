<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>

	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">	

	<meta name="description" content="">
	<meta name="keywords" content=""/>
	
	<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/img/favicon/favicon.ico" type="image/x-icon">

	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta name="format-detection" content="telephone=no">
	
	<?php wp_head(); ?>

</head>

<?php
if ( is_cart() || is_checkout() || is_checkout_pay_page() || is_account_page() ): ?>
  <body <?php body_class() ?>>  
<?php endif; ?>
<body>

<div class="pixel"></div>

<!--Top-Line-->
<section class="top-line d-none d-xl-block">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<nav class="top-line__menu">
					<?php wp_nav_menu( array( 
    					'menu_class'      => '',
    					'container'       => false, 
    					'theme_location' => 'top-bar'
    				) ); ?>
				</nav>
			</div>
		</div>
	</div>
</section>

<div class="fake-menu"></div>

<!--Header-->
<header class="civil-header">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="civil-header__wrap">
					<div class="logo">
						<a href="<?php echo site_url(); ?>">
							<div class="logo__wrap">
								<img src="<?php the_field('logo','options'); ?>" class="svg" alt="<?php bloginfo('name'); ?>">
								<span><?php the_field_without_wpautop('logo_text','options'); ?></span>
							</div>
						</a>
					</div>
					<nav class="civil-header__menu order-3 order-xl-2">
						<button class="menu-toggle-button click-mobile d-block d-xl-none">
							<span></span>					
						</button>
						<div class="civil-footer__menu_wrap">
						    
							<?php wp_nav_menu( array( 
    							'menu_class'      => '',
    							'container'       => false, 
    							'theme_location' => 'primary'
    						) ); ?>
    						
    						<?php wp_nav_menu( array( 
    							'menu_class'      => 'd-xl-none',
    							'container'       => false, 
    							'theme_location' => 'top-bar'
    						) ); ?>
    						
							<div class="civil-header__sign d-flex d-xl-none">
							    <?php if ( ! is_user_logged_in() ): ?>
								    <a href="#login-modal" class="popup-modal popup-modal--color">Sign in</a>
								<?php else: ?>
								    <a href="<?php echo get_permalink( get_option('woocommerce_myaccount_page_id') ); ?>" title="<?php _e('My Account',''); ?>">Account</a>
								<?php endif; ?>
								<img src="<?php echo get_template_directory_uri(); ?>/images/face.svg" class="svg">
							</div>
						</div>
					</nav>
					<div class="civil-header__btns order-2 order-xl-3">
						<div class="gen-btn d-none d-md-block">
							<?php if ( ! is_user_logged_in() ): ?>
							    <a href="#login-modal" class="popup-modal popup-modal--color">Sign in</a>
							<?php else: ?>
							    <a href="<?php echo get_permalink( get_option('woocommerce_myaccount_page_id') ); ?>" title="<?php _e('My Account',''); ?>">Account</a>
							<?php endif; ?>
						</div>
						<div class="gen-btn--fill">
							<a href="<?php the_field('trial_button_link','options'); ?>"><?php the_field('trial_button_text','options'); ?></a>
						</div>
						<a href="<?php echo wc_get_cart_url(); ?>" class="civil-header__basket">
							<img src="<?php echo get_template_directory_uri(); ?>/images/basket.svg" class="svg" title="View your shopping cart" alt="shopping-cart">
							<span class="civil-header__basket_number"><?php global $woocommerce; echo $woocommerce->cart->cart_contents_count; ?></span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>