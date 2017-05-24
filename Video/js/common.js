

var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100,  
    slidesPerView: 4,
    pagination: '.swiper-pagination',
    loop: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',   
});   


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
            480:{
                items:1
            },
            600:{
                items:1
            }
        }
    })
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
	