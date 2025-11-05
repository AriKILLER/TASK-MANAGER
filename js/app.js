function agregarTarea(){
    let tarea = document.getElementById('nueva-tarea').value;
    let descripcion = document.getElementById('descripcion-tarea').value;
    let prioridad = document.getElementById('prioridad-tarea').value;

    if(tarea && descripcion && prioridad){
        let lista = document.getElementById('lista-tareas');
        let elemento = document.createElement('li');
        elemento.innerHTML = `${tarea} <br>${descripcion} [${prioridad}]`;
        let iconos = `
            <img src="css/icons/check.png" alt="Completar" class="icono" onclick="marcarCompletada(this)">
            <img src="css/icons/cross.png" alt="Eliminar" class="icono" onclick="eliminarTarea(this)">
            <img src="css/icons/edit.png" alt="Editar" class="icono" onclick="editarTarea(this)">
        `;
        elemento.innerHTML += iconos;
        
        lista.appendChild(elemento);
        document.getElementById('nueva-tarea').value = '';
        document.getElementById('descripcion-tarea').value = '';
        document.getElementById('prioridad-tarea').value = '';
    }
}

function eliminarTarea(icono){
    let elementoTarea = icono.parentElement;
    elementoTarea.remove();
}

function marcarCompletada(icono){
    let elementoTarea = icono.parentElement;
    let completadas = document.getElementById('lista-completadas');
    icono.remove();
    let spanCompletada = document.createElement('span');
    spanCompletada.className = 'completada';
    spanCompletada.textContent = ' ';
    elementoTarea.appendChild(spanCompletada);
    completadas.appendChild(elementoTarea);
}

function editarTarea(icono){
    
}

