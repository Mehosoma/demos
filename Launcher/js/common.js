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

(function HorizontalScrolling () {
  function wheelHandler (element, event) {
    const toLeft  = event.deltaY < 0 && element.scrollLeft > 0
    const toRight = event.deltaY > 0 && element.scrollLeft < element.scrollWidth - element.clientWidth

    if (toLeft || toRight) {
      event.preventDefault()
      event.stopPropagation()
      
      element.scrollBy({ left: event.deltaY })
    }
  }
  
  const targets = document.querySelectorAll('.h-scroll')

  targets.forEach(element => element.addEventListener('wheel', event => wheelHandler(element, event)))
})()


//ScrollToSection
$('.main-menu a[href^="."]').click(function(){
  //Сохраняем значение атрибута href в переменной:
  var target = $(this).attr('href');
  $('html, body').animate({scrollTop: $(target).offset().top-0}, 1000);
return false;
});

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
$(document).ready(function(){
    $(".popup_form").magnificPopup({
      fixedContentPos: false,
      fixedBgPos: true
    });
});

//TopButton
$(document).ready(function(){
 
  $(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
  $('.scrollup').fadeIn();
  } else {
  $('.scrollup').fadeOut();
  }
  });
 
  $('.scrollup').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
  });
});

//FormSubmit
$(document).ready(function () {
    $("form").unbind('submit').on('submit', function(event) {
        var formID = $(this).attr('id'); // Получение ID формы
        var formNm = $('#' + formID);
        $.ajax({
            type: 'POST',
            url: 'send.php', // Обработчик формы отправки
            data: formNm.serialize(),
            success: function (data) {
              jQuery(formNm)[0].reset();
            }
        });
        return false;
    });
});


//Select
$(document).ready(function () {
  $('select').selectpicker();
});