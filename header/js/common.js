//Show-hide menu
$(document).ready(function(){
    $('.click-mobile').on('click',function(e){
        e.preventDefault();        
          $('.bottom-menu').animate({
              height: 'toggle'
            }, 600, function() {
          });         
        $("footer .menu-toggle-button").toggleClass('is-active');                   
    });
});

//Show-hide top menu
$(document).ready(function(){
    $('.click-mobile-mm').on('click',function(e){
        e.preventDefault();        
          $('.top-menu').animate({
              height: 'toggle'
            }, 600, function() {
          });         
        $("header .menu-toggle-button").toggleClass('is-active');                   
    });
});

//Show-hide search field
$(document).ready(function(){
    $('.search-mm').on('click',function(e){       
        e.preventDefault();        
          $('.header-search').animate({
              width: '300px'
            }, 600, function() {
          });                               
    });
});

//Show-hide dropdown-menu
$(document).ready(function(){
    $('.dropdown-list').click(function(){   

           $('.goods-list-mm').animate({
              left: '1000px'              
            }, 0, function() {
           });   


          $(this).next('.goods-list-mm').animate({
              left: '0px'              
            }, 300, function() {
          });        
    });

     $('.cat-return').click(function(){
         $(this).parent('.goods-list-mm').animate({
              left: '1000px'              
            }, 300, function() {
          });  
    });
});


$(document).ready(function(){
  $('.top-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,      
        arrows: true,
         responsive: [
            {
              breakpoint: 1401,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1                           
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
  });

   $('.goods-slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,      
        arrows: true,
         responsive: [
            {
              breakpoint: 1919,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1                           
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
  });

});
