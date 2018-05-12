


$(document).ready(function(){

	
	//Open-Close filter
	$('.filter--header').click(function () {
  		$(this).next( ".filter_content" ).slideToggle( "slow" );
  		$(this).toggleClass( "active-filter" ); 	
	});

	//Open-Close block "About Tour"
	$('.slide_link').click(function () {		
  		$(this).parents(".tour_block_main").next( ".tour_about" ).slideDown( "slow" ); 
  		$(this).parents(".tour-block").addClass( "fix-border" );
  		//Scroll
  		$(".tour_about_content").niceScroll({cursorcolor:"#D3652A", cursorborder:"1px solid transparent", background:"#e8e8e8", cursoropacitymin:"1"});
  		$(".tour_about_content").getNiceScroll().resize();
	});

	$('.tour_about_bottom span').click(function () {		
  		$(this).parents(".tour_about").slideUp( "slow" ); 
  		$(this).parents(".tour-block").removeClass( "fix-border" );
  		 $(this).delay(200).queue(function () { 
  			$(this).parent(".tour_about_bottom").prev(".tour_about_content").getNiceScroll().remove();
  		$(this).dequeue();}); 

	});

	//Tabs
	$('.nav-link').click(function (e) {
  		$('.nav-tabs a.active').removeClass('active');
  		$('.nav-tabs a.next').removeClass('next');
  		$(this).addClass('active');  		  		
  		if ($(this).hasClass('last-child')){  			
  			$(this).addClass('l-border');	
  			$(this).prev().addClass('next');	
  		}else{  		
  			$('.nav-tabs a.l-border').removeClass('l-border');
  			$(this).next().addClass('next');
  		}
  		if ($(this).hasClass('hotel-sliders')){
  			$("body .hotel-slider").css('pointer-events','auto');
  		}else{
  			$("body .hotel-slider").css('pointer-events','none');
  		}
	})

	//Change-hotel
	$('.change-hotel a').click(function (e) {
  		$('.change-hotel a.change_active').removeClass('change_active');  		
  		$(this).addClass('change_active');  		  		  		
	})

	//Slider
	$('.slider').slick({
	  		infinite: true,
	  		slidesToShow: 1,
	  		slidesToScroll: 1,   		
	  		arrows: true,
	  		dots: true,
	  		//autoplay: true,
	  		//autoplaySpeed: 3000,	  		
	  		fade: true,
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

	//Slider
	$('.slider-guides').slick({
	  		infinite: true,
	  		slidesToShow: 4,
	  		slidesToScroll: 1,   		
	  		arrows: true,	  			  		
	  		fade: false,
	  		responsive: [
				    {
				      breakpoint: 1401,
				      settings: {
				        slidesToShow: 4,
				        slidesToScroll: 1,				      			        			        
				      }
				    },
				    {
				      breakpoint: 1200,
				      settings: {
				        slidesToShow: 4,
				        slidesToScroll: 1
				      }
				    },
				    {
				      breakpoint: 992,
				      settings: {
				        slidesToShow: 4,
				        slidesToScroll: 1
				      }
				    },
				    {
				      breakpoint: 480,
				      settings: {
				        slidesToShow: 4,
				        slidesToScroll: 1
				      }
				    },
				    // You can unslick at a given breakpoint now by adding:
				    // settings: "unslick"
				    // instead of a settings object
	  			]
	});


	//Slider-hotel
	$('.hotel-slider').slick({
	  		infinite: true,
	  		slidesToShow: 3,
	  		slidesToScroll: 1,   		
	  		arrows: true,	  			  		
	  		fade: false,
	  		responsive: [
				    {
				      breakpoint: 1401,
				      settings: {
				        slidesToShow: 3,
				        slidesToScroll: 1,				      			        			        
				      }
				    },
				    {
				      breakpoint: 1200,
				      settings: {
				        slidesToShow: 4,
				        slidesToScroll: 1
				      }
				    },
				    {
				      breakpoint: 992,
				      settings: {
				        slidesToShow: 4,
				        slidesToScroll: 1
				      }
				    },
				    {
				      breakpoint: 480,
				      settings: {
				        slidesToShow: 4,
				        slidesToScroll: 1
				      }
				    },
				    // You can unslick at a given breakpoint now by adding:
				    // settings: "unslick"
				    // instead of a settings object
	  			]
	});

	//Смена слайдера-отеля при клике на категории 
	$('.change-hotel a').on('click',function(e){
  		e.preventDefault();   		  		
    	$('.hotel-slider').each(function(){
      	$(this).removeClass('active-hotel-slider')
    	});
  
   		var visible = $(this).attr('href');   		
   		$(visible).delay(300).addClass('active-hotel-slider');  
   	});

	//Range-Sliders
	var handlesSlider = document.getElementById('slider-range');

		noUiSlider.create(handlesSlider, {
			start: [ 20000, 80000 ],
			connect: true,
			range: {
				'min': [  1000 ],
				'max': [ 100000 ]
		},
		format: wNumb({
			decimals: 0,		
		})

	});

	var snapValues = [
		document.getElementById('handler-value'),
		document.getElementById('handler-value-upper')
	];

	handlesSlider.noUiSlider.on('update', function( values, handle ) {
		snapValues[handle].innerHTML = values[handle];
	});


	var nonLinearStepSlider = document.getElementById('snap-range');

	noUiSlider.create(nonLinearStepSlider, {
		start: [ 5, 10 ],
		connect: true,
		range: {
			'min': [     3 ],			
			'max': [ 15 ]
		},
		format: wNumb({
			decimals: 0,		
		})
	});

	var snapValues1 = [
		document.getElementById('snap-value'),
		document.getElementById('snap-value-upper')
	];

	nonLinearStepSlider.noUiSlider.on('update', function( values, handle ) {
		snapValues1[handle].innerHTML = values[handle];
	});


});


