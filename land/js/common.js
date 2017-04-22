$(document).ready(function(){
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
                    slideMove:1,
                    thumbItem:5
                  }
            },

        	{
                breakpoint:992,
                settings: {
                    item:1,
                    slideMove:1,
                    thumbItem:4                   
                  }
            },
            {
                breakpoint:768,
                settings: {
                    item:1,
                    slideMove:1,
                    thumbItem:3                  
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1,
                    thumbItem:3,
                    controls: true,
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
                    thumbItem:6
                  }
            },

            {
                breakpoint:1199,
                settings: {
                    item:1,
                    slideMove:1,
                    thumbItem:5
                  }
            },

            {
                breakpoint:992,
                settings: {
                    item:1,
                    slideMove:1,
                    thumbItem:4                   
                  }
            },
            {
                breakpoint:768,
                settings: {
                    item:1,
                    slideMove:1,
                    thumbItem:3                  
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1,
                    thumbItem:3,
                    controls: true,
                  }
            }
        ]        
    });
	
});