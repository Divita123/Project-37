class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
async start(){
    if(gameState === 0){
      contestant = new Contestant();
     var contestantCountRef = await database.ref('contestantCount').once("value");
   if(contestantCountRef.exists()) {
    contestantCount=contestantCountRef.val();
    contestant.getCount();
   }
   question=new Question();
   question.display();
    }
  }

  play(){
    question.hide();
    background("yellow");
    textSize(30);
    textFont("Elephant");
    fill("black")
    text("Result Of The Quiz ",340,50)
    Contestant.getPlayerInfo();
   
    if(allContestants!==undefined){
      var yPosition=310
        for(var plr in allContestants){
       var correctAns = "2";
     
       if(correctAns === allContestants[plr].answer)
       fill("green")
       else
       fill("red")
       contestant.update();
       yPosition+=35;
       textSize(30)
       text(allContestants[plr].name +":"+allContestants[plr].answer,120,yPosition);
       textSize(50);
       }

}    
fill("blue");
strokeWeight(1);
stroke("blue")
textFont("Kunstler Script");
text("Contestant who answered correctly are highlighted in green colour",0,300)
fill("brown")
textFont("Kunstler Script");
text("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -",20,230+80)
}
}
