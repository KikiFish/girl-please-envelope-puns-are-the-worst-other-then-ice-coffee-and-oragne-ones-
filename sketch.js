var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 2){
    update(state);{
      database.ref('/').update({
        gameState: state
      });
    }
  }
  if(gameState === 1){
    clear();
    play();{
    
      question.hide(); 
  
      background("Yellow");
      fill(0);
      textSize(30);
      text("Result of the Quiz",340, 50);
      text("----------------------------",320, 65);
      Contestant.getPlayerInfo();
      if(allContestants !== undefined){
        debugger;
        var display_Answers = 230;
        fill("Blue");
        textSize(20);
        text("*NOTE: Contestant who answered correct are highlighted in green color!",130,230);
  
        for(var plr in allContestants){
          debugger;
          var correctAns = "2";
  //check the condition whether player answer and correct ans are equal
  //if equal fill with green 
  //if not equal fill with red
          
  
          display_Answers+=30;
          textSize(20);
          text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
        }
      }
    }
  }
}
