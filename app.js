// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array que almacena los nombres:
let amigos = [];

// 1. Función para agregar amigos:
function agregarAmigo() {
    let amigoAgregado = document.getElementById("amigo").value; // Capturar el valor del campo de entrada
    if (amigoAgregado.trim() === '') {  // Validar la entrada
        alert("Por favor, inserte un nombre.");
    }else{
        if(amigos.includes(amigoAgregado)){   // verificar que el nombre no se duplique
            alert(`El nombre "${amigoAgregado}" ya ha sido agregado.`);
        } else {
            amigos.push(amigoAgregado); // Actualizar el array de amigos
        }
    }
    actualizarLista();
    document.querySelector('#amigo').value = ''; // Limpiar el campo de entrada
    return;
}

// 2. Función para actualizar la lista de amigos:
function actualizarLista (){
    let listaDeAmigos = document.getElementById("listaAmigos"); // Obtener el elemento de la lista
    listaDeAmigos.innerHTML = ""; //Limpiar la lista existente

    for(var i = 0; i < amigos.length; i++){ // Iterar sobre el arreglo
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaDeAmigos.appendChild(li); // Agregar elementos a la lista
    }
}

// 3. Función para sortear los amigos:
