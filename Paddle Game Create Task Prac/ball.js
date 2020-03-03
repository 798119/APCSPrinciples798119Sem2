//ball.js

class Ball{
  constructor(x,y,dx,dy){
    this.loc=createVector(x,y);
    this.vel=createVector(dx, dy);
    this.acc=createVector(0,0);
    this.clr = color(random(255), random(255),random(255))
//ball class has no acceleration to prevent ball sticking to the right


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
    this.vel.y = -this.vel.y;
    lives--;
//lives counter

    }
  }

update(){
this.vel.add(this.acc);
this.vel.limit(5);
this.loc.add(this.vel);

}
render(){
    //this.clr = color(random(255), random(255),random(255))
fill(this.clr);
ellipse(this.loc.x, this.loc.y, 30,30);
//ellipse(this.x, this.y, 50,50)
}

checkhitbox(){
  if(this.loc.x > paddle.loc.x&& this.loc.x < paddle.loc.x+200
  && this.loc.y > paddle.loc.y&& this.loc.y < paddle.loc.y+30){
    this.vel.y= -this.vel.y;
  score++;
  //score counter
  }
}




}
//ellipse(this.x, this.y, 50,50)
