const input = document.querySelector('#input');
const tryBtn = document.querySelector('.try');
const startBtn = document.querySelector('.start-again');
const hint = document.querySelector('.hint');
const score = document.querySelector('.score');
const prevNumbers = document.querySelector('.tried');
let selectedNumbers = [];
let lives = 10;
let randomNumber;

getRandomNumber();
console.log(randomNumber);
function getRandomNumber() {
  randomNumber = Math.floor(Math.random() * 100 + 1);
}

tryBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (input.value === '') {
    return;
  }
  let guess = input.value;

  if (guess == randomNumber) {
    alert('Yeeey you won ! ');
    startBtn.style.display = 'block';
    tryBtn.style.display = 'none';
    hint.textContent = '';
  } else if (guess < randomNumber) {
    lives = lives - 1;
    selectedNumbers.push(guess);
    prevNumbers.textContent = 'Numbers:' + selectedNumbers + ' ';

    score.textContent = `Lives Left : ${lives}`;
    if (lives === 0) {
      alert('You lost ...');
      startBtn.style.display = 'block';
      tryBtn.style.display = 'none';
    }
    hint.textContent = 'You need to try higher number';
    input.value = '';
  } else {
    lives = lives - 1;
    score.textContent = `Lives Left : ${lives}`;
    selectedNumbers.push(guess);
    prevNumbers.textContent = `Numbers : ${selectedNumbers}  `;
    if (lives === 0) {
      alert('You lost ...');
      startBtn.style.display = 'block';
      tryBtn.style.display = 'none';
    }
    hint.textContent = ' You need try lower number';
    input.value = '';
  }
});

startBtn.addEventListener('click', function () {
  lives = 10;
  score.textContent = `Lives Left : ${lives}`;
  getRandomNumber();

  prevNumbers.textContent = ' Numbers : ';
  input.value = '';
  hint.textContent = '';
});
