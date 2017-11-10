var cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
];
var cardsInPlay = [];
var score = 0;

function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert('You found a match!');
    score += 1;
    createScore();
  } else {
    alert('Sorry, try again.');
  }
}

function flipCard() {
  var cardID = this.getAttribute('data-id')
  cardsInPlay.push(cards[cardID].rank);
  this.setAttribute('src', cards[cardID].cardImage);

  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
}

function createScore() {
  document.getElementById('score').innerHTML = 'Score: ' + score;
}

function createBoard() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

function resetBoard() {
  document.getElementById('reset-button').addEventListener('click', function() {
    document.getElementById('game-board').innerHTML = '';
    cardsInPlay = [];
    createBoard();
  });
}

createScore();
createBoard();
resetBoard();
