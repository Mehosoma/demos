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
    center:true,
    loop:true,    
    mouseDrag:true,
    nav:true,
    smartSpeed:1000,
    autoWidth:true,   
    margin:0,
    responsive:{

        1200:{
            items:2
        },        
        900:{
            items:3
        },
        480:{
            items:3
        },
        320:{
            items:3
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


//Add block in masters section
$(document).ready(function(){
    $('.hc-show').on('click',function(e){
        e.preventDefault();        
        $(".hidden-content").slideDown("normal"); 
    });
});