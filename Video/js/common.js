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
    slidesPerView: 5,
    pagination: '.swiper-pagination',
    loop: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
});   


$(document).ready(function(){
    $(".popup_form").magnificPopup();
});


	