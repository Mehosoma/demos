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

	jQuery(function($){
		$( "#datedeath" ).datepicker({
      changeMonth: true,
      changeYear: true
	}); 
	}); 

//AccordeonScript
		jQuery(function($){
		$('.accordion dt').on('click', function () {
		        var current_dt = $(this);
		        
		        //dd of just clicked dt not active - direct sibling
		        if (!$(this).next('dd').hasClass('active')){
		            //call back function interprets this as selected $('dd')

		            //checking if any other sibling dd's active
		            if (current_dt.siblings('dd.active').length) {
		                //find dd with a class of active before sliding up
		                current_dt
		                  .siblings('dd.active')
		                  .slideUp(function() {
		                  	current_dt
		                      .next('dd')
		                      .slideDown()
		                      .addClass('active');
		                	})
		                  .removeClass('active')
		                  .find('dd.active')
		                  	.hide()
		                  	.removeClass('active');

		             } else {
		                current_dt.next('dd').slideDown().addClass('active');       
		             }
		        } else {
		            //dd of just clicked dt is active - close form
		            current_dt.next('dd').slideUp().removeClass('active');
		        }
		    });
		  });

//Hide-Visible Block
	function Selected(a) {
  		var label = a.value;
    	if (label=="women") {
       		document.getElementById("pregnant").style.display='block';
       		document.getElementById("pregnant-date").style.display='block';
       		document.getElementById("menstruation-date").style.display='block';
   		} else {
       		document.getElementById("pregnant").style.display='none';
       		document.getElementById("pregnant-date").style.display='none';
       		document.getElementById("menstruation-date").style.display='none';
   		} 
	}

//Disable-Enable Block
jQuery(function($){ 
    $("input[name='place']").click(function() {
        var test = $(this).val();
        if (test=="place-med") {
       		$('input[name="med-name"]').attr("disabled",false);
   		} else {
       		$('input[name="med-name"]').attr("disabled",true);
   		}         
    }); 
});

//Hide-show block in action section
jQuery(function($){ 
    $("input[name='action-react-3']").click(function() {
        if (this.checked) {
       		document.getElementById("a-r-1").style.display='block';
   		} else {
       		document.getElementById("a-r-1").style.display='none';
   		}         
    }); 
});

jQuery(function($){ 
    $("input[name='action-react-4']").click(function() {
        if (this.checked) {
       		document.getElementById("a-r-2").style.display='block';
   		} else {
       		document.getElementById("a-r-2").style.display='none';
   		}         
    }); 
});

jQuery(function($){ 
    $("input[name='action-react-5']").click(function() {
        if (this.checked) {
       		document.getElementById("a-r-3").style.display='block';
   		} else {
       		document.getElementById("a-r-3").style.display='none';
   		}         
    }); 
});

jQuery(function($){ 
    $("input[name='action-react-6']").click(function() {
        if (this.checked) {
       		document.getElementById("a-r-4").style.display='block';
   		} else {
       		document.getElementById("a-r-4").style.display='none';
   		}         
    }); 
});