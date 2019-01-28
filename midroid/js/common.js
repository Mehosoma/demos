//Slider
$(document).ready(function(){
$('.slider').slick({
      infinite: true,    
      autoplay: false,           
      arrows: false, 
      dots: false,      
      slidesToShow: 3,
      slidesToScroll: 1,
      swipe: false,         
       responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,              
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,              
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,            
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,           
            }
          },  
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,           
            }
          },          
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
  });
});


//Slider Navigation
$('.left').click(function(){
  $('.slider').slick('slickPrev');

  })

$('.right').click(function(){
  $('.slider').slick('slickNext');

   
})


$(document).ready(function() {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
});