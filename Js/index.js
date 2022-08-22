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
  players.push(playerName);
  displayPlayer();
}
