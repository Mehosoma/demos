$.noConflict();

	jQuery(function($){
		$('.popup').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			closeBtnInside: false,
			fixedContentPos: true,
			mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
			image: {
				verticalFit: true
			},
			zoom: {
				enabled: true,
				duration: 300 // don't foget to change the duration also in CSS
			}
		});
	});


  
  	jQuery(function($){
		$(".popup_form").magnificPopup();
	});

	jQuery(function($){
		$("#accordion").accordion();
	}); 

	jQuery(function($){
		$( "#datepicker" ).datepicker({
      changeMonth: true,
      changeYear: true
	}); 
	}); 

	jQuery(function($){
		$( "#datemen" ).datepicker({
      changeMonth: true,
      changeYear: true
	}); 
	}); 

	jQuery(function($){
		$( "#datenachprep" ).datepicker({
      changeMonth: true,
      changeYear: true
	}); 
	});

	jQuery(function($){
		$( "#dateprepkon" ).datepicker({
      changeMonth: true,
      changeYear: true
	}); 
	}); 

	jQuery(function($){
		$( "#datenach" ).datepicker({
      changeMonth: true,
      changeYear: true
	}); 
	}); 

	jQuery(function($){
		$( "#datekon" ).datepicker({
      changeMonth: true,
      changeYear: true
	}); 
	}); 

	jQuery(function($){
		$( "#datenachreak" ).datepicker({
      changeMonth: true,
      changeYear: true
	}); 
	}); 

	jQuery(function($){
		$( "#datekonecreak" ).datepicker({
      changeMonth: true,
      changeYear: true
	}); 
	}); 



