/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background('#FFF')
  noStroke();
  // angleMode(DEGREES);
  
  push()
  fill('#0DF');  // Line Color
  rotate(PI * .1);
  rect(645, -117, 25, 500, 20);
  pop()

  push()
  fill('#0DF');  // Line Color
  rotate(PI * -.1);
  rect(300, 200, 25, 500, 20);
  
}

// This Redraws the Canvas when resized
windowResized = function() {
  resizeCanvas(windowWidth, windowHeight);
};