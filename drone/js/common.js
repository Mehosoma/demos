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

//ScrollToSection
$('.scrollsec a[href^="."]:not(".fix-pos")').click(function(){
  //Сохраняем значение атрибута href в переменной:
  var target = $(this).attr('href');
  $('html, body').animate({scrollTop: $(target).offset().top-100}, 1000);
return false;
});

//ScrollToSection - Fix position price block
$('.scrollsec .fix-pos[href^="."]').click(function(){
  //Сохраняем значение атрибута href в переменной:
  var target = $(this).attr('href');
  $('html, body').animate({scrollTop: $(target).offset().top - ($(window).height() - $('.price').outerHeight(true)) / 2 - 80}, 1000);
return false;
});




//Menu item on scroll
  $('.scrollsec a').on('click touch', function() {
        let href = $(this).attr('href');
     
        $('.menu_link')
            .removeClass('active')
            .filter('[href="'+ href +'"]')
            .addClass('active');
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
  $(".menu_link").removeClass('active'); 
  return false;
  });
});

//Video
$(document).ready(function() {
  $('.popup-youtube').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });
});

//Gallery
$(document).ready(function() {
  $('.popup-gallery').magnificPopup({
    fixedContentPos: false,
    fixedBgPos: true,
    delegate: '.popupim',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title');
      }
    }
  });
});


//ModalWindow
$(document).ready(function(){
    $(".popup_form").magnificPopup({
      fixedContentPos: false,
      fixedBgPos: true
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