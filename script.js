'use strict';
const number = Math.floor(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';

    //When the player wins
  } else if (guess === number) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';

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
