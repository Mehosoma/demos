var slider = $('#lightslider').lightSlider({
        item: 1,
        autoWidth: false,       
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


var slider1 = $('#news-lightslider').lightSlider({
        item: 1,
        autoWidth: false,       
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 0,
        loop: true,
        controls: true,
        prevHtml: '',
        nextHtml: ''
});



//VideoResponse
$(document).ready(function(){

    $('iframe').attr('src', $('iframe').attr('src'));

    $('.click').on('click', function(){

        $("#video-main").css({
        'display' : 'block'        
        }); 
        
    });
});

$(document).ready(function(){
    $('.close-video').on('click', function(){

        $("#video-main").css({
        'display' : 'none'        
        }); 

       $('iframe').attr('src', $('iframe').attr('src'));
        
    });
});


$(window).load(function() {

    $(".work-block").animated("fadeInRight", "fadeOut");
    $(".stage").animated("zoomIn", "fadeOut");
    $("#response-main").animated("zoomIn", "fadeOut");
    $(".video-block").animated("fadeInLeft", "fadeOut");
    $(".video-block2").animated("fadeInRight", "fadeOut");

});

$(document).ready(function(){
    $(".popup_form").magnificPopup();   
});