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

//ModalWindow
$(function () {
	$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
	
   		fixedContentPos: false,
    	fixedBgPos: true,
   		closeOnBgClick: true,

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
         $('.nav__wrap__menu').animate({
             height: 'toggle'
           }, 600, function() {
         }); 
       $(".menu-toggle-button").toggleClass('is-active');
 
   });

});

//Slider
$(document).ready(function(){
  $('.slider__main').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,       
      arrows: false, 
      dots: true,
      draggable: true,    
  });
});


//Slider-Arrows
$(function () {    
    var $arrows = $('.arrows');
    var $next = $arrows.children(".arr-right");    
    var $prev = $arrows.children(".arr-left");
    
    var slick = $('.slider-main');

    $('.arr-right').on('click', function (e) {
        var i = $next.index( this )
        slick.eq(i).slick('slickNext');
    });
    $('.arr-left').on('click', function (e) {
        var i = $prev.index( this )
        slick.eq(i).slick('slickPrev');
    });
});

//Fixed Menu
$(window).on('load resize', function() {  
  if ($(window).width() >= 1200) {
    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      if (scroll >= 140) {
        $(".nav").addClass("scrolled");
      } else {
        $(".nav").removeClass("scrolled");
      }
    });
   } else {
            
  }
});

//Check Submenu
$(window).on('load resize', function() {  
  if ($(window).width() >= 992) {
    $('.nav__wrap__menu__submenu').parent('li').addClass('nav__wrap__active__submenu');
   } else {        
    $('.nav__wrap__menu__submenu').parent('li').addClass('nav__wrap__active__submenu--mobile'); 

    $('.nav__wrap__active__submenu--mobile').on('click',function(e){
       e.preventDefault();  
         $(this).find('ul').animate({
             height: 'toggle'
           }, 600, function() {
         }); 

         $(this).toggleClass('no-decor');
 
   });

  }
});

//About-inner-slider
$(window).on('load resize', function() {  
  if ($(window).width() >= 992) {
  } else {
            
  }
});