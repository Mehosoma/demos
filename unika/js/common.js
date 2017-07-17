var slider = $('#lightSlider').lightSlider({
    controls: false,
    loop: false,
    item: 1,
    slideMove: 1,
    responsive : [
            {
                breakpoint:1500,
                settings: {
                    item:1,
                    slideMove:1,
                    
                  }
            },

            {
                breakpoint: 1200,
                settings: {
                    item:1,
                    slideMove:1,
                    
                  }
            },

            {
                breakpoint:992,
                settings: {
                    item:1,
                    slideMove:1,
                                       
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


$(document).ready(function () {
   var tileSlider = $('.swiper-container');
    tileSlider.each(function(){
    var mySwiper = new Swiper(this, {             
        pagination: $(this).parent().find('.swiper-pagination')[0],   
        paginationClickable: true,   
        nextButton: $(this).parent().find('.swiper-button-next')[0],
        prevButton: $(this).parent().find('.swiper-button-prev')[0]
    });
    }); 
    
});


//ModalWindow
$(document).ready(function(){
    $(".popup_form").magnificPopup();   
});


//links on block
$('a[href^="#"]').click(function(){
//Сохраняем значение атрибута href в переменной:
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top-100}, 800);
return false;
});

jQuery(function($){
   $("#order-phone").mask("(999) 999-9999");   
});

