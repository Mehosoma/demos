
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
	
   		fixedContentPos: true,
    	fixedBgPos: true,
   		closeOnBgClick: true,

	});
	$(document).on('click', '.mfp-bg', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});



//Show-hide menu
$(document).ready(function(){
   $('.click-mobile').on('click',function(e){
       e.preventDefault();  
         $('.civil-footer__menu_wrap').animate({
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
        $('.main-slider__hidden').removeClass('hidden-height');
        $('.main-slider__slide').removeClass('hidden-height');
        var i = $next.index( this )
        slick.eq(i).slick('slickNext');
    });
    $('.arr-left').on('click', function (e) {
        $('.main-slider__hidden').removeClass('hidden-height');
        $('.main-slider__slide').removeClass('hidden-height');
        var i = $prev.index( this )
        slick.eq(i).slick('slickPrev');
    });
});


$('.main-slider__slider').on('swipe', function() {
   $('.main-slider__hidden').removeClass('hidden-height');
   $('.main-slider__slide').removeClass('hidden-height');
});


//Slider
$(document).ready(function(){
  $('.main-slider__slider').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,       
      arrows: false, 
      dots: true,
      draggable: true,
      responsive: [ 
              {
                breakpoint: 1200,
                settings: {
                  adaptiveHeight:true,
                  centerMode: true      
                }
              },

               {
                breakpoint: 992,
                settings: {
                  slidesToShow: 1,
                  centerMode: true      
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
                breakpoint: 1200,
                settings: {
                  adaptiveHeight:true,
                  slidesToShow: 2 
                }
              },

               {
                breakpoint: 768,
                settings: {
                  adaptiveHeight:true,
                  slidesToShow: 1,     
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

function questions(){ 
  if ($(window).width() >= 767) {
      $('.questions__block span').off('click'); 
      $('.questions__block a').off('click');
      $('.questions__block_list').css('display', 'block');
      $('.questions__block').removeClass('questions__block--open');
    $('.questions__block a').on('click',function(e){
         e.preventDefault();       
      $(this).closest('.questions__block').toggleClass('questions__block--open');    
    });
   } else {
      $('.questions__block span').off('click');
      $('.questions__block_hidden').css('display', 'block');
      $('.questions__block_list').css('display', 'none');
      $('.questions__block').removeClass('questions__block--open');
      $('.questions__block span').on('click',function(e){
         e.preventDefault();  
      $(this).closest('.questions__block').find('.questions__block_list').slideToggle();
      $(this).closest('.questions__block').toggleClass('questions__block--open');
    });  
  }
}

$(document).ready(questions);
$(window).resize(questions);


//Btn-Close
$(document).ready(function(){
  $('.questions__header').on('click',function(e){
       e.preventDefault();  
    $(this).closest('.questions__wrap').find('.questions__blocks_hidden').slideToggle();
     $(this).closest('.questions__wrap').toggleClass('questions__wrap--open');
  });
});


//Btn-Close-Footer
$(document).ready(function(){
  $('.civil-footer--click').on('click',function(e){
       e.preventDefault();  
    $(this).closest('.civil-footer__menu').find('ul').slideToggle();
     $(this).closest('.civil-footer__menu').toggleClass('footer__menu--open');
  });
});


//Btn-Close-Footer
$(document).ready(function(){
  $('.civil-footer--click').on('click',function(e){
       e.preventDefault();  
    $(this).closest('.civil-footer__form').find('#footer-form').slideToggle();
     $(this).closest('.civil-footer__form').toggleClass('footer__menu--open');
  });
});

//Btn-Filters
$(document).ready(function(){
  $('.store__menu_btn').on('click',function(e){
       e.preventDefault();  
    $(this).closest('.col-3').find('.store__menu').slideToggle();
  });
});

//Read-More Slider
function readmore(){
  $('.main-slider__more span').off('click');
  $('.main-slider__hidden').removeClass('hidden-height');
  $('.main-slider__slide').removeClass('hidden-height');
  $('.main-slider__more').detach();

  $(".main-slider__cont").each(function() {
    if($(this).height() > 156){
      $(this).addClass('main-slider__hidden')
      $(this).append("<div class='main-slider__more'></div");
      $(this).find('.main-slider__more').append("<span>Read more</span");
      $(this).find('.main-slider__more').append("<span>Close</span");
    }  
   });



}

 $(document).on('click', '.main-slider__more span', function (e) {
       e.preventDefault(); 
       e.stopPropagation(); 
    $(this).closest('.main-slider__hidden').toggleClass('hidden-height');
    $(this).closest('.main-slider__slide').toggleClass('hidden-height');
  });

$(document).ready(readmore);
$(window).resize(readmore);

//Modal
$(document).ready(function(){
  $('.popup-modal--color').on('click',function(e){
       e.preventDefault();  
    $(this).closest('body').find('.mfp-bg').addClass('mfp-bg-color');
  });
});





//Fixed Menu
function scrolled(){ 

  if ($("#wpadminbar").length){
    $(".civil-header").addClass("civil--admin");
     $(".top-line").addClass("top-line--admin");
     $("body").addClass("body--admin-fix");
  }else{
    $("body").addClass("body--admin");
  }

    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      
        if (scroll >= 1) {
            $(".civil-header").addClass("scrolled");
             $(".top-line").addClass("fix-margin");  
             $(".fake-menu").css('display','block'); 
        } else {
          $(".civil-header").removeClass("scrolled");     
          $(".top-line").removeClass("fix-margin");
          $(".fake-menu").css('display','none');
        }
    });
  

}

$(document).ready(scrolled);
$(window).resize(scrolled);

