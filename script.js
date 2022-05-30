'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = (message)=>{
  document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  // WHEN THERE IS NO INPUT
  if (!guess) {
    displayMessage('⛔No Number')
    // WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    displayMessage('✅ Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too High' : '📉Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('❌You lost the game');
      document.querySelector('.score').textContent = 0;
    }
    // WHEN GUESS IS TOO HIGH
  } 
});

// If Player Click on Again !
document.querySelector('.again').addEventListener('click', () => {
  displayMessage('Start guessing..');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
});
