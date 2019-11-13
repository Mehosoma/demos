$(document).ready(function(){
	$('.main-slider').slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,  
  		autoplay: true,  		
  		arrows: false, 
  		dots: false,
  		autoplaySpeed: 2000,
  		speed: 2000,
  		draggable: false,
  		pauseOnFocus: false,
  		pauseOnHover: false, 		
	});

	$('.portfolio-slider').slick({
  		infinite: true,
  		slidesToShow: 4,
  		slidesToScroll: 1,  
  		autoplay: false,  		
  		arrows: false, 
  		dots: false,
  		speed: 1500,
  		draggable: false,
  		pauseOnFocus: false,
  		pauseOnHover: false, 		
	});

	$('.services-slider').slick({
  		infinite: false,
  		slidesToShow: 1,
  		slidesToScroll: 1,  
  		autoplay: false,  		
  		arrows: false, 
  		dots: false,
  		speed: 1500,
  		draggable: false,
  		pauseOnFocus: false,
  		pauseOnHover: false, 		
	});

	$('.single-slider').slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,  
  		autoplay: true,  		
  		arrows: false, 
  		dots: false,
  		speed: 1500,
  		draggable: false,
  		pauseOnFocus: false,
  		pauseOnHover: false, 		
	});
});

//disable arrow
$('.services-slider').on('afterChange', function (event, slick, currentSlide) {

        if(currentSlide === 2) {
            $('.services-main .arr-right-gen').addClass('arr-disable');
        }
        else {
            $('.services-main .arr-right-gen').removeClass('arr-disable');
        }

        if(currentSlide === 0) {
            $('.services-main .arr-left-gen').addClass('arr-disable');
        }
        else {
            $('.services-main .arr-left-gen').removeClass('arr-disable');
        }  
})

$('a[data-slide]').click(function(e) {
   e.preventDefault();
   var slideno = $(this).data('slide');
   $('.services-slider').slick('slickGoTo', slideno);
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

//Range
$(document).ready(function(){
 $(".js-range-slider").ionRangeSlider({
       min: 0,
        max: 1000000,
        from: 100000,
        step: 50000,
        hide_min_max: true,
        prefix: "$",
    });
 });


$(window).on('load', function () {
    $('.hidden-c').css("display", "block"); // показываем блок с контентом 
    $('.preloader').delay(350).fadeOut(2000); // и скрываем сам блок прелоудера.
});