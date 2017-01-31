window.onload = function(){

    var canvas = document.getElementById("canvastop");
    var context = canvas.getContext("2d");

    context.lineWidth = 1;
    context.strokeStyle = "#f7f7f7"; // line color
    context.fillStyle = "#f7f7f7"; 

    context.beginPath();
    context.moveTo(0, 0);
    var controlX1 = 50;
    var controlY1 = 40;
    var controlX2 = 190;
    var controlY2 = 40;
    var endX = 240;
    var endY = 0;  
    context.bezierCurveTo(controlX1, controlY1, controlX2,
        controlY2, endX, endY);    
    context.EndPath

    context.fill();   
    context.stroke();

    context.fill();   
    context.stroke();

};



$(document).ready(function () {
    //initialize swiper when document ready  
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters     
    	loop: true,    	
    	pagination: '.swiper-pagination',    
    	nextButton: '.swiper-button-next',
    	prevButton: '.swiper-button-prev',
    })        
});

$(document).ready(function () {
    //initialize swiper when document ready  
    var mySwiper = new Swiper ('.swiper-teachers', {
      // Optional parameters     
    	loop: true,
    	slidesPerView: 4,
    	pagination: '.swiper-pagination',    
    	nextButton: '.swiper-button-next',
    	prevButton: '.swiper-button-prev',
    	breakpoints: {
	        1200: {
		      slidesPerView: 2,		      
		    },
		    768: {
		      slidesPerView: 2,		      
		    },
		    480: {
		      slidesPerView: 1,

		    }
  		}
    	
    })        
});

$(document).ready(function(){
 $('.owl-carousel').owlCarousel({
    loop:true,    
    center: true,
    dots: true,
    autoWidth:true,
    responsiveClass:true,
    responsive:{
        480:{
            items:1,
            nav:false            
        },
        768:{
            items:2,
            nav:false
            
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }
})
});


$(document).ready(function(){
    $( '#my-slider' ).sliderPro({
    width: 1170,
    height: 320,
    arrows: true,
    buttons: true,
    waitForLayers: true,
    thumbnailsPosition: 'top',
    thumbnailWidth: 330,
    touchSwipe: false,
    fade: true,
    autoplay: false,
    autoScaleLayers: false,
    breakpoints: {
        1300: {
           
            thumbnailWidth: 270,
            
        },
        991: {
        	arrows: false,
            touchSwipe: true,
            thumbnailWidth: 230,
            height: 350,
           
        },
        767: {
        	arrows: false,
            touchSwipe: true,
            thumbnailWidth: 150,
            height: 1300         
        },
        480: {
        	arrows: false,
            touchSwipe: true,            
            height: 2000         
        }
    }
	});
});

$(document).ready(function () {
    //initialize swiper when document ready  
    var mySwiper = new Swiper ('.swiper-reviews', {
      // Optional parameters     
    	loop: true,
    	slidesPerView: 3,    	
    	pagination: '.swiper-pagination',    
    	nextButton: '.swiper-button-next',
    	prevButton: '.swiper-button-prev',
    	breakpoints: {
	        480: {
		      slidesPerView: 1,
		      centeredSlides: true	      
		    }
  		}
    })        
});

