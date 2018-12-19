//Show-hide portfolio block
$(document).ready(function(){
    $('.portfolio-more').on('click',function(e){
        e.preventDefault();        
          $('.fix-height').animate({
              height: 'toggle'
            }, 600, function() {
        });                    
    });

    //Mask phone
    $(".main-phone").mask("8 (999) 999-9999");
    

    $('#footer-form').validate();
    $('#main-form').validate();
});

//Slider
$(document).ready(function(){
$('.edu-slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,  
      autoplay: false,     
      autoplaySpeed: 2000,
      arrows: false, 
      dots: false,     
       responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,              
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,              
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,            
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


//Slider
$(document).ready(function(){
$('.docs-slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,  
      autoplay: false,     
      autoplaySpeed: 2000,
      arrows: false, 
      dots: false,     
       responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              autoplay: false
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: false
            }
          },
          {
            breakpoint: 576,
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


$(document).ready(function() {
  $('.popup_link').magnificPopup({type:'image'});
});