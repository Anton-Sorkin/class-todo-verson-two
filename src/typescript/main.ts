import { Todolist } from "./models/todolist";

let todoList: Todolist[] = JSON.parse(localStorage.getItem("todo")) || [];

window.onload = function () {
    let sumbitButton: HTMLButtonElement = document.querySelector("#btn");
    sumbitButton.addEventListener("click", getUserInput);

    creatingTodo();
};

function creatingTodo(): void {
    for (let i = 0; i < todoList.length; i++) {
        let todoContainer: HTMLDivElement = document.createElement(
            "div"
        ) as HTMLDivElement;

        let todoTitle: HTMLSpanElement = document.createElement(
            "span"
        ) as HTMLSpanElement;

        let finishedButton: HTMLButtonElement = document.createElement(
            "button"
        ) as HTMLButtonElement;

        let removeButton: HTMLButtonElement = document.createElement(
            "button"
        ) as HTMLButtonElement;

        todoTitle.innerHTML = "";
        finishedButton.addEventListener("click", () => {});
        removeButton.addEventListener("click", () => {});

        todoContainer.appendChild(removeButton);
        todoContainer.appendChild(finishedButton);
        todoContainer.appendChild(todoTitle);
        document.body.appendChild(todoContainer);
    }
}
function getUserInput() {
    let input: HTMLInputElement = document.getElementById(
        "user-input"
    ) as HTMLInputElement;

    let newTodo: Todolist = new Todolist(input.value, false);
    todoList.push(newTodo);
    console.log(input.value);
    input.value = "";
}
