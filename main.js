let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tasks = JSON.parse(localStorage.getItem("@listTasks")) || [];

renderTasks();

function addList() {
  if (inputElement.value === "") {
    alert("Digite alguma tarefa");
    return false; //Para a execução e não prossegue.
  } else {
    let newTask = inputElement.value;
    tasks.push(newTask);
    inputElement.value = "";
    renderTasks();
    saveData();
  }
}

function renderTasks() {
  listElement.innerHTML = "";

  tasks.map((task) => {
    let liElement = document.createElement("li");
    let taskTextLi = document.createTextNode(task);
    let linkElement = document.createElement("a");
    let linkText = document.createTextNode("Excluir");
    linkElement.appendChild(linkText);
    linkElement.setAttribute("href", "#");
    liElement.appendChild(taskTextLi);
    liElement.appendChild(linkElement);
    listElement.appendChild(liElement);

    let position = tasks.indexOf(task);

    linkElement.setAttribute("onclick", `delTasks(${position})`);
  });
}

function delTasks(position) {
  tasks.splice(position, 1);
  renderTasks();
  saveData();
}

function saveData() {
  localStorage.setItem("@listTasks", JSON.stringify(tasks));
}

buttonElement.addEventListener("click", addList);
