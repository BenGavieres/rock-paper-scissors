//Returns a random integer from specified bounds
function getRandomInt(min,max) {
    return Math.floor(Math.random()*(max+1))+min;
}

//Returns a random option from an array of 3 elements
function getComputerChoice() {
    const computerChoice=["rock","paper","scissors"];
    return computerChoice[getRandomInt(0,2)];
}

//Simulates one round
function playRound(playerSelection,computerSelection) {
    const outcomeMessage=document.querySelector(".outcome-message");
    console.log(outcomeMessage.id);
    if (playerSelection==computerSelection){
        outcomeMessage.textContent=`Draw! You both chose ${playerSelection}`;
        return "draw";
    }
    else if (playerSelection=="rock"){
        if (computerSelection=="paper") { 
            outcomeMessage.textContent=`You lose! ${computerSelection} beats ${playerSelection}`;
            return "loss";
        }
        else{  
            outcomeMessage.textContent=`You win! ${playerSelection} beats ${computerSelection}`;
            return "win";
        }
    }
    else if (playerSelection=="paper") {
        if (computerSelection=="rock") {
            outcomeMessage.textContent=`You win! ${playerSelection} beats ${computerSelection}`;
            return "win";
        }
        else { 
            outcomeMessage.textContent=`You lose! ${computerSelection} beats ${playerSelection}`;
            return "loss";
        }
    }
    else if (playerSelection=="scissors"){
        if (computerSelection=="rock") { 
            outcomeMessage.textContent=`You win! ${playerSelection} beats ${computerSelection}`;
            return "win";
        }
        else {
            outcomeMessage.textContent=`You lose! ${computerSelection} beats ${playerSelection}`;
            return "loss";
        }
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

let playerChoice,computerChoice,playerScore=0,computerScore=0;
const score=document.querySelector(".score");
const NUM_ROUNDS=5;

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

    console.clear();
    console.log("PS:"+playerScore);
    console.log(computerScore);

    return`${playerScore} - ${computerScore}`;
}

const buttons=document.querySelectorAll('button');

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        if (playerScore<5&&computerScore<5){
            playerChoice=button.id;
            computerChoice=getComputerChoice();
            score.textContent=getScore(playRound(playerChoice,computerChoice));
        } 
        
        if (playerScore===5||computerScore===5){
           displayWinner();
        }
    });
});