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





$(document).ready(function(){

$('.proj-modal, .proj15-modal, .proj16-modal, .proj18-modal, .proj20-modal, .proj26-modal, .proj28-modal, .proj33-modal, .proj41-modal, .proj43-modal, .proj46-modal, .proj57-modal, .proj68-modal, .proj74-modal, .proj75-modal, .proj76-modal, .proj80-modal, .proj82-modal, .proj89-modal, .proj104-modal, .proj111-modal, .proj135-modal, .proj139-modal, .proj140-modal').on('shown.bs.modal', function(){ 

    var slider1 = $('.modal-slider').lightSlider({
    controls: true,
    gallery: true,    
    thumbItem:6,
    loop: true,    
    responsive : [
            {
                breakpoint:1500,
                settings: {
                    item:1,
                    slideMove:1, 
                    slideMargin: 0,  
                    loop: false, 
                    currentPagerPosition: 'middle',                
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


}); 

});


$(document).ready(function(){

$('.proj-modal, .proj15-modal, proj16-modal, .proj18-modal, .proj20-modal, .proj26-modal, .proj28-modal, .proj33-modal, .proj41-modal, .proj43-modal, .proj46-modal, .proj57-modal, .proj68-modal, .proj74-modal, .proj75-modal, .proj76-modal, .proj80-modal, .proj82-modal, .proj89-modal, .proj104-modal, .proj111-modal, .proj135-modal, .proj139-modal, .proj140-modal').on('hidden.bs.modal', function(){

    $('.lSGallery').remove();

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
$('html, body').animate({scrollTop: $(target).offset().top}, 800);
return false;
});

jQuery(function($){
   $("#order-phone").mask("(999) 999-9999");   
});


//Calc

$(document).ready(function() {
    $("#numbers-in").keydown(function(event) {
        
        if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||             
            (event.keyCode == 65 && event.ctrlKey === true) ||             
            (event.keyCode >= 35 && event.keyCode <= 39)) {                
                 return;
        }
        else {           
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                event.preventDefault();             }   
        }
    });

    calc = (function() {

        var etag = 0; 
        var slog = 0;  
        var box = 0;

        if (document.getElementById('1floor').checked){
            var etag = 0; 
            var slog = 0;           
        }
      
        if (document.getElementById('2floor').checked){
            if (document.getElementById('full').checked){
                var etag = 16.666666666666;                      
                var slog = 8.33333333333333333;
            }else{
                var etag = 16.666666666666666;
                var slog = 0
            }
        }
         
        if (document.getElementById('mans').checked){
            if (document.getElementById('full').checked){
                var etag = 25;                      
                var slog = 8.33333333333333333;
            }else{
                var etag = 25;
                var slog = 0;
            }
        }
    

        if (document.getElementById('box').checked){
            var box = 0;
        }
        
        if (document.getElementById('clear-comp').checked){
            var box = 25;            
        }
        
        if (document.getElementById('full').checked){
            var box = 45.83333333;            
        }  

        var metres = document.getElementById("numbers-in");
        var itog = metres.value * 24000 - (metres.value * 24000 * etag / 100) + (metres.value * 24000 * box / 100) + (metres.value * 24000 * slog/ 100);
        document.getElementById('rezult').innerHTML = itog.toLocaleString();
        
    }) 
});