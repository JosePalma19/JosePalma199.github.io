const ingresarTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")
const btnCopy = document.querySelector(".copiar")
const rectangulo = document.querySelector(".rectangulo")

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();
    
    for (let i = 0; i < matrizCodigo.length; i++){
        if (stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

function btnEncriptar(){
    const textoEncriptado = encriptar(ingresarTexto.value);
    mensaje.value = textoEncriptado;
    document.getElementById("mensajes").style.display = "none";
    document.getElementById("aparece").style.display = "block";
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();
    
    for (let i = 0; i < matrizCodigo.length; i++){
        if (stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(ingresarTexto.value);
    mensaje.value = textoDesencriptado;
    document.getElementById("mensajes").style.display = "none";
    document.getElementById("aparece").style.display = "block";
}

function copiar() {
    
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
    ingresarTexto.value = "";
    document.getElementById("mensajes").style.display = "block";
    document.getElementById("aparece").style.display = "none";
}
