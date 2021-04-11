/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(1000, 1000);
  background(28);
  noFill();
  noStroke();
}

function draw() {
  translate(-190, 10);
  scale(1.3);
  V();
}

function V() {
  for (let i = 0; i < 20; i++) {
    fill(10 + i * 15, i * 50, i * 40);
    circle(730 - 10 * i, 200 + 20 * i, 100 - i * 5);
    circle(350 + 10 * i, 200 + 20 * i, 100 - i * 5);
  }
}
