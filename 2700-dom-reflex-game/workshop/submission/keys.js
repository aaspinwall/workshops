function playerKeys(key) {
  if (!player1.key) {
    player1.key = key;
    console.log(`Player 1 key is ${key}`);
    go();
  } else {
    player2.key = key;
    console.log(`Player 2 key is ${event.code}`);
    status = "start";
    go();
  }
}

window.addEventListener("keydown", event => {
  if (status === "set") {
    playerKeys(event.code);
  }
  if (status === "running" && event.code === player1.key) {
    player1.win = true;
    player1.matches += 1;
    stop(1);
  } else if (status === "running" && event.code === player2.key) {
    player2.win = true;
    player2.matches += 1;
    stop(2);
  }
});

//status = "set";
