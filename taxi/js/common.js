
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
  if ($('#disclaim').is(':checked') && $('#disclaim_polite').is(':checked')) {
      $('.btn-form').removeAttr('disabled');
  } else {
     $('.btn-form').attr('disabled','disabled');
  }
});