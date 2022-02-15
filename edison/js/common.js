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
  $('.slider__slick').slick({
      infinite: true,     
      slidesToScroll: 4,
      swipeToSlide: true,
      variableWidth: true,    
      arrows: false, 
      dots: false,
      centerMode: false,
      responsive: [ 
              {
                breakpoint: 1200,
                settings: {
                 
                  slidesToScroll: 3,    
                }
              },
              {
                breakpoint: 992,
                settings: {
                  
                  slidesToScroll: 2,    
                }
              },
              {
                breakpoint: 768,
                settings: {
                 
                  slidesToScroll: 2,
                  dots:true,  
                }
              },
              {
                breakpoint: 576,
                settings: {
                 
                  slidesToScroll: 1,
                  dots:true,  
                }
              },


            ]             
  });
});



$(document).ready(function(){
  $('.alg__block_note').slick({
      vertical: true,
      infinite: true,
      verticalSwiping: true,
      slidesToShow: 1,
      autoplay: true,
      arrows: false, 
      dots: false,
});
});
