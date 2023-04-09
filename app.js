let playerScore = 0;
let computerScore = 0;
let currentGame = 0;

function getComputerChoice() {
    const differentChoice = ['Rock', 'Paper', 'Scissors'];
    const computerChoice = differentChoice[Math.floor(Math.random(1) * 3)];
    return computerChoice.toLowerCase();
}

function getPlayerChoice() {     
    return prompt('Choissisez : Rock, Paper or Scissors : ').toLowerCase();
}

function capitalizeString(string) {
    return string[0].toUpperCase() + string.slice(1)
}

function playRound(computerChoice, playerChoice) {
    // console.log('Computer choice : ' + computerChoice)
    // console.log('Your choice : ' + playerChoice)
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
        console.log(`Partie n° ${currentGame + 1}`)
        console.log(playRound(getComputerChoice(), getPlayerChoice()));
        console.log(`Les scores : ${computerScore} pour l'ordinateur et ${playerScore} pour vous.`)
        currentGame++;
    }
    if (playerScore > computerScore) {
        console.log(`Bravo vous l'emporté avec ${playerScore} contre ${computerScore} pour l'ordinateur.`)
    } else {
        console.log(`Perdu... ${computerScore} pour l'ordinateur et ${playerScore} pour vous.`)
    }
}

game();