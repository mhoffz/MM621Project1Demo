function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  lollipop(300, 200, 150, 100);
  lollipop(100, 250, 70, 50);
  lollipop(200, 50, 300, 190);
}

function lollipop(x,y, stickLength, lolliDiameter){
  fill(0, 200, 255);
  rect(x-10, y, 20, stickLength);
  
  fill(255, 0, 200)
  ellipse(x, y, lolliDiameter);
}