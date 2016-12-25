
window.onload = function(){

    var canvas = document.getElementById("leftcanvas");
    var context = canvas.getContext("2d");

    context.lineWidth = 1;
    context.strokeStyle = "#fff"; // line color
    context.fillStyle = "#fff"; 

    context.beginPath();
    context.moveTo(0, 295);
    var controlX1 = 343;
    var controlY1 = 420;
    var controlX2 = 619;
    var controlY2 = 465;
    var endX = 764;
    var endY = 472;  
    context.bezierCurveTo(controlX1, controlY1, controlX2,
        controlY2, endX, endY);
    context.lineTo(764, 512);
    context.lineTo(0, 512);    
    context.EndPath

    context.fill();   
    context.stroke();

};

$(document).ready(function(){

    var canvasr = document.getElementById("rightcanvas");
    var contextr = canvasr.getContext("2d");

    contextr.lineWidth = 1;
    contextr.strokeStyle = "#fff"; // line color
    contextr.fillStyle = "#fff"; 

    contextr.beginPath();
    contextr.moveTo(0, 190);
    var controlX1 = 470;
    var controlY1 = 154;
    var controlX2 = 778;
    var controlY2 = 112;
    var endX = 1156;
    var endY = 0;  
    contextr.bezierCurveTo(controlX1, controlY1, controlX2,
        controlY2, endX, endY);
    contextr.lineTo(1156, 190);       
    contextr.EndPath

    contextr.fill();   
    contextr.stroke();

});


(function(){
  // setup your carousels as you normally would using JS
  // or via data attributes according to the documentation
  // http://getbootstrap.com/javascript/#carousel
  $('#carousel123').carousel({ interval: 2000 });
  $('#partners_carousel').carousel({ interval: 2000 }); 
}());

(function(){
  $('.carousel-showsixmoveone .item').each(function(){
    var itemToClone = $(this);

    for (var i=1;i<4;i++) {
      itemToClone = itemToClone.next();

      // wrap around if at end of item collection
      if (!itemToClone.length) {
        itemToClone = $(this).siblings(':first');
      }

      // grab item, clone, add marker class, add to collection
      itemToClone.children(':first-child').clone()
        .addClass("cloneditem-"+(i))
        .appendTo($(this));
    }
  });
}());


$(document).ready(function(){

    var proj = document.getElementById("projectscanvas");
    var contextp = proj.getContext("2d");

    contextp.lineWidth = 1;
    contextp.strokeStyle = "#fff"; // line color
    contextp.fillStyle = "#fff"; 

    contextp.beginPath();
    contextp.moveTo(1920, 0);
    contextp.lineTo(344, 58);
    contextp.lineTo(360, 136);
    contextp.lineTo(0, 136);
    contextp.lineTo(0, 0);
    contextp.EndPath

    contextp.fill();   
    contextp.stroke();

});
 
 $('.projects_slider').owlCarousel({
    loop:true,
    margin:30,
    dots: true,
    ResponsiveClass: true,
    responsive:{
        320:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        },
        1920:{
            items:3,                
        }
    }
})


  $('.news_slider').owlCarousel({
    loop:true,
    margin:30,
    nav: true,
    ResponsiveClass: true,
    responsive:{
        320:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        },
        1920:{
            items:3,                
        }
    }
})

$(document).ready(function(){

    var canvasf = document.getElementById("footercanvas");
    var contextf = canvasf.getContext("2d");

    contextf.lineWidth = 1;
    contextf.strokeStyle = "#fff"; // line color
    contextf.fillStyle = "#fff"; 

    contextf.beginPath();
    contextf.moveTo(0, 120);
    var controlX1 = 376;
    var controlY1 = 40;
    var controlX2 = 750;
    var controlY2 = 5;
    var endX = 1210;
    var endY = 0;  
    contextf.bezierCurveTo(controlX1, controlY1, controlX2,
        controlY2, endX, endY);
    contextf.lineTo(1210, 40);
    var controlX4 = 1345;
    var controlY4 = 40;
    var controlX5 = 1526;
    var controlY5 = 45;
    var endX2 = 1920;
    var endY2 = 120; 
    contextf.bezierCurveTo(controlX4, controlY4, controlX5,
        controlY5, endX2, endY2); 
    contextf.lineTo(1920, 0);
    contextf.lineTo(0, 0);
    contextf.EndPath

    contextf.fill();   
    contextf.stroke();

});