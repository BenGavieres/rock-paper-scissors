//Returns a random integer from specified bounds
function getRandomInt(min,max) {
    return Math.floor(Math.random()*(max+1))+min;
}

//Returns a random option from an array of 3 elements
function getComputerChoice() {
    const computerChoice=["rock","paper","scissors"];
    return computerChoice[getRandomInt(0,2)];
}

function logLoss(player,comp) {
    console.log(`You lose! ${comp} beats ${player}`);
}

function logWin(player,comp) {
    console.log(`You win! ${player} beats ${comp}`);
}

//Simulates one round
function playRound(playerSelection,computerSelection) {
    if (playerSelection==computerSelection){
        console.log(`Draw! You both chose ${playerSelection}`);
    }
    else if (playerSelection=="rock"){
        if (computerSelection=="paper") {
            logLoss(playerSelection,computerSelection);
        }
        else {
            logWin(playerSelection,computerSelection);
        }
    }
    else if (playerSelection=="paper") {
        if (computerSelection=="rock") {
            logWin(playerSelection,computerSelection);
        }
        else {
            logLoss(playerSelection,computerSelection);
        }
    }
    else {
        if (computerSelection=="rock") {
            logWin(playerSelection,computerSelection);
        }
        else {
            logLoss(playerSelection,computerSelection);
        }
    }
}