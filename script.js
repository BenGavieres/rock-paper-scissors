
function getRandomInt(min,max) {
    return Math.floor(Math.random()*(max+1))+min;
}

//Chooses a random option from an array of 3 elements
function getComputerChoice() {
    const computerChoice=["Rock","Paper","Scissors"];
    return computerChoice[getRandomInt(0,2)];
}