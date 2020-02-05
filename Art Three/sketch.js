//  calvin kAPpal
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var boids = []
var mainBoid =[]
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(100, 200, 20,);
  loadObjects(400);
}
//  The draw function is called @ 30 fps
function draw() {
  background(100,0,50,80);
  runObjects();

}

function loadObjects(n){
  mainBoid = new Boid(width/4, height/4, random(-2, 1), random(-1, 2), -1);
    for(var i =0; i < n; i++){
      boids[i] = new Boid(random(width), random(height), random(-3, 2), random(-3, 2), i);
  }
}

function runObjects(){
  mainBoid.run();
    for(var i = 0; i < boids.length; i++){
      boids[i].run();
  }

}
