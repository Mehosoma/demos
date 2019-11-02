//Show-hide menu
$(document).ready(function(){
    $('.click-mobile, .arrow-menu').on('click',function(e){
        $(".main-drop").toggleClass('main-drop-active'); 
        $(".header-wrap").toggleClass('header-site-height');                      
    });
});

//Main-menu drop submenu
$(document).ready(function(){
    $('.link-drop').on('click',function(e){
        $(this).next('.main-menu_drop').slideToggle('');                       
    });
});

//Slider-Response
$(document).ready(function(){

  $('.responsive-slider').slick({
    dots: false,  
    speed: 300,
    arrows: false,    
    slidesToShow: 2,
    slidesToScroll: 1, 
    responsive: [ 
      {
        breakpoint: 992,
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

//Slider Navigation
$('.left').click(function(){
  $('.responsive-slider').slick('slickPrev');

  })

$('.right').click(function(){
  $('.responsive-slider').slick('slickNext');

   
})

//Video-link
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


//Show-hide drop accordeon
$(document).ready(function(){
    $('.faq-list li').on('click',function(e){
      $(this).children('.faq-list_drop').slideToggle();   
      $(this).toggleClass('faq-list_drop__active');                       
    });
});

//Red required
$('document').ready(function() {
  $('.btn_sub').on('click', function() {
    $('input[required]').addClass('req');
  });
});


//YTP Player
jQuery(function(){
  jQuery("#ytp-video").YTPlayer();
});

