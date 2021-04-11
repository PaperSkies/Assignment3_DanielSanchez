/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(1000, 1000);
  background(255);
  noStroke();
  noLoop();
}
const multiplier = -6
const count = 20
const middle = width / 2

function draw() {
  push()
  angleMode(DEGREES)
  rotate(15)
  v(700, 0, 300, count);
  pop()
  
  push()
  angleMode(DEGREES)
  rotate(-15)
  v(180, 265, 300, count);

  push()
  fill('#FFF');  // Line Color
  rotate(PI * 9.5);
  rect(550, -295, 300, 300);
  pop()
  
  push()
  fill('#FFF');  // Line Color
  rotate(PI * .1);
  rect(30, -35, 300, 300);
}

function v(x, y, size, num, rotate) {
  const color = 255 / num;
  const steps = size / num;
  for (let i = 0; i < num; i++) {
    let height = i * steps * multiplier
    fill(0, i * color, 50 + i * 2 * color);
    ellipse(x, y, size - i * steps, height);
  }
}

// This Redraws the Canvas when resized
windowResized = function() {
  resizeCanvas(windowWidth, windowHeight);
};
