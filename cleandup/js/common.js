
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
         $('.main-menu-wrap').animate({
             height: 'toggle'
           }, 600, function() {
         }); 
       $("header .menu-toggle-button").toggleClass('is-active'); 
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


//Slider
$(document).ready(function(){
  $('.main-slider__slider').slick({
      infinite: true,
      slidesToShow: 3,
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
});


//Product-Slider
$(document).ready(function(){
  $('.product-slider__slider').slick({
      infinite: true,
      slidesToShow: 3,
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
});


//Accordeon
$(document).ready(function(){
  $('.faq__accordeon_header').on('click',function(e){
       e.preventDefault();  
    $(this).closest('.faq__accordeon').find('.faq__accordeon_hidden').slideToggle();
    $(this).closest('.faq__accordeon').toggleClass('accordeon_open');
  });
});


//See All Link
$(document).ready(function(){
  $('.questions__block a').on('click',function(e){
       e.preventDefault();  
    $(this).closest('.questions__block').find('.questions__block_hidden').slideToggle();
    $(this).closest('.questions__block').toggleClass('questions__block--open');
  });
});


//Btn-Close
$(document).ready(function(){
  $('.btn-close').on('click',function(e){
       e.preventDefault();  
    $(this).closest('.questions__wrap').find('.questions_blocks_hidden').slideToggle();
  });
});


//Fixed Menu
$(window).on('load resize', function() {  
  if ($(window).width() >= 1200) {
    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      if (scroll >= 30) {
        $(".civil-header").addClass("scrolled");
      } else {
        $(".civil-header").removeClass("scrolled");
      }
    });
   } else {
     $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      if (scroll >= 50) {
        $(".civil-header").addClass("scrolled");
      } else {
        $(".civil-header").removeClass("scrolled");
      }
    });     
  }
});