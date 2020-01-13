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

//ScrollToSection
$('.main-menu a[href^="."]').click(function(){
 //Сохраняем значение атрибута href в переменной:
 var target = $(this).attr('href');
 $('html, body').animate({scrollTop: $(target).offset().top-100}, 1000);
return false;
});