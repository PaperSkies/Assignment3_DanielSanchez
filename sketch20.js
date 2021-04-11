/* eslint-disable no-undef, no-unused-vars */

let distribution = new Array(360);
function setup() {
  createCanvas(1000, 1000);
  for (let i = 0; i < distribution.length; i++) {
    distribution[i] = floor(randomGaussian(999, 9));
  }
}
function draw() {
  background(10)
  rectMode(CENTER);
  rotate(PI * 1000)
  rectMode(CENTER);
  rotate(100)
  V()
 }

 function V() {
  translate(-50, 1000);
  for (let i = 0; i < distribution.length; i++) {
    rotate(TWO_PI / 2000);
    let dist = abs(distribution[i]);
    stroke(.8 * i, 20000 / i, dist * abs(sin(frameCount + 90 * i)));
    line(0, 0, dist * sin(frameCount * .1) * 9, -9999999);
  }
 }