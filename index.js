var readlineSync = require('readline-sync');
const chalk = require('chalk');
// var name = readlineSync.question('What is your name?');
// console.log(name);
// console.log(chalk.bold.rgb(10, 100, 200)('Hello!'));
// console.log(chalk.blue('Hello world!'));

var db = [{
  question:"What is my hobby?",
  answer:"reading"
},{
  question:"Where do I live?",
  answer:"patna"
},{
  question:"What is my dream?",
  answer:"world tour"
},{
  question:"Do I know web development?",
  answer:"no"
},{
  question:"Introvert, Extrovert or Ambivert?",
  answer:"Ambivert"
},{
  question:"Introvert, Extrovert or Ambivert?",
  answer:"Ambivert"
}
];
var score = 0;
var highScores = [
  {
    name:"Vishal",
    score:4
  },
  {
    name:"Gaurav",
    score:3
  }
]
function right(){
  score = score + 1;
  console.log(chalk.green("You answered it right!"));
  console.log(chalk.green("Your new score is: " + score));
  console.log("");
}
function wrong(){
  console.log(chalk.red("You answered it wrong!"));
  console.log(chalk.red("Your new score is: " + score));
  console.log("");
}
function checkHighScore(){
  if(score >= highScores[0].score){
    console.log("You beat the high score of "+ highScores[0].name);
  }else{
    console.log("The highest score is scored by " + highScores[0].name);
  }
}
function printScore(){
  console.log("Game end, you scored " + score + " points.")
}
function play(){
  var name = readlineSync.question("Enter your name to play HOW WELL YOU KNOW VISHAL ");
  console.log(chalk.blue("welcome "+ name + " to the game."))
  for(var i = 0; i<db.length; i++){
     console.log(chalk.yellow(db[i].question));
     var temp = readlineSync.question('type your answer: ');
     temp = temp.toUpperCase();
     if(temp === db[i].answer.toUpperCase()){
       right();
     }else{
       wrong();
     }
  }
  checkHighScore();
  printScore();
}
play();
