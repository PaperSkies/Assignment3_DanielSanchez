/* eslint-disable no-undef, no-unused-vars */

let distribution = new Array(360);
function setup() {
  createCanvas(1000, 1000);
  for (let i = 0; i < distribution.length; i++) {
    distribution[i] = floor(randomGaussian(999, 9));
  }
}
function draw() {
  rotate(100)
  V()
 }

 function V() {
  translate(-50, 1000);
  for (let i = 0; i < distribution.length; i++) {
    rotate(TWO_PI / 9999);
    let dist = abs(distribution[i]);
    const magic = dist * abs(sin(frameCount / -420 * i))
    stroke(magic * i / magic, magic / i * abs(sin(frameCount / 1000)), magic);
    line(magic, -magic, dist * sin(frameCount * .1) * 1.1, -9999999);
  }
 }