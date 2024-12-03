let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let dice1Image = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", dice1Image);

let dice2Image = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", dice2Image);

let resultText;
if (randomNumber1 > randomNumber2) {
  resultText = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  resultText = "Player 2 Wins! 🚩";
} else {
  resultText = "It's a Draw!";
}

document.querySelector("h1").textContent = resultText;
