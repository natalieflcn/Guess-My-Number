'use strict';
let number = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';

    //When the player wins
  } else if (guess === number) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;

    //When the player guesses incorrectly (number is too low)
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;

      //When the player loses
    } else if (score === 1) {
      document.querySelector('.message').textContent = '🤕 You lost!';
      score--;
      document.querySelector('.score').textContent = score;
    }

    //When the player guesses incorrectly (number is too high)
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;

      //When the player loses
    } else if (score === 1) {
      document.querySelector('.message').textContent = '🤕 You lost!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});

//To restart the game
document.querySelector('.again').addEventListener('click', function () {
  if (score > highScore) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }

  number = Math.floor(Math.random() * 20) + 1;

  score = 20;
  document.querySelector('.score').textContent = score;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = false;
  //TODO reset the input type back to blank

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
