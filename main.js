//first step: attach event listener (submit) to form to get user data
const form = document.querySelector(#myForm)
form.addEventListener("submit", event => {
    event.preventDefault();

    //automatically gets data from form
    const formData = new FormData(form);

    //converts data from form into an object
    const data = Object.fromEntries(formData);

    //hide modal that form is in
    document.querySelector(".modalWrapper").setAttribute("hidden", true)

    initializeGame(data);
})

//attach event listeners (click) to each game box

//initialize the game

//check which game mode we're playing

//set win conditions

//determine current player

//after each move, check win conditions. if not met, then next player is active

//human vs human. easy AI. hard AI.
