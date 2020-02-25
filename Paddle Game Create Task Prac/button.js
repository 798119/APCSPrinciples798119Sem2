class Button{
  constructor(x,y,c1,c2,c3){
    this.loc = createVector(x,y);
    this.w = 70;
    this.h = 40;
    this.clr = createVector(c1,c2,c3);
  }
  //button parameters

  run(){
    // console.log("running");
    this.checkEdges();
    this.update();
    this.render();

  }

  checkEdges(){


  }


  update(){


  }

  render(){
    fill(0,50,250);
    rect(this.loc.x,this.loc.y,this.w,this.h);
//run the buttons
  }
