$(document).ready(function(){

    $(".popup_form").magnificPopup();

	$('#lightslider').lightSlider({
  		item: 1,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 0,
        loop: true,
        controls: true,
        prevHtml: '',
        nextHtml: '',  
        responsive : [
        	{
                breakpoint:2560,
                settings: {
                    item:1,
                    slideMove:1,
                    enableDrag: false                
                  }
            },        

            {
                breakpoint:1199,
                settings: {
                    item:1,
                    slideMove:1                   
                  }
            },

        	{
                breakpoint:992,
                settings: {
                    item:1,
                    slideMove:1                                     
                  }
            },
            {
                breakpoint:768,
                settings: {
                    item:1,
                    slideMove:1,
                    controls: false,                                 
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1,                   
                    controls: false,
                  }
            }
        ]        
	});

    $('#feed-slider').lightSlider({
        item: 1,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 0,
        loop: true,
        controls: true,
        prevHtml: '',
        nextHtml: '',  
        responsive : [
            {
                breakpoint:2560,
                settings: {
                    item:1,
                    slideMove:1,
                    thumbItem:7
                  }
            },

            {
                breakpoint:1500,
                settings: {
                    item:1,
                    slideMove:1,                  
                  }
            },

            {
                breakpoint:1199,
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
                    controls: false,                 
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1,                    
                    controls: false,
                  }
            }
        ]        
    });
	
});