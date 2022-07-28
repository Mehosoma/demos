//Svg to inline
$(document).ready(function(){
// Replace all SVG images with inline SVG  
  $('img.svg').each(function(){
   var $img = $(this);
   var imgID = $img.attr('id');
   var imgClass = $img.attr('class');
   var imgURL = $img.attr('src');

   $.get(imgURL, function(data) {
     var $svg = $(data).find('svg');
     if (typeof imgID !== 'undefined') {
       $svg = $svg.attr('id', imgID);
     }
     if (typeof imgClass !== 'undefined') {
       $svg = $svg.attr('class', imgClass+' replaced-svg');
     }
     $svg = $svg.removeAttr('xmlns:a');
     $img.replaceWith($svg);
   });
  });
});



//Show-hide menu
$(document).ready(function(){
    $('.click-mobile').on('click',function(e){
        e.preventDefault();        
          $('.menu').animate({
              height: 'toggle'
            }, 600, function() {
          });         
        $("header .menu-toggle-button").toggleClass('is-active');             
    });
});


//Animation blocks on donate page

$(window).on('load resize', function () {

  if ($(window).width() > 1199) {

  $('a[data-toggle="tab"]').on('hide.bs.tab', function (e) {
      var $old_tab = $($(e.target).attr("href"));
      var $new_tab = $($(e.relatedTarget).attr("href"));

      if($new_tab.index() < $old_tab.index()){
        $old_tab.css('position', 'relative').css("right", "0").show();
        $old_tab.animate({"right":"-100%"}, 500, function () {
          $old_tab.css("right", 0).removeAttr("style");
        });
      }
      else {
        $old_tab.css('position', 'relative').css("left", "0").show();
        $old_tab.animate({"left":"-100%"}, 500, function () {
          $old_tab.css("left", 0).removeAttr("style");
        });
      }
    });

    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
      var $new_tab = $($(e.target).attr("href"));
      var $old_tab = $($(e.relatedTarget).attr("href"));

      if($new_tab.index() > $old_tab.index()){
        $new_tab.css('position', 'relative').css("right", "-2500px");
        $new_tab.animate({"right":"0"}, 500);
      }
      else {
        $new_tab.css('position', 'relative').css("left", "-2500px");
        $new_tab.animate({"left":"0"}, 500);
      }
    });

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      // your code on active tab shown
    });

  }
});

  //News nav
     $(document).ready(function () {
              $("a#back").click(function(event) {
                  event.preventDefault()
                  pagenate = getGet('page');
                  if (pagenate != 0)
                  pagenate =+ Number(pagenate) - 1;
                  var url = location.pathname + "?page=" + pagenate;
                  $(location).attr('href',url);
              });

              $("a#next").click(function(event) {
                  event.preventDefault()
                  pagenate = getGet('page');
                  pagenate =+ Number(pagenate) + 1;
                  var url = location.pathname + "?page=" + pagenate;
                  $(location).attr('href',url);
              });
              function getGet(name) {
                  var s = window.location.search;
                  s = s.match(new RegExp(name + '=([^&=]+)'));
                  return s ? s[1] : false;
              }

          });


//Fix Modal
jQuery('.modal').on('show.bs.modal', function (e) {
    jQuery("header").addClass("modal-w-header");
    jQuery("footer").addClass("modal-w-footer");
});
jQuery('.modal').on('hidden.bs.modal', function (e) {
    jQuery("header").removeClass("modal-w-header");
    jQuery("footer").removeClass("modal-w-footer");
});


//Fix height indo block
function setHeiHeight() {
    $('.content-block--info').css({
        "min-height": $(window).height() + 'px'
    });
}
setHeiHeight(); 
$(window).resize( setHeiHeight ); 



//Random image on load
var description = [
  "images/random/man1.png",
  "images/random/man2.png",
  "images/random/man3.png",
  "images/random/man4.png",
  "images/random/man5.png",
  "images/random/man6.png"
];

var size = description.length;
var x=0;

$('.content-block__image--main').each(function() {
    x = Math.floor(size*Math.random());
    $(this).attr("src",description[x]);  
});