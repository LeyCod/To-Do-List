const addBtn = document.querySelector('#addBtn');
const dltBtn = document.querySelector('#dltBtn');

const handlerClick = (event) => {
    event.preventDefault();
    let tasks = document.querySelector('#tasks-container');
    const newTask = document.querySelector('#new-task');
    if (newTask.value == 0) {
        alert("Please add a new task.");
    } else {
    tasks.innerHTML += `<ul class="task">
    <li id="taskText">${newTask.value} </li>
    </ul>`;
    }
}

addBtn.addEventListener('click', handlerClick);