function getComputerChoice() {
    //Choose a number between and including 1-3
    let randomNum = Math.floor(Math.random() * 3) + 1;
    

    console.log(randomNum);
    return randomNum;
}

getComputerChoice();