let lista = document.getElementById("lista")
let tareaInput =document.getElementById("tareaInput")
let btnNuevaTarea = document.querySelector(".boton")

function agregarTarea () {
let tarea = tareaInput.value.trim();
let nuevaTarea = document.createElement("li")
let enlace = document.createElement("a")
let contenido = document.createTextNode(tarea)

if (tarea === "") {
    tareaInput.setAttribute("placeholder", "AGREGA TAREA VÁLIDA")
    tareaInput.className = "error";
    return false;
    
}
enlace.appendChild(contenido)
enlace.setAttribute("href", "#")
nuevaTarea.appendChild(enlace)
lista.appendChild(nuevaTarea)

tareaInput.value = "";
tareaInput.className = "";
nuevaTarea.addEventListener("click", function () {
    this.parentNode.removeChild(this);
});



}
function comprobarInput() {
tareaInput.className = "";
tareaInput.setAttribute("placeholder", "agregar una tarea")
}

function eliminarTarea() {
 

this.parentNode.removeChild(this)
}


btnNuevaTarea.addEventListener("click", agregarTarea)

tareaInput.addEventListener("click", comprobarInput)


for (let index = 0; index < lista.children.length; index++) {
    lista.children[index].addEventListener("click", eliminarTarea);
}
    
