//boid class

class Boid{
  constructor(x, y, dx, dy){
    this.w=50;
    this.clr = color(random(0), (100), random(255))
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0,0)
}

run(){
  this.render();
  this.checkEdges();
  this.update();
}

render(){
  var distance;
  for(var i = 0; i < boids.length; i++){
    distance = this.loc.dist(boids[i].loc)
    if(distance < 700){
    stroke(this.clr)
      line(this.loc.x, this.loc.y, boids[i].loc.x, boids[i].loc.y)

    }
  }
}

  checkEdges(){
    if(this.loc.x < 0 || this.loc.x > width){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.y < 0 || this.loc.y > height){
      this.vel.y = -this.vel.y;
    }

  }


update(){
  this.vel.limit(50);
  this.loc.add(this.vel);
  this.vel.add(this.acc);

}


}//end boids
