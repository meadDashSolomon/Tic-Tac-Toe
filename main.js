const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

//first step: attach event listener (submit) to form to get user data
const form = document.querySelector("#myForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  //automatically gets data from form
  const formData = new FormData(form);

  //converts data from form into an object
  const data = Object.fromEntries(formData);

  //hide modal that form is in
  document.querySelector(".modal-wrapper").setAttribute("hidden", true);

  initializeGame(data);
});

//factory function? data is a const variable that's an object containing the form info.
const initializeVariables = (data) => {
  data.choice = +data.choice;
  data.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  data.player1 = "X";
  data.player2 = "O";
  data.round = 0;
  data.currentPlayer = "X";
  data.gameOver = false;
};

const addEventListenersToGameBoard = (data) => {
  document.querySelectorAll(".box").forEach((box) => {
    box.addEventListener("click", (event) => {
      playMove(event.target, data);
    });
  });
};

//factory function? data is a const variable that's an object containing the form info.
const initializeGame = (data) => {
  //initialize game variables
  initializeVariables(data);

  //add event listeners to gameboard
  addEventListenersToGameBoard(data);
};

const playMove = (box, data) => {
  //is game over? if so, don't do anything.
  if (data.gameOver || data.round > 8) {
    return;
  }
  //check if box has a letter, if so, don't do anything
  if (data.board[box.id] === "X" || data.board[box.id] === "O") {
    return;
  }
  //adjust DOM for player move, then check win conditions
  data.board[box.id] = data.currentPlayer;
  box.textContent = data.currentPlayer;
  box.classList.add(data.currentPlayer === "X" ? "player1" : "player2");

  //increase the round #
  data.round++;
  console.log(box, data);

  //check win conditions
};
//initialize the game

//check which game mode we're playing

//set win conditions

//determine current player

//after each move, check win conditions. if not met, then next player is active

//human vs human. easy AI. hard AI.
