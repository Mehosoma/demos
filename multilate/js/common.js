//ModalWindow
$(document).ready(function(){
    $(".popup-form").magnificPopup();
});


//Show-hide menu
$(document).ready(function(){
    $('.user_name').on('click',function(e){
        e.preventDefault();        
          $('.user-menu').animate({
              height: 'toggle'
            }, 600, function() {
          });                            
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
        $("footer .menu-toggle-button").toggleClass('is-active');                  
    });
});