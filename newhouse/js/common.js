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
                    
                  }
            },

            {
                breakpoint:992,
                settings: {
                    item:2,
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