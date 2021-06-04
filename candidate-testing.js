const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName=" ";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? .";
let correctAnswer="Sally Ride";
let candidateAnswer= " ";
let questions = ["1) Who was the first American woman in space? .",
"2) True or false: 5 kilometer == 5000 meters?  ", "3) (5 + 3)/2 * 10 = ? ","4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ","5) What is the minimum crew size for the ISS? " ];
let correctAnswers = ["Sally Ride","true","40","Trajectory",	"3"];
 let candidateAnswers= [];
let correctCount=0;

let totalquestion=questions.length;

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
      candidateName=input.question("Please enter your  name ");
    console.log("\nCandidate's Name is  "+candidateName);
   console.log("\n");

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
//candidateAnswer=input.question("\n1) Who was the first American woman in space? .");
let i;
for(i=0;i<5;i++)
{
  //const input = require('readline-sync');
  candidateAnswers[i]=input.question(questions[i]);
    
  //console.log("Your Answer is Correct,Good Job!");
    
}

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question
  /*console.log("Your Answer: " +candidateAnswer);
console.log("Correct Answer: " +correctAnswer); */
let j;
console.log("\n")
for(j=0;j<5;j++)
{
  console.log(questions[j]);
console.log("Your Answer: " +candidateAnswers[j]);
   console.log("Correct Answer: " +correctAnswers[j]); 
  console.log("\n");
  if(candidateAnswers[j].toLowerCase()==correctAnswers[j].toLowerCase())
 correctCount++;
}
  let grade =" ";
 let result =((correctCount)/(totalquestion))*100;
if(result >= 80)
grade ="Passed"
else
grade="Failed";

console.log(">>> Overall Grade: "+result+"% ("+ correctCount +" out of " + questions.length+") <<<");

console.log(">> Status: "+ grade +" <<");




  return grade;
}

function runProgram() {
 
  // TODO 1.1c: Ask for candidate's name //
   askForName();
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};