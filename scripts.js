const player1 = document.getElementsByClassName('player1')[0];
player1.addEventListener("click", updateName1);

const player2 = document.getElementsByClassName('player2')[0];
player2.addEventListener("click", updateName2);

function updateName1() {
  const name1 = prompt("Digite o primeiro nome");
  player1.textContent = `Player 1: ${name1}`;
}

function updateName2() {
  const name2 = prompt("Digite o segundo nome");
  player2.textContent = `Player 2: ${name2}`;
}