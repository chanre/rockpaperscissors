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
    let win;
    if (player === "rock" && computerSelection === "scissors" 
    || player === "scissors" && computerSelection === "paper" 
    || player === "paper" && computerSelection === "rock") {
        win = `You win! ${player} beats ${computerSelection}`; 
    } else if (player === computerSelection) {
        win = "Tie! You both chose the same option";
    } else {
        win = `You lose! ${computerSelection} beats ${player}`;
    }
    return win;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
