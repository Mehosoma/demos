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


//Slider-Arrows
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
  $('.slider_main').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,       
      arrows: false, 
      dots: false,
      responsive: [ 
              {
                breakpoint: 1440,
                settings: {
                  adaptiveHeight:true,
                  slidesToShow: 3,
                  slidesToScroll: 1     
                }
              },

               {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 2,    
                }
              },

               {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,    
                }
              },

            ]             
  });
});


//Accordeon
$(document).ready(function(){
  $('.work_acc__header').on('click',function(e){
       e.preventDefault();  
    $(this).closest('.work_acc').find('.work_acc__hidden').slideToggle();
    $(this).closest('.work_acc').toggleClass('work_acc--open');
  });
});


//ScrollToSection
$('.main-menu a[href^="."]').click(function(){
  //Сохраняем значение атрибута href в переменной:
  var target = $(this).attr('href');
  $('html, body').animate({scrollTop: $(target).offset().top-0}, 1000);
return false;
});

//Show-hide menu
$(document).ready(function(){
    $('.click-mobile').on('click',function(e){
        e.preventDefault();        
          $('.header .main-menu').animate({
              height: 'toggle'
            }, 600, function() {
          });         
        $("header .menu-toggle-button").toggleClass('is-active');             
    });
});


//ModalWindow
$(document).ready(function(){
    $(".popup_form").magnificPopup({
      fixedContentPos: false,
      fixedBgPos: true
    });
});

//TopButton
$(document).ready(function(){
 
  $(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
  $('.scrollup').fadeIn();
  } else {
  $('.scrollup').fadeOut();
  }
  });
 
  $('.scrollup').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
  });
});