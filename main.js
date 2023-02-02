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

//factory function. data is a const variable that's an object containing the form info.
const initializeVariables = (data) => {
  data.choice = +data.choice;
  data.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  data.player1 = "X";
  data.player2 = "O";
  data.round = 0;
  data.currentPlayer = "X";
  data.gameOver = false;
};

//factory function. data is a const variable that's an object containing the form info.
const initializeGame = (data) => {
  //initialize game variables
  initializeVariables(data);

  console.log(data);

  //add event listeners to boxes
};

//attach event listeners (click) to each game box

//initialize the game

//check which game mode we're playing

//set win conditions

//determine current player

//after each move, check win conditions. if not met, then next player is active

//human vs human. easy AI. hard AI.
