//  Calvin Kapral
// 	8/15/19
//  This is correct

var balls=[];
var bigballs;

// var gameStart;
var paddle;
var gameState = 3;
var mode = "Easy";
var lives = 10;
var score = 0;
//variables within code
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
background(200,150,150);
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

  runBalls();
  runPaddle();
  //creating paddle

}

function startGame(){
  background(255,250,250);
  //title
  textSize(60);
  text("PaddleGame",250,200);
  background(255,250,250);
  textSize(20);
  fill(20,0,42);
  text("Directions: If you hit the paddle with the ball, you gain a point.", 20,100);
  text( "If the ball hits the foor, you lose a point." ,20,125);
  text("The goal is the get as many points as possible without losing 10 lives.", 20,150);




  //dificulty setting
  textSize(24);
  fill(0,60,250);
  rect(300,600,80,40);
  fill(255);
  text("Start",315,625);

  //dificulty
  if(mouseIsPressed &&
    mouseX>300 && mouseX<380 &&
    mouseY>600 && mouseY<640){
      mode = "Start";
      gameState = 2;

    }
//hard mode
}

//play game screen
function playGame(){
  background(200,200,200);
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
  background(200,50,50);
  //title
  textSize(50);
  fill(255);
  text("PaddleBall",270,200);
  //new game?
  textSize(30);
  fill(250,0,250);
  rect(290,600,190,50);
  fill(255);
  text("New Game",310,635);
  fill(255,0,0);

  if(mouseIsPressed &&
    mouseX>290 && mouseX<500 &&
    mouseY>600 && mouseY<650){
      gameState = 1;
      lives = 10;
      score = 0;

      }
//concusion?
}
function endCheckGame(){
  if(lives<=0){
    gameState=3;

  }

}

function loadBalls(n){
  for(var i = 0; i < n ; i++){
    balls[i] = new Ball(random(width),0, random(-1,1), random(1,5));
// for loop to load balls
  }
}

function runBalls(){
  for(var i =0;i < balls.length; i++){
    balls[i].run();
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
