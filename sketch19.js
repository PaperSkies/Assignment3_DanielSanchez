/* eslint-disable no-undef, no-unused-vars */

let distribution = new Array(360);
function setup() {
  createCanvas(1000, 1000);
  for (let i = 0; i < distribution.length; i++) {
    distribution[i] = floor(randomGaussian(999, 9));
  }
}
function draw() {
  rectMode(CENTER);
  rotate(PI * 1000)
  rectMode(CENTER);
  rotate(100)
  V()
 }

 function V() {
  background(255);
  translate(-50, 1000);
  for (let i = 0; i < distribution.length; i++) {
    rotate(TWO_PI / 2000);
    stroke(0);
    let dist = abs(distribution[i]);
    line(0, 0, dist * 5, -999999999);
  }
 }