//bomb class
var gameState=3;

class Bomb{
  constructor(x,y,dx,dy){
    this.loc=createVector(x,y);
    this.vel=createVector(dx, dy);
    this.clr = color(255, 0, 0);
    //same logic as ball
  }
run(){
  this.checkedges();
  this.update();
  this.render();
  this.checkhitbox();

}
checkedges(){
  if(this.loc.x <0){
    this.vel.x = -this.vel.x;
    }
    if(this.loc.x > width){
    this.vel.x = -this.vel.x;
    }
    if(this.loc.y < 0){
    this.vel.y = -this.vel.y;
    }
    if(this.loc.y > height){
    this.vel.y = -1.01*this.vel.y;
    // lives--;
//lives counter
    }
  }

update(){
this.vel.add(this.acc);
this.loc.add(this.vel);
this.vel.limit(8);
}
render(){
    //this.clr = color(random(255), random(255),random(255))
fill(this.clr);
ellipse(this.loc.x, this.loc.y, 20,60);
//ellipse(this.x, this.y, 50,50)
}

checkhitbox(){
  if(this.loc.x > paddle.loc.x&& this.loc.x < paddle.loc.x+200
  && this.loc.y > paddle.loc.y&& this.loc.y < paddle.loc.y+30){
    this.vel.y= -this.vel.y;
    lives--;
  //score counter
  }
}




}
//ellipse(this.x, this.y, 50,50)
