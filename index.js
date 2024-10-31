const todoList = document.getElementById("todoList");
const newToDoInput = document.getElementById("newToDoInput");
const addTdoBtn = document.getElementById("addTodoBtn");

addTdoBtn.addEventListener("click", () => {
  const newTodoText = newToDoInput.value;

  if (newTodoText !== "") {
    const newtodoItem = document.createElement("li");
    newtodoItem.innerText = newTodoText;
    const deleteTodoBtn = document.createElement("button");
    deleteTodoBtn.innerText = "x";

    deleteTodoBtn.classList.add("delete-todo-btn");
    deleteTodoBtn.addEventListener("click", function () {
      newtodoItem.remove();
    });

    newtodoItem.appendChild(deleteTodoBtn);
    todoList.appendChild(newtodoItem);
    newToDoInput.value = "";
  }
});
