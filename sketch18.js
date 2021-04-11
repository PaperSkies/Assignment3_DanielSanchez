/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(1000, 1000);
  background('lightblue');
  noStroke();
}

function draw() {
  translate(width / 3, height / 1.5);
  rotate(PI / 4);
  
  interate(-300, -500, [50, 60, 200])
  
  V()
}

const max = 20

function interate(x, y, color) {
  for (let i = 0; i < max; i++) {
    scale(.5)
    translate(x * i, y * i)
    V(color, i)
  }
}

function V(color, i) {
  square1([color[0] * i + 50, color[1] * i, color[2] * i + 50])
  square2()
}

function square1(color) {
  fill(color);
  rect(-250, -500, 500, 500, 40);
}

function square2() {
  fill('lightblue');
  push()
  rect(-270, -520, 400, 400, 10);
  pop()
}
