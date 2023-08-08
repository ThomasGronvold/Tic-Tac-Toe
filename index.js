// Model

let htmlDiv = document.getElementById("app");
let board = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;
let xTimesPlayed = 0;
let oTimesPlayed = 0;
let whoWon = '';

// View

updateView();
function updateView() {
  let html = "";
  for (let i = 0; i < board.length; i++) {
    html += `<div ${checkGameOver(i)}>${board[i]}</div>`;
  }
  if (gameOver) {
    html += `<h1>${whoWon.toUpperCase()} Won!</h1>`
  }

  htmlDiv.innerHTML = html + '<button onclick="resetGame()" style="margin-top: 50px;">Reset</button>';
  htmlDiv.style.display = "grid";
  htmlDiv.style.gridTemplateColumns = "repeat(3, 105px)";
}

// Controller

function setX(divIndex) {

  board[divIndex] != "x" && board[divIndex] != "o" ? ((board[divIndex] = "x"), xTimesPlayed++) : "";
  checkWinning();

  if (xTimesPlayed > oTimesPlayed && board.includes("")) {
    while (xTimesPlayed != oTimesPlayed) {
      let emptyarraySlots = Array.from(board.keys()).filter((i) => board[i] === "");
      let oIndex = Math.floor(Math.random() * emptyarraySlots.length);
      board[emptyarraySlots[oIndex]] = 'o';
      oTimesPlayed++;
    }
  }
  checkWinning();
  updateView();
}

function checkGameOver(i, whereWon) {
  if (!gameOver) {
    return `onclick="setX(${i})"`;
  }
}

function checkWinning() {
  /* Horisontal Win */

  board[0] === 'x' && board[1] === 'x' && board[2] === 'x' ? (gameOver = true, whoWon = 'x') : board[0] === 'o' && board[1] === 'o' && board[2] === 'o' ? (gameOver = true, whoWon = 'o'):
  board[3] === 'x' && board[4] === 'x' && board[5] === 'x' ? (gameOver = true, whoWon = 'x') : board[3] === 'o' && board[4] === 'o' && board[5] === 'o' ? (gameOver = true, whoWon = 'o'):
  board[6] === 'x' && board[7] === 'x' && board[8] === 'x' ? (gameOver = true, whoWon = 'x') : board[6] === 'o' && board[7] === 'o' && board[8] === 'o' ? (gameOver = true, whoWon = 'o'):

  /* Vertical Win  */

  board[0] === 'x' && board[3] === 'x' && board[6] === 'x' ? (gameOver = true, whoWon = 'x') : board[0] === 'o' && board[3] === 'o' && board[6] === 'o' ? (gameOver = true, whoWon = 'o'):
  board[1] === 'x' && board[4] === 'x' && board[7] === 'x' ? (gameOver = true, whoWon = 'x') : board[1] === 'o' && board[4] === 'o' && board[7] === 'o' ? (gameOver = true, whoWon = 'o'):
  board[2] === 'x' && board[5] === 'x' && board[8] === 'x' ? (gameOver = true, whoWon = 'x') : board[2] === 'o' && board[5] === 'o' && board[8] === 'o' ? (gameOver = true, whoWon = 'o'): 

  /* Diagonal Win */

  board[0] === 'x' && board[4] === 'x' && board[8] === 'x' ? (gameOver = true, whoWon = 'x') : board[0] === 'o' && board[4] === 'o' && board[8] === 'o' ? (gameOver = true, whoWon = 'o'):
  board[2] === 'x' && board[4] === 'x' && board[6] === 'x' ? (gameOver = true, whoWon = 'x') : board[2] === 'o' && board[4] === 'o' && board[6] === 'o' ? (gameOver = true, whoWon = 'o'): '';
}

function resetGame() {
  gameOver = false;
  board = ["", "", "", "", "", "", "", "", ""];
  xTimesPlayed = 0;
  oTimesPlayed = 0;
  updateView();
}