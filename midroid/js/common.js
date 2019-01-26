//VideoResponse
$(document).ready(function(){

    $('iframe').attr('src', $('iframe').attr('src'));

    $('.click').on('click', function(){

        $("#video-main").css({
        'display' : 'block'        
        }); 
        
    });
});

$(document).ready(function(){
    $('.close-video').on('click', function(){

        $("#video-main").css({
        'display' : 'none'        
        }); 

       $('iframe').attr('src', $('iframe').attr('src'));
        
    });
});


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
              slidesToShow: 2,
              slidesToScroll: 1,            
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
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

$('.left').click(function(){
  $('.slider').slick('slickPrev');

   $("#video-main").css({
        'display' : 'none'        
        }); 

       $('iframe').attr('src', $('iframe').attr('src'));
})

$('.right').click(function(){
  $('.slider').slick('slickNext');

    $("#video-main").css({
        'display' : 'none'        
        }); 

       $('iframe').attr('src', $('iframe').attr('src'));
})