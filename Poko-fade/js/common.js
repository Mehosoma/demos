$(document).ready(function(){
	$('.gen-slider').slick({
  		infinite: true,
  		slidesToShow: 3,
  		slidesToScroll: 1,  
  		autoplay: false,  		
  		arrows: false, 
  		dots: true,
  		centerMode: true,
  		centerPadding: '0px',
  		speed: 1000, 		
	});

	$('.top-slider').slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,  
  		autoplay: true,  		
  		arrows: false, 
  		dots: true,
  		speed: 1500,
  		fade: true 				
	});

	$('.benefit-slider').slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,  
  		autoplay: false,  		
  		arrows: false, 
  		dots: true, 
  		speed: 1000,  		
	});

	$('.order-slider').slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,  
  		autoplay: false,  		
  		arrows: false, 
  		dots: true,  		
	});

	$('.product-slider').slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,  
  		autoplay: false,  		
  		arrows: true, 
  		dots: true,
  		swipe: false,  		
	});
});

//Slider-Arrows
$(function () {
    
    var $arrows = $('.arrows');
    var $next = $arrows.children(".arr-right-gen");    
    var $prev = $arrows.children(".arr-left-gen");
    
    var slick = $('.slider-main');

    $('.arr-right-gen').on('click', function (e) {
        var i = $next.index( this )
        slick.eq(i).slick('slickNext');
    });
    $('.arr-left-gen').on('click', function (e) {
        var i = $prev.index( this )
        slick.eq(i).slick('slickPrev');
    });

});

//Show-hide drop accordeon
$(document).ready(function(){
    $('.terms-list li').on('click',function(e){
      $(this).children('.terms-list_drop').slideToggle();
         $(this).toggleClass('faq-list_drop__active');                                  
    });
});

//ScrollToSection
$('.menu-scroll a[href^="."]').click(function(){
  //Сохраняем значение атрибута href в переменной:
  var target = $(this).attr('href');
  $('html, body').animate({scrollTop: $(target).offset().top-100}, 1000);
return false;
});