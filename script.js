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
    playerSelection=playerSelection.toLowerCase();
    if (playerSelection==computerSelection){
        console.log(`Draw! You both chose ${playerSelection}`);
        return "draw";
    }
    else if (playerSelection=="rock"){
        if (computerSelection=="paper") { 
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            return "loss";
        }
        else{  
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            return "win";
        }
    }
    else if (playerSelection=="paper") {
        if (computerSelection=="rock") {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            return "win";
        }
        else { 
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            return "loss";
        }
    }
    else if (playerSelection=="scissors"){
        if (computerSelection=="rock") { 
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            return "win";
        }
        else {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            return "loss";
        }
    }
}

// //Simulates a best-of-5 game
// function game(){
//     const NUM_ROUNDS=5;//Controls number of games
//     let playerScore=0,computerScore=0,playerChoice,outcome;
//     for (let i=0;i<NUM_ROUNDS;i++) {
//         playerChoice=prompt(`Round ${i+1}: Enter your selection: `);
//         outcome=playRound(playerChoice,getComputerChoice());

//         if (outcome=="win") {
//             playerScore++;
//         }
//         else if(outcome=="loss"){
//             computerScore++;
//         }
//         else {
//             playerScore++;
//             computerScore++;
//         }
//     }
//     console.log(`Final score: ${playerScore}-${computerScore}`);
//     if (playerScore>computerScore) {
//         console.log("You win!");
//     }
//     else if (playerScore<computerScore) {
//         console.log("You lose!");
//     }
//     else {
//         console.log("Draw");
//     }
// }

let playerChoice,computerChoice;

const buttons=document.querySelectorAll('button');

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        console.clear();
        playerChoice=button.id;
        console.log("Player:"+playerChoice);
        computerChoice=getComputerChoice();
        console.log("Computer:"+computerChoice);
    });
});