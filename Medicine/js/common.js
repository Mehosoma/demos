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

jQuery(function($){ 
    $("input[name='reac_ser']").click(function() {
        var test = $(this).val();
        if (test=="reac-ser-death") {
       		document.getElementById("date-death").style.display='block';
   		} else {
       		document.getElementById("date-death").style.display='none';
   		}         
    }); 
});

jQuery(function($){ 
    $("input[name='reac_ser']").click(function() {
        var test = $(this).val();
        if (test=="reac-ser-oth-inf") {
       		document.getElementById("reac-ser-oth-info").style.display='block';
   		} else {
       		document.getElementById("reac-ser-oth-info").style.display='none';
   		}         
    }); 
});

jQuery(function($){ 
    $("input[name='info-doc']").click(function() {
        var test = $(this).val();
        if (test=="info-doc-yes") {
       		document.getElementById("doc-load").style.display='block';
   		} else {
       		document.getElementById("doc-load").style.display='none';
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


//Hide-show block in action section

jQuery(function($){ 
    $("input[name='disclaim']").click(function() {
        if (this.checked) {
       		$('#block').removeClass('disabled');
   		} else {
       		$('#block').addClass('disabled');
   		}         
    }); 
});

jQuery(function($){ 
    $("input[name='agree']").click(function() {
        if (this.checked) {
       		$('#block-form').removeClass('disabled');
   		} else {
       		$('#block-form').addClass('disabled');
   		}         
    }); 
});


//Doctor-Patien choice

jQuery(function($){ 
    $("input[name='choice']").click(function() {
        var test = $(this).val();
        if (test=="patient") {
       		document.getElementById("fn-main-form").style.display='block';
       		document.getElementById("post-form").style.display='block';
       		document.getElementById("number-history").style.display='none';
       		document.getElementById("trade-name").style.display='none';
       		document.getElementById("active-subs").style.display='none';
       		document.getElementById("diag-prep").style.display='none';
       		document.getElementById("active-subs-others").style.display='none';
       		document.getElementById("for-doctor").style.display='none';
       		document.getElementById("for-doctor2").style.display='none';
       		document.getElementById("for-doctor3").style.display='none';
       		document.getElementById("for-doctor4").style.display='none';
       		document.getElementById("for-doctor5").style.display='none';

   		} else {
       		document.getElementById("fn-main-form").style.display='block';
       		document.getElementById("post-form").style.display='block';
       		document.getElementById("number-history").style.display='block';
       		document.getElementById("trade-name").style.display='block';
       		document.getElementById("active-subs").style.display='block';
       		document.getElementById("diag-prep").style.display='block';
       		document.getElementById("active-subs-others").style.display='block';
       		document.getElementById("for-doctor").style.display='block';
       		document.getElementById("for-doctor2").style.display='block';
       		document.getElementById("for-doctor3").style.display='block';
       		document.getElementById("for-doctor4").style.display='block';
       		document.getElementById("for-doctor5").style.display='block';
   		}         
    }); 
});