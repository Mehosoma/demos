// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});


//Adaptive height
$(window).on('load resize', function () {

var windowHeight = window.innerHeight;

 if (windowHeight < 538) {
      $(".first-btn").addClass("fix-btn");
    } else {
      $(".first-btn").removeClass("fix-btn");
    }
});


