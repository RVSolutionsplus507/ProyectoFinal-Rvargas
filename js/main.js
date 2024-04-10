const formTareas = document.getElementById("tareas-form");
const inputTareas = document.getElementById("tarea-input");
const listaTareas = document.getElementById("lista-tareas");
const prioridadSelect = document.getElementById("prioridad-select");

const tareas = JSON.parse(localStorage.getItem("tareas")) || [];

function renderTareas() {
    listaTareas.innerHTML = "";

    tareas.forEach((tarea, index) => {
        const li = document.createElement("li");
        li.classList.add("grid-item"); 

        const tareaTexto = document.createElement("span");
        tareaTexto.textContent = tarea.tarea;
        tareaTexto.classList.add("task-text", "grid-item"); 
        li.appendChild(tareaTexto);

        const fechaTexto = document.createElement("span");
        fechaTexto.textContent = `${tarea.formatoFecha}`;
        fechaTexto.classList.add("task-text", "grid-item"); 
        li.appendChild(fechaTexto);

        const prioridadTexto = document.createElement("span");
        prioridadTexto.textContent = `${tarea.prioridadSelect}`;
        prioridadTexto.classList.add("task-text", "grid-item"); 
        li.appendChild(prioridadTexto);

        if (tarea.completed) {
            li.classList.add("completed");
            tareaTexto.classList.add("completed");
            fechaTexto.classList.add("completed");
            prioridadTexto.classList.add("completed");
        }

        listaTareas.appendChild(li);

        tareaTexto.addEventListener("click", () => {
            completarTarea(index);
        });

        const botonEditar = document.createElement("button");
        botonEditar.textContent = "Editar";
        botonEditar.addEventListener("click", (event) => {
            event.stopPropagation();
            editarTarea(index);
        });
        li.appendChild(botonEditar);

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", (event) => {
            event.stopPropagation();
            eliminarTarea(index);
        });
        li.appendChild(botonEliminar);
    });

    listaTareas.classList.add("grid-container"); 
}

function showToast(texto) {
    setTimeout(() => {
        Toastify({
            text: texto,
            className: "info",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
                borderRadius: "10px",
                color: "white",
            },
            gravity: "bottom",
        }).showToast();
    }, 0);
}

function agregarTarea(tarea, prioridadSelect) {
    const date = new Date();
    const formatoFecha = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

    tareas.push({ tarea, completed: false, formatoFecha, prioridadSelect });
    showToast("Agregaste una Tarea!");
    localStorage.setItem("tareas", JSON.stringify(tareas));
    renderTareas();
}

function editarTarea(index) {
    const li = listaTareas.children[index];
    const tareaTexto = li.querySelector(".task-text");
    const tareaInput = document.createElement("input");
    tareaInput.value = tareaTexto.textContent;
    tareaInput.classList.add("task-input");
    tareaTexto.replaceWith(tareaInput);

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.addEventListener("click", () => {
        const nuevaTarea = tareaInput.value.trim();
        if (nuevaTarea) {
            tareas[index].tarea = nuevaTarea;
            showToast("Tarea editada exitosamente");
            localStorage.setItem("tareas", JSON.stringify(tareas));
            renderTareas();
        }
    });

    tareaInput.focus();
    tareaInput.addEventListener("blur", () => {
        tareaInput.replaceWith(tareaTexto);
    });

    const botonEditar = li.querySelector("button");
    botonEditar.classList.add("hidden"); 

    li.appendChild(saveButton);
}

function completarTarea(index) {
    tareas[index].completed = !tareas[index].completed;
    if (tareas[index].completed) {
        showToast("Tarea Completada!");
    }
    localStorage.setItem("tareas", JSON.stringify(tareas));
    renderTareas();
}

function eliminarTarea(index) {
    tareas.splice(index, 1);
    showToast("Eliminaste una tarea");
    localStorage.setItem("tareas", JSON.stringify(tareas));
    renderTareas();
}

function logout() {
    const logoutButton = document.getElementById("logout-button");
    logoutButton.addEventListener("click", () => {
        window.location.href = "../index.html";
    });
}

logout();

formTareas.addEventListener("submit", (e) => {
    e.preventDefault();
    const tarea = inputTareas.value.trim();
    const prioridad = prioridadSelect.value;
    if (tarea) {
        agregarTarea(tarea, prioridad);
        inputTareas.value = "";
    }
});

renderTareas();
