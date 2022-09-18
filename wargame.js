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

class Deck {
  constructor() {
    this.cards = [];
    this.cardDeck();
    this.cardShuffle();
  }

  cardDeck() {
    const cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]; //possible to have 11-14 be strings like "Jack", "Queen", "King", "Ace" ??

    for (let i = 2; i < cardValue.length; i++) {
      for (let j = 0; j < 4; j++) {
        this.cardDeck.push(new Card(cardValue[i], i + 2));
      }
    }
    console.log(this.cardDeck);
  }

  // Fischer Yates Shuffling Algorithm
  cardShuffle = () => {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let tempCards = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = tempCards;
    }
  };
}
