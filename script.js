let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 15;
let highscore = 0;
document.querySelector('.button1').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.Start-guess').textContent = 'No Number Entered';
  } else if (guess === SecretNumber) {
    document.querySelector('.Number').textContent = SecretNumber;
    document.querySelector('.Start-guess').textContent = 'Correct Number';
    document.querySelector('.main-cont').style.backgroundColor = 'green';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > SecretNumber) {
    if (score > 1) {
      document.querySelector('.Start-guess').textContent = 'Try Again';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.Start-guess').textContent = 'You lose the game';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.main-cont').style.backgroundColor = 'red';
      document.querySelector('.Number').textContent = SecretNumber;
    }
  } else if (guess < SecretNumber) {
    if (score > 1) {
      document.querySelector('.Start-guess').textContent = 'Try Again';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.Start-guess').textContent = 'You lose the game';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.main-cont').style.backgroundColor = 'red';
      document.querySelector('.Number').textContent = SecretNumber;
    }
  }
});
document.querySelector('.button2').addEventListener('click', function () {
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 15;
  document.querySelector('.Start-guess').textContent = 'Start Guessing';
  document.querySelector('.score').textContent = score;
  document.querySelector('.Number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.main-cont').style.backgroundColor = 'black';
});
