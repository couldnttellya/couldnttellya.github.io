var svg = document.getElementById("my-svg");
var circle = svg.querySelector("circle");

function rotate() {
  circle.setAttribute("transform", "rotate(1deg)");
}

setInterval(rotate, 100);