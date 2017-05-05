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

// Slider
$(document).ready(function(){
    $('#slider').lightSlider({
        item: 4,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 10,
        loop: true,
        controls: true,
        prevHtml: '',
        nextHtml: '',  
        responsive : [
            {
                breakpoint:2560,
                settings: {
                    item:4,
                    slideMove:1,                   
                  }
            },

            {
                breakpoint:1500,
                settings: {
                    item:4,
                    slideMove:1,
                    
                  }
            },

            {
                breakpoint: 1200,
                settings: {
                    item:4,
                    slideMove:1,
                    
                  }
            },

            {
                breakpoint:992,
                settings: {
                    item:3,
                    slideMove:1,
                                       
                  }
            },
            {
                breakpoint:768,
                settings: {
                    item:2,
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
    
});