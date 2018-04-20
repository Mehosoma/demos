 
jQuery(document).ready(function($){

//Accordeon
$(".faq-block_link").click(function() {
    if($(this).hasClass('active-acc')) {
    	$(this).toggleClass('active-acc');
    	$(this).parent().find('.faq-block_answer').slideUp('fast');  
    }else{
    	$(this).addClass('active-acc');
    	$(this).parent().find('.faq-block_answer').slideToggle('fast');
    }
  });

//Response-slider
$('.owl-response').owlCarousel({
    loop:true,
    margin:10,
    nav:true, 
    items: 4   
})

//Video-slider
$('.owl-video').owlCarousel({
    loop:true,
    margin:10,
    nav:true,     
    merge:true,
    items: 2,
    video: true,
    center: true   
})

//Promo-slider
$('.owl-promo').owlCarousel({
    loop:true,
    margin:10,
    nav:true,     
    merge:true,
    items: 2    
})


//Shadow fixed-menu
jQuery(function($) {
    $(window).scroll(function(){
        if($(this).scrollTop()>140){
           $('.nav-wrapper').addClass('fixed');
        }
        else if ($(this).scrollTop()<140){
         $('.nav-wrapper').removeClass('fixed');
        }
    });
});

//ScrollToSection
$('.h-nav a[href^="."]').click(function(){
  //Сохраняем значение атрибута href в переменной:
  var target = $(this).attr('href');
  $('html, body').animate({scrollTop: $(target).offset().top-100}, 1000);
return false;
});


//PopupWindow
$('.popup').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

//Mask phone
$(".phone").mask("+7(999) 999-9999");


});



