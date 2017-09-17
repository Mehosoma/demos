//Show-hide category menu
$(document).ready(function(){
    $('.cat-open').on('click',function(e){
        e.preventDefault();        
        $(".hidden-menu").toggleClass('open');
        $(".cat-open").toggleClass('down');
    });
});

//Show-hide menu on mobile resolution
$(document).ready(function(){
    $('.menu-toggle-button').on('click',function(e){
        e.preventDefault();        
        $(".menu-wrap").toggleClass('main-open');          
        $(".menu-toggle-button").toggleClass('is-active');          
    });
});


//Top-Slider
$(document).ready(function(){
  	$('#slider').bxSlider({
  		mode: 'fade',
		captions: true
	});
});

//OwlCarousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    center: false,
    loop:true, 
    smartSpeed:500,   
    mouseDrag:true,
    nav:true,
    margin:30,
    responsive:{
        1200:{
            items:4
        },        
        992:{
            items:3
        },
        768:{
            items:2
        },
        480:{        	
            items:1
        },
        320:{
            items:1
        }

    }
  });

});