// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array que almacenar los nombres:
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