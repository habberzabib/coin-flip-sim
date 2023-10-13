// COIN FLIP SIMULATOR

//HTML VARIABLES
let outputEl = document.getElementById("output");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");

//COUNT VARIABLES
let numHeads = 0;
let numTails = 0;

//BUTTON EVENT LISTENER
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //GENERATE A RANDOM NUMBER
  let randNum = Math.random();
  console.log(randNum);

  //SIMULATE COIN FLIP
  if (randNum < 0.5) {
    outputEl.innerHTML = "<img src='img/heads.png' />";
    numHeads = numHeads + 1;
    headsEl.innerHTML = numHeads;
  } else {
    outputEl.innerHTML = "<img src='img/tails.png' />";
    numTails = numTails + 1;
    tailsEl.innerHTML = numTails;
  }
}
