//Show-hide portfolio block
$(document).ready(function(){
    $('.portfolio-more').on('click',function(e){
        e.preventDefault();        
         $( ".fix-height" ).slideDown( "fast" );
       
        $('.portfolio-more').addClass('d-none')                   
    });

    //Mask phone
    $(".main-phone").mask("+7(999)999-9999", {autoclear: false});

    jQuery.validator.addMethod("checkMask", function(value, element) {      
      return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value);      
    });

    $.validator.addClassRules({
      'main-phone': {
          checkMask: true
        }
    });
    

    $("#footer-form").validate({
        submitHandler: function(form) { 
            var formNm = $('#footer-form');
            $.ajax({
                type: 'POST',
                url: 'send.php', // Обработчик формы отправки
                data: formNm.serialize(),
                success: function (data) {                    
                    $("#footer-form").find('.error').html('Данные отправлены. Спасибо за заявку!');
                    $("#footer-form").find('.error').css('display','block');
                    $("#footer-form").find('.error').css('color','green');
                    jQuery(formNm)[0].reset();
                }
            });
            return false;
        }
    });    

    $("#main-form").validate({      
        submitHandler: function(form) {
            var formNm = $('#main-form');
            $.ajax({
                type: 'POST',
                url: 'send.php', // Обработчик формы отправки
                data: formNm.serialize(),
                success: function (data) {
                    $("#main-form").find('.error').html('Данные отправлены. Спасибо за заявку!');
                    $("#main-form").find('.error').css('display','block');
                    $("#main-form").find('.error').css('color','green');
                    jQuery(formNm)[0].reset();
                }
            });
           
            return false;                 
        }         
    });

});

 function isValid() {
    $("#main-form").find('.error').css('color','red');
   }
   

//Slider
$(document).ready(function(){
$('.edu-slider').slick({
      infinite: true,    
      autoplay: false,     
      autoplaySpeed: 2000,
      arrows: false, 
      dots: false, 
      variableWidth: true,
      slidesToShow: 2,
      slidesToScroll: 1, 
      centerMode: true,   
       responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,              
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,              
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,            
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,           
            }
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
  });
});


$('.left').click(function(){
  $('.slider').slick('slickPrev');
})

$('.right').click(function(){
  $('.slider').slick('slickNext');
})


$(document).ready(function() {
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
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
        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
      }
    }
  });
});

$(document).ready(function() {
  $('.popup-gallery-docs').magnificPopup({
    delegate: 'a',
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
        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
      }
    }
  });
});