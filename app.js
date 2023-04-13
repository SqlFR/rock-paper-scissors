// BACK-END
let playerScore = 0;
let computerScore = 0;
let winner;
let playerChoice;
let computerChoice;


function getComputerChoice() {
    const differentChoice = ['Rock', 'Paper', 'Scissors'];
    return differentChoice[Math.floor(Math.random(1) * 3)].toLowerCase(); // return choice computer
}


function capitalizeString(string) {
    return string[0].toUpperCase() + string.slice(1); // capitalize first letter
}

function playRound(computerChoice, playerChoice) {
    const arrEmoticon = {
        rock: '✊',
        paper: '✋',
        scissors: '✌️'};
    displayComputerChoice.textContent = arrEmoticon[computerChoice];
    displayPlayerChoice.textContent = arrEmoticon[playerChoice];
    if ( computerChoice === playerChoice) {
        winner = 'tie';
    } 
    if ( computerChoice === 'rock' && playerChoice === 'scissors' ||
            computerChoice === 'paper' && playerChoice === 'rock' ||
            computerChoice === 'scissors' && playerChoice === 'paper') {          
        winner = 'computer';
        }
    if ( playerChoice === 'rock' && computerChoice === 'scissors' ||
            playerChoice === 'paper' && computerChoice === 'rock' ||
            playerChoice === 'scissors' && computerChoice === 'paper') {
        winner = 'player';       
    }    
    updateScoresMessage(playerChoice, computerChoice, winner);
}

function updateScoresMessage(playerChoice, computerChoice, winner) {
    switch (winner) {
        case 'tie':
            displayInfo.textContent = "It's a tie !";
            displayResult.textContent = `${capitalizeString(playerChoice)} ties with ${capitalizeString(computerChoice)}`;
            break;
        case 'player':
            displayInfo.textContent = "You win!";
            displayResult.textContent = `${capitalizeString(playerChoice)} beats ${capitalizeString(computerChoice)}`;
            playerScore++;
            displayPlayerScore.textContent = `Player : ${playerScore}`;
            break;
        case 'computer':
            displayInfo.textContent = "You lost!";
            displayResult.textContent = `${capitalizeString(computerChoice)} beats ${capitalizeString(playerChoice)}.`;
            computerScore++;
            displayComputerScore.textContent = `Computer : ${computerScore}`;
            break;        
    }
    
    if (playerScore === 5) {        
        endGame('player')
    }
    if (computerScore === 5) {
        endGame('computer')
    }
}

function endGame(player) {
    if (player === 'player') {
        message.textContent = "Congrats you win !"
    }
    if (player === 'computer') {
        message.textContent = "Too bad, you loose..."
    }
    divResultFinal.classList.add('popUp');
    buttons.forEach(button => button.removeEventListener('click', game));
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    displayPlayerScore.textContent = 'Player : 0';
    displayComputerScore.textContent = 'Computer : 0';
    displayPlayerChoice.textContent = '❌';
    displayComputerChoice.textContent = '❌';
    displayInfo.textContent = "Choose your weapon !";
    displayResult.textContent = "First to score 5 win the game.";
    divResultFinal.classList.remove('popUp');
    buttons.forEach(button => button.addEventListener('click', game));
}

// function game() {
//     while (currentGame < 5) {
//         console.log(`Partie n° ${currentGame + 1}.`);
//         console.log(playRound(getComputerChoice(), getPlayerChoice()),
//                     `\nLes scores : ${computerScore} pour l'ordinateur et ${playerScore} pour vous.`);
//         currentGame++;
//     }
//     if (playerScore > computerScore) {
//         console.log(`Bravo vous l'emporté avec ${playerScore} contre ${computerScore} pour l'ordinateur.`);
//     } else {
//         console.log(`Perdu... ${computerScore} pour l'ordinateur et ${playerScore} pour vous.`);
//     }
// }

function game(e) {
    playRound(getComputerChoice(), this.value);
};


// FRONT-END

const buttons = document.querySelectorAll('.btnChoice');
const buttonRestart = document.querySelector('.btnRestart');
const displayInfo = document.querySelector('#displayInfo');
const displayResult = document.querySelector('#displayResult');
const displayPlayerChoice = document.querySelector('#displayPlayerChoice');
const displayComputerChoice = document.querySelector('#displayComputerChoice');
const displayPlayerScore = document.querySelector('#displayPlayerScore');
const displayComputerScore = document.querySelector('#displayComputerScore');
const divResultFinal = document.querySelector('#resultFinal');
const message = document.querySelector('.message');

displayPlayerScore.textContent = 'Player : 0'
displayComputerScore.textContent = 'Computer : 0'

buttons.forEach(button => button.addEventListener('click', game));
buttonRestart.addEventListener('click', restartGame);




