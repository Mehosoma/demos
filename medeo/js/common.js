//Show-hide portfolio block
$(document).ready(function(){
    $('.portfolio-more').on('click',function(e){
        e.preventDefault();        
          $('.fix-height').animate({
              height: 'toggle'
            }, 600, function() {
        });                    
    });
});

//Slider
$(document).ready(function(){
$('.edu-slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,  
      autoplay: false,     
      autoplaySpeed: 2000,
      arrows: false, 
      dots: false,     
       responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: true
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
  });
});


//Slider
$(document).ready(function(){
$('.docs-slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,  
      autoplay: false,     
      autoplaySpeed: 2000,
      arrows: false, 
      dots: false,     
       responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              autoplay: true
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
  });
});


$('.left').click(function(){
  $('.slider').slick('slickPrev');
})

$('.right').click(function(){
  $('.slider').slick('slickNext');
})