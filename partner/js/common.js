//Show-hide menu on mobile resolution
$(document).ready(function(){
   $('.menu-toggle-button').on('click',function(e){
        e.preventDefault();        
          $('.catalog-menu').animate({
              height: 'toggle'
            }, 300, function() {
          });         
        $(".menu-toggle-button").toggleClass('is-active');                  
    });
});
