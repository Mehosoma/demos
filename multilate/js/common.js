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
            }, 300, function() {
          });  
          $('.user_name').toggleClass('active-menu')                          
    });
});


//Show-hide menu
$(document).ready(function(){
    $('.click-mobile').on('click',function(e){
        $("footer .menu-toggle-button").toggleClass('is-active'); 
        e.preventDefault();        
          $('.main-menu').animate({
              height: 'toggle'
            }, 300, function() {
          });              
    });
});


//Show-hide edit form
$(document).ready(function(){
    $('.btn-outline_storyblock').on('click',function(e){
      $( ".edit-story-form" ).fadeIn(300);
    });
    $('.btn_exit').on('click',function(e){
      $( ".edit-story-form" ).fadeOut(300);
    });    
});