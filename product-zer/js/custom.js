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
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,       
      }
    }
  ]
});
});

$(window).on('load resize', function() {

  if ($(window).width() > 767) {
    $(".product-info-block").each(function(){
      $('.product-info-block-image').css('height', '0px');
      var piheight = $('.product-info-block-content').outerHeight(true);
      $('.product-info-block-image').css('height', piheight);
    });
  }
  else{
  
}

});

$(window).on('load resize', function() {

   if ($(window).width() < 992) {
    $('.product-icons-slider:not(.slick-initialized)').slick({
      infinite: false,   
      dots: true,  
      speed: 300,
      arrows: false, 
      slidesToShow: 2,
      slidesToScroll: 1,
      adaptiveHeight: true,
      responsive: [       
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]   
    });
  } else {
    $(".product-icons-slider.slick-initialized").slick("unslick");
  }
});

