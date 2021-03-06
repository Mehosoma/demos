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

	// Выравниваем блоки по высоте
    var windowWidth = $(window).width();
    if(windowWidth >= 768){
   		$('.col-eq').colequalizer();
    } else {
        false
    }

	//Date-Time Picker
	  $('#datetimepicker12').datetimepicker({
	      	inline: true,
	      	format: 'YYYY-MM-DD',
	      	locale: 'ru',
	      	icons: {            
	        previous: '',
	        next: '',       
	    	},
	    });

	//Play-click
	playh = function() {
		 $('.play').css({'display' : 'none'});
	} 

	$('.slider').slick({
  		infinite: true,
  		slidesToShow: 4,
  		slidesToScroll: 1,
  		arrows: true,
  		 responsive: [
			    {
			      breakpoint: 1401,
			      settings: {
			        slidesToShow: 3,
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

});

