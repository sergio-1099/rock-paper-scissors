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
    let playerSelection;
    let computerSelection;
    let roundWinner;

    const scoreBoard = document.querySelector('.score-board');
    document.querySelector('#player').innerHTML = playerWin;
    document.querySelector('#computer').innerHTML = computerWin;



    const buttons = document.querySelectorAll('button');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
                document.querySelector('#player').innerHTML = playerWin;
                document.querySelector('#computer').innerHTML = computerWin;
                computerSelection = getComputerChoice()
                playerSelection = buttons[i].textContent;
                roundWinner = (playRound(playerSelection, computerSelection));

                if (roundWinner === "You Win! Rock beats Scissors!" || roundWinner === "You Win! Paper beats Rock!" || 
                roundWinner === "You Win! Scissors beats Paper!") {
                    ++playerWin;
                }
                else if (roundWinner === "You Lose! Scissors beats Paper!" || roundWinner === "You Lose! Rock beats Scissors!" || 
                roundWinner === "You Lose! Paper beats Rock!") {
                    ++computerWin;
                }
                else {
                    console.log("No points!")
                }
                document.querySelector('#player').innerHTML = playerWin;
                document.querySelector('#computer').innerHTML = computerWin;
            }
        );
    }
    
}


//calls the game function
game();