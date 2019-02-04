//Show-hide filters
$(document).ready(function(){
    $('.filters-block_header').on('click',function(e){
        e.preventDefault();        
          $(this).next('.filters-block_hidden').animate({
              height: 'toggle'
            }, 300, function() {
          });        
    });
});


//Show-hide dropdown
$(document).ready(function(){

	if ($(window).width() > 767) {
	    $('.menu-link').on('click',function(e){
	        e.preventDefault();

	        if($(this).next('.drop-menu').hasClass('is-open')){
	        	$('.drop-menu').css('display','none');
	        	$('.drop-menu').removeClass('is-open');
	        	$('.body-overflow').removeClass('body-overflow-active');
	        	$(this).next('.drop-menu').removeClass('is-open'); 
	        	$(this).removeClass('is-open-link'); 
	        }else{
	        	$('.drop-menu').css('display','none');
	        	$('.drop-menu').removeClass('is-open');
	        	$('.menu-link').removeClass('is-open-link');
	         	$('.body-overflow').addClass('body-overflow-active');
	         	$(this).next('.drop-menu').addClass('is-open');
	         	$(this).next('.drop-menu').css('display','flex');
	         	$(this).addClass('is-open-link');
	        }
	    });

	     $('.body-overflow').on('click',function(e){

	     	$('.drop-menu').css('display','none');
	        $('.drop-menu').removeClass('is-open');
	        $('.menu-link').removeClass('is-open-link')
	        $('.body-overflow').removeClass('body-overflow-active');
	     });
	} else {

	}
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