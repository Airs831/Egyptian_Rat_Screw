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
    for(let i = this.deck.length; i > 0; i ++) {
      if(i%4 == 0){
        Player1.addCard(this.deck[i-1]);
      }
      else if (i%4 == 1) {
        Player2.addCard(this.deck[i-1]);
      }
      else if (i%4 == 2) {
        Player3.addCard(this.deck[i-1]);
      }
      else {
        Player4.addCard(this.deck[i-1]);
      }
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
    this.players = [];
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

  checkSlap() {
    if (this.stack[this.stack.length-1] == this.stack[this.stack.length-3]) {
      return True;
    }
    else if (this.stack[this.stack.length-1] == this.stack[this.stack.length-2]) {
      return True;
    }
    return False;
  }

  burnCard = (card) => {
    this.stack.unshift(card);
  }
}

class Player {
  constructor(playerNumber) {
    this.playerNumber = playerNumber;
    this.hand = [];
  }

  playCard() {
    Board.addCardToBoard(this.hand.shift());
  }

  slap() {
    if(checkSlap){
      this.hand.join(Board.stack);
    }
    burn();
  }

  burn() {
    Board.burnCard(this.hand.pop());
  }
}
