

//Slider-Response
$(document).ready(function(){

$('.slider-response').slick({
  dots: true,  
  speed: 300,
  arrows: false, 
  mobileFirst:true,
  responsive: [ 
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,       
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
});

//Slider-add
$(document).ready(function(){

$('.slider-add').slick({
  dots: true,  
  speed: 300,
  arrows: false,
  dots: false, 
  mobileFirst:true,
  responsive: [ 
  	 {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,       
      }
    },
     {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,       
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,       
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
});



//Slider-services, News
$(window).on('load resize', function() {
  if ($(window).width() < 768) {
    $('.slider-gen:not(.slick-initialized)').slick({
      infinite: true,
	  loop: true,
	  dots: false,  
	  speed: 300,
	  arrows: false, 
	  slidesToShow: 1,
	  slidesToScroll: 1,	  
    });
  } else {
    $(".slider-gen.slick-initialized").slick("unslick");
  }
});

//Slider-Methods
$(window).on('load resize', function() {
  if ($(window).width() < 992) {
    $('.slider-methods:not(.slick-initialized)').slick({
    
      infinite: true,
	  loop: true,	  
	  speed: 300,	
	  arrows: false,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: false,
	        arrows:true
	      }
	    },
	    {
	      breakpoint: 320,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        unslick: true,
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
    });
  } else {
    $(".slider-methods.slick-initialized").slick("unslick");
  }
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

//Show-hide menu
$(document).ready(function(){
    $('.click-mobile').on('click',function(e){
        e.preventDefault();        
          $('.main-menu').animate({
              height: 'toggle'
            }, 300, function() {
          });         
        $(".menu-toggle-button").toggleClass('is-active');                    
    });
});


//Show-hide dropdown footer menu
$(document).ready(function(){
    $('.footer-add-menu-header').on('click',function(e){
        e.preventDefault();        
          $(this).next('.filters-block_hidden').animate({
              height: 'toggle'
            }, 300, function() {
          });        
    });
});


//Menu block stock
$(window).on('load resize', function() {
  if ($(window).width() < 768) {
	$( ".sub-header_decor__stock" ).unbind('click').on('click', function() {
	  $(this).next('.stock-dropdown').animate({
              height: 'toggle'
            }, 300, function() {
          });  
	});
  } else {
    if ($(window).width() >= 768) {
		$( ".sub-header_decor__stock" ).unbind('click');	 
	}
  }
});


//Link-Dropdown
$(document).ready(function(){
	$( ".link-dropdown" ).on('click', function() {
	  $(this).next('.block-dropdown').animate({
              height: 'toggle'
            }, 300, function() {
          }); 
       $(this).css('display','none')  
	});  
});


//Disclaim
$('.disclaim').on('click',function(e){
  if ($('#feedback-check').is(':checked')) {
      $('.btn-blue-feed').removeAttr('disabled');
  } else {
     $('.btn-blue-feed').attr('disabled','disabled');
  }
});


//Slider-Unwrap
$(window).on('load resize', function() {
	var init = $(".slider-unwrap").data('init-slider');
  if ($(window).width() < 768) {
	 $('.slide-unwrap').unwrap();
	 $('.link-dropdown').remove();
	if(init != 1){
      // Запускаем слайдер и записываем в data init-slider = 1
      $('.slider-unwrap').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }).data({'init-slider': 1});
    }else{
    	$('.slider-unwrap').slick('refresh');
    }

	
  } else {

  	 if(init == 1){
      // Разрушаем слайдер и записываем в data init-slider = 0
      $('.slider-unwrap').slick('unslick').data({'init-slider': 0});
    }
  }
});