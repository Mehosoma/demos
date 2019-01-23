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

//ScrollToSection
$('.fast').click(function(){
  //Сохраняем значение атрибута href в переменной:
  var target = $(this).attr('href');
  $('html, body').animate({scrollTop: $(target).offset().top-100}, 1000);
return false;
});

//ModalWindow
$(document).ready(function(){
    $(".popup_form").magnificPopup();
});

//CheckBox Auto
$('.auto-yes').on('click',function(e){
  if ($('#auto-check').is(':checked')){
      $('.auto-info').animate({
              height: 'toggle'
            }, 600, function() {
          });   
  } else {
     
  }
});

//Disclaim
$('.disclaim').on('click',function(e){
  if ($('#disclaim').is(':checked')){
      $('.btn-form').removeAttr('disabled');
  } else {
     $('.btn-form').attr('disabled','disabled');
  }
});