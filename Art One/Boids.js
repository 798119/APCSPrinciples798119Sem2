
//boids class

class Boids{
  constructor(x,y,dx,dy) {
    this.loc=createVector(x,y);
    this.vel=createVector(dx,dy);
    this.acc=createVector(.01,.03);
    this.clr(0,0,100);
  }
}



run(){
  this.checkedges();
  this.update();
  this.render();
}
