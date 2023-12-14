'use strict';
const number = Math.floor(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';
  } else if (guess === number) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
  }
});
