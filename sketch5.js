/* eslint-disable no-undef, no-unused-vars */

let pillar1 = []; // array to hold snowflake objects
let pillar2 = []; // array to hold snowflake objects

function setup() {
  createCanvas(1000, 1000);
  fill(240);
  noStroke();
}

function draw() {
  background('#FFF');
  let t = frameCount / 60; // update time

  push()
  rotate(PI * 1.9)
  translate(50, 100)
  // create a random number of snowflakes each frame
  for (let i = 0; i < random(2); i++) {
    pillar1.push(new pillar(100, 120, pillar1)); // append pillar object
  }
    // loop through snowflakes with a for..of loop
    for (let flake of pillar1) {
      flake.update(t); // update snowflake position
      flake.display(); // draw snowflake
    }
  pop()

  push()
  rotate(PI * 2.1)
  translate(450, -200)
  for (let i = 0; i < random(2); i++) {
    pillar2.push(new pillar(340, 420, pillar2)); // append pillar object
  }



  for (let flake of pillar2) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
}

// snowflake class
function pillar(leftOffset, rightOffset, array) {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 3 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  // this.radius = random(pow(width / 4, 4));
  this.radius = sqrt(random(pow(width / 2, 2)));
  
  this.update = function(time) {
    // x position follows a circle
    let w = 0.9; // angular speed
    let angle = w * time + this.initialangle;
    // this.posX = width / 2 + this.radius * sin(angle);
    this.posX = 250 * sin(angle) + 100;
    
    
    if (this.posX < leftOffset) {
      this.posX = leftOffset
    }
    if (this.posX > rightOffset) {
      this.posX = rightOffset
    }

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = array.indexOf(this);
      array.splice(index, 1);
    }
  };

  this.display = function() {
    fill(200, 50, 250)
    ellipse(this.posX, this.posY, this.size);
  };
}
