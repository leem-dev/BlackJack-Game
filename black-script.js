const cardsText = document.querySelector(".cards-text");
const sumText = document.querySelector(".sum-text");
const startText = document.querySelector(".start-text");
const startButton = document.querySelector(".start-button");
const newButton = document.querySelector(".new-button");
let message = "";
let isAlive = true;
let hasBlackJack = false;


const getRandomNumber = () => {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  
  if (randomNumber > 10)  {
    return 11;
  } else if (randomNumber === 1)  {
    return 10;
  } else  {
    return randomNumber;
  }
}

const startGame = () => {
  let firstCard = getRandomNumber();
  let secondCard = getRandomNumber();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame()
}


const renderGame = () => {
  cardsText.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++)  {
    cardsText.textContent += cards[i] + " ";
  }

  sumText.textContent = "Sum: " + sum;

  if (sum > 21)  {
    message = "You\'re out of the game";
    isAlive = false;
  } else if (sum < 21)  {
    message = "Click on New Card, to select a new card";
  } else if (sum === 21)  {
    message = "Woohoo! you\'ve got BlackJack";
    hasBlackJack = true;
  }
  startText.textContent = message;
}

const newCard = () => {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomNumber();
    sum += card;
    cards.push(card)
    renderGame();
  }
}
startButton.addEventListener("click", startGame);

newButton.addEventListener("click", newCard);
