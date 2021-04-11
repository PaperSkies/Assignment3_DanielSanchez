/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(1000, 1000);
  background('pink');
  noStroke();
}

function draw() {
  translate(width / 3, height / 1.5);
  rotate(PI / 4);
  V()

  interate(-200, -200)
}

function square1() {
  fill(4, 20, 69);
  rect(-251, -500, 500, 500, 40);
}

function square2() {
fill('pink');
push()
rect(-251, -501, 400, 400, 10);
pop()
}

function V() {
  square1()
  square2()
}

const max = 5

function interate(x, y) {
  for (let i = 0; i < max; i++) {
    scale(.5)
    translate(x * i, y * i)
    V()
  }
}