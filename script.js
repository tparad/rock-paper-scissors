const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";
const handArray = [ROCK, PAPER, SCISSORS];
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const roundMessage = document.querySelector("#round-message");
const roundNumberDisplay = document.querySelector("#round-number");

let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;

rockButton.addEventListener("click", function() {
    roundMessage.innerText = playRound(ROCK);
    playerScoreDisplay.innerText = playerScore;
    computerScoreDisplay.innerText = computerScore;
    roundNumberDisplay.innerText = roundNumber;
    if (playerScore === 5 || computerScore === 5){
        endGame();
    };
});

paperButton.addEventListener("click", function() {
    roundMessage.innerText = playRound(PAPER);
    playerScoreDisplay.innerText = playerScore;
    computerScoreDisplay.innerText = computerScore;
    roundNumberDisplay.innerText = roundNumber;
    if (playerScore === 5 || computerScore === 5){
        endGame();
    };
});

scissorsButton.addEventListener("click", function() {
    roundMessage.innerText = playRound(SCISSORS);
    playerScoreDisplay.innerText = playerScore;
    computerScoreDisplay.innerText = computerScore;
    roundNumberDisplay.innerText = roundNumber;
    if (playerScore === 5 || computerScore === 5){
        endGame();
    };
});

function endGame() {
    rockButton.className = "hidden";
    paperButton.className = "hidden";
    scissorsButton.className = "hidden";
    if (playerScore > computerScore) {
        roundMessage.innerText = "You win!"
    }
    else {
        roundMessage.innerText = "You lose!"
    }
};

function getComputerHand() {
    return handArray[Math.floor(Math.random() * handArray.length)];
}
function playRound(playerHand) {
    let computerHand = getComputerHand();
    roundNumber++;

    if (playerHand === computerHand) {
        return(`This round is a tie, ${playerHand} is the same as ${computerHand}`);
    }
    else if (playerHand === ROCK && computerHand === SCISSORS || 
        playerHand === PAPER && computerHand === ROCK || 
        playerHand === SCISSORS && computerHand === PAPER) {
        playerScore++;
        return (`You win this round, ${playerHand} beats ${computerHand}`);
    }
    else {
        computerScore++;
        return (`You lose this round, ${computerHand} beats ${playerHand}`);
    }
}
