//Slider-services, News
$(window).on('load resize', function() {
  if ($(window).width() < 992) {
    $('.invest-info-slider:not(.slick-initialized)').slick({
      infinite: true,
  	  loop: true,
  	  dots: true,  
  	  speed: 300,
  	  arrows: false, 
  	  slidesToShow: 2,
  	  slidesToScroll: 1,
      responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      ]	  
    });
  } else {
    $(".invest-info-slider.slick-initialized").slick("unslick");
  }
});