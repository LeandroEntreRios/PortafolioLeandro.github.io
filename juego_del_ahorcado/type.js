//cargamos la pagina
document.addEventListener("DOMContentLoaded",function(){

    mostrarLetrasTeclado(abc);
    document.getElementById("teclado").hidden = true;
    document.getElementById("adivinado").style.display ="none";
    document.getElementById("adivinado").hidden = true;

});

function setCharAt(str,index,chr){
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);    
}

var lista_Palabras =["concordia","programador","comandos","estilos","html","desarrollador","variables","grupo","gamer"];
const abc = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var palabra_Elegida = "";
var letras_Adivinadas = "";
var letras_Falladas = "";
var letras_Seleccionada = "";
var errores = 0;
console.log(lista_Palabras);

function mostrarLetrasTeclado(listaLetras){
    function teclaPulsada(e){
        const tecla = this.innerText.toLocaleUpperCase();
        if(palabra_Elegida.indexOf(tecla)==-1){
            const hombre=document.getElementById("hombre");
            errores++;

            hombre.src = "img/" + errores + ".png";
        }
        else{
            while(letras_Faltantes.indexOf(tecla)>=0){
                letras_Adivinadas = setCharAt(letras_Adivinadas,letras_Faltantes.indexOf(tecla),tecla);
                letras_Faltantes = setCharAt(letras_Faltantes,letras_Faltantes.indexOf(tecla)," ");

            }
        }
        letras_Seleccionada = letras_Seleccionada + tecla;
        if(errores == 6){
            document.getElementById("teclado").hidden = true;
            letras_Adivinadas = palabra_Elegida;

            mostrarLetras(letras_Adivinadas);
            setTimeout(function(){ alert("😵Has PERDIDO😵");100});

        }else{
            if(letras_Adivinadas == palabra_Elegida){

                document.getElementById("teclado").hidden = true;
                setTimeout(function(){ alert("🥇VICTORIA🥇");100});
                mostrarLetras(letras_Adivinadas);
            }else{
                mostrarLetrasTeclado(abc);
                mostrarLetras(letras_Adivinadas);
            }
        }

    }
    const idLetras=document.getElementById("letras");
    idLetras.innerHTML = "";
    
    listaLetras.split("").map(el => {
        let span=document.createElement("span");
        if(letras_Seleccionada.indexOf(el) ==-1)
        span.addEventListener("click",teclaPulsada);
        else
        span.className="teclaapretada";
        span.innerText=el.toLocaleUpperCase();
        idLetras.appendChild(span);
    });
}
function mostrarLetras(listadoLetras){
    const idLetra=document.getElementById("letra");
    idLetra.innerHTML="";
    
    listadoLetras.split("").map(el => {
        let span=document.createElement("span");
        span.innerText = el;
        idLetra.appendChild(span);
    });
}

function nuevoJuego() {
    document.getElementById("teclado").hidden = false;
    document.getElementById('adivinado').style.display = 'inline-block';
    document.getElementById('adivinado').hidden = false;
    document.getElementById("boton2").hidden = true;
    document.getElementById("boton3").hidden = false;
    errores = 0;
    palabra_Elegida = devolverPalabraAleatoria();
    letras_Faltantes = palabra_Elegida;
    letras_Adivinadas = palabra_Elegida.replace(/./g," ");
    letras_Seleccionada = "";
    hombre.src = "img/00.png";
    mostrarLetras(letras_Adivinadas);
    mostrarLetrasTeclado(abc);
}

function abandonar() {
    document.getElementById("teclado").hidden = true;
    document.getElementById('adivinado').style.display = 'none';
    document.getElementById("adivinado").hidden = true;
    document.getElementById("boton2").hidden = false;
    document.getElementById("boton3").hidden = true;
    errores = 0;
    palabra_Elegida = "";
    letras_Faltantes = "";
    letras_Adivinadas = "";
    letras_Seleccionada = "";
    hombre.src = "img/00.png";
}
localStorage.setItem(nuevaPalabra,lista_Palabras);/*AGREGAMOS PALABRAS */

function nuevaPalabra() {
    var palabraNueva = prompt("Escriba la palabra que quieras agregar al ahorcado");
    if (palabraNueva != null)
    {
        if (!/^[A-Za-z]*$/.test(palabraNueva) || palabraNueva.length < 2)
            alert("Sólo puedes escribir una palabra y sin acentos");
        else
            lista_Palabras.push(palabraNueva);
    }

}


function devolverPalabraAleatoria()
{
    return lista_Palabras[(Math.floor(Math.random() * lista_Palabras.length))].toLocaleUpperCase();
}