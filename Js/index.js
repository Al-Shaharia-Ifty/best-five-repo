const players = [];

function displayPlayer() {
  if (players.length < 6) {
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
  } else {
    const errorMessage = document.getElementById("player-error");
    errorMessage.style.display = "block";
  }
}

function addToCart(element) {
  const playerName = element.parentNode.children[0].innerText;
  const button = element.parentNode.children[2];
  if (players.length < 5) {
    button.disabled = true;
    console.log(button);
    players.push(playerName);
    displayPlayer();
  }
}
