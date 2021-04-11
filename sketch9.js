/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(1000, 1000);
  stroke(255);
  noFill();
}

function draw() {
  translate(50, 10);
  scale(2);
  wave(true);
  wave(false);
}

function wave(inverted) {
  background(0);
  for (let i = 0; i < 200; i += 20) {
    let mouseDirection = -(i / 2);
    if (inverted) {
      mouseDirection = i / 2;
    }
    line(218 + i / 8, 320 - i / 8, 320, 61);
    line(218 + i / 8, 320 - i / 8, 150, 61);
  }
}
