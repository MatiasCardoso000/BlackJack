const cardsDisplay = document.getElementById("cards");
const cardsList = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

function startGame() {
  // Barajar las cartas usando Fisher-Yates
  for (let i = 0; i < cardsList.length; i++) {
    console.log(i);

    // cardsList.map((card) => {
    //   const randomIndex = Math.floor(Math.random() * card[i]);
    //   cardsDisplay.textContent += card[i];
    // });
  }
}

startGame();
