jQuery(function($){ 
    $("input[name='disclaim']").click(function() {
        if (this.checked) {
       		$('#block').removeClass('disabled');
   		} else {
       		$('#block').addClass('disabled');
   		}         
    }); 
});
