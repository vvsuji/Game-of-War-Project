// creates the faces for the cards and adds value for score
class Card {
  constructor(suit, rank, score) {
    this.suit = suit;
    this.rank = rank;
    this.score = score;
  }
}

// consists of cards and has formula for shuffling
class Deck {
  constructor() {
    this.cards = [];
    this.makeDeck();
    this.shuffleCards();
  }

  // sets the suits and ranks for cards and then loops through them in a for loop, making 52 cards
  makeDeck = () => {
    const suits = ['♥︎', '♠︎', '♣︎', '♦︎'];
    const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        this.cards.push(new Card(suits[i], ranks[j], j + 2));
      }
    }
    return this.cards;
  };

  //The Fisher-Yates algorithm to shuffle the cards array
  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
}

// has formula for the actual playing of the game
class WarGame {
  constructor() {
    this.player1 = [];
    this.player2 = [];
    this.pile = [];
    this.setup();
    this.rounds = 1;
  }
  setup = () => {
    const deck = new Deck();
    let cards = deck.cards;

    this.player1.push(...cards.slice(0, cards.length / 2));
    this.player2.push(...cards.slice(cards.length / 2));
  };
  game = () => {
    console.log(`Round: ${this.rounds}`);
    while (this.player1.length > 0 && this.player2.length > 0) {
      let p1Cc = this.player1.pop();
      let p2Cc = this.player2.pop();

      if (p1Cc.score > p2Cc.score) {
        this.rounds += 1;
        this.player1.unshift(p2Cc, p1Cc, ...this.pile);
        console.log(
          `Player One Cards: ${p1Cc.rank} of ${p1Cc.suit} || Player Two Cards: ${p2Cc.rank} of ${p2Cc.rank}. === Player One Wins! ===`,
        );
        console.log(
          `Player One Cards: ${this.player1.length} || Player Two Cards: ${this.player2.length}`,
        );
        console.log(``);
        console.log(``);
        this.pile.length = 0;
      } else if (p2Cc.score > p1Cc.score) {
        this.rounds += 1;
        this.player2.unshift(p1Cc, p2Cc, ...this.pile);
        console.log(
          `Player Two Cards: ${p2Cc.rank} of ${p2Cc.suit} || Player One Cards: ${p1Cc.rank} of ${p1Cc.rank}. === Player Two Wins! ===`,
        );
        console.log(
          `Player Two Cards: ${this.player2.length} ||  Player One Cards: ${this.player1.length}`,
        );
        console.log(``);
        console.log(``);
        this.pile.length = 0;
      } else {
        this.rounds += 1;
        console.log(
          `Player One has ${p1Cc.rank} and Player Two has a ${p2Cc.rank}. Let the battle begin!`,
        );
        this.war(p1Cc, p2Cc);
      }
    }

    if (this.player1.length <= 0) {
      console.log(`Player Two Wins!`);
    } else {
      console.log(`Player One Wins!`);
    }
  };

  war = (warCard1, warCard2) => {
    console.log(
      `We have ${this.pile.length} cards in the arena. Let the battle commence!`,
    );
    this.pile.push(warCard1, warCard2);
    if (this.player1.length >= 4 && this.player2.length >= 4) {
      this.pile.push(...this.player1.splice(this.player1.length - 3, 3));
      this.pile.push(...this.player2.splice(this.player2.length - 3, 3));
      console.log(this.pile);
    } else if (this.player1.length > 4 && this.player2.length < 4) {
      this.player1.unshift(...this.pile);
      this.player1.unshift(...this.player2.splice(0));
      this.pile.length = 0;
    } else if (this.player2.length > 4 && this.player1.length < 4) {
      this.player2.unshift(...this.pile);
      this.player2.unshift(...this.player1.splice(0));
      this.pile.length = 0;
    }
  };
}

let newRound = new WarGame();
newRound.game();
