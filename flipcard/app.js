const vocabulary = [
  {
    english: 'Teacher',
    turkish: 'Öğretmen',
  },
  {
    english: 'Car',
    turkish: 'Araba',
  },
  {
    english: 'School',
    turkish: 'Okul',
  },
  {
    english: 'Desert',
    turkish: 'Çöl',
  },
  {
    english: 'House',
    turkish: 'Ev',
  },
  {
    english: 'Last Name',
    turkish: 'Soyadı',
  },
  {
    english: 'Ice cream',
    turkish: 'Dondurma',
  },
  {
    english: 'Tomato',
    turkish: 'Domates',
  },
  {
    english: 'President',
    turkish: 'Başkan',
  },
  {
    english: 'Smart Phone',
    turkish: 'Akıllı Telefon',
  },
];

// DOM ELEMENTS

const flipcards = document.querySelector('.flipcards');

// GLOBAL VARS

let cardCount = vocabulary.length;

console.log(cardCount);

// Create Cards
function createCards(cardCount) {
  for (i = 0; i < cardCount; i++) {
    let li = document.createElement('li');
    li.innerHTML = `
    <h4 class="flipcard-head">${vocabulary[i].english}</h4>
    <p class="flipcard-body">${vocabulary[i].turkish}</p>
    `;
    li.classList.add('flipcard');
    flipcards.appendChild(li);
  }
}

// START STATE
createCards(cardCount);

const flipbox = document.querySelectorAll('.flipcard');
console.log(flipbox);

flipbox.forEach((box) => {
  box.addEventListener('click', function () {
    box.classList.toggle('active');
  });
});
