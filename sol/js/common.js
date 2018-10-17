$(document).ready(function(){

	$(".main-menu_link").on({
	    mouseenter: function () {
	        $(this).prev('.menu_list-decor').css('height','10px');
	    },
	    mouseleave: function () {
	         $(this).prev('.menu_list-decor').css('height','0px')
	    }
	});

	$('.main-menu  ul li').hover(
        function () {
    		$('ul', this).stop().slideDown(300);
        }, 
        function () {
            $('ul', this).stop().slideUp(300);            
        }
    );
});

//Top-slider
$(document).ready(function(){
$('.top-slider').slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,  		
  		arrows: true,
  		 responsive: [			    
			    {
			      breakpoint: 1200,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
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

//Partners-slider
$(document).ready(function(){
$('.partners-slider').slick({
  		infinite: true,
  		slidesToShow: 4,
  		slidesToScroll: 1,  		
  		arrows: true,  		
  		 responsive: [			    
			    {
			      breakpoint: 1200,
			      settings: {
			        slidesToShow: 4,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 992,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 2,
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