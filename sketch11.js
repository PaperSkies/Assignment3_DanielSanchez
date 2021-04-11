/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(1000, 1000);
  background(28);
  noFill();
}

function draw() {
  translate(0, 10);
  scale(2.5);
  V();
}

function V() {
  for (let i = 0; i < 20; i++) {
    stroke(255 - i * 15, i * 50, i * 30);
    strokeWeight(10 - 0.75 * i);
    bezier(300, 40 + i * 5, 410, 20, 200, 100, 240 - i, 300 + i);
    bezier(140, 40 + i * 5, 10, 20, 210, 150, 240 - i, 300 + i);
  }
}
