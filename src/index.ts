import "./style.css";

class Ball {
  x: number;
  y: number;
  radius: number;
  speedX: number;
  speedY: number;
  constructor(
    x: number,
    y: number,
    radius: number,
    speedX: number,
    speedY: number
  ) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  draw(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fillStyle = "purple";
    context.fill();
    context.closePath();
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
}

// const canvas = <HTMLCanvasElement>document.getElementById("canvas");
// const context: CanvasRenderingContext2D = canvas.getContext("2d");
// console.log(canvas);
// const ball = new Ball(100, 100, 10, 2, 2);
// ball.draw(context);
window.addEventListener("DOMContentLoaded", (event) => {
  const canvas = <HTMLCanvasElement>document.getElementById("canvas");
  if (!canvas) {
    console.error("Canvas element not found.");
    return;
  }
  const context: CanvasRenderingContext2D | null = canvas.getContext("2d");
  if (!context) {
    console.error("Canvas context not available.");
    return;
  }
  console.log(canvas);
  const ball = new Ball(100, 100, 10, 2, 2);
  ball.draw(context);
});
