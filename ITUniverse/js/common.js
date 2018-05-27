$(function() {

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});


$(document).ready(function(){

	$('.slider-main').slick({
  		infinite: false,
  		slidesToShow: 1,
  		slidesToScroll: 1, 
  		dots: true, 
  		fade: true,		
  		arrows: true,
  		 responsive: [
			    {
			      breakpoint: 1401,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1			        			        
			      }
			    },
			    {
			      breakpoint: 1200,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 992,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,			      
			      }
			    },
			    // You can unslick at a given breakpoint now by adding:
			    // settings: "unslick"
			    // instead of a settings object
  			]
	});

	//Custom pagination
	$('.custom-navigation a').on( "click", function() {
		$('.active-slider .custom-navigation *').removeClass('active-dot');
		$(this).addClass('active-dot');
    	$('.active-slider .slider-main li').eq( $(this).index() ).click();
	});

	$('.slick-dots li').on( "click", function() {		
		$('.active-slider .custom-navigation *').removeClass('active-dot');
    	$('.active-slider .custom-navigation a').eq( $(this).index() ).addClass('active-dot');
    	if ($(window).width() < 991){
			var height = $( '.active-slider .slick-active').height();
			$( '.slider-inner' ).height(height + 50);
		}else{

		}
	});

	$('.slick-next, .slick-prev ').on( "click", function() {				
    	if ($(window).width() < 991){
			var height = $('.active-slider .slick-active').height();
			$( '.slider-inner' ).height(height + 50);
		}else{

		}
	});

	//Смена слайдера
	$('.main-menu a').on('click',function(e){
	  e.preventDefault();    
	  $(".main-menu *").removeClass("link_slider_active"); 
	  $(this).addClass("link_slider_active"); 	  
	    $('.slider-wrapper').each(function(){
	      $(this).removeClass('active-slider');
	      $(this).fadeOut(0);
	    });
	  
	   var visible = $(this).attr('href');	   
	   $(visible).addClass('active-slider');
	   $(visible).delay(0).fadeIn(500);  

		$('.active-slider .slider-main').slick('slickGoTo', 0);	


		if ($(window).width() < 991){
			$('.main-menu').animate({
              height: 'toggle'
            }, 600, function() {
          });         
        $("header .menu-toggle-button").toggleClass('is-active');   
		}else{

		}

		
		setTimeout(function() {
		if ($(window).width() < 991){
			var height = $( '.active-slider .slick-active' ).height();
			$( '.slider-inner' ).height(height + 50);
		}else{

		}

		}, 1000);

	});

	
		if ($(window).width() < 991){
			var height = $( '.active-slider .slick-active').height();
			$( '.slider-inner' ).height(height + 50);
		}else{

		}

		


		
});


//Show-hide menu
$(document).ready(function(){
    $('.click-mobile').on('click',function(e){
        e.preventDefault();        
          $('.main-menu').animate({
              height: 'toggle'
            }, 600, function() {
          });         
        $("header .menu-toggle-button").toggleClass('is-active');                     
    });
});