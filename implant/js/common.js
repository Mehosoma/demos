//ScrollToSection
$('.button-first a[href^="."]').click(function(){
  //Сохраняем значение атрибута href в переменной:
  var target = $(this).attr('href');
  $('html, body').animate({scrollTop: $(target).offset().top-0}, 1000);
return false;
});

$(document).ready(function() {
  $('.popup_link').magnificPopup({type:'image'});
});