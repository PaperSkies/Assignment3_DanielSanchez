/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(1000, 1000);
  noFill();
  noStroke();
}

function draw() {
  clear();
  background(28);
  translate(130, 400);
  scale(1.3, 1);
  V();
}

function V() {
  for (let i = 0; i < 100; i++) {
    const index = 19 - i;
    fill(255 - i * 3, i * 10, i * 20 * sin(frameCount / 100));

    push();
    rect(300 - 10 + i * 3, 200 + 20 * i * wiggle(index), 2 + i * 3);
    pop();

    push();
    rect(280 + 10 - i * 5, 200 + 20 * i * wiggle(index), 2 + i * 3);
  }
}

const wiggle = (index) => {
  return sin(((frameCount / 1000) * -index) % 100);
};
