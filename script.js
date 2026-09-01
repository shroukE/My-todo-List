const taskInput = document.getElementById("taskInput"); const addBtn = document.getElementById("addBtn"); const taskList = document.getElementById("taskList");
addBtn.addEventListener("click", function () {
const taskText = taskInput.value;

if (taskText === "") {
    return;
}

const li = document.createElement("li");

li.textContent = taskText;

li.addEventListener("click", function () {
    li.style.textDecoration = "line-through";
});

taskList.appendChild(li);

taskInput.value = "";
});

const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", function () {
    taskList.innerHTML = "";
});