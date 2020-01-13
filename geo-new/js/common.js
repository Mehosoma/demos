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

$(window).on('load resize', function () {
   if ($(window).width() >= 992) {
   		$(".main-menu").css('display','block');
   	 } else {
   		$(".main-menu").css('display','none');
  	}
});