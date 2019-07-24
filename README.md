# Egyptian_Rat_Screw
Egyptian Rat Screw Card Game.

This program is based on the popular card game "Egyptian Rat Screw."

The rules:
All players deal cards in a clockwise fashion.
Cards are dealt one at a time by the respective player.
There are two major components to Egyptian Rat Screw: slapping and face-cards.

Slapping:
A slap is constituted in two ways:
  - When two of the same value cards are played in successive
  order.
  - When a "sandwich" is played. A sandwich can only be one card thick and must have
  two of the same value cards surrounding another card of any value.
  - Eliminated players (players without any cards left) can still slap the pot to
  earn cards and get back into the game, but slapping on an invalid pot three
  times eliminates the slapper from play entirely.
  - Slapping on an invalid pot by a player with cards in their hand results in
  the "burning" of a card, where the failed slapper places a card from the top
  of their hand at the bottom of the pot which doesn't impact future slapping in
  any capacity.

Face-cards:
  Upon playing a face-card, the next player has a certain number of chances to
  play a new face-card and keeps the pot in play.
  Jacks get one chance for another face-card to be played, Queens get two, Kings
  get three, and Aces get four. If the player fails to play a new face-card, the
  owner of the original face-card receives all the cards in the pot.
  Slaps are permitted during face-card play.

Resources:
http://buildnewgames.com/real-time-multiplayer/
https://codereview.stackexchange.com/questions/100377/cardshifter-game-lobby
https://www.pubnub.com/blog/multiplayer-game-lobby-with-pubnub/
https://stackoverflow.com/questions/5100152/multiplayer-game-on-google-app-engine
https://sites.google.com/site/egyptianrs/home
