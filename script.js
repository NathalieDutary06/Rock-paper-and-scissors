
 // Define constants for the game options
const Rock = "Rock";
const Paper = "Paper";
const Scissors = "Scissors";

 // Define constants for the game results

const Tie = 0;
const Win = 1;
const Lost = 2;

 // Get references to the HTML elements

const BotonRock = document.getElementById("Rock");
const BotonPaper = document.getElementById("Paper");
const BotonScissors = document.getElementById("Scissors");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const MachineImg = document.getElementById("Machine-img");

// Add event listeners to the buttons

BotonRock.addEventListener("click", () => {
  play(Rock);
});

BotonPaper.addEventListener("click", () => {
  play(Paper);
});

BotonScissors.addEventListener("click", () => {
  play(Scissors);
});

 //Define the play function

function play(userOption) {
  const MachineOption = calcMachineOption();
  const result = calcResult(userOption, MachineOption);

  // Update the images
  
  userImg.src = "img/" + userOption + ".png";
  MachineImg.src = "img/" + MachineOption + ".png"

  console.log(userImg, MachineImg);

   // Update the result text
  
  switch (result) {
    case Tie:
      resultText.innerHTML = "You have tied";
      break;

    case Win:
      resultText.innerHTML = "You Win!";
      break;

    case Lost:
      resultText.innerHTML = "You Lost!";
      break;
  }
}

function calcMachineOption() {
  const number = Math.floor(Math.random() * 3);
  switch (number) {
    case 0:
      return Rock;

    case 1:
      return Paper;

    case 2:
      return Scissors;
  }
}

function calcResult(userOption, MachineOption) {
  if (userOption == MachineOption) {
    return Tie;

    // If the user chooses Rock
    
  } else if (userOption === Rock) {
    if (MachineOption === Paper) return Lost;
    if (MachineOption === Scissors) return Win;

    // If the user chooses Paper
    
  } else if (userOption === Paper) {
    if (MachineOption === Scissors) return Lost;
    if (MachineOption === Rock) return Win;

     // If the user chooses Scissors
    
  } else if (userOption === Scissors) {
    if (MachineOption === Paper) return Win;
    if (MachineOption === Rock) return Lost;


  }
}

