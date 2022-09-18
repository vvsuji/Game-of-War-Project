class warGame {
  constructor(playerOne, playerTwo, deck) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.deck = deck;
  }
}

class Player {
  constructor(name, deck) {
    this.name = name;
    this.deck = deck;
  }
}

class Card {
  constructor(cardValue, value) {
    this.cardValue = cardValue;
    this.value = value;
  }
}
