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


//Fixed Menu
$(document).ready(function() {
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      $(".site-header").addClass("scrolled");
    } else {
      $(".site-header").removeClass("scrolled");
    }
  });
});


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