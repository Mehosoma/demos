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

//Main-Slider
$(document).ready(function(){
  $('.main__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,  
      autoplay: true,     
      arrows: false, 
      dots: false,
      autoplaySpeed: 5000,
      speed: 2000,
      draggable: true,
      pauseOnFocus: true,
      pauseOnHover: false,    
  });
});

//Add-slider
$(document).ready(function(){
  $('.add__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,  
      autoplay: true,     
      arrows: false, 
      dots: false,
      autoplaySpeed: 5000,
      speed: 2000,
      draggable: true,
      pauseOnFocus: true,
      pauseOnHover: false,    
  });
});

//Main-Slider
$(document).ready(function(){
  $('.about__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,  
      autoplay: false,     
      arrows: false, 
      dots: false,
      draggable: true,  
  });
});

//Photos-Slider
$(document).ready(function(){
  $('.photos__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,  
      autoplay: false,     
      arrows: false, 
      dots: false,
      draggable: true,
      centerMode: true,
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