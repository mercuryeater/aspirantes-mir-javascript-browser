const add = document.querySelector("#add");
const list = document.querySelector("#list");
const tarea = document.querySelector("#tarea");
const inputBox = document.querySelector("#inputBox");
const deleteCompleted = document.getElementById("delete");
let uniqueId = 1;

function handleSubmit(event) {
  event.preventDefault();
  let addTask = tarea.value;
  let li = document.createElement("li");
  let label = document.createElement("label");
  label.setAttribute("id", uniqueId++);
  label.setAttribute("class", "non-completed");
  label.setAttribute("title", addTask);
  label.setAttribute("completed", false);

  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "check");

  let text = document.createTextNode(addTask);
  let line = document.createElement("hr");

  list.appendChild(li);
  li.appendChild(label);

  label.appendChild(text);
  label.appendChild(checkbox);
  li.appendChild(line);
}

function handleCheckTask(event) {
  // Obtenemos el checkbox que se ha cambiado
  const checkbox = event.target;
  // Verificamos que sea un input de tipo checkbox, la propiedad tagName devuelve
  // el nombre del tag en mayusculas y por eso toca poner INPUT
  if (checkbox.tagName === "INPUT" && checkbox.type === "checkbox") {
    // Obtenemos el label asociado al checkbox
    const label = checkbox.parentNode;
    if (checkbox.checked) {
      label.setAttribute("completed", true);
      label.setAttribute("class", "is-completed");
    } else {
      label.setAttribute("completed", false);
      label.setAttribute("class", "non-completed");
    }
  }
}

function handleDelete(event) {
  event.preventDefault();
  const labels = document.querySelectorAll("label");
  const completedTasks = [];
  for (let i = 0; i < labels.length; i++) {
    const label = labels[i];
    if (label.getAttribute("completed") === "true") {
      completedTasks.push(label);
      console.log(completedTasks);
    }
  }
  for (let i = 0; i < completedTasks.length; i++) {
    const label = completedTasks[i];
    label.parentNode.remove();
  }
}

deleteCompleted.addEventListener("click", handleDelete);

list.addEventListener("change", handleCheckTask);

inputBox.addEventListener("submit", handleSubmit);
