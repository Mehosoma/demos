
//Triangle Canvas
var canvas = document.getElementById('triangle');
var context = canvas.getContext('2d');
context.beginPath();
context.moveTo(0, 0);
context.lineTo(1440, 0);
context.lineTo(720, 100);
context.closePath();
context.shadowColor = 'rgba(0,0,0,0.2)';
context.shadowBlur = 10;
context.shadowOffsetX = 0;
context.shadowOffsetY = 0;
context.fillStyle = "rgb(252, 252, 252)";
context.fill();

//Triangle Canvas
var canvas = document.getElementById('triangle-scheme');
var context = canvas.getContext('2d');
context.beginPath();
context.moveTo(0, 0);
context.lineTo(1440, 0);
context.lineTo(720, 100);
context.closePath();
context.fillStyle = "rgb(252, 252, 252)";
context.fill();


