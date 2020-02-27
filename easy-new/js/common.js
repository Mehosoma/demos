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

$('.slider-main').on('init', function(event, slick){
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


//Service-Slider
$(document).ready(function() {
  var timer;
  $(window).on('resize', function() {
    clearTimeout(timer);
    timer = setTimeout(function() {
      handleSlick()
    }, 100);
  });
  handleSlick();


function handleSlick() {
  if ($(window).width() <= 1199) {
    bindSlick(); 
    loadfix();  
  } else {
    unbindSlick(); 
    loadfix(); 
  }
}


function bindSlick() { 
  	$(".slider-gen.slick-initialized").slick("refresh");
    $('.slider-gen:not(.slick-initialized)').slick({
      infinite: true,
	  loop: true,
	  dots: false,  
	  speed: 300,
	  arrows: false, 
	  slidesToShow: 3,
	  slidesToScroll: 1,
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
}

function unbindSlick() {
    $(".slider-gen.slick-initialized").slick("unslick");
}

//TOP icon-block
function loadfix() {
	$(".top-icon-block-header").unbind('mouseenter mouseleave').clearQueue();
	if ($(window).width() <= 991) {
		 $('.top-icon-block').addClass('top-icon-block-active');
	}else{
		$('.top-icon-block').removeClass('top-icon-block-active');
		$('.top-icon-block-header').on('mouseenter', function(){
			$('.top-icon-block').removeClass('top-icon-block-active');
		  $(this).closest('.top-icon-block').toggleClass('top-icon-block-active');
		})
		$('.top-icon-block_content').on('mouseleave', function(){
		  $(this).closest('.top-icon-block').toggleClass('top-icon-block-active');
		})
		
    }
  
}

});



//Top-Slider
$(document).ready(function(){
	$('.top-slider').slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,  
  		autoplay: false,  		
  		arrows: false, 
  		dots: false,
  		autoplaySpeed: 5000,
  		speed: 1500,
  		draggable: true,
  		pauseOnFocus: true,
  		pauseOnHover: false, 		
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


//Accordeon
 $('.acc-block').on('click', function (e) {
    $(this).find('.acc-block-hidden').slideToggle();
    $(this).toggleClass('acc-block-active');
});

//Show-hide Drop-Down Menu
$(document).ready(function(){ 

	if ($(window).width() >= 768) {    
      $('.menu-item-has-children').on('mouseenter',function(e){
        event.preventDefault();       
          $(this).children('.main-menu_drop').show('fast').delay(1000).clearQueue();
                                     
      });
      $('.menu-item-has-children').on('mouseleave',function(e){
        event.preventDefault();    
          $(this).children('.main-menu_drop').hide('fast');
          $(this).children('.main-menu_drop').stop(true,true);
      });
    }else{

    }
});


//Checkbox-Button Click
$(document).ready(function(){
	$('.checkbox-cus').change(function(){
	 	if ($(this).is(':checked')){
			$('.tarif-month').css('display','none');
			$('.tarif-year').css('display','block');
			$('.checkbox-block p').removeClass('checkbox-active');
			$('.checkbox-block span').addClass('checkbox-active');
		} else {
			$('.tarif-month').css('display','block');
			$('.tarif-year').css('display','none');
			$('.checkbox-block p').addClass('checkbox-active');
			$('.checkbox-block span').removeClass('checkbox-active');
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