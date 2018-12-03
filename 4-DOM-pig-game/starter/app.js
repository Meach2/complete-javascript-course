/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScores, activePlayer, gamePlaying;
init();
//dice = Math.floor(Math.random() * 6) + 1;
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// use to log the global score
//var x = document.querySelector('#score-0').textContent
//console.log(x);

//Use to hide the dice picture at the beginning.

/*  // here we can make an external global function and call it within the event listener
function btn() {
  //do something here
}
btn();
document.querySelector('.btn-roll').addEventListener('click', btn)
*/
/*
// if instead we want an ----anonymous functon---- (embedded into addEventListener; which is only for the event we can do below)
document.querySelector('.btn-roll').addEventListener('click', function(){
  //do something here for function
});
*/


document.querySelector('.btn-roll').addEventListener('click', function(){
  if(gamePlaying) {
    // 1. random number 1-6:
      var dice = Math.floor(Math.random() * 6) + 1;
      var diceDOM = document.querySelector('.dice');
      diceDOM.style.display = 'block';
      diceDOM.src = 'dice-' + dice + '.png';
      var diceTwo = Math.floor(Math.random() * 6) + 1;
      var diceDOMTwo = document.querySelector('.diceTwo');
      diceDOMTwo.style.display = 'block';
      diceDOMTwo.src = 'dice-' + diceTwo + '.png';



    //3.  update the round score IF rolled number isnt 1.



  //if dice is not equal to 1
  if (dice !== 1) {
    roundScore += dice + diceTwo;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  } else  {
  nextPlayer();
}}});
  /*  document.querySelector('#current-' + activePlayer).textContent = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

  // for reference only
  //  document.querySelector('.player-0-panel').classList.remove('active');
  //  document.querySelector('.player-1-panel').classList.add('active');
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = "none";

                    ▄█▀█▀█▄
  　　　　　　　　▄█▀　　█　　▀█▄
  　　　　　　　▄█▀　　　　　　　▀█▄
  　　　　　　　█　　　　　　　　　 █
  　　　　　　　█　　　　　　　　　█
  　　　　　　　▀█▄▄　　█　　　▄█▀
  　　　　　　　　　█　　▄▀▄　　█
  　　　　　　　　　█　▀　　　▀　█
  　　　　　　　　　█　　　　　　　█
  　　　　　　　　　█　　　　　　　█
  　　　　　　　　　█　　　　 　　 █
  　　　　　　　　　█　　　　　　　█
  　　　　　　　　　█　　　　　　　█
  　　　▄█▀▀█▄█　　　　　　　█▄█▀█▄
  　▄█▀▀　　　　▀　　　　　　　　　　▀▀█
  █▀　　　　　　　　　　　　　　　　　　　▀█
  █　　　　　　　　　　　　　　　　　　　　　█
  █　　　　　　　　　　　▄█▄　　　　　　　　　█
  ▀█　　　　　　　　　█▀　▀█　　　　　　　　█▀
  　▀█▄　　　　　　█▀　　　▀█　　　　　▄█▀
  　　　▀█▄▄▄█▀　　　　　　▀█▄▄▄█▀
      */


  //same as
  /* if(activePlayer === 0) {
  activePlayer = 1;
} else {
  activePlayer = 0;
}
}
*/




document.querySelector('.btn-hold').addEventListener('click', function() {

  if (gamePlaying) {
    // Add Current score to global scores
    scores[activePlayer] += roundScore;



    //Update UI to indicate
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    //Check if player won the game
  if (scores[activePlayer] >= 100) {
    document.getElementById('name-' + activePlayer).textContent = 'Winner!';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.diceTwo').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    gamePlaying = false;
  } else {
    nextPlayer();
  };
  }
}
);

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  document.querySelector('.dice').style.display = 'none';
  document.querySelector('.diceTwo').style.display = 'none';
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
function nextPlayer() {
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
};
