function getComputerChoice() {
    //Choose a number between and including 1-3
    let choice = Math.floor(Math.random() * 3) + 1;
    console.log(choice);
    return choice;
}

getComputerChoice();