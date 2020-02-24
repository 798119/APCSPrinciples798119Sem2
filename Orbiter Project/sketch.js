// calvin
// 	2/14/20
//  This is a comment
//  The setup function function is called once when your program begins
var boids = [];
var orbiter = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  // loadBoid(2);
}

//  The draw function is called @ 30 fps
function draw() {

  function loadBoid(n){
    mainBoid = new Boid(width/4, height/4, random(-2, 1), random(-1, 2), -1);
      for(var i =0; i < n; i++){
        boids[i] = new Boid(random(width), random(height), random(-3, 2), random(-3, 2), i);
    }
  }

  function runBoid(){
    mainBoid.run();
      for(var i = 0; i < boids.length; i++){
        boids[i].run();
    }

  }

  function loadOrbiter(){
    for(var i=0; i<n; i++){
      orbiter[i] = new Orbiter(0,0,0,0);
    }
  }

  function runOrbiter(){
    for(var i=0; i < orbiter.length; i++){
      boids[i].run();
    }

  }
}
