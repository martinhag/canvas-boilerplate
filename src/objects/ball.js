import config from '../util/config';

export default Ball;
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
    if ((this.x + this.dx + this.radius) > config.canvas.width || (this.x + this.dx - this.radius) < 0) {
      this.dx = -this.dx;
    }

    if ((this.y + this.dy + this.radius) > config.canvas.height || (this.y + this.dy - this.radius) < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };

  this.draw = function () {
    config.c.beginPath();
    config.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    config.c.fillStyle = this.color;
    config.c.fill();
    config.c.closePath();
  };
}