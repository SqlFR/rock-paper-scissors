let playerScore = 0;
let computerScore = 0;
let currentGame = 0;

function getComputerChoice() {
    const differentChoice = ['Rock', 'Paper', 'Scissors'];
    return differentChoice[Math.floor(Math.random(1) * 3)].toLowerCase(); // return choice computer
}

function getPlayerChoice() {     
    return prompt('Choissisez : Rock, Paper or Scissors : ').toLowerCase(); // return choice player
}

function capitalizeString(string) {
    return string[0].toUpperCase() + string.slice(1); // capitalize first letter
}

function playRound(computerChoice, playerChoice) {
    if ( computerChoice === playerChoice) {
        computerScore++;
        playerScore++;
        return 'Equality.';
    } if ( computerChoice === 'rock' && playerChoice === 'scissors' ||
           computerChoice === 'paper' && playerChoice === 'rock' ||
           computerChoice === 'scissors' && playerChoice === 'paper') {
            computerScore++;
            return `Computer Win! ${capitalizeString(computerChoice)} beats ${capitalizeString(playerChoice)}.`;
         }
    else {
        playerScore++;
        return `You Win! ${capitalizeString(playerChoice)} beats ${capitalizeString(computerChoice)}.`;
    }
}

function game() {
    while (currentGame < 5) {
        console.log(`Partie n° ${currentGame + 1}.`)
        console.log(playRound(getComputerChoice(), getPlayerChoice()),
                    `\nLes scores : ${computerScore} pour l'ordinateur et ${playerScore} pour vous.`);
        currentGame++;
    }
    if (playerScore > computerScore) {
        console.log(`Bravo vous l'emporté avec ${playerScore} contre ${computerScore} pour l'ordinateur.`);
    } else {
        console.log(`Perdu... ${computerScore} pour l'ordinateur et ${playerScore} pour vous.`);
    }
}

game();