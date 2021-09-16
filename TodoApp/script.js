// get the input
const form = document.querySelector(".todo-form");
let newTodoInput = document.getElementById("new-todo");
const deleteBtn = document.querySelector(".delete");
const todosUl = document.querySelector("ul.todos");

function addTodo(e) {
  e.preventDefault();
  let newTodo = newTodoInput.value;

  const liElement = document.createElement("li");
  liElement.classList.add("todo-item");
  liElement.innerHTML = `<span class="circle"></span>${newTodo}<span class="delete"></span>`;

  todosUl.appendChild(liElement);
  newTodoInput.value = "";
}

function removeTodo(e) {
  e.preventDefault();
  console.log("hello");
}

//eventlisteners
//get input on submit
form.addEventListener("submit", addTodo);
deleteBtn.addEventListener("click", removeTodo);
