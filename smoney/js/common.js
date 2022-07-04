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
$(function () {
  $('.popup-modal').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
  
      fixedContentPos: true,
      fixedBgPos: true,
      closeOnBgClick: false,
      showCloseBtn: false

  });
  $(document).on('click', '.modal-close-btn', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});


//Disclaim
$('.disclaim').on('click',function(e){
  if ($('#disclaim').is(':checked')) {
      $('.pay-form button').removeAttr('disabled');
  } else {
     $('.pay-form button').attr('disabled','disabled');
  }
});