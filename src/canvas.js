import * as util from './util/canvas-util';
import config from './util/config';
import Ball from './objects/ball';

// Initial Setup
config.canvas = document.querySelector('canvas');
config.c = config.canvas.getContext('2d');

config.canvas.width = innerWidth;
config.canvas.height = innerHeight;


// Variables
let mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
};

// Event Listeners
addEventListener("mousemove", function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

addEventListener("resize", function () {
  config.canvas.width = innerWidth;
  config.canvas.height = innerHeight;

  init();
});

// Implementation
let balls = [];

function init() {
  balls = [];

  for (let i = 0; i < 10; i++) {
    let radius = util.randomIntFromRange(15,20);
    let x = util.randomIntFromRange(radius, config.canvas.width - radius);
    let y = util.randomIntFromRange(radius, config.canvas.height - radius);
    let dx = util.randomIntFromRange(-10, 10);
    let dy = util.randomIntFromRange(-10, 10);
    let mass = radius;
    let color = util.randomColor(config.colors);

    balls.push(new Ball(x, y, dx, dy, radius, mass, color))
  }
}

function update() {
  for (let ball of balls) {
    ball.update();
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  config.c.clearRect(0, 0, config.canvas.width, config.canvas.height);

  update();
}

init();
animate();