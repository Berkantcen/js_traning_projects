const questions = [
  {
    question: "Which of the following is used for setting text color? ",
    answer1: "text-color",
    answer2: "background-color",
    correctAnswer: "color",
  },
  {
    question: 'What is the usage of "font-weight"?',
    answer1: "Adjusting font color",
    answer2: "Adjusting size of the font",
    correctAnswer: "Adjusting how bold text will be",
  },

  {
    question: "Which of the following doesnt give an error?",
    answer1: "font-size = 20px",
    answer2: "background-color : 2rem",
    correctAnswer: "display : flex;",
  },

  {
    question: "What is Css stands for ? ",
    answer1: "Current style state",
    answer2: "Cascading super style",
    correctAnswer: "Cascading style sheet",
  },

  {
    question: "Which of the following is Pre-compiler of Css",
    answer1: "React",
    answer2: "Vue",
    correctAnswer: "Sass",
  },
];

let score = 0;
let i = 1;
//DOM ELEMENTS
const startBtn = document.querySelector(".start-btn");
const container = document.querySelector(".container");

// STARTING QUESTIONS
startBtn.addEventListener("click", function () {
  container.innerHTML = `
  <h3 class="question">
  Q1 : ${questions[i - 1].question}
</h3>
<ul class="answer-list">
  <li class="answer" onclick="selectGuess(event)">${
    questions[i - 1].answer1
  }</li>
  <li class="answer" onclick="selectGuess(event)">${
    questions[i - 1].correctAnswer
  }</li>
  <li class="answer" onclick="selectGuess(event)" = >${
    questions[i - 1].answer2
  }r</li>
</ul>
<button class="btn next-btn">Next</button>
`;
});

function selectGuess(event) {
  const answers = document.querySelectorAll(".answer");
  answers.forEach((answer) => {
    answer.classList.remove("active");
  });
  event.target.classList.toggle("active");
  let guess = event.target.textContent;

  const nextBtn = document.querySelector(".next-btn");

  nextBtn.addEventListener("click", function () {
    if (guess === questions[i - 1].correctAnswer) {
      score++;
      console.log("if", score);
    }

    if (questions[i] === undefined) {
      container.innerHTML = `You were correct at ${score} of ${questions.length}`;
      return;
    }
    container.innerHTML = correctAnswerTemplate();

    i++;
  });
}

function correctAnswerTemplate() {
  let answersTemplate = [
    `
  <h3 class="question">
  Q1 : ${questions[i].question}
</h3>
<ul class="answer-list">
  <li class="answer" onclick="selectGuess(event)">${questions[i].answer1}</li>
  <li class="answer" onclick="selectGuess(event)">${questions[i].answer2}</li>
  <li class="answer" onclick="selectGuess(event)">${questions[i].correctAnswer}</li>
</ul>
<button class="btn next-btn">Next</button>
`,

    `
  <h3 class="question">
  Q1 : ${questions[i].question}
</h3>
<ul class="answer-list">
  <li class="answer" onclick="selectGuess(event)">${questions[i].correctAnswer}</li>
  <li class="answer" onclick="selectGuess(event)">${questions[i].answer2}</li>
  <li class="answer" onclick="selectGuess(event)">${questions[i].answer1}</li>
</ul>
<button class="btn next-btn">Next</button>
`,

    `
  <h3 class="question">
  Q1 : ${questions[i].question}
</h3>
<ul class="answer-list">
  <li class="answer" onclick="selectGuess(event)">${questions[i].answer2}</li>
  <li class="answer" onclick="selectGuess(event)">${questions[i].correctAnswer}</li>
  <li class="answer" onclick="selectGuess(event)">${questions[i].answer1}</li>
</ul>
<button class="btn next-btn">Next</button>
`,
  ];

  let templateRandom = Math.floor(Math.random() * answersTemplate.length);

  return answersTemplate[templateRandom];
}
