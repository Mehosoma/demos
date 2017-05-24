var slider = $('#video-slider').lightSlider({
        item: 1,
        autoWidth: true,       
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 0,
        loop: true,
        controls: true,
        prevHtml: '',
        nextHtml: ''
});

$('#goToPrevSlide').on('click', function () {
    slider.goToPrevSlide();
});
$('#goToNextSlide').on('click', function () {
    slider.goToNextSlide();
});


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
  $('#goToPrevSlide').on('click', function() {
    
    $('.play-main').each(function(){
        var el_src = $(this).attr("src");
        $(this).attr("src",el_src);
      });   
	});
});

$(document).ready(function() {
  $('#goToNextSlide').on('click', function() {
    
    $('.play-main').each(function(){
        var el_src = $(this).attr("src");
        $(this).attr("src",el_src);
      });
    });
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
	