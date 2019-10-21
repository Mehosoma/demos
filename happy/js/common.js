//Hover-Animation Btn
function animate(elem){
    var effect = elem.data("effect");
    if(!effect || elem.hasClass(effect)) return false;
    elem.addClass(effect);
    setTimeout( function(){
        elem.removeClass(effect);
    }, 1000);
}
 
$(".animated").mouseenter(function() {
    animate($(this));
});

//Wow-init
$( document ).ready(function() {
     new WOW().init();
});

//Parallax
$( document ).ready(function() {
    var rellax = new Rellax('.relax', {
    speed: -2,
    center: false,
    wrapper: '.double-medium',
    round: true,
    vertical: true,
    horizontal: false,
    relativeToWrapper: true
   });
});