const selectionButtons = document.querySelectorAll("[data-selection]");
const finalColumn = document.querySelectorAll("[data-final-column]");
const gameOptions = [
  {
    name: "rock",
    emoji: "🪨",
    beats: "scissors",
  },
  {
    name: "paper",
    emoji: "📝",
    beats: "rock",
  },
  {
    name: "scissors",
    emoji: "✂️",
    beats: "paper",
  },
];
selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (event) => {
    let selectionName = selectionButton.dataset.selection;
    let selection = gameOptions.find(
      (selection) => selection.name === selectionName
    );
    makeSelection(selection);
  });
});

function makeSelection(selection) {
  let computerSelection = randomSelection();
  let yourWinner = isWinner(selection, computerSelection);
  let computerWinner = isWinner(computerSelection, selection);

  addSelectionResult(computerSelection, computerWinner);
  addSelectionResult(selection, yourWinner);
}

function addSelectionResult(selection, winner) {
  let div = document.createElement("div");
  div.innerText = selection.emoji;
  divClassList.add("result-selection");
  if (winner) div.classList.add("winner");
  finalColumn.after(div);
}

function isWinner(selection, opponenetSelection) {
  return selection.beats === opponenetSelection.name;
}

function randomSelection() {
  let randomIndex = Math.floor(Math.random() * gameOptions.length);
  return gameOptions[randomIndex];
}

// let computerMove = "rock";
// let playerMove = "scissors";

// if (playerMove === "paper") {
//     console.log("You win!");
// } else if (playerMove === "rock") {
//     console.log("Draw");
// } else {
//     console.log("You lose.");
// }

// function  whoWins (computerMove, playerMove) {
// if (computerMove === "rock" ) {
// if (playerMove === "paper")
// return 1;
// console.log("You win!");
// } else if (playerMove === "rock") {
// console.log("Draw");
// return 0;
// } else if (playerMove === "scissors") {
// console.log("You lose.");
// return -1;
// }
// }

//function  whoWins (computerMove, playerMove) {
//    if (computerMove === "paper" ) {
//        if (playerMove === "scissors")
//        return 1;
//        console.log("You win!");
// } else if (playerMove === "paper") {
// console.log("Draw");
// return 0;
// } else if (playerMove === "rock") {
// console.log("You lose.");
// return -1;
// }
// }

// function  whoWins (computerMove, playerMove) {
// if (computerMove === "scissors" ) {
// if (playerMove === "rock")
// return 1;
// console.log("You win!");
// } else if (playerMove === "scissors") {
// console.log("Draw");
// return 0;
// } else if (playerMove === "paper") {
// console.log("You lose.");
// return -1;
// }
// }
