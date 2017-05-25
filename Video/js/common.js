$(document).ready(function(){
    $(".popup_form").magnificPopup();
    $('.col-eq').colequalizer(); 
});

$('a[href^="#"]').click(function(){
//Сохраняем значение атрибута href в переменной:
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 800);
return false;
});

$('.typeit').typeIt({
      speed: 50,
});


//VideoResponse
$(document).ready(function(){

    $('iframe').attr('src', $('iframe').attr('src'));

});


$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        margin:10,
        video:true,
        videoWidth: 500,
        videoHeight: 280,
        lazyLoad:true,
        center:false,
        nav: true,
        dots: true,       
        navContainer: '.slider-arrow',
        responsive:{
        	320:{
                items:1,
                videoWidth: 290,
                videoHeight: 200,
            },

            480:{
                items:1,
                
                videoHeight: 250,
            },
            700:{
                items:1,
              
                videoHeight: 300,
            },
            
            768:{
                items:1,
              	videoWidth: 372,
                videoHeight: 239,  
            },

             1200:{
                items:1,
              	videoWidth: 500,
                videoHeight: 280,  
            },
        }
    })
});


// Slider
// Slider
var slider = $('#lightSlider').lightSlider({
    controls: false,
    loop: true,
    item: 4,
    slideMove: 1,
    responsive : [
            {
                breakpoint:1500,
                settings: {
                    item:4,
                    slideMove:1,
                    
                  }
            },

            {
                breakpoint: 1200,
                settings: {
                    item:4,
                    slideMove:1,
                    
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




 $(document).ready(function(){
        // Add minus icon for collapse element which is open by default
        $(".collapse.in").each(function(){
        	$(this).siblings(".panel-heading").css('background-image', 'url(img/arrow-up.png)');
        });
        
        // Toggle plus minus icon on show hide of collapse element
        $(".collapse").on('show.bs.collapse', function(){
        	$(this).siblings(".panel-heading").css('background-image', 'url(img/arrow-up.png)');
        }).on('hide.bs.collapse', function(){
        	$(this).siblings(".panel-heading").css('background-image', 'url(img/arrow-down.png)');
        });
    }); 
	