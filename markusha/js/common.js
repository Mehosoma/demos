

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

//Small-Licences Slider
$(document).ready(function(){

	
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

//Slider-steps
$(window).on('load resize', function() {

	 if ($(window).width() > 992) {

		if (!$('.slider-steps').hasClass('slick-initialized')){	  					
				$('.slider-steps:not(.slick-initialized)').slick({
				    infinite: true,
				    slidesToShow: 1,
				    slidesToScroll: 1
				 });
				var stHeight = $('.slider-steps .slick-track').height();
				$('.slider-steps .steps-slide').css('height',stHeight + 'px' );
		}else{
			$('.slider-steps').slick('refresh');
			var stHeight = $('.slider-stock-news .slick-track').height();
			$('.slider-steps .steps-slide').css('height',stHeight + 'px' );
		} 
	}else{

		  					
				$('.slider-steps:not(.slick-initialized)').slick({
				    infinite: true,
				    slidesToShow: 1,
				    slidesToScroll: 1
				 });

	}
});

//Slider-License
$(document).ready(function(){

$('.licences-slider').slick({
  dots: false,  
  speed: 300,
  arrows: false,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
  	 {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1             
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1             
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
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


//Slider-About
$(document).ready(function(){

$('.slider-about').slick({
  dots: false,  
  speed: 300,
  arrows: false,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
  	 {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1             
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1             
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
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


//Hide Arrows
$('.licences-slider').on('init', function (event, slick, direction) {

    // check to see if there are one or less slides
    if (($('.licences-slider .slick-slide').length <= 4)) {
        // remove arrows
        $('.arrows-licences').hide();
    }
});

$(window).on('load resize', function() {

    // check to see if there are one or less slides
    if (($('.licences-small-slider .license-slide').length <= 6)) {
        // remove arrows
        $('.arrows-licences-small').hide();
         $('.licences-small-slider-wrap').removeClass('pad-fix')
    }else{
    	$('.licences-small-slider-wrap').addClass('pad-fix')
      $('.licences-small-slider:not(.slick-initialized)').slick({ 
  
          infinite: false,      
          dots: false,  
          speed: 300,
          arrows: false,                
          slidesToShow: 5,
          slidesToScroll: 1,    
          responsive: [
           {
            breakpoint: 1200,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1             
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1             
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576,
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
    }


});

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

 
//Disclaim
$('.disclaim').on('click',function(e){
  if ($('#feedback-check').is(':checked')) {
      $('.btn-blue-feed').removeAttr('disabled');
  } else {
     $('.btn-blue-feed').attr('disabled','disabled');
  }
});


//Change icon
$(document).ready(function(){
	$( ".btn-link").on('click', function() {
	  $(this).closest('.card').find('.accdrop').toggleClass('drop-show');  
    });  
});


//Modal-Video
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

//Click-image Gallery
$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		fixedContentPos: false,
   		fixedBgPos: true,
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			
		}
	});
});

//ModalWindow
$(function () {
	$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		fixedContentPos: false,
   		fixedBgPos: true,
		modal: true
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});


//ScrollToSection
$('.link-down').click(function(){
  //Сохраняем значение атрибута href в переменной:
  var target = $(this).attr('href');
  $('html, body').animate({scrollTop: $(target).offset().top-100}, 1000);
return false;
});
