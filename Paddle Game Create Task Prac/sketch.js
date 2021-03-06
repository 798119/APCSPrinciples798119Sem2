//  Calvin Kapral
// 	8/15/19
//  This is correct

var balls=[];
var bigballs;
var bombs =[];
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
background(30,30,30);
loadBalls(1);
loadPaddle();
loadBombs(1);
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
  runBombs();
  //creating paddle

}

function startGame(){
  background(255,250,250);
  //title
  textSize(60);
  text("PaddleGame",250,200);
  background(255,250,250);
  textSize(20);
  fill(252,0,42);
  text("Directions: The two objects are a small ball and a slim bomb", 20,100);
  text( "If you hit the ball with the paddle, you gain a point" ,20,125);
  text("If you hit the bomb with the paddle, you lose a life", 20,150);
  text("The goal is the get as many points as possible without losing 10 lives", 20,175);
  text("Eazy Mode: 1 Ball and 1 Bomb" ,20,250);
  text("Medium Mode: 3 Balls and 1 Bomb" ,20,300);
  text("Challenge Mode: 3 Balls and 2 Bombs", 20,350);



  //dificulty setting
  textSize(24);
  fill(0,60,250);
  rect(200,600,80,40);
  fill(255);
  text("Easy",215,625);
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
      mode = "Easy";
      gameState = 2;

    }
  if(mouseIsPressed &&
    mouseX>350 && mouseX<430 &&
    mouseY>600 && mouseY<640){
      mode = "Medium";
      gameState = 2;
      loadBalls(3);
      loadBombs(1);
      //medium mode
    }
  if(mouseIsPressed &&
    mouseX>500 && mouseX<580 &&
    mouseY>600 && mouseY<640){
      mode = "Challenge";
      gameState = 2;
      loadBalls(3);
      loadBombs(2);
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
  runBombs();
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
  text("Quit",460,635);

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

function loadBombs(n){
  for(var i = 0; i < n ; i++){
    bombs[i] = new Bomb(random(width), 0 , random(-.8,.8), random(3,4));
// for loop to load balls
  }
}

function runBombs(){
  for(var i =0;i < bombs.length; i++){
    bombs[i].run();
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
