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
	$(".anim_cons").animated("fadeInRight", "fadeOut");
	$(".anim_expert").animated("fadeInLeft", "fadeOut");
	$(".anim_trening").animated("fadeInRight", "fadeOut");
	$(".anim_sopr").animated("fadeInLeft", "fadeOut");
	$(".anim_mobile").animated("fadeInRight", "fadeOut")

});


$(window).resize(function() {
 
 	var windowWidth = $(window).width();
    if(windowWidth >= 768){
    	$(".blocks").removeClass("slick");
    	$(".item").removeClass("slick_content"); 
    	location.reload();  	
    }
    else {
    	$(".blocks").addClass("slick");
    	$(".item").addClass("slick_content");

    }


    $('.slick').slick({
        accessibility: false,  
        arrows: false,
        dots: true,
        fade: true,
    });      

});

