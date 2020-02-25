//  Calvin Kapral
// 	8/15/19
//  This is correct

var Balls=[]
var bigballs;
// var gameStart;
var paddle;
var gameState = 3;
var mode = "Eazy";
var lives = 10;
var score = 0;
//variables within code
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
background(30,30,30);
loadBalls(1);
loadPaddle();
//creating paddle and ball
}

function draw(){
  //different difficulty
  if(gameState===1){
startGame();
}else if(gameState===2){
playGame();
}else if(gameState===3){
endGame();
}
  background(255,250,250,207);
  runBalls();
  runPaddle();
  //creating paddle

}

function startGame(){
  background(255,250,250);
  //title
  textSize(60);
  fill(250);
  text("PaddleGame",250,200);
  //dificulty setting
  textSize(24);
  fill(0,60,250);
  rect(200,600,80,40);
  fill(255);
  text("Eazy",215,625);
  fill(250,0,250);
  rect(350,600,120,40);
  fill(255);
  text("Medium",365,625);
  fill(255,0,0);
  rect(500,600,145,40);
  fill(255);
  text("Challenge",515,625);
  //dificulty
  if(mouseIsPressed &&
    mouseX>200 && mouseX<280 &&
    mouseY>600 && mouseY<640){
      mode = "Eazy";
      gameState = 2;

    }
  if(mouseIsPressed &&
    mouseX>350 && mouseX<430 &&
    mouseY>600 && mouseY<640){
      mode = "Medium";
      gameState = 2;
      loadBalls(2);
      //medium mode
    }
  if(mouseIsPressed &&
    mouseX>500 && mouseX<580 &&
    mouseY>600 && mouseY<640){
      mode = "Challenge";
      gameState = 2;
      loadBalls(3)
    }
//hard mode
}

//play game screen
function playGame(){
  background(0);
  textSize(20);
  fill(255);
  text("lives = " + lives,20,20);
  text("score = " + score,200,20);
  runBalls();
  runPaddle();
  endCheckGame();
}
//end game scren
function endGame(){
  background(50,50,50);
  //title
  textSize(50);
  fill(255);
  text("PaddleBall",270,200);
  //new game?
  textSize(30);
  fill(250,0,250);
  rect(190,600,190,50);
  fill(255);
  text("New Game",210,635);
  fill(255,0,0);
  rect(440,600,95,50);
  fill(255);
  text("Quit",450,635);

  if(mouseIsPressed &&
    mouseX>190 && mouseX<380 &&
    mouseY>600 && mouseY<650){
      gameState = 1;
      lives = 10;
      score = 0;
    }else if(mouseIsPressed &&
      mouseX>440 && mouseX<520 &&
      mouseY>600 && mouseY<650){
        textSize(50);
        fill(255);
        text("Leave A Review",160,400);
      }
//concusion?
}
function endCheckGame(){
  if(lives===0){
    gameState=3;

  }

}

function loadBalls(n){
  for(var i = 0; i < n ; i++){
    Balls[i] = new Ball(random(width),0, random(-.8,.8), random(-8,8));
// for loop to load balls
  }
}

function runBalls(){
  for(var i =0;i < Balls.length; i++){
    Balls[i].run();
//for loop to run balls
  }
}

function loadPaddle(){
  paddle=new Paddle(500,500, 200,30);
//for loop to load paddle
  }

function runPaddle(){
  paddle.run();
  }
  //for loop to run paddle
