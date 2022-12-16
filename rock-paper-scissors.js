function getComputerChoice() {
    //Choose a number between and including 1-3
    let randomNum = Math.floor(Math.random() * 3) + 1;
    let choice;

    if (randomNum === 1) {
        choice = "Rock";
    }
    else if (randomNum === 2) {
        choice = "Paper";
    }
    else {
        choice = "Scissors";
    }

    return choice;
}

function playRound(playerSelection, computerSelection) {
    //Make the player selection case-insensitive
    playerSelection = playerSelection.toLowerCase();
    let firstLetter = playerSelection.charAt(0).toUpperCase();
    playerSelection = firstLetter + playerSelection.substring(1);
}

let playerSelection = "RoCK";
let computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);