//Slider
$(document).ready(function(){
$('.slider').slick({
      infinite: true,    
      autoplay: false,           
      arrows: false, 
      dots: true,      
      slidesToShow: 4,
      slidesToScroll: 1,         
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
})

$('.right').click(function(){
  $('.slider').slick('slickNext');
})


//Show-hide menu
$(document).ready(function(){
    $('.click-mobile').on('click',function(e){
        e.preventDefault();        
          $('.main-menu').animate({
              height: 'toggle'
            }, 600, function() {
          });         
        $("header .menu-toggle-button").toggleClass('is-active');              
    });
});

//Show-hide Category menu
$(document).ready(function(){
    $('.click-cat-mobile').on('click',function(e){
        e.preventDefault();        
          $('.cat-menu ul').animate({
              height: 'toggle'
            }, 600, function() {
          });       
                    
    });
});