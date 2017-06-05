
//Triangle Canvas
var canvas = document.getElementById('triangle');
var context = canvas.getContext('2d');
context.beginPath();
context.moveTo(0, 0);
context.lineTo(1440, 0);
context.lineTo(720, 100);
context.closePath();
context.shadowColor = 'rgba(0,0,0,0.2)';
context.shadowBlur = 10;
context.shadowOffsetX = 0;
context.shadowOffsetY = 0;
context.fillStyle = "rgb(252, 252, 252)";
context.fill();

//Triangle Canvas
var canvas = document.getElementById('triangle-scheme');
var context = canvas.getContext('2d');
context.beginPath();
context.moveTo(0, 0);
context.lineTo(1440, 0);
context.lineTo(720, 100);
context.closePath();
context.fillStyle = "rgb(252, 252, 252)";
context.fill();

//Triangle Canvas
var canvas = document.getElementById('triangle-photos');
var context = canvas.getContext('2d');
context.beginPath();
context.moveTo(0, 0);
context.lineTo(1440, 0);
context.lineTo(720, 100);
context.closePath();
context.shadowColor = 'rgba(0,0,0,0.5)';
context.shadowBlur = 10;
context.shadowOffsetX = 0;
context.shadowOffsetY = 0;
context.fillStyle = "rgb(48, 70, 145)";
context.fill();

// Выравниваем блоки по высоте
$(document).ready(function(){
    $(".popup_form").magnificPopup();
    $('.col-eq').colequalizer(); 
});

// Slider
var slider = $('.partners-slider').lightSlider({
    controls: false,
    loop: true,
    item: 4,
    slideMove: 1,    
    responsive : [
            {
                breakpoint:1500,
                settings: {
                    item:6,
                    slideMove:1,
                    
                  }
            },

            {
                breakpoint: 1200,
                settings: {
                    item:5,
                    slideMove:1,
                    
                  }
            },

            {
                breakpoint:992,
                settings: {
                    item:3,
                    slideMove:1,
                                       
                  }
            },
            {
                breakpoint:768,
                settings: {
                    item:2,
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


//Desc Slider
// Slider
var slider1 = $('.desc-slider-wrap ul').lightSlider({
    controls: false,
    loop: true,
    item: 4,
    slideMargin: 0,
    slideMove: 1,    
    responsive : [
            {
                breakpoint:3000,
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


//Переход по ссылкам
$('a[href^="#"]').click(function(){
//Сохраняем значение атрибута href в переменной:
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 800);
return false;
});


//Замена номера

$(".phone span, .contacts-block-left i").click(
	function () {
	    $(this).stop().css('opacity', '0').html(function (_, oldText) {
	        $(this).html('8 (800) 400 10 56');
	        $(this).css('pointer-events','none');
	    }).animate({
	        opacity: 1
	    }, 1000);
});
