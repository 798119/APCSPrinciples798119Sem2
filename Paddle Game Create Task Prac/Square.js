//  Calvin Kapral
// 	8/15/19
//  This is correct


class Square{
  constructor(x,y,clr){
    this.x=x;
    this.y=y;
    this.clr=clr;
  }



  render(){
    rect(this.x,this.y, 100,100);
    if(this.clr % 2 === 0){
      fill(255,0,69)

    }
    if(this.clr % 2 === 1){
      fill(13,13,68)

    }
}












}//end function
