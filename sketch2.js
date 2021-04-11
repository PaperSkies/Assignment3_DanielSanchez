/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(1000, 1000);
  background(5);
  noStroke();
  noLoop();
}
const multiplier = -5
const count = 20
// const cutoff = -2
// const multiplier = -6
// const count = 10

function draw() {
  v(width * 0.5, 0, 300, count);

}

function v(xloc, yloc, size, num) {
  const color = 255 / num;
  const steps = size / num;
  
  for (let i = 0; i < num; i++) {
    fill(255 / i + 150, i * color, i * 2 * color);
    ellipse(xloc, yloc, size - i * steps, i * steps * multiplier);
  }
}

// This Redraws the Canvas when resized
windowResized = function() {
  resizeCanvas(windowWidth, windowHeight);
};