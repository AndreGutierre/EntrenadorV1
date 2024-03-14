const campo_texto = document.querySelector("#texto-encriptado");
const campo_mensaje = document.querySelector("#campo-mensaje"); 

const textarea = document.getElementById('texto-encriptado');
const imagen1 = document.getElementById('munecos');
const imagen2 = document.getElementById('sinTexto');
const botonCopiar = document.getElementById('btn-copiar');

//Matriz para encriptar
const matriz_code = [
    ["e", "enter"], //indice 0
    ["i", "imes"], //indice 1
    ["a", "ai"], //indice 2
    ["o", "ober"], //indice 3
    ["u", "ufat"], //indice 4
];

//Funciones para Encriptar
function btnEncriptar(){
    const texto = encriptar(campo_texto.value);
    campo_mensaje.value = texto;
}

function encriptar(fraseEncriptada){
    for(let i=0; i < matriz_code.length; i++){
        if (fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],  
                matriz_code[i][1]
            );
        }
    }
return fraseEncriptada;
}

//Desencriptar
function btnDesencriptar(){
    const texto = desencriptar(campo_texto.value);
    campo_mensaje.value = texto;
}

function desencriptar(fraseDesencriptada){
    for(let i=0; i < matriz_code.length; i++){
        if (fraseDesencriptada.includes(matriz_code[i][1])){
            fraseDesencriptada = fraseDesencriptada.replaceAll(
                matriz_code[i][1],  
                matriz_code[i][0]
            );
        }
    }
return fraseDesencriptada;
}

function copiarContenido() {
    const campoMensaje = document.getElementById("campo-mensaje");
    campoMensaje.select();
    document.execCommand("copy");
}

//Funciones para hacer desaparecer las imagenes y hacer aparecer el boton

textarea.addEventListener('input', actualizarEstado);
textarea.addEventListener('click', actualizarEstado);

function actualizarEstado(){
    if (textarea.value.trim() !== '') {
      // Si el textarea tiene texto, oculta las imágenes y muestra el botón
        imagen1.classList.add('ocultar');
        imagen2.classList.add('ocultar');
        botonCopiar.classList.remove('ocultar'); 
        campo_mensaje.value = '';

    } else {
      // Si el textarea está vacío, muestra las imágenes y oculta el botón
        imagen1.classList.remove('ocultar');
        imagen2.classList.remove('ocultar');
        botonCopiar.classList.add('ocultar');
    }
};

//Funciones para hacer desaparecer el texto al hacer click en el cuadro
textarea.addEventListener('click', borrarCampoTexto);

function borrarCampoTexto(){
    campo_texto.value = '';
};



/*Aca comienza el entrenador*/

