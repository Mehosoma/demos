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

//Смена класса при клике для сортировки
$(document).ready(function(){
	$('.first-viz').on('click',function(e){
    	e.preventDefault();
    	$('.last-viz').removeClass('sort-active-down');
    	$(this).addClass('sort-active');
	});
});

$(document).ready(function(){
	$('.last-viz').on('click',function(e){
    	e.preventDefault();
    	$('.first-viz').removeClass('sort-active');
    	$(this).addClass('sort-active-down');
	});
});

