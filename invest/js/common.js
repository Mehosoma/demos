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
    loop:true,    
    mouseDrag:false,
    nav:true,
    margin:0,
    responsive:{

        1200:{
            items:4
        },        
        900:{
            items:3
        },
        480:{
            items:2
        },
        320:{
            items:1
        }

    }
  });

});


$('a[href^="#"]').click(function(){
//Сохраняем значение атрибута href в переменной:
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 800);
return false;
});