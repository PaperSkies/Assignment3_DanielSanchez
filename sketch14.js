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
    const index = 19 - i;
    fill(255 - i * 3, i * 10, i * 20 * sin(frameCount / 100));

    push();
    circle(300 - 10 * wiggle(index) + i * 10, 200 + 20 * i, 10 + i * 3);
    pop();

    push();
    circle(680 + 10 * wiggle(index) - i * 10, 200 + 20 * i, 10 + i * 3);
  }
}

const wiggle = (index) => {
  return sin(((frameCount / 1000) * index) % 20);
};
