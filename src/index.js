import './index.css';

// const forminput = document.getElementById('todoform');
const button1 = document.getElementById('taskbtn');
const addToList = document.getElementById('addtolist');
const toDoInputList = document.getElementById('toDoInputList');
// function to add
function addToTask(ev) {
  ev.preventDefault();
  if (addToList.value === '') {
    return;
  }
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo-div');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const todoListItem = document.createElement('li');
  todoListItem.classList.add('list-of-task');
  todoListItem.innerText = addToList.value;
  const completedButton = document.createElement('button');
  completedButton.classList.add('completedButton');
  completedButton.innerHTML = '<i id="vertical-dots" class="fa-solid fa-ellipsis-vertical"></i>';
  const trashButton = document.createElement('button');
  trashButton.classList.add('trash-btn');
  trashButton.innerHTML = '<i id="trash-bin" class="fa-solid fa-trash-can"></i>';
  todoDiv.append(checkbox, todoListItem, completedButton, trashButton);
  toDoInputList.appendChild(todoDiv);
  addToList.value = '';
}
button1.addEventListener('click', addToTask);
