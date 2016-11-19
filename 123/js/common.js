$(function() {

	$(window).scroll(function() {
	if ($(this).scrollTop() > 300){
	$('.sticky2').css({'height':'116px'});
	$('.sticky2').css({'overflow':'visible'});
	}
	else{
	$('.sticky2').css({'height':'0px'});
	$('.sticky2').css({'overflow':'hidden'});
	}
	});	
	
});

