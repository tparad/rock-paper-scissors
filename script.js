const handArray = ["rock", "paper", "scissors"];

playGame();

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for (i = 0; i < 5; i++) {
        roundWinner = playRound(window.prompt("Rock, Paper, or Scissors?").toLowerCase(),getComputerHand());
        if (roundWinner == "player") {
            playerScore += 1;
        }
        else if (roundWinner == "computer") {
            computerScore += 1;
        }
    }
    if (playerScore === computerScore) {
        console.log(`Tie game, the score is ${playerScore} to ${computerScore}`);
    }
    else if (playerScore > computerScore) {
        console.log(`You win, the score is ${playerScore} to ${computerScore}`);
    }
    else {
        console.log(`You lose, the score is ${playerScore} to ${computerScore}`);
    }
}

function getComputerHand() {
    return handArray[Math.floor(Math.random() * handArray.length)];
}

function playRound(playerHand, computerHand) {
    if (playerHand === computerHand) {
        console.log(`This round is a tie, ${playerHand} is the same as ${computerHand}`)
        return "tie";
    }
    else if (playerHand === "rock" && computerHand === "scissors" || 
        playerHand === "paper" && computerHand === "rock" || 
        playerHand === "scissors" && computerHand === "paper") {
        console.log(`You win this round, ${playerHand} beats ${computerHand}`)
        return "player";
    }
    else {
        console.log(`You lose this round, ${computerHand} beats ${playerHand}`);
        return "computer";
    }
}