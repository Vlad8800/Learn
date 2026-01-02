const choices = ["rock","paper", "scissor"];
const playerDisplay= document.getElementById("playerDisplay");
const computerDisplay= document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const computerScoreDisplay = document.getElementById("computerScoreDisplay")
let playerScore=0;
let computerScore=0;
function playGame(playerChoice){
const computerChoise = choices[Math.floor(Math.random()*3)];
let result = "";

if(playerChoice === computerChoise){
    result= "IT`S TIE";
}
else{
    switch(playerChoice){
    case "rock":
    result = (computerChoise==="scissor") ? "YOU WIN" : "YOU LOSE";
    break;
    case "paper":
    result = (computerChoise==="rock") ? "YOU WIN" : "YOU LOSE";
    break;
    case "scissor":
    result = (computerChoise==="paper") ? "YOU WIN" : "YOU LOSE";
    break;
}
}

playerDisplay.textContent =`PLAYER ${playerChoice}`;
computerDisplay.textContent =`PLAYER ${computerChoise}`;
resultDisplay.textContent  = result;

    resultDisplay.classList.remove("greenText","redText");

switch(result){
    case"YOU WIN":
    resultDisplay.classList.add("greenText");
    playerScore++;
    playerScoreDisplay.textContent =playerScore;
    break;

    case"YOU LOSE":
    resultDisplay.classList.add("redText");
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
    break;
}
}