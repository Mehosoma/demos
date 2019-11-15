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
  		responsive: [ 
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,       
		      }
		    },
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,       
		      }
		    },

		     {
		      breakpoint: 576,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,       
		      }
		    }
	    ]   				
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
  		responsive: [ 
		    {
		      breakpoint: 768,
		      settings: {
		        speed: 1000,      
		      }
		    },
	    ]   						
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
  		responsive: [ 
		    {
		      breakpoint: 768,
		      settings: {
		     	adaptiveHeight: true      
		      }
		    },		
	    ]   				
	});
});

//Disable arrows
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

          var i = $('.services-slider').slick('slickCurrentSlide');
       var sn=i;
       $('.action a').removeClass('active-link');
       $('.action a[data-slide="'+sn+'"]').addClass('active-link');
})


//Sevices-slide link navigation
$('a[data-slide]').click(function(e) {
   e.preventDefault();
   var slideno = $(this).data('slide');
   $('.services-slider').slick('slickGoTo', slideno);
   $('.action a').removeClass('active-link');
   $(this).addClass('active-link');
 });

//Slider-Arrows for Services-slider
$(function () {

	var $arrows = $('.arrows');
    var $next = $arrows.children(".arr-right-gen");    
    var $prev = $arrows.children(".arr-left-gen");
    

    $('.services-main .arr-right-gen').on('click', function (e) {     
       var i = $('.services-slider').slick('slickCurrentSlide');
       var sn=i+1;
       $('.action a').removeClass('active-link');
       $('.action a[data-slide="'+sn+'"]').addClass('active-link');
    });
    $('.arr-left-gen').on('click', function (e) {
    	var i = $('.services-slider').slick('slickCurrentSlide');
       var sn=i-1;
       $('.action a').removeClass('active-link');
       $('.action a[data-slide="'+sn+'"]').addClass('active-link');
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

//Range
$(document).ready(function(){
 $(".js-range-slider").ionRangeSlider({
       min: 0,
        max: 1000000,
        from: 300000,
        step: 50000,
        hide_min_max: true,
        prefix: "$",
    });
 });

//Show-hide menu
$(document).ready(function(){
    $('.click-mobile').on('click',function(e){
        e.preventDefault();        
        $("header .main-menu").toggleClass('is-active');               
    });
});


$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});
