//Owl
$(document).ready(function(){
  $(".owl-carousel-res").owlCarousel({
    loop:true, 
    smartSpeed:500,             
    nav:false,
    dots:false,          
    item:2,
    autoplay: true,
    autoplayTimeout: 3000,
    dotsEach:true,
    responsiveClass:true,
    margin: 50,
    responsive:{
        1200:{
            items:2
        },        
        992:{
            items:2
        },
        768:{
            items:1
        },        
        480:{         
            items:1
        },
        320:{
            items:1
        }

    }
  });

});


$(document).ready(function(){

	;(function() {
	'use strict';
	var now		= new Date(),
		times	= [
			24 - now.getHours(),
			59 - now.getMinutes(),
			59 - now.getSeconds(),
		],
		hBox	= document.getElementById('days-block'),
		mBox	= document.getElementById('minutes'),
		sBox	= document.getElementById('hours-block');

	timer(times);

	function timer(times) {
		var tm = setInterval(function() {
			var hour 	= times[0],
				min		= times[1],
				sec		= times[2];
			
			times[2]--;

			if (times[0] == 0 && times[1] == 0 && times[2] == 0) {
				clearInterval(tm);
			} else if (times[2] == -1) {
				times[1]--;
				times[2] = 59;
			} else if (times[1] == -1) {
				times[0]--;
				times[1] = 59;
			}

			var hour 	= (times[0] < 10) ? '0' + times[0] : times[0],
				min		= (times[1] < 10) ? '0' + times[1] : times[1],
				sec		= (times[2] < 10) ? '0' + times[2] : times[2];

			showTimer(hour, min, sec);
		}, 1000);
	}

	function showTimer(hour, min, sec) {
		hBox.innerHTML = hour;
		
		sBox.innerHTML = sec;
	}
})();

});