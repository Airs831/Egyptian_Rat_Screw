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

  shuffleDeck = () => {
    newDeck = [];
    while (newDeck.length < 52){
      randIndex = Math.random() * (this.deck.length - 1);
        newDeck.push(this.deck[randIndex]);
        this.deck.splice(randIndex,1);
    }
    this.deck = newDeck;
  }

  dealCards = () => {
    for(let i = 0; i < this.deck.length; i ++) {
      //use modulo to determine which player gets the card
      //Create player class with method to allow each player to receive a specific card
      //have addCard method and playCard() method that alters their array of Cards in their hand
    }
  }
}

class Card{
  constructor(suit, value){
    this.suit = suit;
    this.value = value;
  }
  getSuit = () => {
    return suit;
  }
  getValue = () => {
    return value;
  }
}

class Suit{ // done
  constructor(type, color) {
    this.color = color;
    this.type = type;
  }
  getColor = () => {
    return this.color;
  }
}


class Board {
  constructor(playerCount) {
    this.stack = [];
    for (let i = 0; i < playerCount; i++) {
      this.players.push("Player" + i);
    }

  }

  addCardToBoard = (card) => {
    this.stack.push(card);
  }

  removeCardFromBoard = () => {
    this.stack.shift();
  }
}
