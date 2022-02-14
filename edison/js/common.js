//Svg to inline
$(document).ready(function(){
// Replace all SVG images with inline SVG  
  $('img.svg').each(function(){
   var $img = $(this);
   var imgID = $img.attr('id');
   var imgClass = $img.attr('class');
   var imgURL = $img.attr('src');

   $.get(imgURL, function(data) {
     var $svg = $(data).find('svg');
     if (typeof imgID !== 'undefined') {
       $svg = $svg.attr('id', imgID);
     }
     if (typeof imgClass !== 'undefined') {
       $svg = $svg.attr('class', imgClass+' replaced-svg');
     }
     $svg = $svg.removeAttr('xmlns:a');
     $img.replaceWith($svg);
   });
  });
});



//Slider
$(document).ready(function(){
  $('.slider_main').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,       
      arrows: false, 
      dots: false,
      responsive: [ 
              {
                breakpoint: 1440,
                settings: {
                  adaptiveHeight:true,
                  slidesToShow: 3,
                  slidesToScroll: 1     
                }
              },

               {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 2,    
                }
              },

               {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,    
                }
              },

            ]             
  });
});


//Show-hide menu
$(document).ready(function(){
    $('.click-mobile').on('click',function(e){
        e.preventDefault();        
          $('.header .main-menu').animate({
              height: 'toggle'
            }, 600, function() {
          });         
        $("header .menu-toggle-button").toggleClass('is-active');             
    });
});


//ModalWindow
$(document).ready(function(){
    $(".popup_form").magnificPopup({
      fixedContentPos: false,
      fixedBgPos: true
    });
});

