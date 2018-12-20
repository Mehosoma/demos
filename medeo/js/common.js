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
                    $("#footer-form").find('#phone-error').html('Данные отправлены. Спасибо за заявку!');
                    $("#footer-form").find('#phone-error').css('display','block');
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
                    $("#main-form").find('#phone-error').html('Данные отправлены. Спасибо за заявку!');
                    $("#main-form").find('#phone-error').css('display','block');
                    jQuery(formNm)[0].reset();
                }
            });
            return false;        
        }
    });

});

//Slider
$(document).ready(function(){
$('.edu-slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,  
      autoplay: false,     
      autoplaySpeed: 2000,
      arrows: false, 
      dots: false,     
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


//Slider
$(document).ready(function(){
$('.docs-slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,  
      autoplay: false,     
      autoplaySpeed: 2000,
      arrows: false, 
      dots: false,     
       responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              autoplay: false
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: false
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
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
  $('.popup_link').magnificPopup({type:'image'});

  
});