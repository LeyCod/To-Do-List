const addBtn = document.querySelector("#addBtn");
let todoList = [];

const clickResult = (event) => {
    event.preventDefault();
    const inputText = document.querySelector("#inputText");
    const todoData = {
        todo: inputText.value
    };
    if (todoData.todo === "") {
        return alert("Add a Todo");
    } else {
        todoList.push(todoData);
        displayTodo();
    }
  
}

addBtn.addEventListener ('click', clickResult);

const displayTodo = () => {
    const toDoContainer = document.querySelector("#toDoContainer");
    let strDisplay = "";
    const strContainer = `<ul>${strDisplay}</ul>`;
    todoList.forEach((todo) => strDisplay += `<li>${todo.todo}</li>`);
    toDoContainer.innerHTML = strContainer;
}