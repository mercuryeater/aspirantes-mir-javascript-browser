const add = document.querySelector("#add");
const list = document.querySelector("#list");
const tarea = document.querySelector("#tarea");

add.addEventListener('click', function () {
    //Estuve como 1 hora sin darme cuenta que por ser de tyype submit
    //el boton siempre recargaba la pag
    event.preventDefault()
    let addTask = tarea.value;    
    let label = document.createElement('label');
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox')

    let text = document.createTextNode(addTask);

    list.appendChild(label);

    label.appendChild(text);
    label.appendChild(checkbox);
    
    
});




