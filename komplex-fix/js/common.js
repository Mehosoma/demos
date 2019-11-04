$(document).ready(function(){
	$('.main-slider').slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,  
  		autoplay: false,  		
  		arrows: false, 
  		dots: false,  		
	});

	$('.docs-slider').slick({
  		infinite: true,
  		slidesToShow: 3,
  		slidesToScroll: 1,  
  		autoplay: false,  		
  		arrows: false, 
  		dots: false, 
  		responsive: [ 
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,       
		      }
		    }
	    ]  
	});

	$('.responses-slider').slick({
  		infinite: true,
  		slidesToShow: 3,
  		slidesToScroll: 1,  
  		autoplay: false,  		
  		arrows: false, 
  		dots: false, 
  		responsive: [ 
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,       
		      }
		    }
	    ]    
	});
});

//Slider-Arrows
$(function () {
    
    var $arrows = $('.arrows');
    var $next = $arrows.children(".arr-right-gen");    
    var $prev = $arrows.children(".arr-left-gen");
    
    var slick = $('.slider-main');

    $('.arr-right-gen').on('click', function (e) {
        var i = $next.index( this )
        slick.eq(i).slick('slickNext');
    });
    $('.arr-left-gen').on('click', function (e) {
        var i = $prev.index( this )
        slick.eq(i).slick('slickPrev');
    });

});

//Show-hide Drop-Down Menu
$(document).ready(function(){
    $('.menu-dropdown').on('click',function(e){
      $(this).parent().children('.main-menu_drop').slideToggle();                                    
    });
});

//Show-hide Drop-Down Menu on Mobile
$(document).ready(function(){
    $('.click-mobile').on('click',function(e){
      $('.main-menu-list').slideToggle(); 
      $(this).parent().find('.main-menu_drop').toggleClass('menu-open');                              
    });
});


//Pop-up modal image
$(document).ready(function() {
   $('.popup-link').magnificPopup({
   	 	fixedContentPos: false,
    	fixedBgPos: true,
    	type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
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
		modal: true
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});

//Disclaim
$('.disclaim').on('click',function(e){
  if ($('#disclaim_polite').is(':checked')) {
      $('.btn__modal').removeAttr('disabled');
  } else {
     $('.btn__modal').attr('disabled','disabled');
  }
});

//ScrollToSection
$('.menu-scroll').click(function(){
  //Сохраняем значение атрибута href в переменной:
  var target = $(this).attr('href');
  $('html, body').animate({scrollTop: $(target).offset().top-100}, 1000);
return false;
});


