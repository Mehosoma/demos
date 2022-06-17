
//Close menu when resize and scroll top
function menu(){
 if($(".menu-toggle-button").hasClass("is-active")) {       
    $('.menu').animate({
      height: 'toggle'
      }, 0, function() {
    });         
    $(".menu-toggle-button").toggleClass('is-active');
    $(".menu").toggleClass('is-active'); 
  }
}

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
  $('.slider').slick({
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,       
      arrows: false, 
      dots: false,
      responsive: [ 
              {
                breakpoint: 1310,
                settings: {
                  adaptiveHeight:true,
                  slidesToShow: 3,
                  slidesToScroll: 1     
                }
              },

               {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,    
                }
              },

               {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,    
                }
              },

               {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,    
                }
              },

            ]             
  });
});


//ScrollToSection
$('.menu--link a[href^="."]').click(function(){
  //Сохраняем значение атрибута href в переменной:
  var target = $(this).attr('href');
  $('html, body').animate({scrollTop: $(target).offset().top-0}, 1000);
return false;
});

//Show-hide menu
$(document).ready(function(){
    $('.click-mobile').on('click',function(e){
        e.preventDefault();        
          $('.menu').animate({
              height: 'toggle'
            }, 600, function() {
          });         
        $(".menu-toggle-button").toggleClass('is-active');   
        $(".menu").toggleClass('is-active');           
    });
});


$(document).ready(function() {
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
   
   
  });
});

$(document).ready(function() {
  $('.popup-gallery-two').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
   
   
  });
});

//TopButton
$(document).ready(function(){
 
  $(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
    $('.scrollup img').fadeIn();
  } else {
    $('.scrollup img').fadeOut();
  }
  });
 
  $('.scrollup').click(function(e){
    $("html, body").animate({ scrollTop: 0 }, 600);
    e.preventDefault(); 
    menu();
  });
});

//FormSubmit
$(document).ready(function () {
    $("form").unbind('submit').on('submit', function(event) {
        var formID = $(this).attr('id'); // Получение ID формы
        var formNm = $('#' + formID);
        $.ajax({
            type: 'POST',
            url: 'send.php', // Обработчик формы отправки
            data: formNm.serialize(),
            success: function (data) {
              jQuery(formNm)[0].reset();
            }
        });
        return false;
    });
});


$(window).resize(function(e) {
  if(document.documentElement.clientWidth > 991) {
    e.preventDefault(); 
    menu();
  }
});