import { Todolist } from "./models/todolist";

let todoList: Todolist[] = JSON.parse(localStorage.getItem("todo")) || [];

window.onload = function () {
  let sumbitButton: HTMLButtonElement = document.querySelector("#btn");
  sumbitButton.addEventListener("click", getUserInput);

  creatingTodo();
};

function getUserInput() {
  let input: HTMLInputElement = document.getElementById(
    "user-input"
  ) as HTMLInputElement;

  if (input.value.length == 0) {
    alert("Cant add nothing as a todo, please write something");
  } else {
    let newTodo: Todolist = new Todolist(input.value, false);
    todoList.push(newTodo);
    input.value = "";
    creatingTodo();
  }
}

function creatingTodo(): void {
  let todoJSON: string = JSON.stringify(todoList);
  localStorage.setItem("todo", todoJSON);

  let userInput: HTMLUListElement = document.getElementById(
    "ul"
  ) as HTMLUListElement;

  userInput.innerHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    let todoLi: HTMLLIElement = document.createElement("li") as HTMLLIElement;

    let todoText: HTMLDivElement = document.createElement(
      "div"
    ) as HTMLDivElement;

    let finishedButton: HTMLButtonElement = document.createElement(
      "button"
    ) as HTMLButtonElement;

    let removeButton: HTMLButtonElement = document.createElement(
      "button"
    ) as HTMLButtonElement;

    todoText.innerHTML = todoList[i].name;
    todoText.className = "todoText";
    todoLi.className = "todo";

    finishedButton.innerHTML = "K";
    finishedButton.className = "klar";
    finishedButton.addEventListener("click", () => {
      if (todoList[i].finished == false) {
        todoList[i].finished = true;
        creatingTodo();
      } else {
        todoList[i].finished = false;
        creatingTodo();
      }
    });

    removeButton.addEventListener("click", () => {
      todoList.splice(i, 1);
      creatingTodo();
    });
    removeButton.innerHTML = "R";
    removeButton.className = "taBort";

    if (todoList[i].finished) {
      todoLi.className = "done";
      finishedButton.innerHTML = "O";
    }

    todoLi.appendChild(todoText);
    todoLi.appendChild(finishedButton);
    todoLi.appendChild(removeButton);
    userInput.appendChild(todoLi);
    document.body.appendChild(userInput);
  }
}
