let playerChoice,computerChoice,playerScore=0,computerScore=0;
const outcomeMessage=document.querySelector(".outcome-message");
const score=document.querySelector(".score");
const NUM_ROUNDS=5;
let playerEmoji=document.querySelector(".player-emoji");
let computerEmoji=document.querySelector(".computer-emoji");

//Returns a random integer from specified bounds
function getRandomInt(min,max) {
    return Math.floor(Math.random()*(max+1))+min;
}

//Returns a random option from an array of 3 elements
function getComputerChoice() {
    let emoji=document.querySelector(".computer-emoji");
    const computerChoice=["rock","paper","scissors"];
    let choice=computerChoice[getRandomInt(0,2)];
    emoji.textContent=getEmoji(choice);
    return choice;
}

//Simulates one round
function playRound(playerSelection,computerSelection) {
    if(playerSelection===computerSelection){
        outcomeMessage.textContent=`Draw! You both chose ${playerSelection}`;
        return "draw";
    }
    else if ((playerSelection==="rock"&&computerSelection==="scissors")
        ||(playerSelection==="paper"&&computerSelection==="rock")
        ||(playerSelection==="scissors"&&computerSelection==="paper")){
        outcomeMessage.textContent=`You win! ${playerSelection} beats ${computerSelection}`;
        return "win";
    }
    else {
        outcomeMessage.textContent=`You lose! ${computerSelection} beats ${playerSelection}`;
        return "loss";
    }
}

function getEmoji(choice) {
    if(choice==="rock"){
        return "🪨";
    }
    else if (choice==="paper") {
        return "📄";
    }
    else {
        return "✂️";
    }
}

function displayWinner() {
    const winner=document.querySelector(".winner");
            
    if (playerScore>computerScore){
        winner.textContent="You win!";
    }
    else if(playerScore<computerScore) {
        winner.textContent="You lose!";
    }
    else {
        winner.textContent="Draw!";
    }   
}

function getScore(outcome) {

    if (outcome==="win") {
        playerScore++;
    }
    else if(outcome==="loss") {
        computerScore++;
    }
    else {
        playerScore++;
        computerScore++;
    }

    return`${playerScore} - ${computerScore}`;
}

const buttons=document.querySelectorAll('button');

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        if (playerScore<5&&computerScore<5){
            playerChoice=button.id;
            playerEmoji.textContent=getEmoji(playerChoice);
            computerChoice=getComputerChoice();
            score.textContent=getScore(playRound(playerChoice,computerChoice));
        } 
        
        if (playerScore===5||computerScore===5){
           displayWinner();
        }
    });
});