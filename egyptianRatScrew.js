class Deck{
  constructor() {
    this.deck = [];

    this.suits = [
      new Suit("Hearts", "red"),
      new Suit("Diamonds", "red"),
      new Suit("Clubs", "black"),
      new Suit("Spades", "black")
    ];
    this.values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

  }

  populateDeck = () => {
    for (let i = 0; i < this.suits.length; i++) {
      for (let j = 0; j < this.values.length; j++) {
        this.deck.push[this.suits[i]+ " of " + this.values[j]];
      }
    }
  }

}

class Suit{ // done
  constructor(type, color) {
    this.color = color;
    this.type = type;
  }

  getColor = () => {
    return this.color
  }
}


class Board {
  constructor(playerCount) {
    this.stack = [];
    for (let i = 0; i < playerCount; i++) {
      this.players.push("Player" + i);
    }
  }


}
