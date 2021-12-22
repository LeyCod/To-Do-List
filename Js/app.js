const addBtn = document.querySelector("#addBtn");
let todoList = [];

const clickResult = (event) => {
    event.preventDefault();
    const inputText = document.querySelector("#inputText");
    const todoData = {
        todoText: inputText.value
    };

    todoList.push(todoData);
    displayTodo();
}

addBtn.addEventListener ('click', clickResult);

const displayTodo = () => {
    const toDoContainer = document.querySelector("#toDoContainer");
    let strDisplay = "";
    const strContainer = `<ul>${strDisplay}</ul>`;
    todoList.map((inputText) => strDisplay = strDisplay + `<li>${inputText.inputText}</li>`) 
    toDoContainer.innerHTML = strContainer;
}