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
	$('.sendfile').on('change', function() {
	  var splittedFakePath = this.value.split('\\');
	  $('.file_name').text(splittedFakePath[splittedFakePath.length - 1]);
	});

//Show-hide menu
$(document).ready(function(){
    $('.click-mobile').on('click',function(e){
        e.preventDefault();        
          $('.main-menu').animate({
              height: 'toggle'
            }, 600, function() {
          });         
        $("header .menu-toggle-button").toggleClass('is-active');                
    });
});
});
