$(function() {

	$(window).scroll(function() {
	if ($(this).scrollTop() > 1){
	$('header').addClass("sticky");
	$('.main_pic').addClass("mar");
	$('.bg_vtor').addClass("mar2");
	}
	else{
	$('header').removeClass("sticky");
	$('.main_pic').removeClass("mar");
	$('.bg_vtor').removeClass("mar2");
	}
	});	
	
});

