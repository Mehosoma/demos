$(function() {

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};
});

$(document).ready(function(){
    $(".popup_form").magnificPopup();
});


$(document).ready(function () {
   var tileSlider = $('.swiper-container');
    tileSlider.each(function(){
    var mySwiper = new Swiper(this, {
             
        pagination: $(this).parent().find('.swiper-pagination')[0],
        paginationType: 'fraction',
        nextButton: $(this).parent().find('.swiper-button-next')[0],
        prevButton: $(this).parent().find('.swiper-button-prev')[0]
    });
    }); 
    
});


