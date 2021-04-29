let computerMove = "paper";
let playerMove = "rock";

function  whoWins (computerMove, playerMove) {
    if (computerMove === "rock" ) {
        if (playerMove === "paper")
        return 1;
        console.log("You win!");
    } else if (playerMove === "rock") {
        console.log("Draw");
        return 0;
    } else if (playerMove === "scissors") {
        console.log("You lose.");
        return -1;
    }

}

function  whoWins (computerMove, playerMove) {
    if (computerMove === "paper" ) {
        if (playerMove === "scissors")
        return 1;
        console.log("You win!");
    } else if (playerMove === "paper") {
        console.log("Draw");
        return 0;
    } else if (playerMove === "rock") {
        console.log("You lose.");
        return -1;
    }

}

function  whoWins (computerMove, playerMove) {
    if (computerMove === "scissors" ) {
        if (playerMove === "rock")
        return 1;
        console.log("You win!");
    } else if (playerMove === "scissors") {
        console.log("Draw");
        return 0;
    } else if (playerMove === "paper") {
        console.log("You lose.");
        return -1;
    }

}