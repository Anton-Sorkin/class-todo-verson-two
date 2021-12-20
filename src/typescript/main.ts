import { Todolist } from "./models/todolist";

let todoList: Todolist[] = [];

window.onload = function () {
    let userInput: HTMLInputElement = document.getElementById(
        "user-input"
    ) as HTMLInputElement;

    let userValue = userInput.value;

    creatingTodoFunction();
};

function creatingTodoFunction(): void {
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
