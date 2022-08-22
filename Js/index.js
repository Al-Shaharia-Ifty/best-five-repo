const players = [];

function displayPlayer() {
  const allPlayer = document.getElementById("player-name");
  allPlayer.textContent = "";

  for (let i = 0; i < players.length; i++) {
    const tr = document.createElement("tr");
    tr.className = "mt-10 text-white";
    tr.innerHTML = `
          <td class="text-xl">${i + 1}.</td>
          <td class="text-lg pl-4">${players[i]}</td>
              `;
    allPlayer.appendChild(tr);
  }
}

function addToCart(element) {
  const playerName = element.parentNode.children[0].innerText;
  const button = element.parentNode.children[2];
  if (players.length < 5) {
    button.disabled = true;
    players.push(playerName);
    displayPlayer();
  } else {
    const errorMessage = document.getElementById("player-error");
    errorMessage.style.display = "block";
  }
}

function calculate() {
  const perPlayerInput = document.getElementById("per-player").value;
  const playerExpenses = document.getElementById("Player-expenses");
  const perPlayerNumber = parseInt(perPlayerInput);
  const totalExpenses = perPlayerNumber * players.length;
  playerExpenses.innerText = totalExpenses;
}
function calculateTotal() {
  calculate();
  const playerExpenses = document.getElementById("Player-expenses").innerText;
  const total = document.getElementById("total");
  const manager = document.getElementById("manager").value;
  const coach = document.getElementById("coach").value;
  const managerNumber = parseInt(manager);
  const coachNumber = parseInt(coach);
  const expensesNumber = parseInt(playerExpenses);
  const totalAmount = managerNumber + coachNumber + expensesNumber;
  total.innerText = totalAmount;
}
