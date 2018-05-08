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
  		slidesToShow: 1,
  		slidesToScroll: 1,   		
  		arrows: true,
  		 responsive: [
			    {
			      breakpoint: 1401,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        adaptiveHeight: false			        			        
			      }
			    },
			    {
			      breakpoint: 1200,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 992,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    },
			    // You can unslick at a given breakpoint now by adding:
			    // settings: "unslick"
			    // instead of a settings object
  			]
	});
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
        $('.top_nav_bg').toggleClass('menu-tablet-open');
        $('.top-menu-toggle p').toggleClass('green-color');
        $('.desktop_menu').toggleClass('w-border');               
    });
});