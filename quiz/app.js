const questions = [
  {
    question: 'Which of the following is used for setting text color? ',
    answer1: 'text-color',
    answer2: 'background-color',
    correctAnswer: 'color',
  },
  {
    question: 'What is the usage of "font-weight"?',
    answer1: 'Adjusting font color',
    answer2: 'Adjusting size of the font',
    correctAnswer: 'Adjusting how bold text will be',
  },
];

//DOM ELEMENTS
const startBtn = document.querySelector('.start-btn');
const container = document.querySelector('.container');

// STARTING QUESTIONS
startBtn.addEventListener('click', function () {
  container.innerHTML = `
  <h3 class="question">
  Q1 : Which of the following is used for setting text color?
</h3>
<ul class="answer-list">
  <li class="answer">text-color</li>
  <li class="answer">color</li>
  <li class="answer">background-color</li>
</ul>
<button class="btn next-btn">Next</button>
`;
});

let answers = document.querySelectorAll('.answers');

answers.forEach((answer) => {
  answer.addEventListener('click', function () {});
});
