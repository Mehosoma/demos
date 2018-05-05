$(function() {

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};
	
});


$(document).ready(function(){
$('.slider').slick({
  		infinite: true,
  		slidesToShow: 2,
  		slidesToScroll: 1,  		
  		arrows: true,
  		 responsive: [
			    {
			      breakpoint: 1401,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1			        			        
			      }
			    },
			    {
			      breakpoint: 1200,
			      settings: {
			        slidesToShow: 2,
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

	
	//Show/Hide footer block
	$('.exit').on('click',function(e){
        e.preventDefault(); 

        $(".footer-marker").css( 'opacity','0'); 
        $('.footer-visible').css( 'opacity','1');
        $('.footer-visible').css( 'z-index','1000'); 
        $(this).delay(400).queue(function () { 
        	$('.footer-marker').css( 'display','none');        		   	
        $(this).dequeue();});
    });  
	
    $('.footer-visible').on('click',function(e){
        e.preventDefault(); 
        $('.footer-marker').css( 'display','block');       
       	$(this).delay(400).queue(function () { 
       		$(".footer-marker").css( 'opacity','1');        	
        	$('.footer-visible').css( 'opacity','0');        		   	
        	$('.footer-visible').css( 'z-index','1'); 
        $(this).dequeue();});  
    });   

    //Mask phone
	$(".main-phone").mask("+7(999) 999-9999");


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
        $('.top_nav_bg').toggleClass('menu-tablet-open');
        $('.top-menu-toggle p').toggleClass('green-color');
        $('.desktop_menu').toggleClass('w-border');               
    });
});


