

var particlesQuantity = 5000;

var positionX = new Array(particlesQuantity);
var positionY = new Array(particlesQuantity);
var velocityX = new Array(particlesQuantity).fill(0);
var velocityY = new Array(particlesQuantity).fill(0);

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 100);
  stroke(0, 100, 50);

  for (var particle = 1; particle < particlesQuantity; particle++) {
    positionX[particle] = random(0, width);
    positionY[particle] = random(0, height);
  }

  positionX[0] = 0;
  positionY[0] = 0;
}

function draw() {
  background(0);

  velocityX[0] = velocityX[0] * 0.5 + (mouseX - positionX[0]) * 0.1;
  velocityY[0] = velocityY[0] * 0.5 + (mouseY - positionY[0]) * 0.1;

  positionX[0] += velocityX[0];
  positionY[0] += velocityY[0];

  for (var particle = 1; particle < particlesQuantity; particle++) {
    var whatever = 2048 / (sq(positionX[0] - positionX[particle]) + sq(positionY[0] - positionY[particle]));

    velocityX[particle] = velocityX[particle] * 0.95 + (velocityX[0] - velocityX[particle]) * whatever;
    velocityY[particle] = velocityY[particle] * 0.95 + (velocityY[0] - velocityY[particle]) * whatever;

    positionX[particle] += velocityX[particle];
    positionY[particle] += velocityY[particle];

    var hu = map(abs(velocityX[particle])+abs(velocityY[particle]), 0, 50, 75, 0);
    stroke(hu, 100, 100);

    if ((positionX[particle] < 0 && velocityX[particle] < 0) || (positionX[particle] > width && velocityX[particle] > 0)) {
      positionX[particle] = random(0, width);
      positionY[particle] = random(0, height);
      velocityX[particle] *= 0.9;           //= random(-10, 10);
      velocityY[particle] *= 0.9;           //= random(-10, 10);
    }
    if ((positionY[particle] < 0 && velocityY[particle] < 0) || (positionY[particle] > height && velocityY[particle] > 0)) {
      positionX[particle] = random(0, width);
      positionY[particle] = random(0, height);
      velocityX[particle] *= 0.9;           //= random(-10, 10);
      velocityY[particle] *= 0.9;           //= random(-10, 10);
  }
    point(positionX[particle], positionY[particle]);
  }
}

function mousePressed() {
  for (var particle = 1; particle < particlesQuantity; particle++) {
    positionX[particle] = random(0, width);
    positionY[particle] = random(0, height);
    velocityX[particle] = random(-10, 10);
    velocityY[particle] = random(-10, 10);
  }
}
