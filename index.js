const player = document.getElementById("player");
const computer = document.getElementById("computer");
const result = document.getElementById("result");
const buttons = document.querySelectorAll(".btn");

let playerChoice;
let computerChoice;

const choices = ["ROCK", "PAPER", "SCISSORS"];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerChoice = button.textContent;
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    player.textContent = `Player: ${playerChoice}`;
    computer.textContent = `Computer: ${computerChoice}`;
    checkWinner();
  });
});

function checkWinner() {
  if (playerChoice == computerChoice) {
    result.textContent = "DRAW!";
  } else if (playerChoice == "ROCK") {
    result.textContent = computerChoice == "PAPER" ? "YOU LOSE!" : "YOU WIN!";
  } else if (playerChoice == "PAPER") {
    result.textContent =
      computerChoice == "SCISSORS" ? "YOU LOSE!" : "YOU WIN!";
  } else if (playerChoice == "SCISSORS") {
    result.textContent = computerChoice == "ROCK" ? "YOU LOSE!" : "YOU WIN!";
  }
}
