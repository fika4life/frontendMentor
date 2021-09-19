// get the input
const form = document.querySelector(".todo-form");
let newTodoInput = document.getElementById("new-todo");
const deleteBtn = document.querySelector(".delete");
const todosUl = document.querySelector("ul.todos");

//filters

function addTodo(e) {
  e.preventDefault();
  let newTodo = newTodoInput.value;

  const liElement = document.createElement("li");
  liElement.classList.add("todo-item");
  liElement.setAttribute("draggable", "true");
  liElement.innerHTML = `<span class="circle"></span>${newTodo}<span class="delete"></span>`;

  todosUl.appendChild(liElement);
  newTodoInput.value = "";
}

function removeTodo(e) {
  e.preventDefault();
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
}

function markCompleted(e) {
  if (e.target.classList.contains("circle")) {
    e.target.classList.toggle("completed");
    e.target.parentElement.classList.toggle("completed");
  }
}

//eventlisteners
//get input on submit
form.addEventListener("submit", addTodo);

// event delegation to remove todos
todosUl.addEventListener("click", removeTodo);
todosUl.addEventListener("click", markCompleted);
