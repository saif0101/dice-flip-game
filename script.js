'use strict';

// selecting element
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const  score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');

const  dice = document.querySelector ('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//initialize
score0El.textContent = 0; 
score1El.textContent = 0;

let score,currentScore,activePlayer,playing;


const reset = function(){
    score =[0,0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    score0El.textContent = 0; 
    score1El.textContent = 0;
    currentScore0El.textContent = 0; 
    currentScore1El.textContent = 0;


    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    dice.classList.add('hidden');

}
reset()
const switchSide = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0? 1: 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}

const winner = function(){
    playing = false;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    dice.classList.add('hidden');

}


// add dice roll functionality

btnRoll.addEventListener('click', function(){

    if(playing){
// generate a random number
const diceNumber = Math.trunc(Math.random()*6)+1;

// display match number dice
dice.classList.remove('hidden');
dice.src = `images/dice-${diceNumber}.png`;

// check for number 1, if 1,switch to another player

if( diceNumber !== 1){
    //add score
    currentScore += diceNumber;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
   
} else{
    //switch player 
    switchSide();

}
}
})

//hold button functionality

btnHold.addEventListener('click', function()
{
  if(playing){
    // add current score to the active player score
  score[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer]

  if(score[activePlayer] >=20){
    winner();

  } else{
    //switch player
    switchSide();
  }
  }
  
})

//reset button functionality

btnNew.addEventListener('click',reset)
