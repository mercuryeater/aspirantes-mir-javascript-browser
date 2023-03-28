const add = document.querySelector("#add");
const list = document.querySelector("#list");
const tarea = document.querySelector("#tarea");

add.addEventListener('click', function () {
    //Estuve como 1 hora sin darme cuenta que por ser de tyype submit
    //el boton siempre recargaba la pag
    event.preventDefault()
    let addTask = tarea.value;
    let li = document.createElement('li');
    let label = document.createElement('label');
        label.setAttribute('id', 'labelCheckbox')
    let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox')
        checkbox.setAttribute('id', 'check');

    let text = document.createTextNode(addTask);
    let line = document.createElement('hr');

    list.appendChild(li);
    list.appendChild(label);

    label.appendChild(text);
    label.appendChild(checkbox);
    list.appendChild(line);
    
    
});

/*
CODIGO PROFESORA PARA COMPLETAR Y ADAPTAR

const form = document.querySelector('form')
const inputTask = document.getElementById('new-task')
const listItems = document.querySelector('.list-items')

function handleSubmit(event) {
  event.preventDefault();
  const task = inputTask.value;
  // Creamos un fragmento para luego agregar al documento
  const fragment = document.createDocumentFragment();
  const inputText = document.createElement("input")
  inputText.setAttribute('type', 'checkbox')
  inputText.setAttribute('id', task)
  const label = document.createElement("label")
  label.setAttribute('for', task)
  label.innerHTML = task
  // falta agregar el atributo for con el mismo nombre del id del checkbox
  // Falta hacer el appendChild del label que contiene el task
const listItem = fragment
  .appendChild(document.createElement("li"))
  .appendChild(label)
  .appendChild(inputText);
  
  // hacemos appendChild a la clase list-items
  listItems.appendChild(fragment);
}

form.addEventListener('submit', handleSubmit)
*/



