

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
	$( ".link-dropdown").on('click', function() {
	  $(this).next('.block-dropdown').animate({
              height: 'toggle'
            }, 300, function() {
          }); 
       $(this).css('display','none')  
	});  
});

//Cost-Dropdown
$(document).ready(function(){
	$( ".service-cost-wrap").on('click', function() {
	  $('.service-cost-table').animate({
              height: 'toggle'
            }, 300, function() {
      });        
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
	
  if ($(window).width() < 768) {

  	if (document.getElementById("block-dropdown")) {
	  		$('.slide-unwrap').unwrap();
	  		$('.link-dropdown').remove();
	  					
			$('.slider-unwrap:not(.slick-initialized)').slick({
			    infinite: true,
			    slidesToShow: 1,
			    slidesToScroll: 1
			 });

			var stHeight = $('.slider-unwrap .slick-track').height();
			$('.slider-unwrap .response-slide').css('height',stHeight + 'px' );
					
	    }else{
	    	$('.slider-unwrap').slick('refresh');
	    	var stHeight = $('.slider-unwrap .slick-track').height();
			$('.slider-unwrap .response-slide').css('height',stHeight + 'px' );
	    }

	
  } else {

  	$(".slider-unwrap.slick-initialized").slick("unslick");
  	if (document.getElementById("block-dropdown")) {
  	}else{
  		$('.slide-unwrap').wrap('<div class="block-dropdown" id="block-dropdown">');
  	}
  	
  }
});


//Stock-Dropdown
$(document).ready(function(){
	$( ".stock-comment-link").on('click', function() {
	  $(this).next('.stock-comment-dropdown').animate({
              height: 'toggle'
            }, 300, function() {
          });      
	});  
});


//Slider-Stock-News
$(window).on('load resize', function() {
	
  if ($(window).width() < 768) {

  	if (!$('.slider-stock-news').hasClass('slick-initialized')){
	  					
			$('.slider-stock-news:not(.slick-initialized)').slick({
			    infinite: true,
			    slidesToShow: 1,
			    slidesToScroll: 1
			 });

			var stHeight = $('.slider-stock-news .slick-track').height();
			$('.slider-stock-news .stock-news-slide').css('height',stHeight + 'px' );

	}else{

		$('.slider-stock-news').slick('refresh');
		var stHeight = $('.slider-stock-news .slick-track').height();
		$('.slider-stock-news .stock-news-slide').css('height',stHeight + 'px' );

		

	}

  } else {

  	$(".slider-stock-news.slick-initialized").slick("unslick");
  	  	
  }
});




