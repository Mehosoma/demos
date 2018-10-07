$(document).ready(function(){
$('.projects-slider').slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,  
  		autoplay: true, 		
  		arrows: true,  		
  		 responsive: [
			    {
			      breakpoint: 1200,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        autoplay: true
			      }
			    },
			    {
			      breakpoint: 992,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    },
			    // You can unslick at a given breakpoint now by adding:
			    // settings: "unslick"
			    // instead of a settings object
  			]
	});
});


//ScrollToSection
$('.main-menu a[href^="."], .btn_price').click(function(){
  //Сохраняем значение атрибута href в переменной:
  var target = $(this).attr('href');
  $('html, body').animate({scrollTop: $(target).offset().top-100}, 1000);
return false;
});


$(document).ready(function(){

	$(".price-block_button span").on({
	    mouseenter: function () {
	         $(this).prevAll('.outer-circle').css('opacity','1');
	    },
	    mouseleave: function () {
	        $('.outer-circle').css('opacity','0');	
	    }
	});

	//ModalWindow
    $('.popup_form').magnificPopup({
   	 	fixedContentPos: false,
    	fixedBgPos: true
	});

});