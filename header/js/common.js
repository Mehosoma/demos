//Show-hide menu
$(document).ready(function(){
    $('.click-mobile').on('click',function(e){
        e.preventDefault();        
          $('.bottom-menu').animate({
              height: 'toggle'
            }, 600, function() {
          });         
        $("header .menu-toggle-button").toggleClass('is-active');                   
    });
});