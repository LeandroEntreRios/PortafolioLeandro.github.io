function encriptar() {
    var texto = document.querySelector("#input-texto").value.toLowerCase();
    var textoCifrado = texto.replace(/e/gim, "enter").replace(/i/gim, "imes").replace(/a/gim, "ai").replace(/o/gim, "ober").replace(/u/gim, "ufat");
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#input-texto").value ="";


    document.getElementById("img").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto1").style.display = "none";

}

var boton1 = document.querySelector("#btn-encriptar"); boton1.onclick = encriptar;

function desencriptar() {
    var texto = document.querySelector("#input-texto").value.toLowerCase();
    var textoCifrado = texto.replace(/enter/gim, "e").replace(/imes/gim, "i").replace(/ai/gim, "a").replace(/ober/gim, "o").replace(/ufat/gim, "u");
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#input-texto").value ="";

}

var boton2 = document.querySelector("#btn-desencriptar"); boton2.onclick = desencriptar;

function copy(){
   var textoCifrado = document.querySelectorAll("#text-input-salida").value = "copy";
   document.querySelector("#msj");
    document.execCommand("copy");
    alert("¡TEXTO COPIADO!");
}

var btnCopia = document.querySelector("#copiar"); btnCopia.onclick = copy;

