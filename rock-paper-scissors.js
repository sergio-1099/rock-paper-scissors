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

    //Compare playerSelection to computerSelection to determine winner
    let roundWinner;
    if (playerSelection === computerSelection) {
        roundWinner = "It's a tie!";
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        roundWinner = "You Win! Rock beats Scissors!";
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        roundWinner = "You Lose! Scissors beats Paper!";
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        roundWinner = "You Win! Paper beats Rock!";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        roundWinner = "You Lose! Rock beats Scissors!";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        roundWinner = "You Win! Scissors beats Paper!";
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        roundWinner = "You Lose! Paper beats Rock!";
    }
    else {
        roundWinner = "You did not pick one of the three: Rock, Paper, or Scissors.";
    }
    return roundWinner;
}

function game() {
    let playerWin = 0;
    let computerWin = 0;
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("");
    
    for (let i = 0; i < 5; i++){
        playRound(playerSelection, computerSelection);
        console.log(roundWinner);
        if (roundWinner === "You Win! Rock beats Scissors!" || roundWinner === "You Win! Paper beats Rock!" || roundWinner === "You Win! Scissors beats Paper!") {
            playerWin++;
        }
        else if (roundWinner === "It's a tie!" || roundWinner === "You did not pick one of the three: Rock, Paper, or Scissors.") {

        }
        else {
            computerWin++;
        }
    }
}

let playerSelection = "RoCK";
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));