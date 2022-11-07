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
    if (player === "rock" && computerSelection === "scissors" 
    || player === "scissors" && computerSelection === "paper" 
    || player === "paper" && computerSelection === "rock") {
        console.log(`You win! ${player} beats ${computerSelection}`); 
        winner = "player";
    } else if (player === computerSelection) {
        console.log("Tie! You both chose the same option");
        winner = "tie";
    } else {
        console.log(`You lose! ${computerSelection} beats ${player}`);
        winner = "com";
    }
    return winner;
}

function displayScores(winner, wins) {
    const score = document.querySelector(`#${winner}Score`)
    score.textContent = wins;
}

let playerScore = comScore = 0;

const buttons = document.querySelectorAll('.buttons');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice());
    });
});



// function game() {
//     let player = 0;
//     let computer = 0;
//     for (let i = 0; i < 5; i++) {
//         let round = playRound(prompt("Rock, paper or scissors?", "Rock"), getComputerChoice());
//         if (round === "player") {
//             player++;
//         } else if (round === "computer") {
//             computer++;
//         }
//     }   

//     if (player > computer) {
//         console.log("You won!");
//     } else if (player === computer) {
//         console.log("You tied!");
//     } else {
//         console.log("Computer won!");
//     }  
// }
