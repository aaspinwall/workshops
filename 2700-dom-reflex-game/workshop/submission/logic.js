function resetValues() {
  status = "zero";
  player1 = { key: undefined, win: false, matches: 0 };
  player2 = { key: undefined, win: false, matches: 0 };
  elScore.innerHTML = "Score:<br>Player 1: <br>Player 2: ";
  elTime.innerHTML = "";
  theme.preload;
}

function go() {
  theme.play();
  if (status === "zero") {
  }
  if (status === "set" && !player1.key) {
    elInstructions.innerHTML = "Player 1: Select your key";
  }
  if (status === "set" && player1.key) {
    elInstructions.innerHTML = "Player 2: Select your key";
  }
  if (status === "start") {
    elInstructions.innerHTML = instructions.ready;
    var fire = setTimeout(() => {
      elInstructions.innerHTML = instructions.go;
      snap.play();
      theme.pause();
      status = "running";
      refTime = newTime();
    }, randomInRange(3000, 1500));
  }
}

function addRings(player) {
  let res = "";
  for (let index = 0; index < player.matches; index++) {
    res += ringHtml;
  }
  return res;
}

function keepScore() {
  score = [player1.matches, player2.matches];
  elScore.innerHTML = `Score: <br>Player 1: ${addRings(
    player1
  )}<br>Player 2: ${addRings(player2)}`;
}
function stop(player) {
  let endTime = ((newTime() - refTime) / 60).toFixed(4) + " sec";
  elTime.innerHTML = endTime;
  elInstructions.innerHTML = `Player${player} won!`;
  keepScore();
  status = "finished";
}

resetValues();
