// VARIABLES
const todoInput = document.querySelector('#todo-input');
const todoOption = document.querySelector('#todo-option');
const submitBtn = document.querySelector('.submit-btn');
const personalTodo = document.querySelector('.personal-list');
const workTodo = document.querySelector('.work-list');
const otherTodo = document.querySelector('.other-list');
const errorMessage = document.querySelector('.error');

// EVENT LISTENER
submitBtn.addEventListener('click', addTodo);
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('fa-trash-alt')) {
    e.target.parentElement.parentElement.remove();
  }
});
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('fa-check')) {
    e.target.parentElement.parentElement.classList.toggle('done');
  }
});

// CUSTOM FUNTCION

function addTodo() {
  let todo = todoInput.value;
  let option = todoOption.value;

  if (todo === '') {
    errorMessage.classList.add('active');
    return;
  } else {
    errorMessage.classList.remove('active');
  }

  let li = document.createElement('li');
  li.classList.add('todo');
  li.innerHTML = `${todo} <span class="delete-complete">
  <i class="far fa-trash-alt"></i>
  <i class="fas fa-check"></i>
</span>`;

  if (option === 'personal') {
    personalTodo.appendChild(li);
  } else if (option === 'work') {
    workTodo.appendChild(li);
  } else {
    otherTodo.appendChild(li);
  }

  todoInput.value = '';
}
