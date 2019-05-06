let body = document.querySelector("body");
let lost = false;
let won = false;
var clicked = [];
//let clicked = [false, false];
const names = ["one", "two", "three", "four", "five"];

function create(tag, str) {
  let el = document.createElement(tag);
  el.innerText = str;
  return el;
}
function getRandomInt(max, min = 1) {
  min = Math.ceil(min);
  max = Math.floor(max) + 1;
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function addButtons(n) {
  for (let i = 0; i < n; i++) {
    clicked.push(false);
    var but = create("button", names[i]);
    body.appendChild(but);
    but.addEventListener("click", () => {
      if (won || lost) return;
      clicked[i] = true;
      if (clicked.every(x => x)) {
        won = true;
        document.getElementById("status").innerText = "you won!";
      }
      console.log(clicked);
      console.log(won);
      console.log(lost);
    });
  }
}

addButtons(getRandomInt(5));
console.log(clicked);
setTimeout(() => {
  if (won || lost) return;
  lost = true;
  document.getElementById("status").innerText = "You lost!";
}, getRandomInt(1300, 500));
