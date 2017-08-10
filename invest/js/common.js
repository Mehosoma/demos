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

// Выравниваем блоки по высоте
$(document).ready(function(){
      $('.col-eq').colequalizer();   
});

$(document).ready(function(){
    $(".popup_form").magnificPopup();
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    center: true,
    items:4,
    loop:true,
    mouseDrag:false,
    nav:true,
    margin:0,
    responsive:{
        600:{
            items:4
        }
    }
  });

});