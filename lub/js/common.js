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
  		autoplay: true, 		
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



$(document).ready(function(){

	//Show-hide menu	
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

    //Hover 
    if ($(window).width() < 992) {
	    $(".right_menu").hover(function() {
	 		$(this).prev('.nav_link').css('background-color','transparent');
	 		},function() {
	 		$(this).prev('.nav_link').css('background-color','transparent');
	 	});
		}else{
			$(".right_menu").hover(function() {
	 		$(this).prev('.nav_link').css('background-color','#0086d1');
	 		},function() {
	 		$(this).prev('.nav_link').css('background-color','#008ddc');
	 	});
	}

	if ($(window).width() < 992) {
	    	
		}else{
			$(".nav_list").hover(function() {
		 	$(this).next('.nav_list').addClass('no-border');
		 	},function() {
		 	$(this).next('.nav_list').removeClass('no-border');
	 	});
	}


	//Submenu animation
	$(".hover_drop").on('click', function (e) {
    	e.preventDefault();
    	$('.right_menu').addClass('show')
    });

	  $(".back").on('click', function (e) {
    	e.preventDefault();
      $('.right_menu').removeClass('show')
    });

});


jQuery(function($){
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $("#select_form, #select_page "); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.activetrigger').attr('class','trigger'); // скрываем его
			$('.dropdownvisible').attr('class','dropdownhidden'); // скрываем его
		}
	});
});