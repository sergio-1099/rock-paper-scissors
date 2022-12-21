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
    let gameWon = true;

    const scoreBoard = document.querySelector('.score-board');
    const gameInfo = document.querySelector('.gameInfo');
    const gameInfoText = document.querySelector('.gameInfo .text');
    document.querySelector('#player').innerHTML = playerWin;
    document.querySelector('#computer').innerHTML = computerWin;


    const buttons = document.querySelectorAll('.pButton');

    forfunction:
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            if (playerWin === 5 || computerWin === 5) {
                return;
            }

            buttons[i].classList.add('clickTransition');
            buttons[i].classList.add('selectedChoice');
            buttons[i].addEventListener('transitionend', removeTransition);
            buttons[i].addEventListener('transitionend', removeTransition2);

            document.querySelector('#player').textContent = playerWin.toString();
            document.querySelector('#computer').textContent = computerWin.toString();

            computerSelection = getComputerChoice()
            playerSelection = buttons[i].textContent;
            
            roundWinner = (playRound(playerSelection, computerSelection));
            
            document.querySelector('.player-choice').textContent = `You chose ${playerSelection}`;
            document.querySelector('.computer-choice').textContent = `Computer chose ${computerSelection}`;
            document.querySelector('.game-text').textContent = roundWinner.toString();

            if (roundWinner === "You Win! Rock beats Scissors!" || roundWinner === "You Win! Paper beats Rock!" || 
            roundWinner === "You Win! Scissors beats Paper!") {
                ++playerWin;
            }
            else if (roundWinner === "You Lose! Scissors beats Paper!" || roundWinner === "You Lose! Rock beats Scissors!" || 
            roundWinner === "You Lose! Paper beats Rock!") {
                ++computerWin;
            }
            document.querySelector('#player').textContent = playerWin.toString();
            document.querySelector('#computer').textContent = computerWin.toString();

            if (playerWin === 5 || computerWin === 5) {
                if (playerWin > computerWin) {
                    let endDiv = document.createElement('div');
                    endDiv.classList.add('endDiv');
                    endDiv.textContent = 'You won the game! Click "Play!" to play again.';
                    gameInfoText.appendChild(endDiv);
                } else if (playerWin < computerWin) {
                    let endDiv = document.createElement('div');
                    endDiv.classList.add('endDiv');
                    endDiv.textContent = 'You lost the game! Click "Play!" to play again.';
                    gameInfoText.appendChild(endDiv);
                }
                document.querySelector('.start').classList.remove('selected');
                document.querySelector('.start').textContent = 'Play!';
            }
        });
    }
}


//calls the game function
const play = document.querySelector('.start');
let gameCounter = 0;
const startButton = document.querySelector('.start');
const playerChoice = document.querySelector('.player-choice');
const computerChoice = document.querySelector('.computer-choice');
const gameText = document.querySelector('.game-text');

play.addEventListener('click', function () {
    startButton.classList.add('clickTransition');
    startButton.classList.add('selected');
    startButton.addEventListener('transitionend', removeTransition);
    startButton.textContent = 'Playing!'

    playerChoice.textContent = ' ';
    computerChoice.textContent = ' ';
    gameText.textContent = ' ';
    
    if (gameCounter >= 1) {
        document.querySelector('.endDiv').remove();
        document.querySelector('.start').classList.remove('endTransition');
    }
    
    game();
    
    gameCounter++;
});

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('clickTransition');
}

function removeTransition2(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('selectedChoice');
}