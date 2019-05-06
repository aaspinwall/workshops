let player1 = { key: undefined, win: false, matches: 0 };
let player2 = { key: undefined, win: false, matches: 0 };
let score = [player1.matches, player2.matches];
let status = "zero";
const theme = new Audio("audio/theme.mp3");
const snap = new Audio("audio/snap.mp3");
theme.volume = 0.5;

function newTime() {
  return Math.floor(new Date().getTime() / 10);
}
function randomInRange(max, min = 0) {
  max += 1;
  return Math.floor(Math.random() * (max - min) + min);
}
//let start = newTime();

const elBody = document.querySelector("body");
const elScore = document.querySelector("#score");
const elTime = document.querySelector("#time");
const elCue = document.querySelector("#cue");
const elInstructions = document.querySelector("#instructions");
const elStart = document.querySelector("#start");
const elNext = document.querySelector("#next");
const elReset = document.querySelector("#reset");
//const elRing = document.createElement("img");
const elRing = document.createElement("img");
elRing.setAttribute("src", "img/ring.gif");
elRing.setAttribute("class", "ring");
const ringHtml = '<img src="img/ring.gif" class="ring" alt="" />';

elStart.addEventListener("click", () => {
  status = "set";
  go();
  console.log("clicked start");
});

elNext.addEventListener("click", () => {
  snap.pause();
  snap.currentTime = 0;
  status = "start";
  go();
});

elReset.addEventListener("click", () => {
  elInstructions.innerHTML = "Instructions";
  elCue.innerHTML = "";
  resetValues();
});
