jQuery(function($){ 
    $("input[name='disclaim']").click(function() {
        if (this.checked) {
       		$('#block').removeClass('disabled');
   		} else {
       		$('#block').addClass('disabled');
   		}         
    }); 
});

$(window).load(function() {

	$('.polygon-left').css({'transform':'translateX(0px) translateY(0px)', 'opacity':'1'});
	$('.polygon-right').css({'transform':'translateX(0px) translateY(-0px)', 'opacity':'1'});

});


$(window).scroll(function() {
	if ($(this).scrollTop() > 200){  
    
    	$('.polygon-left').css({'transform':'translateX(-500px) translateY(175px)', 'opacity':'0'});
    	$('.polygon-right').css({'transform':'translateX(500px) translateY(-250px)', 'opacity':'0'});
 	
 	}
 		else{

 		$('.polygon-left').css({'transform':'translateX(0px) translateY(0px)', 'opacity':'1'});
 		$('.polygon-right').css({'transform':'translateX(0px) translateY(-0px)', 'opacity':'1'});
   
  	}
});


$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox({
    	
    });
});


