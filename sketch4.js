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
  v(700, -20, 300, count);
  pop()
  
  push()
  angleMode(DEGREES)
  rotate(-15)
  v(190, 215, 300, count);
}

function v(x, y, size, num, rotate) {
  const color = 255 / num;
  const steps = size / num;
  for (let i = 0; i < num; i++) {
    fill(0, i * color, 50 + i * 2 * color);
    ellipse(x, y, size - i * steps % 240, i * steps * multiplier);
  }
}

// This Redraws the Canvas when resized
windowResized = function() {
  resizeCanvas(windowWidth, windowHeight);
};