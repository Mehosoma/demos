//Svg to inline
$(document).ready(function(){
// Replace all SVG images with inline SVG  
$('img.svg').each(function(){
 var $img = $(this);
 var imgID = $img.attr('id');
 var imgClass = $img.attr('class');
 var imgURL = $img.attr('src');

 $.get(imgURL, function(data) {
   var $svg = $(data).find('svg');
   if (typeof imgID !== 'undefined') {
     $svg = $svg.attr('id', imgID);
   }
   if (typeof imgClass !== 'undefined') {
     $svg = $svg.attr('class', imgClass+' replaced-svg');
   }
   $svg = $svg.removeAttr('xmlns:a');
   $img.replaceWith($svg);
 });
});
});


//Fixed Menu
$(document).ready(function() {
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      $(".florida-header").addClass("scrolled");
    } else {
      $(".florida-header").removeClass("scrolled");
    }
  });
});

$(document).ready(function(){
	$('.top-slider').slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,  
  		autoplay: true,  		
  		arrows: false, 
  		dots: true,
  		autoplaySpeed: 5000,
  		speed: 2000,
  		draggable: true,
  		pauseOnFocus: true,
  		pauseOnHover: false, 		
	});
});

$(document).ready(function(){
$('.responsives-slider').slick({
  		infinite: true,
  		slidesToShow: 3,
  		slidesToScroll: 1,  
  		autoplay: false,  		
  		arrows: false, 
  		dots: true,
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
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,       
		      }
		    }
	    ]   		
	});
});

//About-inner-slider
$(window).on('load resize', function() {	
  if ($(window).width() < 992) {
  	if (!$('.about-inner-slider').hasClass('slick-initialized')){	  					
			$('.about-inner-slider:not(.slick-initialized)').slick({
			    infinite: true,
			    slidesToShow: 2,
			    slidesToScroll: 1,
			    arrows: false,
			    responsive: [ 
		     {
		      breakpoint: 576,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,       
		      }
		    }
	    ]   		
			 });
    	}else{
    		$('.about-inner-slider').slick('refresh');
    	}
  } else {
  	$(".about-inner-slider.slick-initialized").slick("unslick");  	  	
  }
});

$(document).ready(function(){
$('.team-slider').slick({
  		infinite: true,
  		slidesToShow: 4,
  		slidesToScroll: 1,  
  		autoplay: false,  		
  		arrows: false, 
  		dots: false,
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
		        slidesToShow: 3,
		        slidesToScroll: 1,       
		      }
		    },
		     {
		      breakpoint: 768,
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
});

$(document).ready(function(){
$('.single-slider').slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,  
  		autoplay: false,  		
  		arrows: false, 
  		dots: false,
  		speed: 1500,
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

//Show-hide Drop-Down Menu
$(document).ready(function(){
    $('.menu-dropdown').on('click',function(e){
    	event.preventDefault();
      if ($(this).parent().children('.main-menu_drop').hasClass("menu-open")) {
      	$('.menu-dropdown').removeClass('menu-drop-active');
  		$(this).parent().children('.main-menu_drop').slideToggle(); 
        $(this).parent().children('.main-menu_drop').removeClass('menu-open');
	  }else{
	  	$('.menu-dropdown').removeClass('menu-drop-active');
	  	  $(this).addClass('menu-drop-active');
	      $('.menu-open').slideToggle();
	      $('.main-menu_drop').removeClass('menu-open');
	      $(this).parent().children('.main-menu_drop').slideToggle(); 
	      $(this).parent().children('.main-menu_drop').addClass('menu-open');  
      }                                  
    });
});


//Close dropdown-menu on click body or mouseleave
$(document).ready(function(){
   $( ".main-menu_drop" ).mouseleave(function() {
    	event.preventDefault();
      	  $('.menu-dropdown').removeClass('menu-drop-active');
	      $('.menu-open').slideToggle();
	      $('.main-menu_drop').removeClass('menu-open');                                
    });

   $(function(){
       $(document).click(function(event) {
        if ($(event.target).closest('.menu-dropdown').length) return;
         $('.menu-dropdown').removeClass('menu-drop-active');
	      $('.menu-open').slideToggle();
	      $('.main-menu_drop').removeClass('menu-open');   
        });
       });
});


//Label for form field
$(document).ready(function(){	
	$('.form-field').focus(function() {
		$(this).parent().children('label').hide();
	});

	$('.form-field').blur(function() {
		if ($(this).val().trim() === '') {
		    $(this).parent().find(".hint").show();
		}
	});

	$('.date-change').focus(function() {
		$(this).attr('type','date');		
	});

	$('.date-change').blur(function() {
		$(this).attr('type','text');
		
	});
});

//Video-link
$(document).ready(function() {
   $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
       disableOn: 700,
       type: 'iframe',
       mainClass: 'mfp-fade',
       removalDelay: 160,
       preloader: false,
       fixedContentPos: false
   });
});

//Animate Section
jQuery(document).ready(function() {
jQuery('.animate-block').addClass("hidden").viewportChecker({
classToAdd: 'visible  fadeInUp',
offset: 200
});
});


//Show-hide menu
$(document).ready(function(){
   $('.click-mobile').on('click',function(e){
       e.preventDefault();        
         $('.menu-mobile').animate({
             height: 'toggle'
           }, 600, function() {
         });     
       $("header .menu-toggle-button").toggleClass('is-active');
        $(".florida-header").toggleClass('florida-header-height');
   });

});


$(window).on('load resize', function () {
   if ($(window).width() >= 992) {
   		$(".menu-mobile").css('display','flex');
   	 } else {
   		$(".menu-mobile").css('display','none');
  	}
});

//Radio-Button Click
$(document).ready(function(){
	$('.packages-block .checkbox-cus').change(function(){
	 	var value = $(this).val();
		if (value == '2') {
			$(this).closest('.packages-block-cost-wrap').find('.packages-block-cost').css('display', 'none')
			$(this).closest('.packages-block-cost-wrap').find('.packages-block-cost-bi').css('display', 'flex')
		} else{
		    $(this).closest('.packages-block-cost-wrap').find('.packages-block-cost').css('display', 'flex')
			$(this).closest('.packages-block-cost-wrap').find('.packages-block-cost-bi').css('display', 'none')
		}
	});
});


//Select Packages Column
$(document).ready(function(){
   $('.packages-block').on('click',function(e){
   		$('.packages-block').removeClass('packages-col-selected');
   		$(this).addClass('packages-col-selected');
   });

});

//Radio-Button Tarifs Click
$(document).ready(function(){
	$('.tarifs-header-block .checkbox-cus').change(function(){ 
		$(this).closest('.tarifs-header'). find('.tarifs-header-block').removeClass('tarifs-header-block-active');
		$(this).closest('.tarifs-header-block').addClass('tarifs-header-block-active');
	});
});


//Contact banner click
$(document).ready(function(){
	$('.contacts-banner-inner-wrap').on('click', function(e){
		$(this).find('.top-banner-overlay').fadeOut('slow');
		$(this).find('.header-inner-container').fadeOut('slow');
		$(this).find('.map-wrapper').removeClass('gray-map');
	});

	$( ".contacts-banner-inner-wrap" ).mouseleave(function() {
    	event.preventDefault();
      	 $(this).find('.top-banner-overlay').fadeIn('slow');
		 $(this).find('.header-inner-container').fadeIn('slow'); 
		 $(this).find('.map-wrapper').addClass('gray-map');                              
    });
});
