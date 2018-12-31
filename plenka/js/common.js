$(document).ready(function(){
$('.slider-p').slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,   		
  		arrows: false, 
  		dots: true, 		
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
			        slidesToScroll: 1,
			        arrows: false
			      }
			    },
			    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        arrows: false
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        arrows: false
			      }
			    },
			    // You can unslick at a given breakpoint now by adding:
			    // settings: "unslick"
			    // instead of a settings object
  			]
	});
});


$('.left').click(function(){
  $('.slider-p').slick('slickPrev');
})

$('.right').click(function(){
  $('.slider-p').slick('slickNext');
})


//Sticky menu
$(document).ready(function(){
	var $menu = $('.second-row');
	$(window).scroll(function(){
		if ( $(this).scrollTop() > 10 && $menu.hasClass('normal') ){
			$menu.removeClass('normal').addClass('fix');
		}
		else if($(this).scrollTop() <= 10 && $menu.hasClass('fix')) {
			$menu.removeClass('fix').addClass('normal');
		}
	});
});


//ScrollToSection
$('.nav-page a[href^="."]').click(function(){
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
