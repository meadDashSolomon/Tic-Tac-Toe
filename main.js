//initialize the game

//check which game mode we're playing

//set win conditions

//determine current player

//after each move, check win conditions. if not met, then next player is active

//human vs human. easy AI. hard AI.

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
  adjustDom("displayTurn", `${data.player1Name}'s turn`);
  initializeVariables(data);

  //add event listeners to gameboard
  addEventListenersToGameBoard(data);
};

const playMove = (box, data) => {
  //if game is over, there's been 9 rounds, or box has a letter, then don't do anything.
  if (
    data.gameOver ||
    data.round > 8 ||
    data.board[box.id] === "X" ||
    data.board[box.id] === "O"
  ) {
    return;
  }

  //adjust DOM for player move, then check win conditions
  data.board[box.id] = data.currentPlayer;
  box.textContent = data.currentPlayer;
  box.classList.add(data.currentPlayer === "X" ? "player1" : "player2");

  //increase the round #
  data.round++;

  //check end conditions
  if (endConditions(data)) {
    return;
  }

  //change current player
  //change the dom, and ∆ data.currentPlayer
  changePlayer(data);
};

const endConditions = (data) => {
  //3 potential options
  //winner
  //tie
  //game not over yet
  if (checkWinner(data)) {
    //adjust dom to reflect win
    let winnerName =
      data.currentPlayer === "X" ? data.player1Name : data.player2Name;
    adjustDom("displayTurn", winnerName + " has won the game");
    return true;
  } else if (data.round === 9) {
    //adjust dom to reflect win
    adjustDom("displayTurn", "Tie game. You both lose.");
    //data.gameOver = true;
    return true;
  }
  return false;
};

const checkWinner = (data) => {
  let result = false;
  winningConditions.forEach((condition) => {
    if (
      data.board[condition[0]] === data.board[condition[1]] &&
      data.board[condition[1]] === data.board[condition[2]]
    ) {
      data.gameOver = true;
      result = true;
    }
  });
  return result;
};

const adjustDom = (className, textContent) => {
  const elem = document.querySelector(`.${className}`);
  elem.textContent = textContent;
};

const changePlayer = (data) => {
  data.currentPlayer = data.currentPlayer === "X" ? "O" : "X";
  //adjust the dom
  let displayTurnText =
    data.currentPlayer === "X" ? data.player1Name : data.player2Name;
  adjustDom("displayTurn", `${displayTurnText}'s turn`);
};
