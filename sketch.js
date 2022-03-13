let slider;
let circleX;
let circleY;
let circleR;
let slider1val;
let slider2val;
let colors;
function setup() {
  circleX = 500;
  circleY = 500;
  circleR = 200;
  colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple"  
]
  createCanvas(1000, 1000);
  slider = createSlider(3, 8, 3, 1);
  slider.position(10, 10);
  slider.style("width", "125px");
  slider2 = createSlider(1, 5, 1);
  slider2.position(850, 10);
  slider2.style("width", "125px");
  frameRate(1);
}

function draw() {
  background(0);
  slider1val = slider.value();
  slider2val = slider2.value();
  fill(colors[slider2val]);
  circle(circleX, circleY, circleR * 2);
  drawCircle(circleX, circleY, circleR, slider2val);
}

function drawCircle(circleXCoor, circleYCoor, radius, depth) {
  if (depth > 0) {
    depth--;
    for (let a = 0; a < TWO_PI; a += TWO_PI / slider1val) {
      let sx = circleXCoor + cos(a) * radius;
      let sy = circleYCoor + sin(a) * radius;
      fill(colors[depth]);
      circle(sx, sy, radius);
      drawCircle(sx, sy, radius / 2, depth);
    }
  }
}
