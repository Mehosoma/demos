//Owl
$(document).ready(function(){
  $(".owl-carousel-res").owlCarousel({
    loop:true, 
    smartSpeed:500,             
    nav:false,
    dots:false,          
    item:2,
    autoplay: true,
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
            items:2
        },
        650:{         
            items:2
        },
        480:{         
            items:2
        },
        320:{
            items:2
        }

    }
  });

});
