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
        return 'Equality.';
    } if ( computerChoice === 'rock' && playerChoice === 'scissors' ||
           computerChoice === 'paper' && playerChoice === 'rock' ||
           computerChoice === 'scissors' && playerChoice === 'paper') {
            return `Computer Win! ${capitalizeString(computerChoice)} beats ${capitalizeString(playerChoice)}.`;
         }
    else {
        return `You Win! ${capitalizeString(playerChoice)} beats ${capitalizeString(computerChoice)}.`;
    }
}

console.log(playRound(getComputerChoice(), getPlayerChoice()));
