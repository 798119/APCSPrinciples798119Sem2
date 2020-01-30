//  calvin akrpal
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var boids = []

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0, 255, 255);
  loadBoids(60);

}
//  The draw function is called @ 30 fps
function draw() {
  background(0,50,60);
  runBoids();

}

function loadBoids(n){
    for(var i =0; i < n; i++){
      boids[i] = new Boid(random(width), random(height), random(-4, 2), random(-4, 3));

  }

}

function runBoids(){
    for(var i = 0; i < boids.length; i++){
      boids[i].run();
  }



}
