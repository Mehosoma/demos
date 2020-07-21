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
        $(".nav").toggleClass('nav-overflow');
   });

});

//Slider
$(window).on('load resize', function() {
  if (!$('.slider__main').hasClass('slick-initialized')){
  $('.slider__main:not(.slick-initialized)').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,       
      arrows: false, 
      dots: true,
      draggable: true,
      responsive: [ 
              {
                breakpoint: 768,
                settings: {
                  adaptiveHeight:true,      
                }
              },

            ]             
  });

  } else {
    $(".slider__main.slick-initialized").slick('refresh');        
  }
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
     $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      if (scroll >= 50) {
        $(".nav").addClass("scrolled");
      } else {
        $(".nav").removeClass("scrolled");
      }
    });     
  }
});

//Check Submenu
$(window).on('load resize', function() {  
  if ($(window).width() >= 1200) {
    $('.nav__wrap__menu__submenu').parent('li').removeClass('nav__wrap__active__submenu--mobile'); 
    $('.nav__wrap__menu__submenu').parent('li').addClass('nav__wrap__active__submenu'); 
   } else {   

    $('.nav__wrap__menu__submenu').parent('li').addClass('nav__wrap__active__submenu--mobile'); 

    $('.nav__wrap__active__submenu--mobile').off('click'); 

    $(".menu-toggle-button").removeClass('is-active');

    $(".nav").removeClass('nav-overflow');

    $(".nav__wrap__menu ul ul").css('display','none');

    $(".nav__wrap__active__submenu--mobile").removeClass('top-decor');

    $('.nav__wrap__menu').css('display','none');

    

    $('.nav__wrap__active__submenu--mobile').on('click',function(e){
       e.preventDefault();  
         $(this).find('ul').animate({
             height: 'toggle'
           }, 600, function() {
         }); 

         $(this).toggleClass('top-decor');
 
   });

  }
});

//Search
$(window).on('load resize', function() {  
  if ($(window).width() < 1200) {
    $('.gpl-header__search').on('click',function(e){
       e.preventDefault();  
      $('.gpl-header__search__form').addClass('mobile-form');
      $('.gpl-header__search').off('click'); 
   });

  } else {
      $('.gpl-header__search').off('click');      
  }
});


//Hover
$(window).on('load resize', function() {  
  if ($(window).width() >= 1200) {
    $('.nav__wrap__active__submenu').on('mouseenter',function(e){
       e.preventDefault();  
      $(this).find('ul').addClass('submenu-open');
   });

     $('.nav__wrap__active__submenu').on('mouseleave',function(e){
       e.preventDefault();  
      $(this).find('ul').removeClass('submenu-open');
   });

  } else {
       $('.nav__wrap__active__submenu').off('mouseenter');  
       $('.nav__wrap__active__submenu').off('mouseleave');   
  }
});

//Bottom-menu
$(window).on('load resize', function() {  
 if ($(window).width() < 768) {
    $('.info__articles__article span').off('click'); 
    $('.info__articles__article span').on('click',function(e){
       e.preventDefault();  
       $(this).next('ul').animate({
             height: 'toggle'
           }, 600, function() {
         }); 
       $(this).parent().toggleClass('article-open');
   });


  } else {
      $('.info__articles__article span').off('click');      
  }
});