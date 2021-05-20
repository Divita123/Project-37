var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;
var bg;
var question, contestant, quiz;

function preload(){
  bg_image=loadImage("my quiz background.png");
  bgLast_image=loadImage("my quiz background2.png");
}

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();

  quiz = new Quiz();
  quiz.getState();
  quiz.start();

   bg=createSprite(425,200,20,20);
   bg.addImage(bg_image);
   bg.scale=0.55;
  
}


function draw(){
  background("pink");
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){

    // var bgLast=createSprite(425,200,20,20);
    // bgLast.addImage(bgLast_image);
    // bgLast.scale=0.30;

    bg.destroy();

    clear();

    quiz.play();
    
  }
  drawSprites();
}
