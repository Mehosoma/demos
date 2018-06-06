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

	//Services-Slider
	$('.slider').slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,  		
  		arrows: true,
  		fade: true,
  		cssEase: 'linear',
  		prevArrow: $('.slick-prev'),
       	nextArrow: $('.slick-next'),
  		 responsive: [
			    {
			      breakpoint: 1401,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1			        			        
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

	//Clider Counter
	var $status = $('.pagingInfo p');
	var $current = $('.current_slide');
    var $slickElement = $('.projects-slider');    
    var separator = " ";

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;        
        $current.text(i).after(" ") + $status.text('/ ' + slick.slideCount);
        
    });

    //Projects Slider
	$('.projects-slider').slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,  		
  		arrows: true,
  		fade: true,
  		cssEase: 'linear',
  		prevArrow: $('.slick-prev1'),
       	nextArrow: $('.slick-next1'),
  		 responsive: [
			    {
			      breakpoint: 1401,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1			        			        
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

	//InfoButton
	$('.more_button').click(function (e) {
  		$(this).parent('.more').parent('.services-right').children('.image_wrapper').toggleClass('open-tab');
  		$(this).toggleClass('open-button')
  		$(this).parent('.more').parent('.services-right').children('.image_wrapper').children('.right_content').slideToggle();
  		if ($(window).width() < 768){
  			$('.services .slide_arrows').toggleClass('vis-arr');
  		}else{

  		}
	})

	//Next Projects Click
	$('.next_pr p').on( "click", function() {
		$('.projects-wrapper .slick-next1').eq( $(this).index() ).click();
		$('iframe').attr('src', $('iframe').attr('src'));
	});

	//ScrollToSection
	$('.block-link a[href^="."]').click(function(){
	  //Сохраняем значение атрибута href в переменной:
	  var target = $(this).attr('href');
	  $('html, body').animate({scrollTop: $(target).offset().top-100}, 1000);
		return false;
	});

	//ModalWindow
	$(document).ready(function(){
    	$('.popup_form').magnificPopup({
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
	});

	//Video
	$('.v-click').on('click', function(){
       	$(".video-main").fadeIn(1000);
        $(".projects .slide_arrows").addClass('vis-arr');        
        $(this).css('display','none');
    });

    $('.close-vid').on('click', function(){
        $(".video-main").fadeOut(1000, function(){
        	$('iframe').attr('src', $('iframe').attr('src'))
        });
        $(".projects .slide_arrows").removeClass('vis-arr');                
        $('.v-click').css('display','block');
        
    });

    $('.projects-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){    	
    	$(".video-main").fadeOut(2000);
        $(".projects .slide_arrows").removeClass('vis-arr');                
        $('.v-click').css('display','block');
        $('iframe').attr('src', $('iframe').attr('src'));       
    });

    //ScrollButton
     $('.scroll-button').click(function() {
        var leftPos = $('.menu-wrapper').scrollLeft();
        $('.menu-wrapper').animate({scrollLeft: leftPos + 200}, 800);
     });

     //ChangeImageOnTablet
     if ($(window).width() < 1024) {
     	$('.first-image').attr('src', 'img/slide-1-tablet.png');
     	$('.second-image').attr('src', 'img/slide-2-tablet.png');
     	$('.third-image').attr('src', 'img/slide-3-tablet.png');
     	$('.four-image').attr('src', 'img/slide-4-tablet.png');
     	$('.five-image').attr('src', 'img/slide-5-tablet.png');
     	$('.six-image').attr('src', 'img/slide-6-tablet.png');
     	$('.foto-ceo').attr('src', 'img/foto-tablet.png');
     }else{

     }

     //Burger
     $('.burger').click(function() {      
        $('.mobile-hidden').slideToggle();
     });


});

//Disclaim
jQuery(function($){ 
    $("input[name='disclaim']").click(function() {
        if (this.checked) {
            $('.button_form').removeClass('disabled');
        } else {
            $('.button_form').addClass('disabled');
        }         
    }); 
});