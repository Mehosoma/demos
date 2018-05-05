$(function() {

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

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
$('.slider').slick({
  		infinite: true,
  		slidesToShow: 2,
  		slidesToScroll: 1,  		
  		arrows: true,
  		 responsive: [
			    {
			      breakpoint: 1401,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1			        			        
			      }
			    },
			    {
			      breakpoint: 1200,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 992,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			    // You can unslick at a given breakpoint now by adding:
			    // settings: "unslick"
			    // instead of a settings object
  			]
	});

	
	//Show/Hide footer block
	$('.exit').on('click',function(e){
        e.preventDefault(); 

        $( ".footer-marker-wrapper" ).toggleClass( "active-marker" );
        $('.footer-marker-image').toggleClass( "dis" );
    
    });  
	
    $('.footer-marker-image').on('click',function(e){
        e.preventDefault(); 

        $( ".footer-marker-wrapper" ).toggleClass( "active-marker" );        
        $('.footer-marker-image').toggleClass( "dis" );
    
    });   

    //Mask phone
	$(".main-phone").mask("+7(999) 999-9999");


});