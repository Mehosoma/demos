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

	function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}
 
function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector("#days-block");
  var secondsSpan = clock.querySelector("#hours-block");
 
 
  function updateClock() {
    var t = getTimeRemaining(endtime);
 
    if (t.total <= 0) {
      clearInterval(timeinterval);
      var deadline = new Date(Date.parse(new Date()) + 5 * 1000);
      initializeClock('clock-counter', deadline);
    }
 
    daysSpan.innerHTML = ("0" + t.days).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);   
  }
 
  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
 
var deadline="November 20 2018 22:00:00 GMT+0300";
initializeClock("clock-counter", deadline);

});