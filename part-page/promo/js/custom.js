//Owl
$(document).ready(function(){
  $(".owl-carousel-res").owlCarousel({
    loop:true, 
    smartSpeed:500,             
    nav:true,
    dots:true,          
    item:2,
    autoplay: false,
    autoplayTimeout: 3000,
    dotsEach:true,
    responsiveClass:true,
    margin: 50,
    responsive:{
        1200:{
            items:2
        },        
        992:{
            items:2
        },
        768:{
            items:1
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


