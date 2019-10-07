$(window).on('load resize', function() {

   if ($(window).width() < 992) {
    $('.bond-slider:not(.slick-initialized)').slick({
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
    $(".bond-slider.slick-initialized").slick("unslick");
  }
});

$(window).on('load resize', function() {

   if ($(window).width() < 992) {

    $('.bond-result-drop.show').find('.bond-result-slider:not(.slick-initialized)').slick({
        infinite: false,   
        dots: true,  
        speed: 300,
        arrows: false, 
        slidesToShow: 1,
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
      $(".bond-result-slider.slick-initialized").slick("unslick");
   }   

});


$(window).on('load resize', function() {
  $('.bond-result-drop').on('shown.bs.collapse', function () {
    if ($(window).width() < 992) {
      $(this).find(".bond-result-slider.slick-initialized").slick("unslick");
      $(this).find('.bond-result-slider:not(.slick-initialized)').slick({
        infinite: false,   
        dots: true,  
        speed: 300,
        arrows: false, 
        slidesToShow: 1,
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
      })
    } else {
      $(".bond-result-slider.slick-initialized").slick("unslick");
    }
  }); 

  $('.bond-result-drop').on('hide.bs.collapse', function () {
    $(this).find(".bond-result-slider.slick-initialized").slick("unslick");
  })

});




