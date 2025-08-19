const diceFaces = ["⚀","⚁","⚂","⚃","⚄","⚅"];
const dice = document.getElementById("dice");
const btn = document.getElementById("rollBtn");
const hstry = document.getElementById("history");

function rollDice() {
    const roll = Math.floor(Math.random() * 6);
    dice.textContent = diceFaces[roll];
    hstry.innerHTML += " " + diceFaces[roll];
}

rollBtn.addEventListener(("click") , rollDice);