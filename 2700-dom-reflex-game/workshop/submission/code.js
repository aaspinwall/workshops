let body = document.querySelector("body");
let lost = false;
let won = false;
let clicked = [];
const names = ["one", "two", "three", "four", "five"];
let cnt = 0;

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

const but = create("button", names[0]);

setTimeout(() => {
  body.appendChild(but);
  setTimeout(() => {
    if (won || lost) return;
    lost = true;
    document.getElementById("status").innerText = "You lost!";
  }, getRandomInt(1300, 500));
}, getRandomInt(1300, 500));

but.addEventListener("click", () => {
  if (won || lost) return;
  clicked[cnt] = true;
  cnt++;
  but.innerHTML = clicked.length - cnt;
  if (clicked.every(x => x)) {
    won = true;
    document.getElementById("status").innerText = "you won!";
  }
});

function howManyClicks(n = 1) {
  for (let i = 0; i < n; i++) {
    clicked.push(false);
  }
}

howManyClicks(getRandomInt(5, 2));
but.innerHTML = clicked.length - cnt;
console.log(clicked);
