$(window).load(function(){
   if($(window).width() > 768)
   {
        intra.checkScrollParallax();
   }
});
$(window).on('scroll', function() {
   if($(window).width() > 768)
   {
        intra.checkScrollParallax();
   } 
});
$(window).resize(function(){
   if($(window).width() > 768)
   {
        intra.checkScrollParallax();
        intra.fixNavMobile();
   } 
});

intra = {

    checkScrollParallax: function()
	{	
		no_of_elements = 0;
        $('.parallax').each(function() 
		{
			var $elem = $(this);
			if(intra.isElementInViewport($elem))
			{
				var parent_top = $elem.offset().top;          
				var window_bottom = $(window).scrollTop();
				var $image = $elem.find('.parallax-img');       	  
				oVal = ((window_bottom - parent_top) / 3);
				$image.css({'top':oVal + 'px'});    
			}
		});
    },
	
    fixNavMobile: function()
	{	
		$('.navbar-collapse.collapse').removeClass('in');
    },
	
	isElementInViewport: function(elem) 
	{
		var $elem = $(elem);

		// Get the scroll position of the page.
		var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
		var viewportTop = $(scrollElem).scrollTop();
		var viewportBottom = viewportTop + $(window).height();

		// Get the position of the element on the page.
		var elemTop = Math.round( $elem.offset().top );
		var elemBottom = elemTop + $elem.height();

		return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
	},
	
}


// Css animation

$(window).load(function() {

	$(".anim_phone").animated("fadeInLeft", "fadeOut");	

});


// Сбор иконок в слайдер при масштабировании

$(window).load(function() {
 
 	var windowWidth = $(window).width();
    if(windowWidth >= 768){
    	$(".blocks").removeClass("slick");
    	$(".item").removeClass("slick_content");
    	$(".blocks").removeClass("anim_right");
    	$(".anim1").addClass("anim_right");
    	$(".anim2").addClass("anim_right2");
    	$(".anim3").addClass("anim_right3");
    	$(".anim_right").animated("fadeInRight", "fadeOut");
    	$(".anim_right2").animated("fadeInRight", "fadeOut");
		$(".anim_right3").animated("fadeInRight", "fadeOut");
		$(".blocks").removeClass("anim_left");
    	$(".anim4").addClass("anim_left");
    	$(".anim5").addClass("anim_left2");
    	$(".anim6").addClass("anim_left3");
    	$(".anim_left").animated("fadeInLeft", "fadeOut");
    	$(".anim_left2").animated("fadeInLeft", "fadeOut");
		$(".anim_left3").animated("fadeInLeft", "fadeOut");

    		
    }
    else {
    	$(".anim_right").animated("fadeInRight", "fadeOut");
    	$(".anim_left").animated("fadeInLeft", "fadeOut");
    }


    $('.slick').slick({
        accessibility: false,  
        arrows: false,
        dots: true,
        fade: true,
    });      

});

window.addEventListener("orientationchange", function(e) {
		 e.preventDefault();
    	$('body,html').animate({scrollTop: 0}, 400);    
    	location.reload();
    }, false);




//Показ формы при клике на ссылку "Мероприятия"

	$('.item-2').click(function (e){
		var item_2 = $(this);
		if ($(this).hasClass('open')){
			e.preventDefault();
			$('.hidden-page').fadeOut(60, function () {
                    $('.hidden-page').css({'opacity':'0', 'display':'none'});
                  });
			$(this).removeClass('open');
			$('.navbar-collapse').removeClass("in");
			$('.page-head').css({'opacity':'1', 'display':'block'});
			$('.page-cons').css({'opacity':'1', 'display':'block'});
			$('.page-exp').css({'opacity':'1', 'display':'block'});
			$('.page-obsl').css({'opacity':'1', 'display':'block'});
			$('.page-tren').css({'opacity':'1', 'display':'block'});
			$('.page-sopr').css({'opacity':'1', 'display':'block'});
			$('.page-mero').css({'opacity':'1', 'display':'block'});
			$('.page-mobi').css({'opacity':'1', 'display':'block'});
			$('.event').css({'opacity':'1', 'display':'block'});
			$('.events-list').css({'opacity':'1', 'display':'block'});
            $('.event').html(newContent);
		} else {
			$(this).addClass('open');
			$('.navbar-collapse').removeClass("in");
				var windowWidth = $(window).width();
	    		if(windowWidth >= 480){
	    		} else{
					$('.page-head').css({'opacity':'0', 'display':'none'});
					$('.page-cons').css({'opacity':'0', 'display':'none'});
					$('.page-exp').css({'opacity':'0', 'display':'none'});
					$('.page-obsl').css({'opacity':'0', 'display':'none'});
					$('.page-tren').css({'opacity':'0', 'display':'none'});
					$('.page-sopr').css({'opacity':'0', 'display':'none'});
					$('.page-mero').css({'opacity':'0', 'display':'none'});
					$('.page-mobi').css({'opacity':'0', 'display':'none'});
					$('.page-mobi').css({'opacity':'0', 'display':'none'});
					$('.event').css({'opacity':'0', 'display':'none'});
					$('.events-list').css({'opacity':'0', 'display':'none'});
				}
			$('.hidden-page').fadeIn(60, function () {
                    $('.hidden-page').css({'opacity':'1', 'display':'block'});
                  });
		}
	});

// Slider

$(document).ready(function(){
	$('#lightslider').lightSlider({
  		item: 1,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 10,
        loop: true,
        controls: true,
        prevHtml: '',
        nextHtml: '',
        gallery: true,
        adaptiveHeight: true,
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