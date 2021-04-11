/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(1000, 1000);
  noFill();
  noStroke();
}

function draw() {
  clear();
  background(28);
  translate(130, 600);
  scale(1.3, 1);
  V();
}

let squares = [];

function V() {
  for (let i = 0; i < 30; i++) {
    const index = 30 - i;
    fill(255 - i * 10, i * 10, i * 20 * sin(frameCount / 100));

    push();
    rect(
      300 - 10 + i * 10,
      20 + (20 * i) / wiggle(index),
      10 + i * wiggle(index)
    );
    pop();

    push();
    rect(
      280 + 10 - i * 10,
      20 + (20 * i) / wiggle(index),
      10 + i * wiggle(index)
    );
  }
}

const wiggle = (index) => {
  return sin(((frameCount / 1500) * -index) % 2);
};
