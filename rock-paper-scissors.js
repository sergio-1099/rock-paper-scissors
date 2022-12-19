function getComputerChoice() {
    //Choose a number between and including 1-3
    let randomNum = Math.floor(Math.random() * 3) + 1;
    let choice;

    //Assigns choice to computer depending on randomly generated number
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
    //Declares and initializes score variables
    let playerWin = 0;
    let computerWin = 0;

    /*
    //Repeats loop/game 5 times
    for (let i = 0; i < 5; i++){
        
        //Gets user input and generates computer choice
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Choose Rock, Paper, or Scissors:", "");

        //logs the computer's and user's choice 
        console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}!`);

        //plays a round
        let roundWinner = playRound(playerSelection, computerSelection);
        console.log(roundWinner);

        //Checks who won and assigns a point accordingly (no point if tie)
        if (roundWinner === "You Win! Rock beats Scissors!" || roundWinner === "You Win! Paper beats Rock!" || roundWinner === "You Win! Scissors beats Paper!") {
            playerWin++;
        }
        else if (roundWinner === "You Lose! Scissors beats Paper!" || roundWinner === "You Lose! Rock beats Scissors!" || roundWinner === "You Lose! Paper beats Rock!") {
            computerWin++;
        }
        else {

        }
    }
    */

    //Prints final score and displays final message depending on the scores
    console.log(`Final Score:\nUser: ${playerWin}\tComputer: ${computerWin}`);
    if (playerWin > computerWin) {
        console.log("You win the game!");
    }
    else if (playerWin < computerWin) {
        console.log("You lose the game!");
    }
    else {
        console.log("It's a tie! Wow!");
    }
}


//calls the game function
game();