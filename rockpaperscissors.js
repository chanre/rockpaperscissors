let getComputerChoice = () => {
    let choice = Math.floor((Math.random() * 3) + 1);
    switch(choice) {
        case 1:
            console.log(choice);
            return "rock";
        case 2:
            console.log(choice);
            return "scissors";
        case 3:
            console.log(choice);
            return "paper";
    }
};

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let winner = "";
    let score = 0;
    const winMessage = document.querySelector(".winMessage");
    if (player === "rock" && computerSelection === "scissors" 
    || player === "scissors" && computerSelection === "paper" 
    || player === "paper" && computerSelection === "rock") { 
        winMessage.textContent = `You win! ${player} beats ${computerSelection}`;
        score = parseInt(document.querySelector("#playerScore").textContent);
        score++;
        winner = "player";
        keepScores(winner, score);
    } else if (player === computerSelection) {
        winMessage.textContent = "Tie! You both chose the same option";
        winner = "tie";
    } else {
        winMessage.textContent = `You lose! ${computerSelection} beats ${player}`;
        score = parseInt(document.querySelector("#comScore").textContent);
        score++;
        winner = "com";
        keepScores(winner, score);
    }
}

function keepScores(winner, wins) {
    const score = document.querySelector(`#${winner}Score`);
    score.textContent = wins;
}

function openRestart(e) {
    const modal = document.querySelector(".modal");
    modal.style.display = "flex";
}

function closeRestart(e) {
    const modal = document.querySelector(".modal");
    const restart = document.querySelector('.restart');
    if (e.target == modal || e.target == restart) modal.style.display = "none";
}

function gameOver() {
    player = parseInt(document.querySelector("#playerScore").textContent);
    com = parseInt(document.querySelector("#comScore").textContent);
    if (player === 5) {
        return "player";
    } else if (com === 5) {
        return "com";
    } else {
        return false;
    }
}

function displayWinner(winner) {
    const winMessage = document.querySelector('.winMessage');
    if (winner === "com") winner = winner.toUpperCase();
    winMessage.textContent = `The ${winner} is the winner!`; 
}

function reset() {
    player = document.querySelector("#playerScore");
    com = document.querySelector("#comScore");
    winMessage = document.querySelector(".winMessage");
    player.textContent = 0;
    com.textContent = 0;
    winMessage.textContent = "Good luck!";
}

function game(e) {
    let winner = gameOver();
    if (winner != false) {
        openRestart();
        return;
    } 

    playRound(e.target.id, getComputerChoice());
    winner = gameOver();

    if (winner != false) {
        displayWinner(winner);
        openRestart();
        return;
    } 

}

const buttons = document.querySelectorAll('.buttons');
const restart = document.querySelector('.restart');

restart.addEventListener('click', reset);
buttons.forEach(button => {
    button.addEventListener('click', game);
});

window.document.addEventListener('click', closeRestart);