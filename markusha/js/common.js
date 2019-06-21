
$(document).ready(function(){

$('.slider-response').slick({
  dots: true,  
  speed: 300,
  arrows: false, 
  responsive: [
    
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
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
$('.left').click(function(){
  $('.slider-methods').slick('slickPrev');
})

$('.right').click(function(){
  $('.slider-methods').slick('slickNext');
})

$('.left-s').click(function(){
  $('.slider-serv').slick('slickPrev');
})

$('.right-s').click(function(){
  $('.slider-serv').slick('slickNext');
})

$('.left-n').click(function(){
  $('.slider-news').slick('slickPrev');
})

$('.right-n').click(function(){
  $('.slider-news').slick('slickNext');
})


//Show-hide menu
$(document).ready(function(){
    $('.click-mobile').on('click',function(e){
        e.preventDefault();        
          $('.main-menu').animate({
              height: 'toggle'
            }, 300, function() {
          });         
        $("header .menu-toggle-button").toggleClass('is-active');                    
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


//Slider-services, News

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
