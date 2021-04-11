/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(1000, 1000);
  background(0);
  noFill();
}

function draw() {
  translate(50, 10);
  scale(2);
  V();
}

function V() {
  for (let i = 0; i < 10; i++) {
    stroke(255);
    bezier(300, 40 + i * 10, 210, 20, 300, 100, 240 - i, 300 + i);
    bezier(140, 40 + i * 10, 110, 20, 220, 150, 240 - i, 300 + i);
  }
}
