class Boid{
  constructor(x, y, dx, dy, id){
    this.w=45;
    this.clr = color(255, 55,255)
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.id = id;
    this.acc = createVector(0,0)
      if(this.id<0){
          this.w=25;
    }
      else{
        this.w = 15
    }
}
run(){
  this.render();
  this.checkEdges();
  this.update();
}
  render(){
   if(this.id < 0){
   fill(this.clr)
   ellipse(this.loc.x, this.loc.y, this.w, this.w);
}

else{


  var distance;

  for(var i = 0; i < boids.length; i++){
    distance = this.loc.dist(boids[i].loc)
    if(distance < this.w + boids[i].w && distance > 0){
      stroke(this.clr)
      line(this.loc.x, this.loc.y, boids[i].loc.x, boids[i].loc.y)
    }
  }
}
}
  checkEdges(){
    if(this.loc.x < 0){
      this.loc.x = width;
    }
    if(this.loc.x > width){
      this.loc.x = 0;
    }
    if(this.loc.y < 0){
      this.loc.y = height;
    }
    if(this.loc.y > height){
      this.loc.y = 0;
    }
  }
update(){
  var distToMainBoid
  if(this.id >= 0){
    distToMainBoid = this.loc.dist(mainBoid.loc);
    if(distToMainBoid < 800){
      this.acc = p5.Vector.sub(mainBoid.loc, this.loc);
      this.acc.normalize();
      this.acc.mult(.07);
    }
    if(distToMainBoid < 150){
      this.acc = p5.Vector.sub(this.loc, mainBoid.loc);
      this.acc.normalize();
      this.acc.mult(.5);
    }
  }
  this.vel.limit(2);
  this.loc.add(this.vel);
  this.vel.add(this.acc);

}//end of update

}//end of ball class
