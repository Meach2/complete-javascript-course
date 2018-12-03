/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores = 0;
var roundScore = 0;
var activePlayer = 0;
var gamePlaying = false;
var winningScore = 100;

document.querySelector('.btn-roll').addEventListener('click', rollDice);
document.querySelector('.btn-new').addEventListener('click', init);
document.querySelector('.btn-hold').addEventListener('click', holdDice);

function rollDice(){
  document.querySelector('#dice-1').classList.remove('shaky');
  document.querySelector('#dice-2').classList.remove('shaky');
  document.querySelector('#dice-1').classList.remove('toggle-content');
  document.querySelector('#dice-2').classList.remove('toggle-content');
  var dieState = 0;
  var lost = false;
  if(gamePlaying) {
    // 1. random number 1-6:
       document.getElementById('winningNum').disabled = true;
      var dice = rollDie(1);
      var diceTwo = rollDie(2);
      console.log("Dice1:"+dice+" | Dice2:" + diceTwo);
    if (dice == 1 ) {
      roundScore = 0;
      document.querySelector('#current-0').textContent = roundScore;
      document.querySelector('#current-1').textContent = roundScore;
      dieState += 1;
      lost = true;
    }
    if(diceTwo == 1){
      roundScore = 0;
      document.querySelector('#current-0').textContent = roundScore;
      document.querySelector('#current-1').textContent = roundScore;
      dieState += 2;
      lost = true;
    }
     if (dice == 6 && diceTwo == 6) {
      scores[activePlayer] = 0;
      document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
      dieState += 3;
      lost = true;
    }
    if(lost == false) {
      roundScore += dice + diceTwo;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
    endTurn(dieState);

  }
}

function rollDie(die) {
  var dice = Math.floor(Math.random() * 6) + 1;
  var diceDOM = document.querySelector('#dice-' + die);
  diceDOM.attributes.src.value = 'dice-' + dice + '.png';
  diceDOM.classList.remove('toggle-content');
  diceDOM.style.display = 'block';
  getComputedStyle(diceDOM);
  return dice;
   }


function holdDice(){
  if (gamePlaying) {
      // Add Current score to global scores
      scores[activePlayer] += roundScore;
      //Update UI to indicate
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
      //Check if player won the game
    if (scores[activePlayer] >= winningScore) {
      winGame();
    } else {
      endTurn(4);
    };
  }
}
function winGame(){
    document.getElementById('name-' + activePlayer).textContent = 'Winner!';
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    gamePlaying = false;
    document.getElementById('winningNum').disabled=false;
}
function endTurn(dieState){
  switch(dieState) {
    case 1:
        document.querySelector('#dice-1').classList.add('shaky');
        hideDice();
        nextPlayer();
        break;
    case 2:
        document.querySelector('#dice-2').classList.add('shaky');
        hideDice();
        nextPlayer();
        break;
    case 3:
      document.querySelector('#dice-1').classList.add('shaky');
      document.querySelector('#dice-2').classList.add('shaky');
      hideDice();
      nextPlayer();
      break;
    case 4:
      hideDice();
      nextPlayer();
    default:
        break;
  }
}

function hideDice(){
  document.querySelector('#dice-1').classList.add('toggle-content');
  document.querySelector('#dice-2').classList.add('toggle-content');
}

function nextPlayer() {
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  //document.querySelector('#dice-1').classList.remove('toggle-content');
  //document.querySelector('#dice-2').classList.remove('toggle-content');
};

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;

  var winningNumInput = document.getElementById('winScore');
  var winningNum = winningNumInput.value;
  if(winningNum){
    winningScore = winningNum;
  }
  winningNumInput.disabled = false;
  document.querySelector('.btn-roll').style.display = 'block';
  document.querySelector('.btn-hold').style.display = 'block';
  document.querySelector('#dice-1').style.display = 'none';
  document.querySelector('#dice-2').style.display = 'none';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
  gamePlaying = true;
};
init();
