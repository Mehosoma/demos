//Slider-add
$(document).ready(function(){

$('.base-active-slider').slick({
  dots: true,  
  speed: 300,
  arrows: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [ 
  	 {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,       
      }
    },
     {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,       
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,       
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
});