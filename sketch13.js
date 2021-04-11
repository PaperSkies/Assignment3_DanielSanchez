/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(1000, 1000);
  noFill();
  noStroke();
}

function draw() {
  clear();
  background(28);
  translate(-190, 10);
  scale(1.3);
  V();
}

function V() {
  for (let i = 0; i < 20; i++) {
    fill(10 + i * 15, i * 20, i * 20);
    circle(730 - 10 * i, 200 + 20 * i, 10 + i * 3);
    circle(350 + 10 * i, 200 + 20 * i, 10 + i * 3);
  }
}
