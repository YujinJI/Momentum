const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const paper = document.querySelector("#paper");
const score = document.querySelector("#score");

const userPick = document.querySelector("#user-pick");
const computerPick = document.querySelector("#computer-pick");
const emojis = ["✊🏻", "✌🏻", "✋🏻"];
// 0: 묵, 1: 찌, 2: 빠

function paintScore(user, computer) {
  score.innerHTML = `${user} : ${computer}`;
}

let userScore = 0;
let computerScore = 0;
function checkWinner(user, computer) {
  if (user === 0 && computer === 1) {
    userScore++;
  } else if (user === 0 && computer === 2) {
    computerScore++;
  } else if (user === 1 && computer === 0) {
    computerScore++;
  } else if (user === 1 && computer === 2) {
    userScore++;
  } else if (user === 2 && computer === 0) {
    userScore++;
  } else if (user === 2 && computer === 1) {
    computerScore++;
  }
  paintScore(userScore, computerScore);
}

function onClickEmoji(e) {
  const pick = parseInt(e.target.value, 10);
  userPick.innerHTML = `
    <p class="game-title">You</p>
    <p class="pick-emoji">${emojis[pick]}</p>
  `;
  const randomPick = Math.floor(Math.random() * emojis.length);
  computerPick.innerHTML = `
    <p class="game-title">Computer</p>
    <p class="pick-emoji">${emojis[randomPick]}</p>
  `;
  checkWinner(pick, randomPick);
}

rock.addEventListener("click", onClickEmoji);
scissors.addEventListener("click", onClickEmoji);
paper.addEventListener("click", onClickEmoji);
