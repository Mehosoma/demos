var slider = $('.slider').lightSlider({
    controls: true,
    loop: false,
    responsive : [
            {
                breakpoint:1500,
                settings: {
                    item:4,
                    slideMove:4, 
                    slideMargin: 0,                   
                  }
            },

            {
                breakpoint: 1200,
                settings: {
                    item:3,
                    slideMove:3,
                    slideMargin: 0,                      
                  }
            },

            {
                breakpoint:992,
                settings: {
                    item:2,
                    slideMove:2,
                                       
                  }
            },
            {
                breakpoint:768,
                settings: {
                    item:1,
                    slideMove:1,
                                     
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1,                   
                  
                  }
            }
        ]        
});

$('#goToPrevSlide').on('click', function () {
    slider.goToPrevSlide();
});
$('#goToNextSlide').on('click', function () {
    slider.goToNextSlide();
});


//ModalWindow
$(document).ready(function(){
    $(".popup_form").magnificPopup();   
});


//links on block
$('a[href^="#"]').click(function(){
//Сохраняем значение атрибута href в переменной:
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 800);
return false;
});

jQuery(function($){
   $("#order-phone").mask("(999) 999-9999");   
});