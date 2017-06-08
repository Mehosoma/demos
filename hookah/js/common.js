$(document).ready(function(){
    $(".popup_form").magnificPopup();
    $('.col-eq').colequalizer(); 
});

$(document).ready(function(){

    if ($(window).width() > 1600) {

            function setHeiHeight() {
    $('.slider-wrap, .slider-wrap li, .slide-overlay').css({
        height: $(window).height() - 280 + 'px' 
    });
}
setHeiHeight();  
$(window).resize( setHeiHeight ); 
            
        } else{

                function setHeiHeight() {
    $('.slider-wrap, .slider-wrap li, .slide-overlay').css({
        height: $(window).height() - 160 + 'px' 
    });
}
setHeiHeight();  
$(window).resize( setHeiHeight ); 
        }




});


$(document).ready(function(){
// Slider
var slider = $('.slider-wrap ul').lightSlider({
    controls: false,
    loop: true,
    item: 1,
    slideMove: 1,
    slideMargin: 0,
    enableDrag: false,
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

});
