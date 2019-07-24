class Deck{
  constructor() {
    this.deck = []; //The entire deck of cards that players will receive cards from

    //Arrays necessary to populate the deck
    this.suits = [
      new Suit("Hearts", "red"),
      new Suit("Diamonds", "red"),
      new Suit("Clubs", "black"),
      new Suit("Spades", "black")
    ];
    this.values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

  }

  //Go through each suit and assign every card a value. Results in 52 cards in the global deck
  populateDeck = () => {
    for (let i = 0; i < this.suits.length; i++) {
      for (let j = 0; j < this.values.length; j++) {
        this.deck.push[this.suits[i]+ " of " + this.values[j]];
      }
    }
  }

  //Selects a random index from the global deck and assigns the card at that random index
  //to the new deck. The card from the global deck is removed with the splice method

  //should we shuffle more times for more randomness????
  shuffleDeck = () => {
    newDeck = [];
    while (newDeck.length < 52){
      randIndex = Math.random() * (this.deck.length - 1);
        newDeck.push(this.deck[randIndex]);
        this.deck.splice(randIndex,1);
    }
    //allows deck field to be reassigned to the fully shuffled version.
    this.deck = newDeck;
  }
  dealCards = () => {
    position = 51
    while (this.deck.length > 0):
      for  (let i = Board.players.length-1; i >= 0; i--):
        Board.players[i].hand.append(Board.deck[position]);
        position -= 1;

    // for(let i = this.deck.length; i > 0; i-=Board.playerCount) {
    //   //assign playerNumber state to player class
    //   //use nested for loop to assign a card to each player using created state
    //   if(i%4 == 0){
    //     Player1.addCard(this.deck.pop(this.deck[i-1]));
    //   }
    //   else if (i%4 == 1) {
    //     Player2.addCard(this.deck.pop(this.deck[i-1]));
    //   }
    //   else if (i%4 == 2) {
    //     Player3.addCard(this.deck.pop(this.deck[i-1]));
    //   }
    //   else {
    //     Player4.addCard(this.deck.pop(this.deck[i-1]));
    //   }
    // }
  }

  getDeck = () => {
    return this.deck;
  }
}

class Card{
  constructor(suit, value){
    this.suit = suit;
    this.value = value;
  }

  //simple get values for card fields for debugging
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

  //Just in case we need it for html/css???
  getColor = () => {
    return this.color;
  }
}


class Board {
  constructor(playerCount) {
    this.stack = [];
    this.players = [];
    for (let i = 0; i < playerCount; i++) {
      this.players.push(new Player(i));
    }
  }

  addCardToBoard = (card) => {
    this.stack.push(card);
  }

  removeCardFromBoard = () => {
    this.stack.shift();
  }

  //if top card and two cards from the top card are equal then the slap is valid
  checkSlap() {
    if (this.stack[this.stack.length-1] == this.stack[this.stack.length-3]) {
      return True;
    }
    //if the top two cards in the stack or equal then the slap is valid
    else if (this.stack[this.stack.length-1] == this.stack[this.stack.length-2]) {
      return True;
    }
    //logic for burning is in player class below
    return False;
  }

  //adds card to the bottom of the stack
  burnCard = (card) => {
    this.stack.unshift(card);
  }

  getStack = () => {
    return this.stack;
  }

  getPlayers = () => {
    return this.players;
  }
}

class Player {
  constructor(playerNumber) {
    this.playerNumber = playerNumber;
    this.hand = [];
  }

  //removes card from the player's hand while adding it to the top of the stack
  playCard() {
    Board.addCardToBoard(this.hand.shift());
  }

  burn() {
    Board.burnCard(this.hand.pop());
  }

  //should be activated on spacebar press. If slap is valid then the player's hand
  //joins with the stack
  slap() {
    if(checkSlap){
      this.hand.join(Board.stack);
    }
    //if slap isn't valid then the player must burn a card
    burn();
  }

  handleEvents(keypress) {
    document.addEventListener("keypress", (e) => {
      if (e.code == " "){
        slap();
      }
    });
    document.addEventListener("click", (e) => {
      playCard();
    });
    // document.addEventListener("keypress", (e) => {
    //   if (e.code == "Escape") {
    //     pauseGame();
    //   }
    // });
  }

  getHand = () => {
    return this.hand;
  }

  getPlayernumber = () => {
    return this.playerNumber;
  }

  //adds card to the board's stack while removing the very next card in the player's hand

}
