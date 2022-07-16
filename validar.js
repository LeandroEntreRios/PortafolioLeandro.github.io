//Definiremos un evento "submit" para capturar el instante en el que el usuario enviará el formulario

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario_completo").addEventListener("submit", validarDatos.innerHTML);
})
//Una vez capturado el evento submit del formulario con Javascript, vamos bloquear 
//el envío, evitando que pueda enviar con datos incorrectos.


function validarDatos(evento) {
    evento.prevenDefaul(); //El preventDefault() método cancela el evento si es cancelable,
    //lo que significa que la acción predeterminada que pertenece al evento no ocurrirá.
    var usuario = document.getElementById("name").value;
    
    if (usuario.value == "") {
        alert("NO has escrito nada en Nombre");
        return;
    }
    var mail = document.getElementById("email").value;
    if (mail.value === "") {
        alert("Por favor introduce tu correo");
        mail.focus();
        return false;
    }
    //email invalido
    if (!emailValido(mail.value)) {
       alert("Escribe un correo electronico valido");
        mailAddress.focus();
        return false;
    }
    alert("Gracias por enviar el formulario");
    this.submit(click);

    return true; //si los campos se pueden enviar
}

//Dicho esto, hay algunos factores clave que son comunes en todas las direcciones de correo electrónico válidos:
    //Un correo debe contener una @ y al menos un punto (.)
    //La @ no puede ser el primer carácter del correo
    //Él (.) debe ir posicionando al menos un carácter después de la @

    const emailValido = email => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    //Moverse por la pagina
    function moverseA() {
        location.hash = "#" + sobremi;
        location.hash = "#" + preoyecto;
        location.hash = "#" + formulario_completo;
    }

  function abrirpdf(){
    window.open("./leo_curriculum.pdf","_black");
    alert("Se abrio pdf");
  }
    
