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


$(window).load(function(){
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


$('.selectpicker').selectpicker({
  style: 'btn-info',
  size: 4,
});

$(document).ready(function(){
    $('.ejuice-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      fade: false,
      dots: true,
      appendArrows: ".arrows", 
      prevArrow: ".slick-prev",
      nextArrow: ".slick-next",     
      centerMode: false,
    });   
});


$(document).ready(function(){

    $('.catering-block').on('click',function(e){
                
        if($(this).hasClass('active-ca-block')) {

        }
    else {   

        $('body .catering-block').removeClass('active-ca-block');
         
         $(this).addClass('active-ca-block');

        }
  e.preventDefault();
});

});

$(document).ready(function(){
 $('.btn-group').on('click',function(i){

        if($(this).hasClass('passiv')) {
            $(this).removeClass('passiv'),
            $(this).addClass('active-field');
            }
        else { 
        }
  i.preventDefault();
});
});

$(document).ready(function(){
 $('.picker-one').on('click',function(i){
        $(".color-line").css("width", '165px' );
        $(".one .circle").css("background-color", '#49a1c0');
        $(".one span").css("color", '#49a1c0');
  i.preventDefault();
});

 $('.picker-two').on('click',function(i){
         $(".one .circle").css("background-color", '#49a1c0');
        $(".one span").css("color", '#49a1c0');
        $(".color-line").css("width", '550px' );
        $(".two .circle").css("background-color", '#49a1c0');
        $(".two span").css("color", '#49a1c0');
  i.preventDefault();
});

  $('.picker-three').on('click',function(i){
         $(".one .circle").css("background-color", '#49a1c0');
        $(".one span").css("color", '#49a1c0');
        $(".color-line").css("width", '880px' );
        $(".two .circle").css("background-color", '#49a1c0');
        $(".two span").css("color", '#49a1c0');
         $(".three .circle").css("background-color", '#49a1c0');
        $(".three span").css("color", '#49a1c0');
  i.preventDefault();
});

  $('.picker-four').on('click',function(i){
         $(".one .circle").css("background-color", '#49a1c0');
        $(".one span").css("color", '#49a1c0');
        $(".color-line").css("width", '100%' );
        $(".two .circle").css("background-color", '#49a1c0');
        $(".two span").css("color", '#49a1c0');
         $(".three .circle").css("background-color", '#49a1c0');
        $(".three span").css("color", '#49a1c0');
        $(".four .circle").css("background-color", '#49a1c0');
        $(".four span").css("color", '#49a1c0');
  i.preventDefault();
});

});


