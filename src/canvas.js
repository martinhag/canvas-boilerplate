import './util/variables';
import * as util from './util/canvas-util';

// Initial Setup
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;


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
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

// Ball
function Ball(x, y, dx, dy, radius, mass, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.mass = mass;
  this.color = color;

  this.update = function () {
    if ((this.x + this.dx + this.radius) > canvas.width || (this.x + this.dx - this.radius) < 0) {
      this.dx = -this.dx;
    }

    if ((this.y + this.dy + this.radius) > canvas.height || (this.y + this.dy - this.radius) < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  };
}

// Implementation
let balls = [];

function init() {
  balls = [];

  for (let i = 0; i < 10; i++) {
    let radius = util.randomIntFromRange(15,20);
    let x = util.randomIntFromRange(radius, canvas.width - radius);
    let y = util.randomIntFromRange(radius, canvas.height - radius);
    let dx = util.randomIntFromRange(-10, 10);
    let dy = util.randomIntFromRange(-10, 10);
    let mass = radius;
    let color = util.randomColor(colors);

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
  c.clearRect(0, 0, canvas.width, canvas.height);

  update();
}

init();
animate();